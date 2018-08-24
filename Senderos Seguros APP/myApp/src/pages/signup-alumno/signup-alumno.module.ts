import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupAlumno } from './signup-alumno';

@NgModule({
  declarations: [
    SignupAlumno,
  ],
  imports: [
    IonicPageModule.forChild(SignupAlumno),
  ],
  exports: [
    SignupAlumno
  ]
})
export class SignupAlumnoModule {}
