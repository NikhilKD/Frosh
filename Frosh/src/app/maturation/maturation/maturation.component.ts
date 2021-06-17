import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maturation',
  templateUrl: './maturation.component.html',
  styleUrls: ['./maturation.component.css']
})
export class MaturationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected: Date | null | undefined;
}
