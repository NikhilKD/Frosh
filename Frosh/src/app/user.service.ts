import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
      let url2="https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe";
      let params={
        query:item
      }
      return this.http.get(url2, {
        params,
        headers: {
          "x-rapidapi-key": "783fe5928fmshbf57c16e93ed3afp19c9fcjsn110db576b6d4",
          "x-rapidapi-host": "recipe-by-api-ninjas.p.rapidapi.com"
        }
      });
    }

    getHealth(age:any,weight:any,height:any,activity:any,gender:any) {
      let url3="https://fitness-calculator.p.rapidapi.com/dailycalorie";
      let params={
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        activitylevel: activity
      }
      // let params={
      //   age: '20',
      //   gender: 'female',
      //   height: '162',
      //   weight: '58',
      //   activitylevel: 'level_1'
      // }
      return this.http.get(url3, {
        params,
        headers: {
          'X-RapidAPI-Key': '783fe5928fmshbf57c16e93ed3afp19c9fcjsn110db576b6d4',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      });
    }

    create_Newemployee(Record:any){
      return this.fireservices.collection('Employee').add(Record);
    }
    url4='https://frosh-c7f60-default-rtdb.firebaseio.com/product.json';
    private headers=new HttpHeaders({'Content-Type':'application/json'});
    saveProduct(data:any[]){
      return this.http.put(this.url4,data,{headers:this.headers});
    }

    fetchProducts(){
      return this.http.get(this.url4);
    }

}