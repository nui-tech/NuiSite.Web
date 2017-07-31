import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { SafeHtmlPipe } from './safe-html';
// 3rd party modules
// import { MaterialModule } from '@angular/material';

//Custom Module



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //custompipe
    SafeHtmlPipe
    //3rd party
    // MaterialModule
    
  ],
  providers:[
  ],
  entryComponents:[

  ],
  declarations: [
    SafeHtmlPipe
    ]
})
export class SharedModule { }
