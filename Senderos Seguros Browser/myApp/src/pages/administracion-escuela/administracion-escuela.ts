import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { verAgentes } from '../ver-agentes/ver-agentes';
import { verAlumnos } from '../ver-alumnos/ver-alumnos';
import { verReportes } from '../ver-reportes/ver-reportes';
import { verLocales } from '../ver-locales/ver-locales';
import { altaLocales } from '../alta-locales/alta-locales';
import { verReportesAsistencia } from '../ver-reportes-asistencia/ver-reportes-asistencia';
import {verLocalesMapa} from "../ver-locales-mapa/ver-locales-mapa";

@Component({
    selector: 'page-administracion-escuela',
    templateUrl: 'administracion-escuela.html'
})
export class AdministracionEscuela {

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {

    }

    ionViewDidLoad() {

    }
    pushvermapa() {
        this.navCtrl.push(verLocalesMapa);
    }
    pushveragentes() {
        this.navCtrl.push(verAgentes);
    }

    pushveralumnos() {
        this.navCtrl.push(verAlumnos);
    }
    pushverreportes() {
        this.navCtrl.push(verReportes);
    }
    pushverlocales() {
        this.navCtrl.push(verLocales);
    }

    pushaltalocales() {
        this.navCtrl.push(altaLocales);
    }


    pushverreportesasistencia() {
        this.navCtrl.push(verReportesAsistencia);
    }

}