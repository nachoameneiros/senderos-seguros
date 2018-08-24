import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionAgenteAlumno } from './selecion-agente-alumno';

@NgModule({
  declarations: [
    SelecionAgenteAlumno,
  ],
  imports: [
    IonicPageModule.forChild(SelecionAgenteAlumno),
  ],
  exports: [
    SelecionAgenteAlumno
  ]
})
export class SelecionAgenteAlumnoModule {}
