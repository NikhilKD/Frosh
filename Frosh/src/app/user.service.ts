import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient,public fireservices: AngularFirestore) {}
    
    getData(pincode:any,date:any):any {
      let url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode="+pincode+"&date="+date;
      console.log(url);
      return this.http.get(url);
    }
    
    
    getFoodData(item:any) {
      let url2="https://food-calorie-data-search.p.rapidapi.com/api/search?keyword="+item;
      return this.http.get(url2, {
        headers: {
          "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
          "x-rapidapi-key": "783fe5928fmshbf57c16e93ed3afp19c9fcjsn110db576b6d4"
        }
      });
    }

    getHealth(age:any,weight:any,height:any,activity:any,goal:any,gender:any) {
      let url3="https://fitness-calculator.p.rapidapi.com/macrocalculator?age="+age+"&gender="+gender+"&height="+height+"&weight="+weight+"&activitylevel="+activity+"&goal="+goal;
      return this.http.get(url3, {
        headers: {
          "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
          "x-rapidapi-key": "783fe5928fmshbf57c16e93ed3afp19c9fcjsn110db576b6d4"
        }
      });
    }

    create_Newemployee(Record:any){
      return this.fireservices.collection('Employee').add(Record);
    }

}
