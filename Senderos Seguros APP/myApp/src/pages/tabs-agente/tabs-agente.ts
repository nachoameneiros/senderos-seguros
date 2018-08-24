import { Component } from '@angular/core';

import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { MapaAgente } from '../mapa-agente/mapa-agente';

@Component({
  templateUrl: 'tabs-agente.html'
})
export class TabsPageAgente {

  tab1Root = MapaAgente;


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
