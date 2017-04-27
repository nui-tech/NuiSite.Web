import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent  } from './blog.component';




@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule

  ],
  entryComponents:[
   
  ],
  //exports:[BlogModule],
  declarations: [BlogComponent]
})
export class BlogModule { }
