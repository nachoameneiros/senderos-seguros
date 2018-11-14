webpackJsonp([5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_agente_tabs_agente__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_alumno_tabs_alumno__ = __webpack_require__(170);
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
        var _this = this;
        console.log('ionViewDidLoad Login');
        this.authService.postData(this.userData, "getcolegios/").then(function (result) {
            _this.colegios = result;
        });
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
                if (_this.resposeData.userData) {
                    if (_this.resposeData.userData.lockeado == 'f') {
                        localStorage.setItem('nombre', _this.resposeData.userData.nombre);
                        localStorage.setItem('apellido', _this.resposeData.userData.apellido);
                        localStorage.setItem('idcolegio', _this.resposeData.userData.idcolegio);
                        localStorage.setItem('id', _this.resposeData.userData.id);
                        localStorage.setItem('hardcode', "f"); // T = HABILITO EL HARCODEO DE POSICIONES EN TODO EL CODIGO
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
                        if (_this.resposeData.userData.idcolegio) {
                            _this.presentToast("Usuario no habilitado");
                        }
                        else {
                            _this.select.open();
                        }
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
    Login.prototype.updateColegio = function () {
        var data = { "colegio": "", "idagente": "" };
        data.colegio = this.colegioData;
        data.idagente = this.resposeData.userData.id;
        this.authService.postData(data, "setcolegio/");
    };
    Login.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectColegio'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Select */])
    ], Login.prototype, "select", void 0);
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/login/login.html"*/`\n\n\n<ion-content padding id="welcome">\n<ion-list>\n\n	<ion-item  id="welcome">\n	  <ion-label>Usuario</ion-label>\n	  <ion-select [(ngModel)]="tipousuario">\n	    <ion-option value="Alumno">Alumno</ion-option>\n	    <ion-option value="Agente">Agente</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item  id="welcome">\n    <ion-label fixed>Email</ion-label>\n    <ion-input (ngModelChange)="(data!=null)?data = data.toLowerCase():\'\'" type="text" value="" [(ngModel)]="userData.email"></ion-input>\n  </ion-item>\n\n  <ion-item id="welcome">\n    <ion-label fixed >Password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="login()">Iniciar Sesion</button>\n \n	\n	<ion-item [hidden]=true>\n	  <ion-label>Seleccione un colegio</ion-label>\n		  <ion-select (ionChange)="updateColegio()"  #selectColegio [(ngModel)]="colegioData">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n	\n\n\n  <a href="#" (click)="gotowelcome()">Volver</a>\n</ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionAgenteAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_agente_signup_agente__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_alumno_signup_alumno__ = __webpack_require__(109);
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
            selector: 'page-selecion-agente-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/selecion-agente-alumno/selecion-agente-alumno.html"*/`\n<ion-content padding id="welcome">\n\n<h1> Seleccione un rol : </h1>\n\n<button ion-button block class="marginTop" (click)="signupalumno()">Alumno</button>\n<button ion-button block color="lightprimary" (click)="signupagente()">Agente</button>\n\n<a href="#" (click)="gotowelcome()">Volver</a>\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/selecion-agente-alumno/selecion-agente-alumno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SelecionAgenteAlumno);
    return SelecionAgenteAlumno;
}());

//# sourceMappingURL=selecion-agente-alumno.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(84);
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







/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupAgente = (function () {
    function SignupAgente(navCtrl, authService, localNotifications, toastCtrl, imagePicker, base64) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.localNotifications = localNotifications;
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
        this.hasReadPermission();
        this.requestReadPermission();
        this.authService.postData(this.userData, "getcolegios/").then(function (result) {
            _this.colegios = result;
        });
    }
    SignupAgente.prototype.hasReadPermission = function () {
        this.imagePicker.hasReadPermission();
    };
    SignupAgente.prototype.requestReadPermission = function () {
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
    };
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
    SignupAgente.prototype.inciarobservable = function () {
        var _this = this;
        this.sub = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(2000).subscribe(function (val) { _this.heartalerta(); });
    };
    SignupAgente.prototype.heartalerta = function () {
        var _this = this;
        console.log('HEARTREGISTRO');
        this.authService.postData(this.userData, 'consultaaprobacion/').then(function (res) {
            _this.responseConsulta = res;
            if (_this.responseConsulta.lockeado == 'f') {
                _this.sub.unsubscribe();
                _this.localNotifications.schedule({
                    text: 'CUENTA APROBADA',
                    trigger: { at: new Date(new Date().getTime() + 1) },
                    led: 'FF0000',
                    sound: null
                });
            }
        }, function (err) {
            //Connection failed message
        });
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
                    _this.inciarobservable();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/`<ion-content padding id="welcome">\n<ion-list>\n<h1> Registro Agente </h1>\n\n  <ion-item id="welcome">\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item id="welcome">\n    <ion-label fixed>Apellido</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.apellido"></ion-input>\n  </ion-item>\n\n  <ion-item id="welcome">\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>  \n    \n  <ion-item id="welcome">\n    <ion-label fixed>password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n \n	<ion-item id="welcome">\n	  <ion-label>Colegio</ion-label>\n	  <ion-select [(ngModel)]="userData.colegio">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item id="welcome">\n    <ion-label fixed>DNI</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.dni"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="loadlibrary()">Cargar Imagen de Perfil</button>\n\n  <button ion-button block color="primary" (click)="signup()">Registrarse</button>\n  \n<a href="#" (click)="gotowelcome()">Volver</a>\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-agente/signup-agente.html"*/ }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */]) === "function" && _f || Object])
    ], SignupAgente);
    return SignupAgente;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=signup-agente.js.map

/***/ }),

/***/ 109:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-signup-alumno',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-alumno/signup-alumno.html"*/`<ion-content padding id="welcome">\n<ion-list>\n<h1> Registro Alumno </h1>\n\n  <ion-item  id="welcome">\n    <ion-label fixed>Nombre</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.nombre"></ion-input>\n  </ion-item>\n\n  <ion-item  id="welcome">\n    <ion-label fixed>Apellido</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.apellido"></ion-input>\n  </ion-item>\n\n  <ion-item  id="welcome">\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"  [(ngModel)]="userData.email"></ion-input>\n  </ion-item>  \n    \n  <ion-item id="welcome">\n    <ion-label fixed>password</ion-label>\n    <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n  </ion-item>\n  \n	<ion-item id="welcome">\n	  <ion-label>Colegio</ion-label>\n	  <ion-select [(ngModel)]="userData.colegio">\n	    <ion-option *ngFor="let colegio of colegios"  [value]="colegio.id">{{colegio.nombre}}</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item id="welcome">\n    <ion-label fixed>Curso</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.curso"></ion-input>\n  </ion-item>\n\n\n  <button ion-button block color="primary" (click)="signup()">Registrarse</button>\n  \n<a href="#" (click)="gotowelcome()">Volver</a>\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/signup-alumno/signup-alumno.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SignupAlumno);
    return SignupAlumno;
}());

//# sourceMappingURL=signup-alumno.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(45);
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
        this.counterlogin = 0;
        this.renderip = false;
        this.newip = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_ENDPOINT;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.changeip = function () {
        __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* Constants */].API_ENDPOINT = this.newip;
    };
    Welcome.prototype.viewpdf = function () {
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__selecion_agente_alumno_selecion_agente_alumno__["a" /* SelecionAgenteAlumno */]);
    };
    Welcome.prototype.unlocklogin = function () {
        if (this.counterlogin > 10) {
            this.counterlogin = 0;
            this.renderip = true;
        }
        else {
            this.renderip = false;
            this.counterlogin = this.counterlogin + 1;
        }
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/welcome/welcome.html"*/`\n\n\n<ion-content padding id="welcome">\n\n	  <ion-row  justify-content-center align-items-center>	\n			<img width="200" height="200"  (click)="unlocklogin()" src="assets/imgs/logo.png"/>\n	  </ion-row>\n\n<button ion-button block class="marginTop" (click)="login()">Iniciar Sesion</button>\n<button ion-button block color="lightprimary" (click)="signup()">Registrarse</button>\n\n<a href="{{newip}}manual.pdf" >Manual</a>\n\n\n<div *ngIf="renderip">\n	<ion-input type="text" (change)="changeip()" [(ngModel)]="newip"></ion-input>\n</div>\n\n\n</ion-content>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(45);
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
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* Constants */].API_ENDPOINT + 'API/' + type, JSON.stringify(credentials), { headers: headers }).
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		452,
		4
	],
	"../pages/selecion-agente-alumno/selecion-agente-alumno.module": [
		453,
		3
	],
	"../pages/signup-agente/signup-agente.module": [
		454,
		2
	],
	"../pages/signup-alumno/signup-alumno.module": [
		455,
		1
	],
	"../pages/welcome/welcome.module": [
		456,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_agente_mapa_agente__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(169);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-agente/tabs-agente.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Mapa"></ion-tab>\n  <ion-tab tabTitle="CERRAR SESION" (ionSelect)="logout()"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-agente/tabs-agente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], TabsPageAgente);
    return TabsPageAgente;
}());

//# sourceMappingURL=tabs-agente.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAgente; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(84);
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
    function MapaAgente(navCtrl, authService, alertCtrl, localNotifications, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.geolocation = geolocation;
        this.urlMap = __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/";
        this.timer = 600;
        this.estadoAgente = "ACTIVO";
        this.userData = { "idagente": "" };
        this.userSigData = { "idagente": "", "idalumno": "", "lat": "", "lng": "" };
        this.data = { title: '', description: '', date: '', time: '' };
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.LocalLat = resp.coords.latitude;
            _this.LocalLng = resp.coords.longitude;
            // HARCODEO DE MOMENTO PORQUE LA LOCALIZACION EN DEBUG ES EL CENTRO DEL MUNDO Y PONGO LA DE ARGENTINA   
            if (localStorage.getItem('hardcode') == "t") {
                _this.LocalLat = -34.59122497;
                _this.LocalLng = -58.40407397;
            }
            var idescuela = localStorage.getItem('idcolegio');
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_7__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/indexAgente.php?APIURL=" + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* Constants */].API_ENDPOINT) + "&lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    MapaAgente.prototype.submit = function () {
        //      console.log(this.data);
        //      var date = new Date(this.data.date + " " + this.data.time);
        //      console.log(date);
        //      this.localNotifications.schedule({
        //          text: 'Delayed ILocalNotification',
        //          at: date,
        //          led: 'FF0000',
        //          sound: null
        //      });
        //      let alert = this.alertCtrl.create({
        //          title: 'Congratulation!',
        //          subTitle: 'Notification setup successfully at ' + date,
        //          buttons: ['OK']
        //      });
        //      alert.present();
        //      this.data = { title: '', description: '', date: '', time: '' };
    };
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
        this.localNotifications.schedule({
            text: 'PEDIDO DE AYUDA',
            trigger: { at: new Date(new Date().getTime() + 1) },
            led: 'FF0000',
            sound: null
        });
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
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapaAgente);
    return MapaAgente;
}());

//# sourceMappingURL=mapa-agente.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaMostrarUbicacion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(45);
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
        this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/";
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
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/mostrar.php?lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&lng_alumno=" + _this.data.lng + "&lat_alumno=" + _this.data.lat;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MapaMostrarUbicacion);
    return MapaMostrarUbicacion;
}());

//# sourceMappingURL=mapa-mostrar-ubicacion.js.map

/***/ }),

/***/ 168:
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
        if (this.userData.motivo) {
            this.authService.postData(this.userData, "finalizarasistencia/").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.resultQuery) {
                    _this.presentToast("Reporte Exitoso");
                }
                _this.navCtrl.popToRoot();
            }, function (err) {
                //Connection failed message
            });
        }
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
            selector: 'page-finalizar-asistencia',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/finalizar-asistencia/finalizar-asistencia.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Finalizar Asistencia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>  \n	<ion-item>\n	  <ion-label>Motivo</ion-label>\n	  <ion-select [(ngModel)]="userData.motivo">\n	    <ion-option value="1">Robo</ion-option>\n	    <ion-option value="2">Accidente</ion-option>\n	    <ion-option value="3">Extravio</ion-option>\n	  </ion-select>\n	</ion-item>\n\n  <ion-item>\n    <ion-label fixed>Descripcion</ion-label>\n    <ion-input type="text" [(ngModel)]="userData.descripcion"></ion-input>\n  </ion-item>  \n  \n  <button ion-button  (click)="finalizar()">Enviar</button>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/finalizar-asistencia/finalizar-asistencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], FinalizarAsistencia);
    return FinalizarAsistencia;
}());

//# sourceMappingURL=finalizar-asistencia.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_alumno_mapa_alumno__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(173);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-alumno/tabs-alumno.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Mapa"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agentes"></ion-tab>\n  <ion-tab tabTitle="CERRAR SESION" (ionSelect)="logout()"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/tabs-alumno/tabs-alumno.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabsPageAlumno);
    return TabsPageAlumno;
}());

//# sourceMappingURL=tabs-alumno.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mostrar_agente_mostrar_agente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__(45);
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
        this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/";
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
            _this.urlMap = __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].API_ENDPOINT + "GoogleMaps/?APIURL=" + encodeURIComponent(__WEBPACK_IMPORTED_MODULE_5__constants__["a" /* Constants */].API_ENDPOINT) + "&lat=" + _this.LocalLat + "&lng=" + _this.LocalLng + "&escuela=" + idescuela;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MapaAlumno);
    return MapaAlumno;
}());

//# sourceMappingURL=mapa-alumno.js.map

/***/ }),

/***/ 172:
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
        this.data = navParams.data;
        if (navParams.data.imagen != null) {
            this.image = this.sanitizer.bypassSecurityTrustUrl(navParams.data.imagen);
        }
    }
    MostrarAgente.prototype.ionViewDidLoad = function () {
    };
    MostrarAgente = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mostrar-agente',template:/*ion-inline-start:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mostrar-agente/mostrar-agente.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-label>{{data.nombre}}</ion-label>\n\n<img  [src]="image"/>\n\n</ion-content>`/*ion-inline-end:"/home/user/eclipse-workspace/Senderos Seguros APP/myApp/src/pages/mostrar-agente/mostrar-agente.html"*/
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerAgentesAlumno; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportar_agente_reportar_agente__ = __webpack_require__(174);
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
    VerAgentesAlumno.prototype.ionViewWillEnter = function () {
        this.getAgentes();
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

/***/ 174:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */]])
    ], ReportarAgente);
    return ReportarAgente;
}());

//# sourceMappingURL=reportar-agente.js.map

/***/ }),

/***/ 218:
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

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(381);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_split_pane__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_selecion_agente_alumno_selecion_agente_alumno__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_agente_signup_agente__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_alumno_signup_alumno__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mapa_alumno_mapa_alumno__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ver_agentes_alumno_ver_agentes_alumno__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_reportar_agente_reportar_agente__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_finalizar_asistencia_finalizar_asistencia__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mostrar_agente_mostrar_agente__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic2_rating__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_linky__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_linky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular_linky__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pipe__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64__ = __webpack_require__(176);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_mostrar_agente_mostrar_agente__["a" /* MostrarAgente */],
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
                        { loadChildren: '../pages/signup-agente/signup-agente.module#SignupAgenteModule', name: 'SignupAgente', segment: 'signup-agente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup-alumno/signup-alumno.module#SignupAlumnoModule', name: 'SignupAlumno', segment: 'signup-alumno', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_21__pages_mostrar_agente_mostrar_agente__["a" /* MostrarAgente */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_agente_mapa_agente__["a" /* MapaAgente */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mapa_mostrar_ubicacion_mapa_mostrar_ubicacion__["a" /* MapaMostrarUbicacion */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_agente_tabs_agente__["a" /* TabsPageAgente */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_alumno_tabs_alumno__["a" /* TabsPageAlumno */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_local_notifications__["a" /* LocalNotifications */],
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_split_pane__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(110);
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

/***/ 441:
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

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 221,
	"./af.js": 221,
	"./ar": 222,
	"./ar-dz": 223,
	"./ar-dz.js": 223,
	"./ar-kw": 224,
	"./ar-kw.js": 224,
	"./ar-ly": 225,
	"./ar-ly.js": 225,
	"./ar-ma": 226,
	"./ar-ma.js": 226,
	"./ar-sa": 227,
	"./ar-sa.js": 227,
	"./ar-tn": 228,
	"./ar-tn.js": 228,
	"./ar.js": 222,
	"./az": 229,
	"./az.js": 229,
	"./be": 230,
	"./be.js": 230,
	"./bg": 231,
	"./bg.js": 231,
	"./bm": 232,
	"./bm.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-il": 251,
	"./en-il.js": 251,
	"./en-nz": 252,
	"./en-nz.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es-us": 256,
	"./es-us.js": 256,
	"./es.js": 254,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./gu": 269,
	"./gu.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it.js": 277,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./tg": 325,
	"./tg.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./ug-cn": 333,
	"./ug-cn.js": 333,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
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
webpackContext.id = 446;

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    //   public static API_ENDPOINT= 'http://localhost/';
    Constants.API_ENDPOINT = 'http://190.19.94.195:8000/';
    return Constants;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 450:
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

/***/ })

},[357]);
//# sourceMappingURL=main.js.map