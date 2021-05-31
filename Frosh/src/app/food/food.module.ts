import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food/food.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    FoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    HttpClientModule
  ]
})
export class FoodModule { }
