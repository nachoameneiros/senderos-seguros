import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { Constants }  from '../../constants';

@Component({
    selector: 'page-ver-reportes-asistencia-mapa',
    templateUrl: 'ver-reportes-asistencia-mapa.html'
})
export class verReportesAsistenciaMapa {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "nombre": "" };
    public urlMap = Constants.API_ENDPOINT + "GoogleMaps/";
    escuelaData: any;

    public LocalLat : any;
    public LocalLng : any;
    
    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {      
        this.userData.idcolegio = localStorage.getItem('id');
        var idescuela = localStorage.getItem('id');
        this.authService.postData(this.userData, "getdatosescuela/").then((res) => {
            this.escuelaData = res;
          this.urlMap = Constants.API_ENDPOINT + "GoogleMaps/verReportes.php?APIURL=" + encodeURIComponent(Constants.API_ENDPOINT) + "&lat=" + this.escuelaData.lat + "&lng=" + this.escuelaData.lng + "&escuela=" + idescuela;
        }, (err) => {
            //Connection failed message
        });        
    }

    ionViewDidLoad() {


    }



}