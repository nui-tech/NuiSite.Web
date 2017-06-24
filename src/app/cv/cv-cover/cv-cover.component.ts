import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TweenLite } from 'gsap';
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

  

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Cover - Nui Rattapon');
  }



  ngOnInit() {
    //test scrollmagic
    // this.initScrollMagic();
    TweenLite.from('.cover-nav', 1.3, { x:50});
    TweenLite.to('.intro-content h1', 1.3, { opacity: 1, y: 50 });
    // TweenLite.from('#advice', 1.5, { opacity: 0, y: -20  });

    TweenLite.to('#txt1', 1,{ display:'none' , delay:1});
    TweenLite.to('#txt2', 1,{ display:'block' ,opacity:1 , delay:2});

    TweenLite.from('#scrolldown', 1,{ opacity:0, delay:3});
    TweenLite.from('#viewcv', 1,{ opacity:0, delay:3.8});


    var skr = skrollr.init({
      render: function (data) {
        //log the current scroll positino.
        $('.scroll-info').text(data.curTop);
      },
      constants:{
          intro: 100
      },
      smoothScrolling:true
    });

  }

  // initScrollMagic() {
  //   // TweenLite.to('.intro-content h1', 1.3, { opacity: 1, y: 50 });
  //   // var photo = $('.intro-content h1');
  //   // TweenLite.to(photo, 1, { opacity: 0, y: 50 });
  // }


}
