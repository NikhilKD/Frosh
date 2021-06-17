import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmergencyComponent} from './emergency/emergency.component';

const routes: Routes = [
  { path:'emergency',component: EmergencyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyRoutingModule { }