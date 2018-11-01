import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'page-ver-reportes-asistencia',
    templateUrl: 'ver-reportes-asistencia.html'
})
export class verReportesAsistencia {

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
        this.authService.postData(this.userData, "getreportesasistencia/").then((res) => {
            this.resposeData = res;

        }, (err) => {
            //Connection failed message
        });
    }

    getmotivo(val) {
        if (val == 1) {
            return 'Robo';
        }
        if (val == 2) {
            return 'Accidente';
        }

        if (val == 3) {
            return 'Extravio';
        }
    }

}