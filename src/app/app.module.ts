// NG Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

//3rd party
import { MdButtonModule, MdIconModule, MdToolbarModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


// Custom Modules
import { AppRoutingModule } from './app-routing.module'
import { CvModule } from './cv/cv.module';
//BlogModule is on lazy loading

//Custom Services
import { AuthenService } from './authen.service';
import { AppService } from './app.service';

//Custom Components
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { firebaseconfig } from '../environments/environment'
import 'hammerjs';
import 'prismjs';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LoginComponent,
    PortfolioComponent,
    DashboardComponent
  ],
  imports: [
    //Ng modules 
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    //3rd party modules
    AngularFireModule.initializeApp(firebaseconfig),

    //Custom modules
    CvModule,
    AppRoutingModule,
    //material
    MdButtonModule,
    MdIconModule,
    MdToolbarModule

  ],

  entryComponents: [

  ],
  providers: [
    AuthenService,
    AngularFireAuth,
    AngularFireDatabase,
    Title,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
