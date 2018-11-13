import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {Observable} from 'rxjs/Observable';


/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({ selector: 'page-signup-agente', templateUrl: 'signup-agente.html' })
export class SignupAgente {
    resposeData: any;
    colegios: any;
    colegio: any;
    public sub: any;
    responseConsulta: any;

    imagen: any;
    options = {
        maximumImagesCount: 8,
        width: 500,
        height: 500,
        quality: 75
    };

    userData = { "nombre": "", "apellido": "", "password": "", "email": "", "colegio": "", "dni": "", "imagen": "" };
    constructor(
        public navCtrl: NavController,
        public authService: AuthService,
        public localNotifications: LocalNotifications,
        private toastCtrl: ToastController,
        private imagePicker: ImagePicker,
        private base64: Base64
        
        ) {
         this.hasReadPermission();

  this.requestReadPermission()
        
        this.authService.postData(this.userData, "getcolegios/").then((result) => {
            this.colegios = result;
        });
    }
    
    
      hasReadPermission() {
    this.imagePicker.hasReadPermission(
  
    );
  }

  requestReadPermission() {
    // no callbacks required as this opens a popup which returns async
    this.imagePicker.requestReadPermission();
  }

    loadlibrary() {
        this.imagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.base64.encodeFile(results[i]).then((base64File: string) => {
                    this.userData.imagen = base64File;
                }, (err) => {
                    console.log(err);
                });
            }
        }, (err) => { });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Signup');
    }

    inciarobservable() {
        this.sub = Observable.interval(2000).subscribe((val) => { this.heartalerta(); });
    }

    heartalerta() {
        console.log('HEARTREGISTRO');
        this.authService.postData(this.userData, 'consultaaprobacion/').then((res) => {
            this.responseConsulta = res;
            if (this.responseConsulta.lockeado == 'f') {
                this.sub.unsubscribe();
            /*    this.localNotifications.schedule({
                    text: 'CUENTA APROBADA',
                    trigger: { at: new Date(new Date().getTime() + 1) },
                    led: 'FF0000',
                    sound: null
                });*/
            }
        }, (err) => {
            //Connection failed message
        });
    }


    signup() {
        if (this.userData.imagen && this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email && this.userData.colegio && this.userData.dni) {
            //Api connections          

            this.authService.postData(this.userData, "signupagente/").then((result) => {
                this.resposeData = result;
                if (this.resposeData.resultQuery == "OK") {
                    console.log(this.resposeData);
                    this.presentToast("Registro Exitoso");
                    this.inciarobservable();
                    this.gotowelcome();
                } else {
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

    gotowelcome() {
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
