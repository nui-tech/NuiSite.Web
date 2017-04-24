import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
disable = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.disable = !this.disable;
  }

}
