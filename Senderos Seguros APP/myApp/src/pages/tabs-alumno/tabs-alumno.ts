import { Component } from '@angular/core';

import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { MapaAlumno } from '../mapa-alumno/mapa-alumno';
import { VerAgentesAlumno } from '../ver-agentes-alumno/ver-agentes-alumno';

@Component({
  templateUrl: 'tabs-alumno.html'
})
export class TabsPageAlumno {

  tab1Root = MapaAlumno;
  tab2Root = VerAgentesAlumno;

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