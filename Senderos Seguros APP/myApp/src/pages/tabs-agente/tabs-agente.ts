import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { MapaAgente } from '../mapa-agente/mapa-agente';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';


@Component({
  templateUrl: 'tabs-agente.html'
})
export class TabsPageAgente {

  tab1Root = MapaAgente;
    public LocalLat : any;
    public LocalLng : any;

    public sub : any;

  userData = {"id":"", "lat":"", "lng":""};
    
  constructor( public app: App ,
    public authService: AuthService,
    public geolocation : Geolocation) {
    this.sub = Observable.interval(5000).subscribe((val) => { this.sendgeo();});
  }
    
   sendgeo () {        
         this.geolocation.getCurrentPosition().then((resp) => {
             var LocalLat =resp.coords.latitude;
             var LocalLng =resp.coords.longitude;
             // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA          
          if (localStorage.getItem('hardcode') == "t"){
              this.LocalLat =-34.59122497;
              this.LocalLng =-58.40407397;            
          }                    
             this.userData.lat = LocalLat;
             this.userData.lng = LocalLng; 
             this.userData.id = localStorage.getItem("id");
             this.authService.postData(this.userData,'postgeoagente/').then((res) =>{
             var resposeData = res;
         }, (err) => {
          //Connection failed message
         }); 
        }).catch((error) => {
          console.log('Error getting location', error);
        });
        
    }
    



  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout(){
    localStorage.clear();
    this.backToWelcome();
  }
}
