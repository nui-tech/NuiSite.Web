import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './app.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  loadingBar = false;
  IppDetails: any;
  errorMessage: any;


  ngOnInit() {
    // this.loadingBar = true;

  }

  constructor(
    
  ) { }



}

