import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController,MenuController } from 'ionic-angular';
import { TabsPageEscuela } from '../tabs-escuela/tabs-escuela';
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

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController, public menu: MenuController) {
      this.tipousuario = "Alumno";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  login(){     
   if(this.userData.email && this.userData.password && this.tipousuario){
    this.authService.postData(this.userData,"loginescuela/").then((res) =>{
    this.resposeData = res;
    if(this.resposeData.userData.res){         
        localStorage.setItem('id', this.resposeData.userData.id);      
        this.navCtrl.push(TabsPageEscuela);
        this.menu.close();
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
