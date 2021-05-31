import { Component, OnInit } from '@angular/core';
import {UserService } from '../../user.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  bmi:any;
  constructor(private user:UserService) {

  }
  age="";
  weight="";
  height="";
  activity="";
  goal="";
  gender="";
  userData(age:any,weight:any,height:any,activity:any,goal:any,gender:any){
    this.age=age.value;
    this.weight=weight.value;
    this.height=height.value;
    this.activity=activity.value;
    this.goal=goal.value;
    this.gender=gender.value;
    console.log(this.age);
    console.log(this.weight);
    console.log(this.height);
    console.log(this.activity);
    console.log(this.goal);
    console.log(this.gender);
    this.user.getHealth(this.age,this.weight,this.height,this.activity,this.goal,this.gender).subscribe((data:any) =>
    this.bmi=data
    )
  }

}
