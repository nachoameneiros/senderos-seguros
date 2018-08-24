import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { TabsPageAgente } from '../tabs-agente/tabs-agente';
import { TabsPageAlumno } from '../tabs-alumno/tabs-alumno';
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  
  resposeData : any;
  userData = {"email":"", "password":""};
    
  tipousuario: any;

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController) {
      this.tipousuario = "Alumno";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){     
   if(this.userData.email && this.userData.password && this.tipousuario){
    var login = "";
    if (this.tipousuario == "Agente") {
        var login = "loginagente/";
    } else {
        var login = "loginalumno/";
    }
    this.authService.postData(this.userData,login).then((res) =>{
    this.resposeData = res;
    if(this.resposeData.userData.res){
        localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    if (this.tipousuario == "Agente") {        
        this.navCtrl.push(TabsPageAgente);
    } else { 
        this.navCtrl.push(TabsPageAlumno);        
    }
  }
  else{
    this.presentToast("Usuario o password incorrecto");
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Ingresar usuario y contraseña");
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
