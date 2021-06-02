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
  {position: 1, name: 'Rajwada Palace', weight: 5, symbol: 'Palace'},
  {position: 2, name: 'Central Museum', weight: 4, symbol: 'Museum'},
  {position: 3, name: 'Annapurna Temple', weight: 4, symbol: 'Temple'},
  {position: 4, name: 'Khajrana Ganesh Temple', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Sarafa Bazaar', weight: 5, symbol: 'Food'},
  {position: 6, name: 'Patalpani Waterfall', weight: 5, symbol: 'Water Fall'},
  {position: 7, name: 'Ralamandal Wildlife Sanctuary', weight: 5, symbol: 'Wildlife Sanctuary'},
  {position: 8, name: 'Choral Dam', weight: 5, symbol: 'Dam'},
  {position: 9, name: 'Janapav Hill', weight: 5, symbol: 'Hill'},
  {position: 10, name: 'Crescent Water Park', weight: 5, symbol: 'Water Park'},
  {position: 11, name: 'Patalpani Waterfall', weight: 5, symbol: 'Water Fall'},
  {position: 12, name: 'Patalpani Waterfall', weight: 5, symbol: 'Water Fall'},
];
// bhopal data
const ELEMENT_DATA3: PeriodicElement[] = [
  {position: 1, name: 'Upper Lake', weight: 5, symbol: 'Lake'},
  {position: 2, name: 'Taj UI Masajid', weight: 4, symbol: 'Mosque'},
  {position: 3, name: 'Van Vihar National Park', weight: 4, symbol: 'National Park'},
  {position: 4, name: 'Bhojeshwar Temple', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Madhya Pradesh Tribal Museum', weight: 5, symbol: 'Museum'},
  {position: 6, name: 'Sair Sapata Bhopal', weight: 5, symbol: 'Park'},
  {position: 7, name: 'Kaliasot Dam', weight: 5, symbol: 'Dam'},
  {position: 8, name: 'Manohar Dairy & Restaurant', weight: 5, symbol: 'Restaurent'},
  {position: 9, name: 'Shahpura Hawkers', weight: 5, symbol: 'Hawkers'},
  {position: 10, name: 'AIIMS Bhopal', weight: 5, symbol: 'Hospital'},
  {position: 10, name: 'Fun city', weight: 5, symbol: 'Park'},
];
// gwalior data
const ELEMENT_DATA4: PeriodicElement[] = [
  {position: 1, name: 'Gwalior Fort', weight: 5, symbol: 'Fort'},
  {position: 2, name: 'Gwalior Zoo', weight: 4, symbol: 'Zoo'},
  {position: 3, name: 'Gopachal Parvat', weight: 4, symbol: 'Hills'},
  {position: 4, name: 'Tomb of Tansen', weight: 3, symbol: 'Mosque'},
  {position: 6, name: 'Sun Temple Gwalior', weight: 5, symbol: 'Temple'},
  {position: 7, name: 'Archaeological Museum', weight: 5, symbol: 'Museum'},
  {position: 8, name: 'SPLASH THE SUN CITY', weight: 5, symbol: 'Park'},
  {position: 9, name: 'Katora Taal', weight: 5, symbol: 'Street'},
  {position: 10, name: 'BansiWala Restaurant', weight: 5, symbol: 'Restaurant'},
];
// sagar data
const ELEMENT_DATA5: PeriodicElement[] = [
  {position: 1, name: 'Lakha Banjara', weight: 5, symbol: 'Lake'},
  {position: 2, name: 'University Botanical', weight: 4, symbol: 'Park'},
  {position: 3, name: 'Gadpehra', weight: 4, symbol: 'Temple'},
  {position: 4, name: 'Eran', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'Naoradehi', weight: 5, symbol: 'Wildlife Sanctuary'},
  {position: 6, name: 'Khimlasa', weight: 5, symbol: 'Wildlife Sanctuary'},
  {position: 7, name: 'Rahatgarh', weight: 5, symbol: 'Water Fall'},
  {position: 8, name: 'TDC The Dine Culture', weight: 5, symbol: 'Restaurant'},
];
// vidisha data
const ELEMENT_DATA6: PeriodicElement[] = [
  {position: 1, name: 'Gateway Retreat', weight: 5, symbol: 'Restaurant'},
  {position: 2, name: 'Jehan Numa ', weight: 4, symbol: 'Palace'},
  {position: 3, name: 'Bijamandal', weight: 4, symbol: 'Temple'},
  {position: 4, name: 'Khamba Baba', weight: 3, symbol: 'Temple'},
  {position: 5, name: 'The Udyagiri', weight: 5, symbol: 'Cave'},
  {position: 6, name: 'Sola Kambhi', weight: 5, symbol: 'Temple'},
  {position: 7, name: 'Avyukt', weight: 5, symbol: 'Restaurant'},
  {position: 8, name: 'Kalidas Dam', weight: 5, symbol: 'Dam'},
  {position: 8, name: 'Jholiapur', weight: 5, symbol: 'Dam'},

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
