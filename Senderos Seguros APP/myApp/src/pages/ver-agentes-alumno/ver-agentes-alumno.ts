import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { ReportarAgente } from '../reportar-agente/reportar-agente';

@Component({
  selector: 'page-ver-agentes-alumno',
  templateUrl: 'ver-agentes-alumno.html'
})
export class VerAgentesAlumno {
        
  resposeData : any;
  userData = {"idcolegio":""};

  constructor(public navCtrl: NavController,public authService: AuthService, public navParams: NavParams) {    
      this.userData.idcolegio = localStorage.getItem('idcolegio');      
  }    

  ionViewDidLoad() {    
    this.authService.postData(this.userData,"getagentes/").then((res) =>{
    this.resposeData = res;
 
    }, (err) => {
      //Connection failed message
    });
  }       
    
  dislike (data) {
        this.navCtrl.push(ReportarAgente, data);
  }
    
  like (data) {
        this.navCtrl.push(ReportarAgente, data);
  }
    
}