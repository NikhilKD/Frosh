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
  fetch=false;
  age="";
  weight="";
  height="";
  activity="";
  goal="";
  gender="";
  userData(age:any,weight:any,height:any,activity:any,goal:any,gender:any){
    this.fetch=true
    this.age=age.value;
    this.weight=weight.value;
    this.height=height.value;
    this.activity=activity.value;
    this.goal=goal.value;
    this.gender=gender.value;
    this.user.getHealth(this.age,this.weight,this.height,this.activity,this.gender).subscribe((data:any) =>{
    this.bmi=data;
    console.log(data);
    this.fetch=false;
    }
    )
  }

}
