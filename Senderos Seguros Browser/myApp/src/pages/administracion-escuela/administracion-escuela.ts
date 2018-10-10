import { Component } from '@angular/core';
import { IonicPage, NavController, Platform , AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AuthService} from "../../providers/auth-service";
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';
import { verAgentes } from '../ver-agentes/ver-agentes';
import { verAlumnos } from '../ver-alumnos/ver-alumnos';

@Component({
  selector: 'page-administracion-escuela',
  templateUrl: 'administracion-escuela.html'
})
export class AdministracionEscuela {



  constructor(
    private navCtrl: NavController,
    public authService: AuthService,
    private alertCtrl: AlertController,
    public geolocation : Geolocation
  ) {

  
  }

  ionViewDidLoad(){   
      
      
  }
   
  pushveragentes() {        
      this.navCtrl.push(verAgentes);      
  }

  pushveralumnos() {        
      this.navCtrl.push(verAlumnos);      
  }
/*  pushverreportes() {        
      this.navCtrl.push(verReportes);      
  }
  pushverreportesasistencia() {        
      this.navCtrl.push(verReportesAsistencia);      
  }*/

}