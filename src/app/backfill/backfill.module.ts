import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeatMapModule} from '@swimlane/ngx-charts';

/* import { RequestModule } from './request/request.module';
import { ResourceModule } from './resource/resource.module';
import { MatchModule } from './match/match.module'; */
import { RouterModule } from '@angular/router';
import { RequestListComponent } from './request/request-list/request-list.component';

import { RequestService } from './services/request.service';
import { ResourceService } from './services/resource.service';
import { MatchService } from './services/match.service';
import { ResourceListComponent } from './resource/resource-list/resource-list.component';
import { ResourceDetailComponent } from './resource/resource-detail/resource-detail.component';
import { ResourceEditComponent } from './resource/resource-edit/resource-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { MatchListComponent } from './match/match-list/match-list.component';
import { MatchDetailComponent } from './match/match-detail/match-detail.component';
import { MatchEditComponent } from './match/match-edit/match-edit.component';
import { TableModule} from 'primeng/table';
import { MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ButtonModule} from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {ScheduleModule} from 'primeng/schedule';
import * as jQuery from 'jquery';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    MultiSelectModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ButtonModule,
    HeatMapModule,
    ScheduleModule,
    RouterModule.forChild([
      {
        path: 'backfill/dashboard',
        component: DashboardComponent
      },
      {
        path: 'backfill/resource',
        component: ResourceListComponent,
        children: [{
          path: '#id',
          component: ResourceDetailComponent
        },
        {
          path: '#id/edit',
          component: ResourceEditComponent
        }]
      },
      {
        path: 'backfill/request',
        component: RequestListComponent,
        children: [{
          path: '#id',
          component: RequestDetailComponent
        },
        {
          path: '#id/edit',
          component: RequestEditComponent
        }]
      },
      {
        path: 'backfill/match',
        component: MatchListComponent,
        children: [{
          path: '#id',
          component: MatchDetailComponent
        },
        {
          path: 'backfill/match/#id/edit',
          component: MatchEditComponent
        }]
      },


    ])
  ],
  declarations: [
    RequestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceEditComponent,
    MatchListComponent,
    MatchDetailComponent,
    MatchEditComponent,
    DashboardComponent
/*     HeatMapComponent,
    HeatMapCellComponent,
    HeatMapComponent */
  ],

  providers: [RequestService,
    ResourceService,
    MatchService]
})
export class BackfillModule { }
