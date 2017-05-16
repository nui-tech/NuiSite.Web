import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';


@Component({
  selector: 'app-cv-cover',
  templateUrl: './cv-cover.component.html',
  styleUrls: ['./cv-cover.component.css']
})
export class CvCoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let coverH1 = document.getElementById("cover-h1");
    TweenLite.from(coverH1, 2, { autoAlpha: 0, delay: 0.75});

  }

  myClick() {
    console.log('myClick fired');
    let photo = document.getElementById("testImg");

    TweenLite.to(photo, 1, { opacity: 0, y: 50 });

  }

}
