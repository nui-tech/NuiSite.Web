import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';
// import { slideInOutAnimation } from '../../_animations/index'
import * as skrollr from 'skrollr/src/skrollr';
declare var $: any;


@Component({
  selector: 'app-cv-cover',
  templateUrl: './cv-cover.component.html',
  styleUrls: ['./cv-cover.component.css']
})
export class CvCoverComponent implements OnInit {
  skr;
  vl = 36;
  constructor() { }



  ngOnInit() {
    this.skr = skrollr.init();
    // let coverH1 = document.getElementById("hello");
    // let myname = $('#myname');
    // TweenLite.from(coverH1, 2, { autoAlpha: 0, delay: 0.75 });
    // TweenLite.from(myname, 2, { autoAlpha: 0, delay: 0.75 });

  }

  progressBar() {

  }

  myClick() {
    // let photo = document.getElementById("testImg");

    // TweenLite.to(photo, 1, { opacity: 0, y: 50 });

  }

}
