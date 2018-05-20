import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { MatList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { RequestDay } from './models/request-days';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

const monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  requestDays: Array<RequestDay>;
  monday: Array<RequestDay>;
  tuesday: Array<RequestDay>;
  wednesday: Array<RequestDay>;
  thursday: Array<RequestDay>;
  friday: Array<RequestDay>;

  calendarData: any[];

  view: any[];
  width = 600;
  height = 200;
  fitContainer = false;

  // options
  theme = 'dark';
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  innerPadding = '10%';
  tooltipDisabled = false;
  animations: true;
  colorScheme = {
    domain: [
      '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514'
    ]
  };

  select(data) {
    console.log('Item clicked', data);
  }

  onSelect(event) {
    console.log(event);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  getCalendarData(): any[] {
    // today
    const now = new Date();
    const todaysDay = now.getDate();
    const thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);

    // Monday
    const thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
    const thisMondayDay = thisMonday.getDate();
    const thisMondayYear = thisMonday.getFullYear();
    const thisMondayMonth = thisMonday.getMonth();

    // 52 weeks after monday
    const calendarData = [];
    const getDate = d => new Date(thisMondayYear, thisMondayMonth, d);
    for (let week = 0; week <= 26; week++) {
      const mondayDay = thisMondayDay + (week * 7);
      const monday = getDate(mondayDay);

      // one week
      const series = [];
      for (let dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
        const date = getDate(mondayDay - 1 + dayOfWeek);

        // skip future dates
        /*         if (date > now) {
                  continue;
                } */

        // value
        // const value = (dayOfWeek < 6) ? (date.getMonth() + 1) : 0;
        const value = this.requestService.getRequestCountByDate(date);
        series.push({
          date,
          name: weekdayName.format(date),
          value
        });
      }

      calendarData.push({
        name: monday.toString(),
        series
      });
    }

    return calendarData;
  }

  calendarAxisTickFormatting(mondayString: string) {
    const monday = new Date(mondayString);
    const month = monday.getMonth();
    const day = monday.getDate();
    const year = monday.getFullYear();
    const lastSunday = new Date(year, month, day - 1);
    const nextSunday = new Date(year, month, day + 6);
    return (lastSunday.getMonth() !== nextSunday.getMonth()) ? monthName.format(nextSunday) : '';
  }

  calendarTooltipText(c): string {
    return `
      <span class="tooltip-label">${c.label} • ${c.cell.date.toLocaleDateString()}</span>
      <span class="tooltip-val">${c.data.toLocaleString()}</span>
    `;
  }
  constructor(private requestService: RequestService) {
    const calendarData = this.getCalendarData();
    this.view = [this.width, this.height];
    Object.assign(this, { calendarData });
  }




  ngOnInit() {
    this.monday = this.requestService.getRequestDays(23, 1);
    this.tuesday = this.requestService.getRequestDays(23, 2);
    this.wednesday = this.requestService.getRequestDays(23, 3);
    this.thursday = this.requestService.getRequestDays(23, 4);
    this.friday = this.requestService.getRequestDays(23, 5);



  }


}

