import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
 
})
export class BlogComponent implements OnInit {
  selectedOption: string;
  ptTitle = 'test';
  ptDate = Date.now();
  ptContent = 'this is content from server';
  
  test = "test";


  constructor(public dialog: MdDialog) { }

  ngOnInit() {}



  
}


