import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Regions } from '../enum/regions.enum';
import { Visitor } from './visitor';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['no', 'ip', 'city', 'time'];
  views: number;

  progressBar = false;

  constructor(public appService:AppService) { 
    this.appService.visitors.subscribe(res => {
      this.appService.visits = res;
      console.log(this.appService.visits[2].$value);
      this.views = this.appService.visits[2].$value;
    });
  }

  ngOnInit() {   
  }

}

