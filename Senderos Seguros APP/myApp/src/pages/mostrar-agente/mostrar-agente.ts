import { Component } from '@angular/core';
import { NavController, AlertController, NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { Constants }  from '../../constants';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'page-mostrar-agente',
    templateUrl: 'mostrar-agente.html'
})
export class MostrarAgente {

    public image: any;

    constructor(
        private navCtrl: NavController,
        public authService: AuthService,
        private alertCtrl: AlertController,
        private sanitizer: DomSanitizer,
        public navParams: NavParams
    ) {

        if (navParams.data.imagen != null) {
            this.image = this.sanitizer.bypassSecurityTrustUrl(navParams.data.imagen);
        }
    }





    ionViewDidLoad() {


    }



}