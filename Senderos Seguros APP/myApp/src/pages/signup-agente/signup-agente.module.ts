import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupAgente } from './signup-agente';

@NgModule({
  declarations: [
    SignupAgente,
  ],
  imports: [
    IonicPageModule.forChild(SignupAgente),
  ],
  exports: [
    SignupAgente
  ]
})
export class SignupAgenteModule {}
