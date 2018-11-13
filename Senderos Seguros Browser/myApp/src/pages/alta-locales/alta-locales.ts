import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import {ToastController} from 'ionic-angular';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'page-alta-locales',
    templateUrl: 'alta-locales.html'
})
export class altaLocales {

    resposeData: any;
    userData = { "idcolegio": "", "nombre": "", "address": "", "lat": "", "lng": "" , "horarios" : "" };
    agenteData = { "id": "", "nombre": "" };

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController,
        public geolocation: Geolocation
    ) {
        this.userData.idcolegio = localStorage.getItem('id');
    }

    ionViewDidLoad() {

    }


    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
    
    
    cargarLocal() {
        this.authService.postData(this.userData, "altalocal/").then((res) => {
            this.resposeData = res;
            if (this.resposeData.resultQuery == "OK") {
                console.log(this.resposeData);
                this.presentToast("Alta Exitosa");
            } else {
                this.presentToast("Alta Fallida");
            }

        }, (err) => {
            //Connection failed message
        });
    }


}