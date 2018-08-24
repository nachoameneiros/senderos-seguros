import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupAgente } from '../signup-agente/signup-agente';
import { SignupAlumno } from '../signup-alumno/signup-alumno';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-selecion-agente-alumno',
  templateUrl: 'selecion-agente-alumno.html',
})
export class SelecionAgenteAlumno {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {

  }

  gotowelcome(){
   this.navCtrl.popToRoot();
  }
    
    
  signupalumno(){
   this.navCtrl.push(SignupAlumno);
  }

  signupagente(){
   this.navCtrl.push(SignupAgente);
  }

}
