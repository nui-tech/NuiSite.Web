// NG Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party
// import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// Custom Modules
import { AppRoutingModule } from './app-routing.module'
import { CvModule } from './cv/cv.module';
//BlogModule is on lazy loading

//Custom Services
import { LoginService } from './login/login.service';
import { AuthenService } from './authen.service';

//Custom Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { firebaseconfig } from '../environments/environment'


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
    AngularFireModule.initializeApp(firebaseconfig),

    //Custom modules
    CvModule,
    AppRoutingModule,
    // MaterialModule,
    BrowserAnimationsModule

  ],
  entryComponents: [

  ],
  providers: [
    AuthenService,
    AngularFireAuth,
    AngularFireDatabase,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
