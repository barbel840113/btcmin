import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 4, rows: 5, color: 'lightblue'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
