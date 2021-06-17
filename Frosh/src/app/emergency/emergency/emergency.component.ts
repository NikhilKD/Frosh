import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})

export class EmergencyComponent implements OnInit {

  constructor(private userservice: UserService) { 

  }

  ngOnInit(): void {
    this.userservice.fetchProducts().subscribe(
      (response:any) => {
        console.log(response);
        this.data=response;
      },
      (err:any)=> console.log(err)
      );
  }
  help=false;
  wantHelp(){
    this.help=true;
  }

  data=[
    {
      id:"Blood",
      description:"need A+ blood",
      time:"48hrs",
      address:"50 Rishi East City Bhopal",
      phone:"8770610878"
    }
  ];
  submit(x:any,y:any,z:any,a:any,b:any){
    // let id="";
    // let description="";
    // let time="";

    this.data.push(
      {
      id:x.value,
      description:y.value,
      time:z.value,
      address:a.value,
      phone:b.value,
      }
    );
    this.userservice.saveProduct(this.data).subscribe(
      (response:any) => console.log(response),
      (err:any)=> console.log(err));
  }

  
}