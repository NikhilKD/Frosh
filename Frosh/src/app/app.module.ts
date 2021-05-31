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
    HealthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
