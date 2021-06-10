import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from 'src/environments/environment';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatDialogModule
  ]
})
export class ContactUsModule { }
