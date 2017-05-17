import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation} from '../_animations/route-animation'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
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
