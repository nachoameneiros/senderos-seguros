import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'page-ver-locales',
    templateUrl: 'ver-locales.html'
})
export class verLocales {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "nombre": "" };

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {
        this.userData.idcolegio = localStorage.getItem('id');
    }

    ionViewDidLoad() {
        this.authService.postData(this.userData, "getlocales/").then((res) => {
            this.resposeData = res;

        }, (err) => {
            //Connection failed message
        });
    }

    eliminarlocal(res) {
        this.authService.postData(res, "eliminarlocal/").then((res) => {       
            this.authService.postData(this.userData, "getlocales/").then((res) => {
                if (res) {
                this.resposeData = res;
                    } else {
                    this.resposeData = [];
                    }

            }, (err) => {
                //Connection failed message
            });
        }, (err) => {
            //Connection failed message
        });

    }


}