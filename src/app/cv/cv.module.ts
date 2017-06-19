import { NgModule } from '@angular/core';


import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CvComponent } from './cv.component';
import { CvCoverComponent } from './cv-cover/cv-cover.component';

@NgModule({
  imports: [   
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    CvComponent,
    CvCoverComponent
  ],
  exports:[]
})
export class CvModule { }

