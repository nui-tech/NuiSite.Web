import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';

// 3rd party modules
import { MaterialModule } from '@angular/material';

//Custom Module



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //3rd party
    MaterialModule
    
  ],
  entryComponents:[

  ],
  declarations: [
    ]
})
export class SharedModule { }
