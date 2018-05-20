import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { ScheduleModule } from 'primeng/schedule';
import 'fullcalendar';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  events: any[];
  header: any;
  optionConfig: any;
  constructor(private matchService: MatchService) { }
  eventRender(event, element, view) {
    const pad = 1.5 * event.Priority + 'px';
    element.css('padding', pad);
    // console.log('Event Title =' + event.title + 'IsTravelArranged =' + event.IsTravelArranged);
  }

  handleEventClick(event) {
      // console.log(event, element, view);
      console.log('User Clicked Event Title = ' + event.calEvent.Priority + ' ' + event.calEvent.title);

      }

  ngOnInit() {
    this.matchService.getMatches();
    this.optionConfig = { eventOrder: 'Priority' };

  this.header = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,listWeek,basicWeek,timelineMonth'
  };

  this.events = [
    {
      'title': 'Dr Who ',
      'start': '2018-06-4',
      'end': '2018-06-6',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'true',
      'IsReadyToGo': 'false',
      'Priority': '1',
      'color': '#ff5722'
    },
    {
      'title': 'MA Smith',
      'start': '2018-06-6',
      'end': '2018-06-9',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'false',
      'Priority': '5',
      'color': 'red'
    },
    {
      'title': 'MA Jones',
      'start': '2018-06-4',
      'end': '2018-06-7',
      'allDay': true,
      'IsTravelArranged': 'true',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'true',
      'Priority': '7',
      'color': '#00b862'
    },
    {
      'title': 'MA Webster',
      'start': '2018-06-5',
      'end': '2018-06-9',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'false',
      'Priority': '9',
      'color': '#ff9800'
    },
    {
      'title': 'Dr Sinclair',
      'start': '2018-06-6',
      'end': '2018-06-9',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'false',
      'Priority': '5',
      'color': 'red'
    },
    {
      'title': 'MA Rogers',
      'start': '2018-06-5',
      'end': '2018-06-7',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'true',
      'IsReadyToGo': 'false',
      'Priority': '1',
      'color': '#ff5722'
    },
    {
      'title': 'MA Baker',
      'start': '2018-06-4',
      'end': '2018-06-9',
      'allDay': true,
      'IsTravelArranged': 'false',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'false',
      'Priority': '9',
      'color': '#ff9800'
    },
    {
      'title': 'MA Collins',
      'start': '2018-06-4',
      'end': '2018-06-5',
      'allDay': true,
      'IsTravelArranged': 'true',
      'AwaitingVendor': 'false',
      'IsReadyToGo': 'true',
      'Priority': '7',
      'color': '#00b862'
    }
  ];
}
}
