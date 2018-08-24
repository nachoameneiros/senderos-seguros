import { Component } from '@angular/core';

import { MapaAgente } from '../mapa-agente/mapa-agente';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs-agente.html'
})
export class TabsPageAgente {

  tab1Root = HomePage;
  tab3Root = MapaAgente;

  constructor() {

  }
}
