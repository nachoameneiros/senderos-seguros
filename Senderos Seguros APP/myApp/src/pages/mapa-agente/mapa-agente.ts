import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";

@Component({
  selector: 'page-mapa-agente',
  templateUrl: 'mapa-agente.html'
})
export class MapaAgente {

    public LocalLat : any;
    public LocalLng : any;
    public urlMap = "http://localhost/GoogleMaps/";

  resposeData : any;
  userData = {"idagente":""};

  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    public geolocation : Geolocation
  ) {
         this.geolocation.getCurrentPosition().then((resp) => {
          this.LocalLat =resp.coords.latitude;
          this.LocalLng =resp.coords.longitude;
         // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA
         // this.urlMap = "http://localhost/GoogleMaps/?lat="+this.LocalLat+"&lng="+this.LocalLat; 
          this.urlMap = "http://localhost/GoogleMaps/?lat=-34.59122497&lng=-58.40407397";             
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  
  }

  ionViewDidLoad(){   
        this.userData.idagente = localStorage.getItem('id');
        this.heartalerta();
  }    


  heartalerta() {
     
    this.authService.postData(this.userData,'/getalerta').then((res) =>{
     this.resposeData = res;
     if(this.resposeData.resultQuery == "OK"){
          this.heartalerta();
     }
     if(this.resposeData.resultQuery == "ALERTA"){
         
     }
    }, (err) => {
      //Connection failed message
    });
  }
}