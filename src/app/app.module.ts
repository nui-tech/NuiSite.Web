// NG Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Custom Modules
import { AppRoutingModule } from './app-routing.module'
import { CvModule } from './cv/cv.module';
//BlogModule is on lazy loading

//Custom Services
import { LoginService } from './login/login.service';

//Custom Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

// Initialize Firebase
export const firebaseconfig = {
  apiKey: "AIzaSyDa9QKxbLE_MqZas7_8ObDSfL4ok30t-C4",
  authDomain: "nuiweb-69916.firebaseapp.com",
  databaseURL: "https://nuiweb-69916.firebaseio.com",
  projectId: "nuiweb-69916",
  storageBucket: "nuiweb-69916.appspot.com",
  messagingSenderId: "1098485121444"
};


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
    MaterialModule,
    BrowserAnimationsModule

  ],
  entryComponents: [

  ],
  providers: [
    LoginService,
    AngularFireAuth,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
