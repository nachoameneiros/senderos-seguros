import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-mapa-alumno',
  templateUrl: 'mapa-alumno.html'
})
export class MapaAlumno {

    public LocalLat : any;
    public LocalLng : any;
    public urlMap = "http://localhost/GoogleMaps/";


  constructor(
    private navCtrl: NavController,
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

  }    


}