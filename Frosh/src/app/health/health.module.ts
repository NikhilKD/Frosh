import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health/health.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    HttpClientModule
  ]
})
export class HealthModule { }
