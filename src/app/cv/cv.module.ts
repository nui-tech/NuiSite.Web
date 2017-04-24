import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CvComponent } from './cv.component'

@NgModule({
  imports: [   
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    CvComponent
  ],
  exports:[]
})
export class CvModule { }

