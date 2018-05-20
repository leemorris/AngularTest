import { Injectable } from '@angular/core';
import { BackfillRequest } from '../request/models/backfillRequest';
import { REQUESTS } from '../common/mock data/mock-requests';
import { RequestDay } from '../dashboard/models/request-days';
import { REQUEST_DAYS } from '../common/mock data/mock-requestDays';
import * as moment from 'moment';

@Injectable()
export class RequestService {

  constructor() { }
  getRequests(): Array<BackfillRequest> {
    return REQUESTS;
  }

  getRequestDays(weekNumber: number, dayNumber: number): Array<RequestDay> {
    const days = REQUEST_DAYS.filter(d => d.date.getDay() === dayNumber);
    days.forEach(w => w.weekNumber = moment(w.date).week());
    days.forEach(g => {if (g.readyToGo ) { g.color = '#00b862'; /* g.icon = 'fa fa-check'; */ }});
    days.forEach(v => {if (v.awaitingVendor ) { v.color = '#ff5722'; v.icon = 'fa fa-address-card'; }});
    days.forEach(t => {if (t.awaitingTravel ) { t.color = '#ff9800'; t.icon = 'fa fa-suitcase'; }});
    // tslint:disable-next-line:max-line-length
    days.forEach(x => {if (x.readyToGo === false && x.awaitingTravel === false && x.awaitingVendor === false) { x.color = 'Red'; x.icon = 'fa fa-exclamation-triangle'; }});

    const filteredDays = days.filter(y => y.weekNumber === weekNumber);

    const sorted = filteredDays.sort((a, b) => {
      let aScore = 0;
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }

      if (a.readyToGo) {
        aScore = 3;
      } else if (a.awaitingTravel ) {
        aScore = 2;
      } else if ( a.awaitingVendor) {
       aScore = 1;
      }

      let bScore = 0;
      if (b.readyToGo) {
        bScore = 3;
      } else if (b.awaitingTravel ) {
        bScore = 2;
      } else if ( b.awaitingVendor) {
        bScore = 1;
      }

      return aScore - bScore;

    });
return sorted;
}
getRequestCountByDate(date: Date): number {

  const day = date.getDate();
  const month =  date.getMonth();
  const year = date.getFullYear();
  const days = REQUEST_DAYS.filter(w => w.date.getMonth() === month && w.date.getDate() === day && w.date.getFullYear() === year);
  // const days = REQUEST_DAYS.filter(d => d.date.getDay() === dayNumber);
 // days.forEach();
  const numberOfRequests = days.length;
  return numberOfRequests;
}
}
