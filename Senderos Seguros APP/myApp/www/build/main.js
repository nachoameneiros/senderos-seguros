webpackJsonp([5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_alumno_tabs_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
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
                login = "loginagente/";
            }
            else {
                login = "loginalumno/";
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionAgenteAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_agente_signup_agente__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_alumno_signup_alumno__ = __webpack_require__(108);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(175);
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
    function SignupAgente(navCtrl, authService, toastCtrl, imagePicker, base64) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.options = {
            maximumImagesCount: 8,
            width: 500,
            height: 500,
            quality: 75
        };
        this.userData = { "nombre": "", "apellido": "", "password": "", "email": "", "colegio": "", "dni": "", "imagen": "" };
        this.authService.postData(this.userData, "getcolegios/").then(function (result) {
            _this.colegios = result;
        });
    }
    SignupAgente.prototype.loadlibrary = function () {
        var _this = this;
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.base64.encodeFile(results[i]).then(function (base64File) {
                    _this.userData.imagen = base64File;
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) { });
    };
    SignupAgente.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    SignupAgente.prototype.signup = function () {
        var _this = this;
        if (this.userData.imagen && this.userData.nombre && this.userData.apellido && this.userData.password && this.userData.email && this.userData.colegio && this.userData.dni) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/`<ion-content padding>\n<ion-list>\n<h1> Sign-up Alumno </h1>\n\n  <ion-item>\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Apellido</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.apellido"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>  \n    \n  <ion-item>\n    <ion-label fixed>password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n \n	<ion-item>\n	  <ion-label>Colegio</ion-label>\n	  <ion-select [(ngModel)]="userData.colegio">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>DNI</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.dni"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="loadlibrary()">Cargar Imagen de Perfil</button>\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n  \n<a href="#" (click)="gotowelcome()">Back</a>\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */]])
    ], SignupAgente);
    return SignupAgente;
}());

//# sourceMappingURL=signup-agente.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(106);
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var apiUrl = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* API_ENDPOINT */] + 'API/';
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

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		450,
		4
	],
	"../pages/selecion-agente-alumno/selecion-agente-alumno.module": [
		451,
		3
	],
	"../pages/signup-agente/signup-agente.module": [
		453,
		2
	],
	"../pages/signup-alumno/signup-alumno.module": [
		452,
		1
	],
	"../pages/welcome/welcome.module": [
		454,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_agente_mapa_agente__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
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
            _this.userData.lat = LocalLat.toString();
            _this.userData.lng = LocalLng.toString();
            _this.userData.id = localStorage.getItem("id");
            _this.authService.postData(_this.userData, 'postgeoagente/').then(function (res) {
                //     var resposeData = res;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TabsPageAgente);
    return TabsPageAgente;
}());

//# sourceMappingURL=tabs-agente.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(50);
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
        this.urlMap = __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/";
        this.timer = 600;
        this.estadoAgente = "ACTIVO";
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
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/?APIURL=" + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* API_ENDPOINT */]) + "&lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAgente.prototype.ionViewWillUnload = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    MapaAgente.prototype.ionViewWillEnter = function () {
        this.userData.idagente = localStorage.getItem('id');
        this.iniciarObservable();
    };
    MapaAgente.prototype.iniciarObservable = function () {
        var _this = this;
        console.log('OBSERVABLE INICIADO');
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
        console.log('HEART');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(50);
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
        this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/";
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
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/mostrar.php?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&lng_alumno=" + _this.data.lng + "&lat_alumno=" + _this.data.lat;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
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
        this.userData.idagente = data.idagente;
        this.userData.lat = data.lat;
        this.userData.lng = data.lng;
    }
    FinalizarAsistencia.prototype.ionViewDidLoad = function () {
    };
    FinalizarAsistencia.prototype.finalizar = function () {
        var _this = this;
        this.authService.postData(this.userData, "finalizarasistencia/").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData.resultQuery) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_alumno_mapa_alumno__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(172);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mostrar_agente_mostrar_agente__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(50);
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







var MapaAlumno = (function () {
    function MapaAlumno(geolocation, authService, alertCtrl, navCtrl, toastCtrl) {
        var _this = this;
        this.geolocation = geolocation;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/";
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
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_ENDPOINT */] + "GoogleMaps/?APIURL=" + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* API_ENDPOINT */]) + "&lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAlumno.prototype.ionViewDidLoad = function () {
    };
    MapaAlumno.prototype.ionViewWillUnload = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
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
                _this.iniciarObservable();
            }
            else {
                _this.presentToast("Ya has enviado la alerta");
            }
        }, function (err) {
            //Connection failed message
        });
    };
    MapaAlumno.prototype.iniciarObservable = function () {
        var _this = this;
        this.sub = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(5000).subscribe(function (val) { _this.heartrevisaralerta(); });
    };
    MapaAlumno.prototype.heartrevisaralerta = function () {
        var _this = this;
        this.authService.postData(this.userData, 'getrevisaralerta/').then(function (res) {
            if (res) {
                _this.sub.unsubscribe();
                _this.mostraragente(res);
            }
            else {
                _this.authService.postData(_this.userData, 'revisarnull/').then(function (res) {
                    _this.revisarData = res;
                    if (_this.revisarData.agente == 'NOHAY') {
                        _this.sub.unsubscribe();
                        _this.alertagente();
                        _this.authService.postData(_this.userData, 'deletealerta/');
                    }
                }, function (err) {
                    //Connection failed message
                });
            }
        }, function (err) {
            //Connection failed message
        });
    };
    MapaAlumno.prototype.mostraragente = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mostrar_agente_mostrar_agente__["a" /* MostrarAgente */], data);
    };
    MapaAlumno.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: 'Se ha enviado una alerta a un agente cercano',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MapaAlumno.prototype.alertagente = function () {
        var alert = this.alertCtrl.create({
            title: 'Alerta',
            subTitle: 'No hay agentes cercanos',
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MapaAlumno);
    return MapaAlumno;
}());

//# sourceMappingURL=mapa-alumno.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrarAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MostrarAgente = (function () {
    function MostrarAgente(navCtrl, authService, alertCtrl, sanitizer, navParams) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        if (navParams.data.imagen != null) {
            this.image = this.sanitizer.bypassSecurityTrustUrl(navParams.data.imagen);
        }
    }
    MostrarAgente.prototype.ionViewDidLoad = function () {
    };
    MostrarAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mostrar-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mostrar-agente/mostrar-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img  [src]="image"/>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mostrar-agente/mostrar-agente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MostrarAgente);
    return MostrarAgente;
}());

//# sourceMappingURL=mostrar-agente.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerAgentesAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__ = __webpack_require__(173);
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
        this.userData = { "idcolegio": "", "idalumno": "" };
        this.userDataReport = { "asistencia": "", "motivo": "", "idagente": "", "idalumno": "", "valor": "" };
        this.userData.idcolegio = localStorage.getItem('idcolegio');
        this.userData.idalumno = localStorage.getItem('id');
        this.userDataReport.idalumno = localStorage.getItem('id');
    }
    VerAgentesAlumno.prototype.getAgentes = function () {
        var _this = this;
        this.authService.postData(this.userData, "getagentes/").then(function (res) {
            if (res) {
                _this.resposeData = res;
            }
            else {
                _this.resposeData = [];
            }
        }, function (err) {
            //Connection failed message
        });
    };
    VerAgentesAlumno.prototype.ionViewDidLoad = function () {
        this.getAgentes();
    };
    VerAgentesAlumno.prototype.dislike = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
    };
    VerAgentesAlumno.prototype.like = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data);
    };
    VerAgentesAlumno.prototype.onModelChange = function (event, data) {
        data.event = event;
        data.idalumno = this.userData.idalumno;
        this.userDataReport.idagente = data.id;
        this.userDataReport.valor = data.event;
        this.preguntaralerta(data);
    };
    VerAgentesAlumno.prototype.sendReport = function (data) {
        this.authService.postData(data, "postcalificacionagente/");
        this.authService.postData(this.userDataReport, "reportaragente/");
    };
    VerAgentesAlumno.prototype.preguntaralerta = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reportes',
            message: 'Es correcta la calificacion ' + data.event + '  ?',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        console.log('aceptado');
                        if (data.event < 4) {
                            _this.mostraralerta(data);
                        }
                        else {
                            _this.sendReport(data);
                            _this.getAgentes();
                        }
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
    VerAgentesAlumno.prototype.mostraralerta = function (data) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reportes',
            message: 'Debe enviar el motivo',
            buttons: [
                {
                    text: 'Aceptar',
                    handler: function () {
                        console.log('aceptado');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__["a" /* ReportarAgente */], data).then(function () {
                            _this.navCtrl.getActive().onDidDismiss(function (data) {
                                _this.getAgentes();
                            });
                        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VerAgentesAlumno);
    return VerAgentesAlumno;
}());

//# sourceMappingURL=ver-agentes-alumno.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportarAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
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
        this.userData = { "asistencia": "", "motivo": "", "idagente": "", "idalumno": "", "valor": "" };
        this.data = this.navParams.data;
        this.userData.idagente = this.data.id;
        this.userData.valor = this.data.event;
        this.userData.idalumno = localStorage.getItem('id');
    }
    ReportarAgente.prototype.ionViewDidLoad = function () {
    };
    ReportarAgente.prototype.enviarreporte = function () {
        var _this = this;
        this.authService.postData(this.data, "postcalificacionagente/");
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
            selector: 'page-reportar-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/reportar-agente/reportar-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reportes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n<!--   <ion-item> -->\n<!--     <ion-label fixed>Asistencia</ion-label> -->\n<!--     <ion-input type="text" value="" [(ngModel)]="userData.asistencia"></ion-input> -->\n<!--   </ion-item> -->\n\n  <ion-item>\n    <ion-label fixed>Motivo</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.motivo"></ion-input>\n  </ion-item>  \n  \n  <button ion-button  (click)="enviarreporte()">Reportar</button>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/reportar-agente/reportar-agente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], ReportarAgente);
    return ReportarAgente;
}());

//# sourceMappingURL=reportar-agente.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mostrar_agente_mostrar_agente__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic2_rating__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_linky__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pipe__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64__ = __webpack_require__(175);
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
                __WEBPACK_IMPORTED_MODULE_22__pages_mostrar_agente_mostrar_agente__["a" /* MostrarAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_29__providers_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_26_angular2_moment__["MomentModule"], __WEBPACK_IMPORTED_MODULE_27_angular_linky__["LinkyModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecion-agente-alumno/selecion-agente-alumno.module#SelecionAgenteAlumnoModule', name: 'SelecionAgenteAlumno', segment: 'selecion-agente-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-alumno/signup-alumno.module#SignupAlumnoModule', name: 'SignupAlumno', segment: 'signup-alumno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-agente/signup-agente.module#SignupAgenteModule', name: 'SignupAgente', segment: 'signup-agente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23_ionic2_rating__["a" /* Ionic2RatingModule */]
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
                __WEBPACK_IMPORTED_MODULE_22__pages_mostrar_agente_mostrar_agente__["a" /* MostrarAgente */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__["a" /* MapaAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__["a" /* SplitPane */], __WEBPACK_IMPORTED_MODULE_6__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_29__providers_pipe__["a" /* SafePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(109);
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

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bm": 231,
	"./bm.js": 231,
	"./bn": 232,
	"./bn.js": 232,
	"./bo": 233,
	"./bo.js": 233,
	"./br": 234,
	"./br.js": 234,
	"./bs": 235,
	"./bs.js": 235,
	"./ca": 236,
	"./ca.js": 236,
	"./cs": 237,
	"./cs.js": 237,
	"./cv": 238,
	"./cv.js": 238,
	"./cy": 239,
	"./cy.js": 239,
	"./da": 240,
	"./da.js": 240,
	"./de": 241,
	"./de-at": 242,
	"./de-at.js": 242,
	"./de-ch": 243,
	"./de-ch.js": 243,
	"./de.js": 241,
	"./dv": 244,
	"./dv.js": 244,
	"./el": 245,
	"./el.js": 245,
	"./en-au": 246,
	"./en-au.js": 246,
	"./en-ca": 247,
	"./en-ca.js": 247,
	"./en-gb": 248,
	"./en-gb.js": 248,
	"./en-ie": 249,
	"./en-ie.js": 249,
	"./en-il": 250,
	"./en-il.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./eo": 252,
	"./eo.js": 252,
	"./es": 253,
	"./es-do": 254,
	"./es-do.js": 254,
	"./es-us": 255,
	"./es-us.js": 255,
	"./es.js": 253,
	"./et": 256,
	"./et.js": 256,
	"./eu": 257,
	"./eu.js": 257,
	"./fa": 258,
	"./fa.js": 258,
	"./fi": 259,
	"./fi.js": 259,
	"./fo": 260,
	"./fo.js": 260,
	"./fr": 261,
	"./fr-ca": 262,
	"./fr-ca.js": 262,
	"./fr-ch": 263,
	"./fr-ch.js": 263,
	"./fr.js": 261,
	"./fy": 264,
	"./fy.js": 264,
	"./gd": 265,
	"./gd.js": 265,
	"./gl": 266,
	"./gl.js": 266,
	"./gom-latn": 267,
	"./gom-latn.js": 267,
	"./gu": 268,
	"./gu.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mn": 293,
	"./mn.js": 293,
	"./mr": 294,
	"./mr.js": 294,
	"./ms": 295,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 295,
	"./mt": 297,
	"./mt.js": 297,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 301,
	"./nl-be": 302,
	"./nl-be.js": 302,
	"./nl.js": 301,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 306,
	"./pt-br": 307,
	"./pt-br.js": 307,
	"./pt.js": 306,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 316,
	"./sr-cyrl": 317,
	"./sr-cyrl.js": 317,
	"./sr.js": 316,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./tg": 324,
	"./tg.js": 324,
	"./th": 325,
	"./th.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./ug-cn": 332,
	"./ug-cn.js": 332,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-tw": 342,
	"./zh-tw.js": 342
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
webpackContext.id = 444;

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
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

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
//export const API_ENDPOINT= 'http://localhost/';
var API_ENDPOINT = 'http://190.19.94.195:8000/';
//# sourceMappingURL=constants.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map