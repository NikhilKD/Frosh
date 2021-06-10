import { Component, OnInit } from '@angular/core';
import {UserService } from '../../user.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

  constructor(public userservices:UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  name: any;
  email: any ;
  message: any ;

  CreateRecord(name:any,email:any,message:any){
    let Record={
      username: name.value,
      useremail: email.value,
      usermessage: message.value
    };
    
    this.userservices.create_Newemployee(Record).then((res:any) =>{
      this.name="";
      this.email="";
      this.message="";
      console.log(res);
    }).catch(error =>{
      console.log(error);
    });
  }
}
@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class DialogElementsExampleDialog {}
