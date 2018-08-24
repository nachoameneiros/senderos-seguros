import { Component } from '@angular/core';

import { MapaAlumno } from '../mapa-alumno/mapa-alumno';
import { HomePage } from '../home/home';
import { VerAgentesAlumno } from '../ver-agentes-alumno/ver-agentes-alumno';

@Component({
  templateUrl: 'tabs-alumno.html'
})
export class TabsPageAlumno {

  tab1Root = VerAgentesAlumno;
  tab2Root = MapaAlumno;

  constructor() {

  }
}