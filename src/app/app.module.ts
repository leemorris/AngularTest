import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { AlertModule, TabsModule } from 'ngx-bootstrap';

/* Components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HeatMapModule, NgxChartsModule} from '@swimlane/ngx-charts';

/* Feature Modules */
import { BackfillModule } from './backfill/backfill.module';
import { BackfillComponent } from './backfill/backfill.component';
import { DashboardComponent } from './backfill/dashboard/dashboard.component';
import { ResourceListComponent } from './backfill/resource/resource-list/resource-list.component';
import { RequestListComponent } from './backfill/request/request-list/request-list.component';
import { MatchListComponent } from './backfill/match/match-list/match-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BackfillComponent
  ],

  imports: [
    BrowserModule, // gives access to ngIf and ngFor
    HttpClientModule, // gives access to HTTP client
    BrowserAnimationsModule,
    MatIconModule,
    AngularFontAwesomeModule,
    NgxChartsModule,
    HeatMapModule,
    RouterModule.forRoot([{
      path: 'backfill', component: BackfillComponent,
      children: [
        {
          path: 'dash',
          component: DashboardComponent
        },
        {
          path: 'resource',
          component: ResourceListComponent
        },
        {
          path: 'request',
          component: RequestListComponent
        },
        {
          path: 'match',
          component: MatchListComponent
        },
      ]
    },
    { path: '', redirectTo: 'backfill', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
    ],
     // { enableTracing: true }
    ),
    // makes Router Service available to entire application
    // forRoot is only used once in an application, use forChild in other feature modules
    /*     AlertModule.forRoot(),
        TabsModule.forRoot(), */

    // Import other Feature Modules
    BackfillModule
  ],
  exports: [
    MatIconModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MatIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fas ');
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fab');

    mdIconRegistry.registerFontClassAlias('fontawesome', 'fas fa-');
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fal');
  }
}
