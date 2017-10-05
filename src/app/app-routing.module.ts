import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { CvComponent } from './cv/cv.component';
import { CvCoverComponent } from '../app/cv/cv-cover/cv-cover.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'cover', component: CvCoverComponent },
  { path: 'resume', component: CvComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', loadChildren: './blog/blog.module#BlogModule' },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [

];