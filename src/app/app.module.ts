// NG Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Modules
import { AppRoutingModule } from './app-routing.module'
import { CvModule } from './cv/cv.module';
//Custom Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from 'app/shared/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    //Ng modules 
    BrowserModule,
    //3rd party modules

    //Custom modules
    CvModule,
    AppRoutingModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
