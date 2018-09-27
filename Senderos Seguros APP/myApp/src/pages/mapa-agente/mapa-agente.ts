import { Component } from '@angular/core';
import { IonicPage, NavController, Platform , AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import { MapaMostrarUbicacion } from '../mapa-mostrar-ubicacion/mapa-mostrar-ubicacion';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-mapa-agente',
  templateUrl: 'mapa-agente.html'
})
export class MapaAgente {

    public LocalLat : any;
    public LocalLng : any;
    public urlMap = "http://localhost/GoogleMaps/";
    public sub : any;
    public subT : any;
    
    timer : int = 600;
    maxTime : any;
    hidevalue : any;
  resposeData : any;
  userData = {"idagente":""};

  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,
    public geolocation : Geolocation
  ) {
         this.geolocation.getCurrentPosition().then((resp) => {
          this.LocalLat =resp.coords.latitude;
          this.LocalLng =resp.coords.longitude;
         // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA          
          this.LocalLat =-34.59122497;
          this.LocalLng =-58.40407397;             
          this.urlMap = "http://localhost/GoogleMaps/?lat="+this.LocalLat+"&lng="+this.LocalLng;         
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  
  }

  ionViewDidLoad(){   
      this.userData.idagente = localStorage.getItem('id');     
      this.iniciarObservable(); 
      this.StartTimer();
      
      
  }
    
  iniciarObservable () {      
      this.sub = Observable.interval(5000).subscribe((val) => { this.heartalerta();});
  }

        
  StartTimer(){       
      this.subT = Observable.interval(1000).subscribe((val) => { this.label_timer();});    
  }
    
  label_timer() {
      if (this.timer == 0) {
            this.sub.unsubscribe();      
      } else {
            this.timer = this.timer - 1; 
      }
  }

  heartalerta() {
     
    this.authService.postData(this.userData,'getalerta/').then((res) =>{
    this.resposeData = res;
    if(this.resposeData.id){
       this.sub.unsubscribe();
       this.mostraralerta();
    }
    }, (err) => {
      //Connection failed message
    });
  }
    
    reiniciar_timer() {
        if (this.timer == 0) {
            this.iniciarObservable ();
        }
        this.timer = 600;
    }

    mostraralerta() {
    let alert = this.alertCtrl.create({
        title: 'Pedido de ayuda',
        message: 'responder la llamada?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('cancelado');
                this.cancelaralerta();
                this.iniciarObservable(); 
            }
          },
          {
            text: 'Si',
            handler: () => {
              console.log('aceptado');
              this.aceptaralerta();
            }
          }
        ]
      });
      alert.present();
    }
        
    aceptaralerta() { 
        this.navCtrl.push(MapaMostrarUbicacion, this.resposeData);
    }
    
    cancelaralerta() {
        //borrar insert y crear otro con el siguiente ajente en tb_alertas
    }
    
}