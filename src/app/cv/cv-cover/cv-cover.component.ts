import { Component, OnInit } from '@angular/core';
import { TweenLite, TweenMax } from 'gsap';
// import { slideInOutAnimation } from '../../_animations/index'
declare var $: any;
import * as skrollr from 'skrollr/src/skrollr';


// import * as ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/scrollmagic';
// import * as animationGsap from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import * as addIndicators from 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


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
    //test scrollmagic
    // this.initScrollMagic();

    this.skr = skrollr.init({
      render: function(data){
        //log the current scroll positino.
        $('.scroll-info').text(data.curTop);
      }
    });
    TweenLite.to('.intro-content h1', 1.3, { opacity: 1, y: 50 });

  }

  // initScrollMagic() {
  //   // TweenLite.to('.intro-content h1', 1.3, { opacity: 1, y: 50 });
  //   // var photo = $('.intro-content h1');
  //   // TweenLite.to(photo, 1, { opacity: 0, y: 50 });
  // }

  myClick() {
    // let photo = document.getElementById("testImg");
    // TweenLite.to(photo, 1, { opacity: 0, y: 50 });

  }

}
