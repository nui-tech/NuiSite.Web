import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
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
