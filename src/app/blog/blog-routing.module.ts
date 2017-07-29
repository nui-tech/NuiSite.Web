import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewpostComponent } from "./newpost/newpost.component";


const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      { path: 'newpost', component: NewpostComponent},
      { path: '', component: PostListComponent},
      { path: ':id', component: PostComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

