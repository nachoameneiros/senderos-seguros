import { Component } from '@angular/core';
import { AlertController ,ToastController , NavController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import {MostrarAgente} from "../mostrar-agente/mostrar-agente";
import * as Constants from '../../constants';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-mapa-alumno',
  templateUrl: 'mapa-alumno.html'
})
export class MapaAlumno {

    public LocalLat : any;
    public LocalLng : any;
    public urlMap = Constants.API_ENDPOINT+"GoogleMaps/";

  resposeData : any;
    public sub : any;

  userData = {"idalumno":"", "lat":"" , "lng":""};
    
    
  constructor(
    public geolocation : Geolocation,
    public authService: AuthService,
    private alertCtrl: AlertController,    
    public navCtrl: NavController,
    private toastCtrl:ToastController
  ) {
         this.geolocation.getCurrentPosition().then((resp) => {
          this.LocalLat =resp.coords.latitude;
          this.LocalLng =resp.coords.longitude;
         // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
          if (localStorage.getItem('hardcode') == "t"){
              this.LocalLat =-34.59122497;
              this.LocalLng =-58.40407397;            
          }                
          var idescuela = localStorage.getItem('idcolegio');
          this.urlMap = Constants.API_ENDPOINT+"GoogleMaps/?APIURL="+encodeURIComponent(Constants.API_ENDPOINT)+"&lat="+this.LocalLat+"&lng="+this.LocalLng+"&escuela="+idescuela;   
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  
  }

  ionViewDidLoad(){   

  }

  ionViewWillUnload() {
      if (this.sub) {
          this.sub.unsubscribe();
      }
  }

    
  pedirayuda() {
  let alert = this.alertCtrl.create({
    title: 'Confirmar pedido de ayuda',
    message: 'Desea pedir ayuda?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('cancelado');
        }
      },
      {
        text: 'Si',
        handler: () => {
          console.log('aceptado');
          this.postalerta();
          this.alerta();           
        }
      }
    ]
  });
  alert.present();
}
    
postalerta() {
    this.userData.lat = this.LocalLat;
    this.userData.lng = this.LocalLng;
    this.userData.idalumno = localStorage.getItem('id');
    this.authService.postData(this.userData,'postalerta/').then((res) =>{
        this.resposeData = res;
        if (this.resposeData.resultQuery == 't') {
            this.presentToast("Se ha enviado una alerta");
            this.iniciarObservable();
            } else {
            this.presentToast("Ya has enviado la alerta");
        }
    }, (err) => {
      //Connection failed message
    });
}   
        
    iniciarObservable () {      
        this.sub = Observable.interval(5000).subscribe((val) => { this.heartrevisaralerta();});
    }        
    
    heartrevisaralerta() {     
       this.authService.postData(this.userData,'getrevisaralerta/').then((res) =>{
       if(res){
           this.sub.unsubscribe();
           this.mostraragente(res);
       }
       }, (err) => {
         //Connection failed message
       });
  }
    
    mostraragente(data) {         
        this.navCtrl.push(MostrarAgente,data);
    }
    
alerta() {
  let alert = this.alertCtrl.create({
    title: 'Alerta',
    subTitle: 'Se ha enviado una alerta a un agente cercano',
    buttons: ['Cerrar']
  });
  alert.present();
}

    
    
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
    
}