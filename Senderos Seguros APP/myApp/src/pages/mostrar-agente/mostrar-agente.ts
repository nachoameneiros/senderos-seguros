import { Component } from '@angular/core';
import { NavController , AlertController ,NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import * as Constants from '../../constants';

@Component({
  selector: 'page-mostrar-agente',
  templateUrl: 'mostrar-agente.html'
})
export class MostrarAgente {

    public image : any; 

  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,    
    public navParams: NavParams
  ) {
        this.image = navParams.data.imagen;
  }

  ionViewDidLoad(){   
  
      
  }
    

    
}