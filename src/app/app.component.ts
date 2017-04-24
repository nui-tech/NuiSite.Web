import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
loadingBar = false;

  ngOnInit() {
    this.loadingBar = true;
  }

  constructor() {}

}

