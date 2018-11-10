import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import { MapaMostrarUbicacion } from '../mapa-mostrar-ubicacion/mapa-mostrar-ubicacion';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { Constants } from '../../constants';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-mapa-agente',
  templateUrl: 'mapa-agente.html'
})
export class MapaAgente {

    public LocalLat : any; 
    public LocalLng : any;
    public urlMap = Constants.API_ENDPOINT+"GoogleMaps/";
    public sub : any;
    public subT : any;
    
    timer : any = 600;
    estadoAgente : any = "ACTIVO";
    maxTime : any;
    hidevalue : any;
  resposeData : any;
  userData = {"idagente":""};any;
  userSigData = {"idagente":"" , "idalumno":"" ,"lat":"" ,"lng":"" };

  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,
  public localNotifications: LocalNotifications,
    public geolocation : Geolocation
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
          this.urlMap = Constants.API_ENDPOINT+"GoogleMaps/indexAgente.php?APIURL="+encodeURIComponent(Constants.API_ENDPOINT)+"&lat="+this.LocalLat+"&lng="+this.LocalLng+"&escuela="+idescuela;         
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      
      
      this.localNotifications.schedule({
   text: 'NOTIFICACION DE PRUEBA',
   trigger: {at: new Date(new Date().getTime() + 1)},
   led: 'FF0000',
   sound: null
});
  }

    
  data = { title:'', description:'', date:'', time:'' };
  submit() {
//      console.log(this.data);
//      var date = new Date(this.data.date + " " + this.data.time);
//      console.log(date);
//      this.localNotifications.schedule({
//          text: 'Delayed ILocalNotification',
//          at: date,
//          led: 'FF0000',
//          sound: null
//      });
//      let alert = this.alertCtrl.create({
//          title: 'Congratulation!',
//          subTitle: 'Notification setup successfully at ' + date,
//          buttons: ['OK']
//      });
//      alert.present();
//      this.data = { title: '', description: '', date: '', time: '' };
  }
    
    

  ionViewWillUnload() {
      if (this.sub) {
          this.sub.unsubscribe();
      }
  }
  ionViewWillEnter() {
      this.userData.idagente = localStorage.getItem('id');     
      this.iniciarObservable();       
  }
    
    
  iniciarObservable () {      
      console.log('OBSERVABLE INICIADO');
      this.sub = Observable.interval(5000).subscribe((val) => { this.heartalerta();});
  }

    estadoagente() {    
        if (this.estadoAgente == "ACTIVO")   {            
            this.estadoAgente = "INACTIVO";
            this.sub.unsubscribe();      
        } else {
            this.estadoAgente = "ACTIVO";
            this.iniciarObservable(); 
        }        
    }    
    
  heartalerta() {     
  console.log('HEART');
    this.authService.postData(this.userData,'getalerta/').then((res) =>{
    this.resposeData = res;
    if(this.resposeData.id){            
        this.userSigData.idagente=this.resposeData.idagente;
        this.userSigData.idalumno=this.resposeData.idalumno;
        this.userSigData.lat=this.resposeData.lat;
        this.userSigData.lng=this.resposeData.lng;
        this.sub.unsubscribe();
        this.mostraralerta();
    }
    }, (err) => {
      //Connection failed message
    });
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
        this.authService.postData(this.resposeData,'postaceptaralerta/').then((res) =>{
        }, (err) => {
          //Connection failed message
        });
        
        this.navCtrl.push(MapaMostrarUbicacion, this.resposeData);
    }
    
    cancelaralerta() {              
    this.authService.postData(this.userSigData,'postsigalerta/').then((res) =>{
    }, (err) => {
      //Connection failed message
    });
    }
    
}