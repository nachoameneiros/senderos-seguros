import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { Chart } from 'chart.js';


@Component({
    selector: 'page-ver-reportes',
    templateUrl: 'ver-reportes.html'
})
export class verReportes {

    resposeData: any;
    userData = { "idcolegio": "" };
    agenteData = { "id": "", "nombre": "" };
    doughnutData: any;
    doughnutChart: any;
    @ViewChild('doughnutCanvas') doughnutCanvas;

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {

        this.userData.idcolegio = localStorage.getItem('id');

    }

    ionViewDidLoad() {
        this.authService.postData(this.userData, "getreportes/").then((res) => {
            this.resposeData = res;
            this.authService.postData(this.userData, "getcountreportes/").then((res) => {
                if (res) {
                    this.doughnutData = res;

                    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                        type: 'doughnut',
                        data: {
                            labels: ["Cantidad valorados con 1", "Cantidad valorados con 2", "Cantidad valorados con 3", "Cantidad valorados con 4", "Cantidad valorados con 5"],
                            datasets: [{
                                label: '# de instancias',
                                data: [this.doughnutData.uno, this.doughnutData.dos, this.doughnutData.tres, this.doughnutData.cuatro, this.doughnutData.cinco],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(162, 235, 235, 0.2)',
                                    'rgba(235, 86, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)'
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56",
                                    "#36A2EB",
                                    "#FF6384"
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


}