import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//import { CvComponent } from 'app/cv/cv.component'
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: 'blog', component: BlogComponent },
      { path: 'blog/:id', component: BlogComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

