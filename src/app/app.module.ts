import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Cuong_app } from './app.component';


import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { SpeakerPage } from '../pages/speaker/speaker';
import { LoginPage} from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { SupportPage} from '../pages/support/support';
import { AccountPage } from '../pages/account/account';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Cuong_app,
    AboutPage,
    MapPage,
    SchedulePage,
    SpeakerPage,
    LoginPage,
    SignupPage,
    SupportPage,
    AccountPage,
    TutorialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Cuong_app)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Cuong_app,
    AboutPage,
    MapPage,
    SchedulePage,
    SpeakerPage,
    LoginPage,
    SignupPage,
    SupportPage,
    AccountPage,
    TutorialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
