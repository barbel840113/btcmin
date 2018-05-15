import { Component } from '@angular/core';
import { LoadingbarComponent } from './shared/loadingbar/loadingbar.component';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
   // localStorage.removeItem('auth-tokens');
  }

  modalRef: any;

  constructor() {
  }



}
