import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';
import { slideInOutAnimation } from '../../_animations/route-animation'
import * as skrollr from 'skrollr/src/skrollr';


@Component({
  selector: 'app-cv-cover',
  templateUrl: './cv-cover.component.html',
  styleUrls: ['./cv-cover.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class CvCoverComponent implements OnInit {
  skr;
  constructor() { }

  ngOnInit() {
    this.skr = skrollr.init();
    let coverH1 = document.getElementById("cover-h1");
    TweenLite.from(coverH1, 2, { autoAlpha: 0, delay: 0.75 });

  }

  myClick() {
    let photo = document.getElementById("testImg");

    TweenLite.to(photo, 1, { opacity: 0, y: 50 });

  }

}
