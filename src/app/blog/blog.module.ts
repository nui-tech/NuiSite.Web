import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//3rd part
import { NgPipesModule } from 'ngx-pipes';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';

import { BlogService } from './blog.service';
import { TxtEditorComponent } from './txt-editor/txt-editor.component';


@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgPipesModule

  ],
  entryComponents: [

  ],
  providers: [BlogService],
  //exports:[BlogModule],
  declarations: [BlogComponent, PostComponent, TxtEditorComponent]
})
export class BlogModule { }
