import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from "./dashboard.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
