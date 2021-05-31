import { Component, OnInit } from '@angular/core';
import {UserService } from '../../user.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent{
  data:any;
  constructor(private user:UserService) {}
  food="";
  foodData(item:any){
    this.food=item.value;
    this.user.getFoodData(this.food).subscribe((session:any) =>
    this.data=session
  )
  }



}
