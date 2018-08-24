import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-reportar-agente',
  templateUrl: 'reportar-agente.html'
})
export class ReportarAgente {
        
  userData = {"asistencia":"", "motivo":"" , "idagente": "","idalumno": "" };
    
  resposeData : any;

  constructor(public navCtrl: NavController,public navParams: NavParams, private toastCtrl:ToastController, public authService: AuthService) {    
    var data = this.navParams.data;      
    this.userData.idagente = data.id;
    this.userData.idalumno = localStorage.getItem('id');
  }    

  ionViewDidLoad() {    

  }       
    
  enviarreporte() {    
    this.authService.postData(this.userData, "reportaragente/").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.resultQuery == "OK"){
      this.presentToast("Reporte Exitoso");        
    }
    else{
    this.presentToast("Ya has enviado un reporte a este agente");        
    }    
    }, (err) => {
      //Connection failed message
    });     
    
    this.navCtrl.popToRoot();
  }       
        
    
    
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}