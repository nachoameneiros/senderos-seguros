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
  userData = {"idcolegio":"","idalumno":""};

  userDataReport = {"asistencia":"", "motivo":"" , "idagente": "","idalumno": "" , "valor": "" };
    
    
  constructor(public navCtrl: NavController,public authService: AuthService,
    private alertCtrl: AlertController, public navParams: NavParams) {    
      this.userData.idcolegio = localStorage.getItem('idcolegio');      
      this.userData.idalumno = localStorage.getItem('id');      
      this.userDataReport.idalumno = localStorage.getItem('id');  
  }    


  getAgentes() {
      this.authService.postData(this.userData, "getagentes/").then((res) => {
          if (res) {
              this.resposeData = res;
          } else {
              this.resposeData =  [];
          }
      }, (err) => {
          //Connection failed message
      });
  }
  ionViewDidLoad() {
      this.getAgentes();
  }       
    
  dislike (data) {
        this.navCtrl.push(ReportarAgente, data);
  }
    
  like (data) {
        this.navCtrl.push(ReportarAgente, data);
  }

  onModelChange(event, data) {
      data.event = event;
      data.idalumno = this.userData.idalumno;
      this.userDataReport.idagente = data.id;
      this.userDataReport.valor = data.event;
      this.preguntaralerta(data);
  }

  sendReport(data) {
      this.authService.postData(data, "postcalificacionagente/");
      this.authService.postData(this.userDataReport, "reportaragente/");
  }
  preguntaralerta(data) {
      let alert = this.alertCtrl.create({
          title: 'Reportes',
          message: 'Es correcta la calificacion ' + data.event + '  ?',
          buttons: [
              {
                  text: 'Si',
                  handler: () => {
                      console.log('aceptado');
                      if (data.event < 4) {
                          this.mostraralerta(data);
                      } else   {
                          this.sendReport(data); 
                          this.getAgentes();
                      }   
                     
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


  mostraralerta(data) {
      let alert = this.alertCtrl.create({
          title: 'Reportes',
          message: 'Debe enviar el motivo',
          buttons: [
              {
                  text: 'Aceptar',
                  handler: () => {
                      console.log('aceptado');
                      this.navCtrl.push(ReportarAgente, data).then(() => {
                          this.navCtrl.getActive().onDidDismiss(data => {
                               this.getAgentes();
                          });
                      });
                  }
              }
          ]
      });
      alert.present();
  }
}