import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ContactUsModule} from './contact-us/contact-us.module';
import {LoginModule} from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CitiesModule} from './cities/cities.module';
import {HttpClientModule} from '@angular/common/http';
import {FoodModule} from './food/food.module';
import {HealthModule} from './health/health.module';
import { MaturationModule } from './maturation/maturation.module';
import {EmergencyModule} from './emergency/emergency.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';


const config = {
  apiKey: "AIzaSyDHUg72InX-AZtaPs_20dYG5x-RgbMfGk0",
  authDomain: "frosh-c7f60.firebaseapp.com",
  databaseURL: "https://frosh-c7f60-default-rtdb.firebaseio.com",
  projectId: "frosh-c7f60",
  storageBucket: "frosh-c7f60.appspot.com",
  messagingSenderId: "231823654381",
  appId: "1:231823654381:web:99fe48a58e9e9006677be4",
  measurementId: "G-F4TN8F9EJ7"
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactUsModule,
    LoginModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CitiesModule,
    HttpClientModule,
    FoodModule,
    HealthModule,
    MaturationModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    EmergencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }