import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaturationRoutingModule } from './maturation-routing.module';
import { MaturationComponent } from './maturation/maturation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    MaturationComponent
  ],
  imports: [
    CommonModule,
    MaturationRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule
  ]
})
export class MaturationModule {
  
 }
