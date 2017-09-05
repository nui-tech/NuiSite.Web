import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


// Material
import { MdSidenavModule, MdButtonModule, MdMenuModule, MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdInputModule } from '@angular/material';

//3rd part
import { NgPipesModule } from 'ngx-pipes';
import { TagInputModule } from 'ngx-chips';
import { DisqusModule } from 'angular2-disqus';

//import { MarkdownModule } from 'angular2-markdown';

import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
// import { PortfolioComponent } from './../portfolio/portfolio.component';

import { BlogService } from './blog.service';
import { TxtEditorComponent } from './txt-editor/txt-editor.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewpostComponent } from './newpost/newpost.component';


@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TagInputModule,
    NgPipesModule,
    
    DisqusModule,
    //MarkdownModule.forRoot(),
    //material
    MdSidenavModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdInputModule
  ],
  entryComponents: [

  ],
  providers: [BlogService],
  //exports:[BlogModule],
  declarations: [
    BlogComponent,
    PostComponent,
    TxtEditorComponent,
    PostListComponent,
    NewpostComponent
  ]
})
export class BlogModule { }
