import { Component } from '@angular/core';
import { IonicPage, NavController, Platform , AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-ver-alumnos',
  templateUrl: 'ver-alumnos.html'
})
export class verAlumnos {

  resposeData : any;
  userData = {"idcolegio":""};
  agenteData = {"id":"" , "nombre": ""};
    
  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,
    public geolocation : Geolocation
  ) {
  
      this.userData.idcolegio = localStorage.getItem('id');    
  
  }

  ionViewDidLoad(){   
    this.authService.postData(this.userData,"getalumnos/").then((res) =>{
    this.resposeData = res;
 
    }, (err) => {
      //Connection failed message
    });      
  }
    

    
}