import { Component } from '@angular/core';
import { IonicPage, NavController, Platform , AlertController ,ToastController,NavParams} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from "../../providers/auth-service";
import { FinalizarAsistencia } from "../finalizar-asistencia/finalizar-asistencia";

@Component({
  selector: 'page-mapa-mostrar-ubicacion',
  templateUrl: 'mapa-mostrar-ubicacion.html'
})
export class MapaMostrarUbicacion {

    public LocalLat : any;
    public LocalLng : any;
    public urlMap = "http://localhost/GoogleMaps/";

  resposeData : any;
    
    data : any;

  userData = {"idalumno":"", "lat":"" , "lng":""};
    
    
  constructor(
    private navCtrl: NavController,
    public geolocation : Geolocation,
    public authService: AuthService,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private toastCtrl:ToastController
  ) {
         this.data = this.navParams.data;  
         this.geolocation.getCurrentPosition().then((resp) => {
          this.LocalLat =resp.coords.latitude;
          this.LocalLng =resp.coords.longitude;
         // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
          if (localStorage.getItem('hardcode') == "t"){
              this.LocalLat =-34.59122497;
              this.LocalLng =-58.40407397;            
          }                
          this.urlMap = "http://localhost/GoogleMaps/mostrar.php?lat="+this.LocalLat+"&lng="+this.LocalLng+"&lng_alumno="+this.data.lng+"&lat_alumno="+this.data.lat;   
        }).catch((error) => {
          console.log('Error getting location', error);
        });
  
  }

  ionViewDidLoad(){   

  }    
    
    terminar() {
  let alert = this.alertCtrl.create({
    title: 'Finalizar',
    message: 'Desea finalizar?',
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
          this.navCtrl.push(FinalizarAsistencia , this.data);  
        }
      }
    ]
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