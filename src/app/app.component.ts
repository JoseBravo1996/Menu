import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { AcercaPage } from '../pages/acerca/acerca';
import { ContactoPage } from '../pages/contacto/contacto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage:any = HomePage;
  public pages:Array<{titulo:string,component:any,icon:string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages=[
      {titulo:'Inicio',component:HomePage,icon:'home'},
      {titulo:'Perfil',component:PerfilesPage,icon:'person'},
      {titulo:'Contacto',component:ContactoPage,icon:'mail'},
      {titulo:'Acerca de',component:AcercaPage,icon:'information-circle'},
      ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
      this.nav.setRoot(page);
  }
}

