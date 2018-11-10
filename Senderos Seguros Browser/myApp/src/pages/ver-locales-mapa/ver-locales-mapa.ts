import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { Constants }  from '../../constants';

@Component({
    selector: 'page-ver-locales-mapa',
    templateUrl: 'ver-locales-mapa.html'
})
export class verLocalesMapa {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "nombre": "" };
    public urlMap = Constants.API_ENDPOINT + "GoogleMaps/";

    public LocalLat : any;
    public LocalLng : any;
    
    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.LocalLat = resp.coords.latitude;
            this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
            if (localStorage.getItem('hardcode') == "t") {
                this.LocalLat = -34.59122497;
                this.LocalLng = -58.40407397;
            }
            var idescuela = localStorage.getItem('id');
            this.urlMap = "https://www.gps-coordinates.net/";
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    ionViewDidLoad() {


    }



}