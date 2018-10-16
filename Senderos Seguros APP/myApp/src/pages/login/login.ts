import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController,MenuController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController, public menu: MenuController) {
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
        localStorage.setItem('nombre', this.resposeData.userData.nombre);
        localStorage.setItem('apellido', this.resposeData.userData.apellido);
        localStorage.setItem('idcolegio', this.resposeData.userData.idcolegio);
        localStorage.setItem('id', this.resposeData.userData.id);
        localStorage.setItem('hardcode', "t"); // T = HABILITO EL HARCODEO DE POSICIONES EN TODO EL CODIGO
    if (this.tipousuario == "Agente") {        
        this.navCtrl.push(TabsPageAgente);
        this.menu.close();
    } else { 
        this.navCtrl.push(TabsPageAlumno);  
        this.menu.close();      
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
