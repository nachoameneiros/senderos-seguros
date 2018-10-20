import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({selector: 'page-signup-alumno', templateUrl: 'signup-alumno.html'})
export class SignupAlumno {
  resposeData : any;
  colegios : any;
  colegio : any;
  userData = {"nombre":"", "apellido":"","password":"","email":"","colegio":"","curso":""};
  constructor(public navCtrl : NavController, public authService : AuthService, private toastCtrl:ToastController) {
    this.authService.postData(this.userData, "getcolegios/").then((result) =>{
        this.colegios = result;    
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  signup() {
    if(this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email&& this.userData.colegio&& this.userData.curso){
      //Api connections
    this.authService.postData(this.userData, "signupalumno/").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.resultQuery == "OK"){
      console.log(this.resposeData);
      this.presentToast("Registro Exitoso");
      this.gotowelcome();
    }
    else{
    this.presentToast("Email existente");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    this.presentToast("Ingresar informacion valida");
  }
  
  }

    
  gotowelcome(){
   this.navCtrl.popToRoot();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
