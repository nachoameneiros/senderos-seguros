webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_alumno_tabs_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(navCtrl, authService, toastCtrl, menu) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.userData = { "email": "", "password": "" };
        this.tipousuario = "Alumno";
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.userData.email && this.userData.password && this.tipousuario) {
            var login = "";
            if (this.tipousuario == "Agente") {
                var login = "loginagente/";
            }
            else {
                var login = "loginalumno/";
            }
            this.authService.postData(this.userData, login).then(function (res) {
                _this.resposeData = res;
                if (_this.resposeData.userData.res) {
                    localStorage.setItem('nombre', _this.resposeData.userData.nombre);
                    localStorage.setItem('apellido', _this.resposeData.userData.apellido);
                    localStorage.setItem('idcolegio', _this.resposeData.userData.idcolegio);
                    localStorage.setItem('id', _this.resposeData.userData.id);
                    localStorage.setItem('hardcode', "t"); // T = HABILITO EL HARCODEO DE POSICIONES EN TODO EL CODIGO
                    if (_this.tipousuario == "Agente") {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_agente_tabs_agente__["a" /* TabsPageAgente */]);
                        _this.menu.close();
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]);
                        _this.menu.close();
                    }
                }
                else {
                    _this.presentToast("Usuario o password incorrecto");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Ingresar usuario y contraseña");
        }
    };
    Login.prototype.gotowelcome = function () {
        this.navCtrl.popToRoot();
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/login/login.html"*/`\n\n\n<ion-content padding>\n<ion-list>\n\n	<ion-item>\n	  <ion-label>Usuario</ion-label>\n	  <ion-select [(ngModel)]="tipousuario">\n	    <ion-option value="Alumno">Alumno</ion-option>\n	    <ion-option value="Agente">Agente</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="login()">Login</button>\n\n  <a href="#" (click)="gotowelcome()">Back</a>\n</ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionAgenteAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_agente_signup_agente__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_alumno_signup_alumno__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelecionAgenteAlumno = (function () {
    function SelecionAgenteAlumno(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelecionAgenteAlumno.prototype.ionViewDidLoad = function () {
    };
    SelecionAgenteAlumno.prototype.gotowelcome = function () {
        this.navCtrl.popToRoot();
    };
    SelecionAgenteAlumno.prototype.signupalumno = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_alumno_signup_alumno__["a" /* SignupAlumno */]);
    };
    SelecionAgenteAlumno.prototype.signupagente = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_agente_signup_agente__["a" /* SignupAgente */]);
    };
    SelecionAgenteAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selecion-agente-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/selecion-agente-alumno/selecion-agente-alumno.html"*/`<ion-content padding id="welcome">\n\n<h1> Senderos Seguros </h1>\n\n<button ion-button block class="marginTop" (click)="signupalumno()">Alumno</button>\n<button ion-button block color="lightprimary" (click)="signupagente()">Agente</button>\n\n<a href="#" (click)="gotowelcome()">Back</a>\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/selecion-agente-alumno/selecion-agente-alumno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SelecionAgenteAlumno);
    return SelecionAgenteAlumno;
}());

//# sourceMappingURL=selecion-agente-alumno.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupAgente = (function () {
    function SignupAgente(navCtrl, authService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "nombre": "", "apellido": "", "password": "", "email": "", "colegio": "", "dni": "" };
        this.authService.postData(this.userData, "getcolegios/").then(function (result) {
            _this.colegios = result;
        });
    }
    SignupAgente.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    SignupAgente.prototype.signup = function () {
        var _this = this;
        if (this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email && this.userData.colegio && this.userData.dni) {
            //Api connections
            this.authService.postData(this.userData, "signupagente/").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.resultQuery == "OK") {
                    console.log(_this.resposeData);
                    _this.presentToast("Registro Exitoso");
                    _this.gotowelcome();
                }
                else {
                    _this.presentToast("Email existente");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Ingresar informacion valida");
        }
    };
    SignupAgente.prototype.gotowelcome = function () {
        this.navCtrl.popToRoot();
    };
    SignupAgente.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    SignupAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/`<ion-content padding>\n<ion-list>\n<h1> Sign-up Alumno </h1>\n\n  <ion-item>\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Apellido</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.apellido"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>  \n    \n  <ion-item>\n    <ion-label fixed>password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n \n	<ion-item>\n	  <ion-label>Colegio</ion-label>\n	  <ion-select [(ngModel)]="userData.colegio">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>DNI</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.dni"></ion-input>\n  </ion-item>\n\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n  \n<a href="#" (click)="gotowelcome()">Back</a>\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SignupAgente);
    return SignupAgente;
}());

//# sourceMappingURL=signup-agente.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupAlumno = (function () {
    function SignupAlumno(navCtrl, authService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "nombre": "", "apellido": "", "password": "", "email": "", "colegio": "", "curso": "" };
        this.authService.postData(this.userData, "getcolegios/").then(function (result) {
            _this.colegios = result;
        });
    }
    SignupAlumno.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    SignupAlumno.prototype.signup = function () {
        var _this = this;
        if (this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email && this.userData.colegio && this.userData.curso) {
            //Api connections
            this.authService.postData(this.userData, "signupalumno/").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.resultQuery == "OK") {
                    console.log(_this.resposeData);
                    _this.presentToast("Registro Exitoso");
                    _this.gotowelcome();
                }
                else {
                    _this.presentToast("Email existente");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            this.presentToast("Ingresar informacion valida");
        }
    };
    SignupAlumno.prototype.gotowelcome = function () {
        this.navCtrl.popToRoot();
    };
    SignupAlumno.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    SignupAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-alumno/signup-alumno.html"*/`<ion-content padding>\n<ion-list>\n<h1> Sign-up Alumno </h1>\n\n  <ion-item>\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Apellido</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.apellido"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>  \n    \n  <ion-item>\n    <ion-label fixed>password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n  \n	<ion-item>\n	  <ion-label>Colegio</ion-label>\n	  <ion-select [(ngModel)]="userData.colegio">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>Curso</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.curso"></ion-input>\n  </ion-item>\n\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n  \n<a href="#" (click)="gotowelcome()">Back</a>\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-alumno/signup-alumno.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SignupAlumno);
    return SignupAlumno;
}());

//# sourceMappingURL=signup-alumno.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selecion_agente_alumno_selecion_agente_alumno__["a" /* SelecionAgenteAlumno */]);
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/welcome/welcome.html"*/`\n\n\n<ion-content padding id="welcome">\n\n<h1> Senderos Seguros </h1>\n\n<button ion-button block class="marginTop" (click)="login()">Login</button>\n<button ion-button block color="lightprimary" (click)="signup()">Sign up</button>\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		447,
		4
	],
	"../pages/selecion-agente-alumno/selecion-agente-alumno.module": [
		448,
		3
	],
	"../pages/signup-agente/signup-agente.module": [
		449,
		2
	],
	"../pages/signup-alumno/signup-alumno.module": [
		450,
		1
	],
	"../pages/welcome/welcome.module": [
		451,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_agente_mapa_agente__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPageAgente = (function () {
    function TabsPageAgente(app, authService, geolocation) {
        var _this = this;
        this.app = app;
        this.authService = authService;
        this.geolocation = geolocation;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__mapa_agente_mapa_agente__["a" /* MapaAgente */];
        this.userData = { "id": "", "lat": "", "lng": "" };
        this.sub = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(5000).subscribe(function (val) { _this.sendgeo(); });
    }
    TabsPageAgente.prototype.sendgeo = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var LocalLat = resp.coords.latitude;
            var LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA          
            if (localStorage.getItem('hardcode') == "t") {
                _this.LocalLat = -34.59122497;
                _this.LocalLng = -58.40407397;
            }
            _this.userData.lat = LocalLat;
            _this.userData.lng = LocalLng;
            _this.userData.id = localStorage.getItem("id");
            _this.authService.postData(_this.userData, 'postgeoagente/').then(function (res) {
                var resposeData = res;
            }, function (err) {
                //Connection failed message
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    TabsPageAgente.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    TabsPageAgente.prototype.logout = function () {
        localStorage.clear();
        this.backToWelcome();
    };
    TabsPageAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-agente/tabs-agente.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Mapa"></ion-tab>\n  <ion-tab tabTitle="LOGOUT" (ionSelect)="logout()"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-agente/tabs-agente.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], TabsPageAgente);
    return TabsPageAgente;
    var _a, _b, _c;
}());

//# sourceMappingURL=tabs-agente.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapaAgente = (function () {
    function MapaAgente(navCtrl, authService, alertCtrl, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.urlMap = "http://localhost/GoogleMaps/";
        this.timer = 600;
        this.estadoAgente = "INACTIVO";
        this.userData = { "idagente": "" };
        this.userSigData = { "idagente": "", "idalumno": "", "lat": "", "lng": "" };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA   
            if (localStorage.getItem('hardcode') == "t") {
                _this.LocalLat = -34.59122497;
                _this.LocalLng = -58.40407397;
            }
            var idescuela = localStorage.getItem('idcolegio');
            _this.urlMap = "http://localhost/GoogleMaps/?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAgente.prototype.ionViewDidLoad = function () {
        this.userData.idagente = localStorage.getItem('id');
        this.iniciarObservable();
        //  this.StartTimer();
    };
    MapaAgente.prototype.iniciarObservable = function () {
        var _this = this;
        this.sub = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(5000).subscribe(function (val) { _this.heartalerta(); });
    };
    MapaAgente.prototype.estadoagente = function () {
        if (this.estadoAgente == "ACTIVO") {
            this.estadoAgente = "INACTIVO";
            this.sub.unsubscribe();
        }
        else {
            this.estadoAgente = "ACTIVO";
            this.iniciarObservable();
        }
    };
    MapaAgente.prototype.heartalerta = function () {
        var _this = this;
        this.authService.postData(this.userData, 'getalerta/').then(function (res) {
            _this.resposeData = res;
            if (_this.resposeData.id) {
                _this.userSigData.idagente = _this.resposeData.idagente;
                _this.userSigData.idalumno = _this.resposeData.idalumno;
                _this.userSigData.lat = _this.resposeData.lat;
                _this.userSigData.lng = _this.resposeData.lng;
                _this.sub.unsubscribe();
                _this.mostraralerta();
            }
        }, function (err) {
            //Connection failed message
        });
    };
    MapaAgente.prototype.mostraralerta = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Pedido de ayuda',
            message: 'responder la llamada?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelado');
                        _this.cancelaralerta();
                        _this.iniciarObservable();
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('aceptado');
                        _this.aceptaralerta();
                    }
                }
            ]
        });
        alert.present();
    };
    MapaAgente.prototype.aceptaralerta = function () {
        this.authService.postData(this.resposeData, 'postaceptaralerta/').then(function (res) {
        }, function (err) {
            //Connection failed message
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */], this.resposeData);
    };
    MapaAgente.prototype.cancelaralerta = function () {
        this.authService.postData(this.userSigData, 'postsigalerta/').then(function (res) {
        }, function (err) {
            //Connection failed message
        });
    };
    MapaAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-agente/mapa-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button ion-button block color="primary" (click)="estadoagente()">{{estadoAgente}}</button>\n  \n  <div #frame style="width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important"> \n     <iframe width="100%" height="100%" [src]=\'urlMap | safe\'></iframe>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-agente/mapa-agente.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object])
    ], MapaAgente);
    return MapaAgente;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=mapa-agente.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaMostrarUbicacion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapaMostrarUbicacion = (function () {
    function MapaMostrarUbicacion(navCtrl, geolocation, authService, alertCtrl, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.urlMap = "http://localhost/GoogleMaps/";
        this.userData = { "idalumno": "", "lat": "", "lng": "" };
        this.data = this.navParams.data;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
            if (localStorage.getItem('hardcode') == "t") {
                _this.LocalLat = -34.59122497;
                _this.LocalLng = -58.40407397;
            }
            _this.urlMap = "http://localhost/GoogleMaps/mostrar.php?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&lng_alumno=" + _this.data.lng + "&lat_alumno=" + _this.data.lat;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaMostrarUbicacion.prototype.ionViewDidLoad = function () {
    };
    MapaMostrarUbicacion.prototype.terminar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Finalizar',
            message: 'Desea finalizar?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelado');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('aceptado');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__finalizar_asistencia_finalizar_asistencia__["a" /* FinalizarAsistencia */], _this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    MapaMostrarUbicacion.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    MapaMostrarUbicacion = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa-mostrar-ubicacion',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-mostrar-ubicacion/mapa-mostrar-ubicacion.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button ion-button block color="primary" (click)="terminar()">Terminar</button>\n  \n  <div #frame style="width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important"> \n     <iframe width="100%" height="100%" [src]=\'urlMap | safe\'></iframe>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-mostrar-ubicacion/mapa-mostrar-ubicacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MapaMostrarUbicacion);
    return MapaMostrarUbicacion;
}());

//# sourceMappingURL=mapa-mostrar-ubicacion.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarAsistencia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinalizarAsistencia = (function () {
    function FinalizarAsistencia(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userData = { "descripcion": "", "motivo": "", "idagente": "", "idalumno": "", "lat": "", "lng": "" };
        var data = this.navParams.data;
        this.userData.idalumno = data.idalumno;
        this.userData.lat = data.lat;
        this.userData.lng = data.lng;
        this.userData.idagente = localStorage.getItem('id');
    }
    FinalizarAsistencia.prototype.ionViewDidLoad = function () {
    };
    FinalizarAsistencia.prototype.finalizar = function () {
        var _this = this;
        this.authService.postData(this.userData, "finalizarasistencia/").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.resultQuery == "OK") {
                _this.presentToast("Reporte Exitoso");
            }
            _this.navCtrl.popToRoot();
        }, function (err) {
            //Connection failed message
        });
    };
    FinalizarAsistencia.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    FinalizarAsistencia = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finalizar-asistencia',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/finalizar-asistencia/finalizar-asistencia.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Finalizar Asistencia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n	<ion-item>\n	  <ion-label>Motivo</ion-label>\n	  <ion-select [(ngModel)]="userData.motivo">\n	    <ion-option value="1">motivo 1</ion-option>\n	    <ion-option value="2">motivo 2</ion-option>\n	    <ion-option value="3">motivo 3</ion-option>\n	    <ion-option value="4">motivo 4</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>Descripcion</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.descripcion"></ion-input>\n  </ion-item>  \n  \n  <button ion-button  (click)="finalizar()">Enviar</button>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/finalizar-asistencia/finalizar-asistencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], FinalizarAsistencia);
    return FinalizarAsistencia;
}());

//# sourceMappingURL=finalizar-asistencia.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_alumno_mapa_alumno__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPageAlumno = (function () {
    function TabsPageAlumno(app) {
        this.app = app;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__mapa_alumno_mapa_alumno__["a" /* MapaAlumno */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__ver_agentes_alumno_ver_agentes_alumno__["a" /* VerAgentesAlumno */];
    }
    TabsPageAlumno.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    TabsPageAlumno.prototype.logout = function () {
        localStorage.clear();
        this.backToWelcome();
    };
    TabsPageAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-alumno/tabs-alumno.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Mapa"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agentes"></ion-tab>\n  <ion-tab tabTitle="LOGOUT" (ionSelect)="logout()"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-alumno/tabs-alumno.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabsPageAlumno);
    return TabsPageAlumno;
}());

//# sourceMappingURL=tabs-alumno.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapaAlumno = (function () {
    function MapaAlumno(navCtrl, geolocation, authService, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.urlMap = "http://localhost/GoogleMaps/";
        this.userData = { "idalumno": "", "lat": "", "lng": "" };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
            if (localStorage.getItem('hardcode') == "t") {
                _this.LocalLat = -34.59122497;
                _this.LocalLng = -58.40407397;
            }
            var idescuela = localStorage.getItem('idcolegio');
            _this.urlMap = "http://localhost/GoogleMaps/?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAlumno.prototype.ionViewDidLoad = function () {
    };
    MapaAlumno.prototype.pedirayuda = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar pedido de ayuda',
            message: 'Desea pedir ayuda?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelado');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        console.log('aceptado');
                        _this.postalerta();
                        _this.alerta();
                    }
                }
            ]
        });
        alert.present();
    };
    MapaAlumno.prototype.postalerta = function () {
        var _this = this;
        this.userData.lat = this.LocalLat;
        this.userData.lng = this.LocalLng;
        this.userData.idalumno = localStorage.getItem('id');
        this.authService.postData(this.userData, 'postalerta/').then(function (res) {
            _this.resposeData = res;
            if (_this.resposeData.resultQuery == 't') {
                _this.presentToast("Se ha enviado una alerta");
            }
            else {
                _this.presentToast("Ya has enviado la alerta");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    MapaAlumno.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: 'Se ha enviado una alerta a un agente cercano',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MapaAlumno.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    MapaAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-alumno/mapa-alumno.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <button ion-button block color="primary" (click)="pedirayuda()">Ayuda</button>\n  \n  <div #frame style="width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important"> \n     <iframe width="100%" height="100%" [src]=\'urlMap | safe\'></iframe>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-alumno/mapa-alumno.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MapaAlumno);
    return MapaAlumno;
}());

//# sourceMappingURL=mapa-alumno.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerAgentesAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerAgentesAlumno = (function () {
    function VerAgentesAlumno(navCtrl, authService, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.userData = { "idcolegio": "" };
        this.userData.idcolegio = localStorage.getItem('idcolegio');
    }
    VerAgentesAlumno.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.postData(this.userData, "getagentes/").then(function (res) {
            _this.resposeData = res;
        }, function (err) {
            //Connection failed message
        });
    };
    VerAgentesAlumno.prototype.dislike = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
    };
    VerAgentesAlumno.prototype.like = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
    };
    VerAgentesAlumno.prototype.onModelChange = function (event, data) {
        //TODO : ENVIAR PUNTAJE QUE ES EL EVENT
        //TODO : PASAR A FALSE EL ESTADO DE TB_ALERTAS DEL AGENTE EN CUESTION PARA QUE NO APAREZCA MAS
        this.mostraralerta(data);
    };
    VerAgentesAlumno.prototype.mostraralerta = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reportes',
            message: 'Desea enviar un reporte ?',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        console.log('aceptado');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancelado');
                    }
                }
            ]
        });
        alert.present();
    };
    VerAgentesAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-agentes-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/ver-agentes-alumno/ver-agentes-alumno.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agentes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Agentes</h2>\n  \n  <ion-list>\n	  <ion-item *ngFor="let res of resposeData">\n	    <h2> {{ res.agente }} </h2>\n	    <rating [(ngModel)]="res.rate" \n	        readOnly="false"\n	        max="5" \n	        emptyStarIconName="star-outline"\n	        halfStarIconName="star-half" \n	        starIconName="star" \n	        nullable="false"\n	        (ngModelChange)="onModelChange($event,res)">\n        </rating>\n	  </ion-item>\n  </ion-list>\n  \n\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/ver-agentes-alumno/ver-agentes-alumno.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object])
    ], VerAgentesAlumno);
    return VerAgentesAlumno;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=ver-agentes-alumno.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportarAgente = (function () {
    function ReportarAgente(navCtrl, navParams, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userData = { "asistencia": "", "motivo": "", "idagente": "", "idalumno": "" };
        var data = this.navParams.data;
        this.userData.idagente = data.id;
        this.userData.idalumno = localStorage.getItem('id');
    }
    ReportarAgente.prototype.ionViewDidLoad = function () {
    };
    ReportarAgente.prototype.enviarreporte = function () {
        var _this = this;
        this.authService.postData(this.userData, "reportaragente/").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.resultQuery == "OK") {
                _this.presentToast("Reporte Exitoso");
            }
            else {
                _this.presentToast("Ya has enviado un reporte a este agente");
            }
        }, function (err) {
            //Connection failed message
        });
        this.navCtrl.popToRoot();
    };
    ReportarAgente.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ReportarAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportar-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/reportar-agente/reportar-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reportes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n  <ion-item>\n    <ion-label fixed>Asistencia</ion-label>\n    <ion-input type="text" value="" [(ngModel)]="userData.asistencia"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Motivo</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.motivo"></ion-input>\n  </ion-item>  \n  \n  <button ion-button  (click)="enviarreporte()">Reportar</button>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/reportar-agente/reportar-agente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], ReportarAgente);
    return ReportarAgente;
}());

//# sourceMappingURL=reportar-agente.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://localhost/API/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers }).
                subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SplitPane provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SplitPane = (function () {
    function SplitPane(platform) {
        this.platform = platform;
        console.log('Hello SplitPane Provider');
        this.splitPaneState = false;
    }
    SplitPane.prototype.getSplitPane = function () {
        if (localStorage.getItem('id')) {
            if (this.platform.width() > 850) {
                this.splitPaneState = true;
            }
            else {
                this.splitPaneState = false;
            }
        }
        else {
            this.splitPaneState = false;
        }
        return this.splitPaneState;
    };
    SplitPane = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SplitPane);
    return SplitPane;
}());

//# sourceMappingURL=split-pane.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic2_rating__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_linky__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_pipe__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__["a" /* ReportarAgente */],
                __WEBPACK_IMPORTED_MODULE_20__pages_finalizar_asistencia_finalizar_asistencia__["a" /* FinalizarAsistencia */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__["a" /* VerAgentesAlumno */],
                __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__["a" /* SelecionAgenteAlumno */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__["a" /* SignupAgente */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__["a" /* SignupAlumno */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__["a" /* MapaAlumno */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__["a" /* MapaAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_28__providers_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_25_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_26_angular_linky__["LinkyModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecion-agente-alumno/selecion-agente-alumno.module#SelecionAgenteAlumnoModule', name: 'SelecionAgenteAlumno', segment: 'selecion-agente-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-agente/signup-agente.module#SignupAgenteModule', name: 'SignupAgente', segment: 'signup-agente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-alumno/signup-alumno.module#SignupAlumnoModule', name: 'SignupAlumno', segment: 'signup-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22_ionic2_rating__["a" /* Ionic2RatingModule */] // Put ionic2-rating module here
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__["a" /* ReportarAgente */],
                __WEBPACK_IMPORTED_MODULE_20__pages_finalizar_asistencia_finalizar_asistencia__["a" /* FinalizarAsistencia */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__["a" /* VerAgentesAlumno */],
                __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__["a" /* SelecionAgenteAlumno */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__["a" /* SignupAgente */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__["a" /* SignupAlumno */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__["a" /* MapaAlumno */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__["a" /* MapaAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_28__providers_pipe__["a" /* SafePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, splitPane, menu) {
        this.app = app;
        this.splitPane = splitPane;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.backToWelcome = function () {
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.backToWelcome();
        this.menu.close();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/app/app.html"*/`<!--<ion-nav [root]="rootPage"></ion-nav>-->\n\n<ion-split-pane [when]="splitPane.getSplitPane()">\n  <!--  our side menu  -->\n<!--   <ion-menu [content]="content" > -->\n<!--     <ion-header> -->\n<!--       <ion-toolbar> -->\n<!--         <ion-title>Menu</ion-title> -->\n<!--       </ion-toolbar> -->\n<!--     </ion-header> -->\n   \n\n<!--      <ion-content> -->\n<!--     <ion-list> -->\n\n<!--         <button ion-button color="primary" (click)="logout()">Logout</button> -->\n<!--     </ion-list> -->\n<!--      </ion-content> -->\n\n<!--   </ion-menu> -->\n  \n\n  <!-- the main content -->\n  <ion-nav [root]="rootPage" main #content></ion-nav>\n</ion-split-pane>\n\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Please wait ..." });
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mn": 290,
	"./mn.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./mt": 294,
	"./mt.js": 294,
	"./my": 295,
	"./my.js": 295,
	"./nb": 296,
	"./nb.js": 296,
	"./ne": 297,
	"./ne.js": 297,
	"./nl": 298,
	"./nl-be": 299,
	"./nl-be.js": 299,
	"./nl.js": 298,
	"./nn": 300,
	"./nn.js": 300,
	"./pa-in": 301,
	"./pa-in.js": 301,
	"./pl": 302,
	"./pl.js": 302,
	"./pt": 303,
	"./pt-br": 304,
	"./pt-br.js": 304,
	"./pt.js": 303,
	"./ro": 305,
	"./ro.js": 305,
	"./ru": 306,
	"./ru.js": 306,
	"./sd": 307,
	"./sd.js": 307,
	"./se": 308,
	"./se.js": 308,
	"./si": 309,
	"./si.js": 309,
	"./sk": 310,
	"./sk.js": 310,
	"./sl": 311,
	"./sl.js": 311,
	"./sq": 312,
	"./sq.js": 312,
	"./sr": 313,
	"./sr-cyrl": 314,
	"./sr-cyrl.js": 314,
	"./sr.js": 313,
	"./ss": 315,
	"./ss.js": 315,
	"./sv": 316,
	"./sv.js": 316,
	"./sw": 317,
	"./sw.js": 317,
	"./ta": 318,
	"./ta.js": 318,
	"./te": 319,
	"./te.js": 319,
	"./tet": 320,
	"./tet.js": 320,
	"./tg": 321,
	"./tg.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./ug-cn": 329,
	"./ug-cn.js": 329,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 442;

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map