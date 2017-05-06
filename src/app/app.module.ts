// NG Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//3rd party
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Custom Modules
import { AppRoutingModule } from './app-routing.module'
import { CvModule } from './cv/cv.module';
//Custom Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from 'app/shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    //Ng modules 
    BrowserModule,
    //3rd party modules

    //Custom modules
    CvModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule

  ],
  entryComponents:[
        
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
