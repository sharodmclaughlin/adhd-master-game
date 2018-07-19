import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DeviceMotion,  } from '@ionic-native/device-motion';
import { GameDonePage } from '../pages/game-done/game-done';
import { HomePageModule } from '../pages/home/home.module';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    GameDonePage,
    HomePage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    GameDonePage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
