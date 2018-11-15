import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import {verReportesAsistenciaMapa} from "../ver-reportes-asistencia-mapa/ver-reportes-asistencia-mapa";
import { Chart } from 'chart.js';


@Component({
    selector: 'page-ver-reportes-asistencia',
    templateUrl: 'ver-reportes-asistencia.html'
})
export class verReportesAsistencia {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "nombre": "" };
    doughnutData : any;
    doughnutChart : any;
    @ViewChild('doughnutCanvas') doughnutCanvas;

    cantidadRobo = 0;
    cantidadAccidente = 0;
    cantidadExtravio = 0;

    barChart: any;
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
            this.authService.postData(this.userData, "getcountreportesasistencia/").then((res) => {
                if (res) {
                    this.doughnutData = res;
                    
                    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                        type: 'doughnut',
                        data: {
                            labels: ["Robo", "Accidente", "Extravio"],
                            datasets: [{
                                label: '# de instancias',
                                data: [this.doughnutData.countrobo, this.doughnutData.countaccidente, this.doughnutData.countextravio],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)'
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                        }
                    });
                }




            }, (err) => {
                //Connection failed message
            });

        }, (err) => {
            //Connection failed message
        });



    }

    getmotivo(val) {
        if (val == 1) {
            this.cantidadRobo = this.cantidadRobo + 1;
            return 'Robo';
        }
        if (val == 2) {
            this.cantidadAccidente = this.cantidadAccidente + 1;
            return 'Accidente';
        }

        if (val == 3) {
            this.cantidadExtravio = this.cantidadExtravio + 1;
            return 'Extravio';
        }
    }

    pushvermapa() {
        this.navCtrl.push(verReportesAsistenciaMapa);
    }

}