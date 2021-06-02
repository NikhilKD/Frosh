import { Component, OnInit } from '@angular/core';
import {UserService } from '../../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  pincode="";
  date="";
  table=false;
  constructor(private user:UserService){
  }
  vaccine(pincode:any,date:any){
    this.pincode=pincode.value;
    this.date=date.value;
    this.table=true;
    this.user.getData(this.pincode,this.date).subscribe((session: any) =>
    this.data = session
  )
  }

  data:any;


}
// sessions[0].district_name