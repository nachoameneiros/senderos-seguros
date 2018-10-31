import { Component } from '@angular/core';
import { IonicPage, NavController, Platform , AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-ver-agentes',
  templateUrl: 'ver-agentes.html'
})
export class verAgentes {

  resposeData : any;
  userData = {"idcolegio":""};
  agenteData = {"id":"" , "agente": ""};
    
  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,
    public geolocation : Geolocation
  ) {
  
      this.userData.idcolegio = localStorage.getItem('id');    
  
  }

  ionViewDidLoad(){   
    this.authService.postData(this.userData,"getagentesescuela/").then((res) =>{
    this.resposeData = res;
 
    }, (err) => {
      //Connection failed message
    });      
  }
    
  habilitarAgente (res) {      
  this.agenteData.id = res.id;
    this.authService.postData(this.agenteData,"habilitaragente/").then((res) =>{
        this.authService.postData(this.userData,"getagentesescuela/").then((res) =>{
        this.resposeData = res;
     
        }, (err) => {
          //Connection failed message
        });           
    }, (err) => {
      //Connection failed message
      });
  }

  agentelockeado(res) {
      if (res.lockeado == 'f') {
          return 'HABILITADO'
      } else {
          return 'DESHABILITADO'
      }
  }

}