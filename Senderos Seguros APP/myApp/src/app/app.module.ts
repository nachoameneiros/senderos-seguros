import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { SelecionAgenteAlumno } from '../pages/selecion-agente-alumno/selecion-agente-alumno';
import { Login } from '../pages/login/login';
import { SignupAgente } from '../pages/signup-agente/signup-agente';
import { SignupAlumno } from '../pages/signup-alumno/signup-alumno';
import { MapaAlumno } from '../pages/mapa-alumno/mapa-alumno';
import { MapaAgente } from '../pages/mapa-agente/mapa-agente';
import { TabsPageAgente } from '../pages/tabs-agente/tabs-agente';
import { TabsPageAlumno } from '../pages/tabs-alumno/tabs-alumno';
import { VerAgentesAlumno } from '../pages/ver-agentes-alumno/ver-agentes-alumno';
import { GoogleMaps } from '@ionic-native/google-maps';

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
    VerAgentesAlumno,
    SelecionAgenteAlumno,
    Login,
    SignupAgente,
    SignupAlumno,
    MapaAlumno,
    MapaAgente,
    SafePipe,
    TabsPageAgente,
    TabsPageAlumno
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    VerAgentesAlumno,
    SelecionAgenteAlumno,
    Login,
    SignupAgente,
    SignupAlumno,
    MapaAlumno,
    MapaAgente,
    TabsPageAgente,
    TabsPageAlumno
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
