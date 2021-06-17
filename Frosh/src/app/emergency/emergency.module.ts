import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergencyRoutingModule } from './emergency-routing.module';
import { EmergencyComponent } from './emergency/emergency.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserService } from '../user.service';


@NgModule({
  declarations: [
    EmergencyComponent
  ],
  imports: [
    CommonModule,
    EmergencyRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UserService],
})
export class EmergencyModule { }