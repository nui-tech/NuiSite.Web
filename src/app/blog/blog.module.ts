import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';



@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule
  ],
  //exports:[BlogModule],
  declarations: [BlogComponent]
})
export class BlogModule { }
