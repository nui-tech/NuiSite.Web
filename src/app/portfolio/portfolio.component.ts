import { TweenLite } from 'gsap';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( private titleService: Title) { 
    this.titleService.setTitle('Portfolio - Nui Rattapon');
  }

  ngOnInit() {
        TweenLite.from('.nav', 1.5, { opacity: 1, x:50 });
  }

}
