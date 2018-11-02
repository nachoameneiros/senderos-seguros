import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ver-agente-imagen-page',
    templateUrl: 'ver-agente-imagen.html'
})
export class verAgenteImagen {

    public image: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private sanitizer: DomSanitizer) {
        if (this.navParams.data != null) {
            this.image = this.sanitizer.bypassSecurityTrustUrl(navParams.data);
        }
    }

    ionViewDidLoad() {

    }



}