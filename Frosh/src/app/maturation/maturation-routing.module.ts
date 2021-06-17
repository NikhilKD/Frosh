import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaturationComponent } from './maturation/maturation.component';

const routes: Routes = [
  { path:'maturation',component: MaturationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaturationRoutingModule { }
