import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// ujjain data
const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// indore data
const ELEMENT_DATA2: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// bhopal data
const ELEMENT_DATA3: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// gwalior data
const ELEMENT_DATA4: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// sagar data
const ELEMENT_DATA5: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// vidisha data
const ELEMENT_DATA6: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// jabalpur data
const ELEMENT_DATA7: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
// rewa data
const ELEMENT_DATA8: PeriodicElement[] = [
  {position: 1, name: 'Mahakaleshwar Temple', weight: 5, symbol: 'Temple'},
  {position: 2, name: 'Harisidhi Temple ', weight: 4, symbol: 'Temple'},
  {position: 3, name: 'Kothi Road', weight: 4, symbol: 'Street'},
  {position: 4, name: 'Kal Bherauv', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Iskcon Temple', weight: 5, symbol: 'Temple'},
];
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Bhopal', 'Indore', 'Ujjain','Jabalpur','Vidisha','Sagar','Gwalior','Rewa'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  dataSource4 = new MatTableDataSource(ELEMENT_DATA4);
  dataSource5 = new MatTableDataSource(ELEMENT_DATA5);
  dataSource6 = new MatTableDataSource(ELEMENT_DATA6);
  dataSource7 = new MatTableDataSource(ELEMENT_DATA7);
  dataSource8 = new MatTableDataSource(ELEMENT_DATA8);

  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }
  applyFilter3(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }
  applyFilter4(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }
  applyFilter5(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource5.filter = filterValue.trim().toLowerCase();
  }
  applyFilter6(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource6.filter = filterValue.trim().toLowerCase();
  }
  applyFilter7(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource7.filter = filterValue.trim().toLowerCase();
  }
  applyFilter8(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource8.filter = filterValue.trim().toLowerCase();
  }

  ujjain=false;
  indore=false;
  bhopal=false;
  rewa=false;
  sagar=false;
  gwalior=false;
  jabalpur=false;
  vidisha=false;

  user(name:any){
    this.ujjain=false;
    this.indore=false;
    this.bhopal=false;
    this.rewa=false;
    this.sagar=false;
    this.gwalior=false;
    this.jabalpur=false;
    this.vidisha=false;
    console.log(name.value);
    if(name.value=="Ujjain"){
      this.ujjain=true;
    }else if(name.value=="Indore"){
      this.indore=true;
    }else if(name.value=="Bhopal"){
      this.bhopal=true;
    }else if(name.value=="Rewa"){
      this.rewa=true;
    }else if(name.value=="Vidisha"){
      this.vidisha=true;
    }else if(name.value=="Sagar"){
      this.sagar=true;
    }else if(name.value=="Gwalior"){
      this.gwalior=true;
    }else if(name.value=="Jabalpur"){
      this.jabalpur=true;
    }
    console.log(this.jabalpur);
  }


}
