import { Component } from '@angular/core';

import { MapaAgente } from '../mapa-agente/mapa-agente';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs-agente.html'
})
export class TabsPageAgente {

  tab1Root = MapaAgente;
  tab2Root = MapaAgente;

  constructor() {

  }
}
