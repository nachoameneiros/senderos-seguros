import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { SelecionAgenteAlumno } from '../selecion-agente-alumno/selecion-agente-alumno';
import { Constants } from '../../constants';


/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class Welcome {
    public counterlogin = 0;
    public renderip = false;
    public newip : any;

    





    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.newip = Constants.API_ENDPOINT;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Welcome');
    }

    login() {
        this.navCtrl.push(Login);
    }
    
    changeip() {
       Constants.API_ENDPOINT = this.newip;
    }
    
    viewpdf() {
//        this.fileOpener.open('assets/manual.pdf', 'application/pdf')
//            .then(() => console.log('File is opened'))
//            .catch(e => console.log('Error opening file', e));
    }

    signup() {
        this.navCtrl.push(SelecionAgenteAlumno);
    }

    unlocklogin() {
        if (this.counterlogin > 10) {
            this.counterlogin = 0;
            this.renderip = true;
        } else {
            this.renderip = false;
            this.counterlogin = this.counterlogin + 1;
        }
    }

}
