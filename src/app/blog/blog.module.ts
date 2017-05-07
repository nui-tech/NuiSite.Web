import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent  } from './blog.component';
import { PostComponent } from './post/post.component';

import { BlogService } from './blog.service';


@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule

  ],
  entryComponents:[
   
  ],
  providers:[BlogService],
  //exports:[BlogModule],
  declarations: [BlogComponent, PostComponent]
})
export class BlogModule { }
