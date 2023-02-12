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
  fetch=false
  foodData(item:any){
    this.fetch=true
    this.food=item.value;
    this.user.getFoodData(this.food).subscribe((session:any) =>
  { 
    this.data=session,
    console.log(session),
    this.fetch=false
  }
  )
  }
}
