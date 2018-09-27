import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-finalizar-asistencia',
  templateUrl: 'finalizar-asistencia.html'
})
export class FinalizarAsistencia {
        
  userData = {"descripcion":"", "motivo":"" , "idagente": "","idalumno": "" ,"lat": "","lng": "" };
    
  resposeData : any;

  constructor(public navCtrl: NavController,public navParams: NavParams, private toastCtrl:ToastController, public authService: AuthService) {    
    var data = this.navParams.data;      
    this.userData.idalumno = data.idalumno; 
    this.userData.lat = data.lat; 
    this.userData.lng = data.lng; 
    this.userData.idagente = localStorage.getItem('id');
  }    

  ionViewDidLoad() {    

  }       
    
  finalizar() {    
    this.authService.postData(this.userData, "finalizarasistencia/").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.resultQuery == "OK"){
      this.presentToast("Reporte Exitoso");        
    }
    
    this.navCtrl.popToRoot();
        
        
        
    }, (err) => {
      //Connection failed message
    });     
    
  }       
      
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}