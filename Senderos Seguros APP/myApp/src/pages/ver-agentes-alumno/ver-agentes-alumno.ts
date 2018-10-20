import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { ReportarAgente } from '../reportar-agente/reportar-agente';

@Component({
  selector: 'page-ver-agentes-alumno',
  templateUrl: 'ver-agentes-alumno.html'
})
export class VerAgentesAlumno {
        
  resposeData : any;
    rate : any;
  userData = {"idcolegio":""};

  constructor(public navCtrl: NavController,public authService: AuthService,
    private alertCtrl: AlertController, public navParams: NavParams) {    
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
    
  onModelChange(event,data) {
          //TODO : ENVIAR PUNTAJE QUE ES EL EVENT
          //TODO : PASAR A FALSE EL ESTADO DE TB_ALERTAS DEL AGENTE EN CUESTION PARA QUE NO APAREZCA MAS
          this.mostraralerta(data);
  }
    
  
       mostraralerta(data) {
    let alert = this.alertCtrl.create({
        title: 'Reportes',
        message: 'Desea enviar un reporte ?',
        buttons: [
          {
            text: 'Si',
            handler: () => {
              console.log('aceptado');
            this.navCtrl.push(ReportarAgente, data);                
          }
          },
            {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('cancelado');                
            }
          }
        ]
      });
      alert.present();
    }
}