import { Component } from '@angular/core';
import { NavController, Platform, App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplitPane } from '../providers/split-pane';
import { Welcome } from '../pages/welcome/welcome';
import { MapaAgente } from '../pages/mapa-agente/mapa-agente';
import { MapaAlumno } from '../pages/mapa-alumno/mapa-alumno';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Welcome;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
   public app: App, public splitPane: SplitPane, public menu: MenuController ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

   backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
    this.menu.close();

  }
        
}
