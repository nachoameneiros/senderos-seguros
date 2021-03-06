import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { SignupAgente } from '../pages/signup-agente/signup-agente';
import { TabsPageEscuela } from '../pages/tabs-escuela/tabs-escuela';
import { verAgentes } from '../pages/ver-agentes/ver-agentes';
import { verAlumnos } from '../pages/ver-alumnos/ver-alumnos';
import { verReportes } from '../pages/ver-reportes/ver-reportes';
import { verLocales } from '../pages/ver-locales/ver-locales';
import { verLocalesMapa } from '../pages/ver-locales-mapa/ver-locales-mapa';
import { verReportesAsistencia } from '../pages/ver-reportes-asistencia/ver-reportes-asistencia';
import { verReportesAsistenciaMapa } from '../pages/ver-reportes-asistencia-mapa/ver-reportes-asistencia-mapa';
import { verAgentesMapa } from '../pages/ver-agentes-mapa/ver-agentes-mapa';
import { AdministracionEscuela } from '../pages/administracion-escuela/administracion-escuela';
import { GoogleMaps } from '@ionic-native/google-maps';
import { altaLocales } from '../pages/alta-locales/alta-locales';
import { verAgenteImagen } from '../pages/ver-agente-imagen/ver-agente-imagen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { Geolocation } from '@ionic-native/geolocation';
import { SafePipe } from '../providers/pipe';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    SignupAgente,
    verAgentes,
    verAlumnos,
    verReportes,
    verLocalesMapa,
    altaLocales,
    verLocales,
    verAgenteImagen,
    verReportesAsistencia,
    verAgentesMapa,
    verReportesAsistenciaMapa,
    TabsPageEscuela,
    AdministracionEscuela,
    SafePipe
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    SignupAgente,
    verAgentes,
    verAlumnos,
    verAgenteImagen,
    altaLocales,
    verReportes,
    verLocales,
    verLocalesMapa,
    verAgentesMapa,
    verReportesAsistencia,
    verReportesAsistenciaMapa,
    TabsPageEscuela,
    AdministracionEscuela
  ],
  providers: [
    StatusBar,
    GoogleMaps,    
    Geolocation,
    SplashScreen,AuthService,SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
    exports: [
    SafePipe
  ]
})
export class AppModule {}
