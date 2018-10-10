import { Component } from '@angular/core';

import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { AdministracionEscuela } from '../administracion-escuela/administracion-escuela';

@Component({
  templateUrl: 'tabs-escuela.html'
})
export class TabsPageEscuela {

  tab1Root = AdministracionEscuela;

  constructor( public app: App) {
        
  }
    
  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    localStorage.clear();
    this.backToWelcome();
  }
}