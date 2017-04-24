import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id;
  disable = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
  }

  onClick() {
    this.disable = !this.disable;
  }
}
