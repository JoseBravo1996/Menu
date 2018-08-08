import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler,IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { AcercaPage } from '../pages/acerca/acerca';
import { ContactoPage } from '../pages/contacto/contacto';
import { CancionesPage } from '../pages/canciones/canciones';
import { PlaylistPage } from '../pages/playlist/playlist';
import {PlayServiceProvider} from '../../src/providers/play-service/play-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
    PerfilesPage,
    AcercaPage,
    ContactoPage,
    CancionesPage,
    PlaylistPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilesPage,
    AcercaPage,
    ContactoPage,
    CancionesPage,
    PlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayServiceProvider
  ]
})
export class AppModule {}
