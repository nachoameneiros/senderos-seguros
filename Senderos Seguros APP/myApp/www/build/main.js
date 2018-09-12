webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_alumno_tabs_alumno__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(22);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(22);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(22);
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
		443,
		4
	],
	"../pages/selecion-agente-alumno/selecion-agente-alumno.module": [
		444,
		3
	],
	"../pages/signup-agente/signup-agente.module": [
		445,
		2
	],
	"../pages/signup-alumno/signup-alumno.module": [
		446,
		1
	],
	"../pages/welcome/welcome.module": [
		447,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_agente_mapa_agente__ = __webpack_require__(162);
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
    function TabsPageAgente(app) {
        this.app = app;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__mapa_agente_mapa_agente__["a" /* MapaAgente */];
    }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabsPageAgente);
    return TabsPageAgente;
}());

//# sourceMappingURL=tabs-agente.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(407);
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
        this.userData = { "idagente": "" };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA          
            _this.LocalLat = -34.59122497;
            _this.LocalLng = -58.40407397;
            _this.urlMap = "http://localhost/GoogleMaps/?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAgente.prototype.ionViewDidLoad = function () {
        this.userData.idagente = localStorage.getItem('id');
        this.iniciarObservable();
    };
    MapaAgente.prototype.iniciarObservable = function () {
        var _this = this;
        this.sub = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(5000).subscribe(function (val) { _this.heartalerta(); });
    };
    MapaAgente.prototype.heartalerta = function () {
        var _this = this;
        this.authService.postData(this.userData, 'getalerta/').then(function (res) {
            _this.resposeData = res;
            if (_this.resposeData.id) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */], this.resposeData);
    };
    MapaAgente.prototype.cancelaralerta = function () {
        //borrar insert y crear otro con el siguiente ajente en tb_alertas
    };
    MapaAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-agente/mapa-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #frame style="width:100%;height:100%;overflow:scroll !important;-webkit-overflow-scrolling:touch !important"> \n     <iframe width="100%" height="100%" [src]=\'urlMap | safe\'></iframe>\n  </div>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mapa-agente/mapa-agente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapaAgente);
    return MapaAgente;
}());

//# sourceMappingURL=mapa-agente.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaMostrarUbicacion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(22);
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
        var data = this.navParams.data;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA             
            _this.LocalLat = -34.59122497;
            _this.LocalLng = -58.40407397;
            _this.urlMap = "http://localhost/GoogleMaps/mostrar.php?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&lng_alumno=" + data.lng + "&lat_alumno=" + data.lat;
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
                        _this.navCtrl.popToRoot();
                        //volver a iniciar el observable
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object])
    ], MapaMostrarUbicacion);
    return MapaMostrarUbicacion;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=mapa-mostrar-ubicacion.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_alumno_mapa_alumno__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(169);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(22);
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
            _this.LocalLat = -34.59122497;
            _this.LocalLng = -58.40407397;
            _this.urlMap = "http://localhost/GoogleMaps/?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng;
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerAgentesAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__ = __webpack_require__(170);
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
    function VerAgentesAlumno(navCtrl, authService, navParams) {
        this.navCtrl = navCtrl;
        this.authService = authService;
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
    VerAgentesAlumno.prototype.reportar = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
    };
    VerAgentesAlumno = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-agentes-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/ver-agentes-alumno/ver-agentes-alumno.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agentes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Agentes</h2>\n  \n  <ion-list>\n	  <ion-item *ngFor="let res of resposeData">\n	    <h2> {{ res.agente }} </h2>\n	    <button ion-button  (click)="reportar(res)">Reportar</button>\n	  </ion-item>\n  </ion-list>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/ver-agentes-alumno/ver-agentes-alumno.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VerAgentesAlumno);
    return VerAgentesAlumno;
}());

//# sourceMappingURL=ver-agentes-alumno.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(22);
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

/***/ 212:
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(406);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_pipe__ = __webpack_require__(442);
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
                __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__["a" /* VerAgentesAlumno */],
                __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__["a" /* SelecionAgenteAlumno */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__["a" /* SignupAgente */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__["a" /* SignupAlumno */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__["a" /* MapaAlumno */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__["a" /* MapaAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_26__providers_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_24_angular_linky__["LinkyModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecion-agente-alumno/selecion-agente-alumno.module#SelecionAgenteAlumnoModule', name: 'SelecionAgenteAlumno', segment: 'selecion-agente-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-agente/signup-agente.module#SignupAgenteModule', name: 'SignupAgente', segment: 'signup-agente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-alumno/signup-alumno.module#SignupAlumnoModule', name: 'SignupAlumno', segment: 'signup-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__["a" /* ReportarAgente */],
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
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_26__providers_pipe__["a" /* SafePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(212);
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

/***/ 434:
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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-il": 244,
	"./en-il.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mn": 287,
	"./mn.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 289,
	"./ms-my": 290,
	"./ms-my.js": 290,
	"./ms.js": 289,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./tg": 318,
	"./tg.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./ug-cn": 326,
	"./ug-cn.js": 326,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 329,
	"./uz-latn": 330,
	"./uz-latn.js": 330,
	"./uz.js": 329,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
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
webpackContext.id = 438;

/***/ }),

/***/ 442:
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

},[350]);
//# sourceMappingURL=main.js.map