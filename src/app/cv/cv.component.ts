import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index'
import { Title } from '@angular/platform-browser';

import { TweenLite } from 'gsap';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class CvComponent implements OnInit {
  disable = false;
  constructor( private titleService: Title) { 
    this.titleService.setTitle('Resume - Nui Rattapon');
  }

  ngOnInit() {
        TweenLite.from('.nav', 1.5, { opacity: 1, x:50 });
  }

  onClick() {
    this.disable = !this.disable;
  }

}
