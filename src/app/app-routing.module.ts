import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { CvComponent } from './cv/cv.component';
import { CvCoverComponent } from '../app/cv/cv-cover/cv-cover.component';
import { PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component'

const routes: Routes = [

  { path: 'cover', component: CvCoverComponent },
  { path: 'resume', component: CvComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  //{ path: 'blog/:id', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'login', component: LoginComponent},
  { path: '', component: CvCoverComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [

];