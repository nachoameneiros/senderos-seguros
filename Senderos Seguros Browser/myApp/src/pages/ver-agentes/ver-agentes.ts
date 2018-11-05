import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { verAgenteImagen } from '../ver-agente-imagen/ver-agente-imagen';
import {verAgentesMapa} from "../ver-agentes-mapa/ver-agentes-mapa";

@Component({
    selector: 'page-ver-agentes',
    templateUrl: 'ver-agentes.html'
})
export class verAgentes {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "agente": "" };

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {
        this.userData.idcolegio = localStorage.getItem('id');
    }

    obtenerAgentes() {
        this.authService.postData(this.userData, "getagentesescuela/").then((res) => {
            this.resposeData = res;

        }, (err) => {
            //Connection failed message
        });
    }

    ionViewDidLoad() {
        this.obtenerAgentes()
    }
    pushvermapa() {
        this.navCtrl.push(verAgentesMapa);
    }
    habilitarAgente(res) {
        this.agenteData.id = res.id;
        this.authService.postData(this.agenteData, "habilitaragente/").then((res) => {
            this.obtenerAgentes()
        }, (err) => {
            //Connection failed message
        });
    }

    verfoto(res) {
        this.navCtrl.push(verAgenteImagen, res.imagen);
    }

    agentelockeado(res) {
        if (res.lockeado == 'f') {
            return 'HABILITADO'
        } else {
            return 'DESHABILITADO'
        }
    }

    desvincularAgente(res) {
        this.terminar(res);
    }


    terminar(res) {
        let alert = this.alertCtrl.create({
            title: 'Finalizar',
            message: 'Desea desvincular el agente ?',
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
                        this.authService.postData(res, "desvincularagente/").then((res) => {
                            this.obtenerAgentes()
                        }, (err) => {
                            //Connection failed message
                        });
                    }
                }
            ]
        });
        alert.present();
    }

}