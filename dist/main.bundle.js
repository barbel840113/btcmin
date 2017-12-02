webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts"
	],
	"./main/main.module": [
		"../../../../../src/app/main/main.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- component routing placeholder -->\r\n <router-outlet></router-outlet> \r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        // localStorage.removeItem('auth-tokens');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services_module__ = __webpack_require__("../../../../../src/app/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_loadingbar_loadingbar_component__ = __webpack_require__("../../../../../src/app/shared/loadingbar/loadingbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_module__["MainModule"],
                __WEBPACK_IMPORTED_MODULE_5__login_login_module__["LoginModule"],
                __WEBPACK_IMPORTED_MODULE_16__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_10__services_services_module__["a" /* ServicesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */], { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* PreloadAllModules */], useHash: false, enableTracing: true })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__shared_loadingbar_loadingbar_component__["a" /* LoadingbarComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
];


/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/constants/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configTokenPost; });
var configTokenPost = {
    'client_id': 'hsbub',
    'client_secret': '67A20C10A94248DBA64B4F1EB00CFD6A',
    'grant_type': 'password',
    'scope': ' resapi1 talda'
};


/***/ }),

/***/ "../../../../../src/app/constants/url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HOSTAPI */
/* unused harmony export HOSTIDENTITY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return URL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return KRAKENCURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BTCSTAMPUSD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REGISTER; });
/* unused harmony export GETUSERNAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GETUSERSETTINGINFORMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATEUSERSETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATENEWBITCOINADDRESS; });
/* unused harmony export GETBITCIONADDRESSFORUSER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATEBUSINESSUNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GETBUSINESSUNIT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var HOSTAPI = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].appresource1Url;
;
var HOSTIDENTITY = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].identityUrl;
var URL_LOGIN = HOSTIDENTITY + 'connect/token';
var ADMIN_URL = HOSTAPI + 'api/admin/doadminoperation/';
var KRAKENCURRENCY = 'https://api.kraken.com/0/public/Assets';
var BTCSTAMPUSD = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
var REGISTER = HOSTIDENTITY + 'app/rolset/register';
var GETUSERNAME = HOSTAPI + 'api/Account/getusername';
var GETUSERSETTINGINFORMATION = HOSTAPI + 'api/Account/getuserinformations';
var UPDATEUSERSETTINGS = HOSTAPI + 'api/Account/updateuserinformations';
var CREATENEWBITCOINADDRESS = HOSTAPI + 'api/BTCApp/createbitcoinaddress';
var GETBITCIONADDRESSFORUSER = HOSTAPI + 'api/BTCApp/getbitcoinaddress';
var CREATEBUSINESSUNIT = HOSTAPI + 'api/AppSettings/createbusinessunit';
var GETBUSINESSUNIT = HOSTAPI + 'api/AppSettings/getbusinessunit';


/***/ }),

/***/ "../../../../../src/app/guards/admin-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuardGuard = /** @class */ (function () {
    /**
     *
     * @param appService
     */
    function AdminGuardGuard(appService) {
        this.appService = appService;
    }
    /**
     *
     * @param component
     * @param currentRoute
     * @param currentState
     * @param nextState
     */
    AdminGuardGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        if (this.appService.profileUserContainer$.value != null && typeof (this.appService) !== 'undefined') {
            var roleName = this.appService.profileUserContainer$.value.role;
            if (roleName == 'Admin') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    /**
     *
     * @param next
     * @param state
     */
    AdminGuardGuard.prototype.canActivate = function (next, state) {
        if (this.appService.profileUserContainer$.value != null && typeof (this.appService) !== 'undefined') {
            var roleName = this.appService.profileUserContainer$.value.role;
            if (roleName == 'Admin') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    AdminGuardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_application_application_service__["a" /* ApplicationService */]])
    ], AdminGuardGuard);
    return AdminGuardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/services/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

var AuthenticationGuard = /** @class */ (function () {
    //constructor
    function AuthenticationGuard(router, //Router
        authService, //Authetnication Service
        utlityService, 
        //public service: Adal4Service, 
        //public http: Adal4HTTPService,
        authTokenService, applicationService) {
        this.router = router;
        this.authService = authService;
        this.utlityService = utlityService;
        this.authTokenService = authTokenService;
        this.applicationService = applicationService;
    }
    //can Active will apply while user will roaming between components
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        //save url after loggin to redirect back where user requested to go 
        var url = state.url;
        return this.checkLogin(url);
    };
    //check if use is logged or not
    AuthenticationGuard.prototype.checkLogin = function (url) {
        //check if return url is token
        // Handle callback if this is a redirect from Azure
        // this.service.handleWindowCallback();
        /*if(this.service.userInfo.authenticated == true)
        {
          if(this.applicationService.isProfileUserInformationSaveInMemory == true)
          {
              
          }
          else{
            this.applicationService.isProfileUserInformationSaveInMemory = true;
            this.authTokenService.storeAzureADDTokenInStore(this.service.userInfo);
            
          }
         
  
          return true;
        }  //check for token from azure aad
         */
        //check for login in custom database
        if (this.authService.checkIfTheUserHasToken()) {
            return true;
        }
        //store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        //navigate to the login page with extras
        this.utlityService.navigate('/login');
        return false;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_utility_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_token_auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_5__services_application_application_service__["a" /* ApplicationService */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-details/login-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n    <mat-grid-list cols=\"3\">\r\n        <mat-grid-tile [rowspan]=\"1\"></mat-grid-tile>\r\n\r\n        <!-- Writing markup for login starts -->\r\n        <mat-grid-tile class='login-element'>\r\n            <div class=\"login-container\">\r\n\r\n                <!-- Template Body starts -->\r\n                <div class=\"login-box-body\">\r\n                  <form class=\"{{formClass}}\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" role=\"form\">\r\n                    <mat-grid-list cols=\"9\">\r\n                     \r\n                        <mat-grid-tile [colspan]=\"2\" class=\"login-icon\">\r\n\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile  [colspan]=\"7\">\r\n                           \r\n                        </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                    <!--generate template automatically -->\r\n                    <mat-grid-list cols=\"9\" *ngFor=\"let control of controls\" >\r\n                            <mat-grid-tile [rowspan]=\"1\" class={{control.class}}>\r\n                                <mat-icon>{{control.icon}}</mat-icon>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile [colspan]=\"7\">\r\n                                <mat-input-container class=\"justifier\" required >\r\n                                    <input matInput  placeholder=\"{{control.placeholder}}\" [formControlName]=\"control.key\"  type=\"{{control.type}}\">\r\n                                </mat-input-container>\r\n                            </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                       \r\n                    <!-- Markup for getting Password ends -->\r\n                    <mat-grid-list cols=\"9\">\r\n                        <mat-grid-tile [rowspan]=\"1\" [colspan]=\"1\">\r\n                        </mat-grid-tile>\r\n        \r\n                        <mat-grid-tile [colspan]=\"3\">\r\n                            <button mat-raised-button type=\"submit\" class=\"login-button\">\r\n                                <mat-icon>input</mat-icon> Login\r\n                            </button>\r\n\r\n                        </mat-grid-tile>\r\n\r\n                        <mat-grid-tile [colspan]=\"1\">\r\n                              \r\n                            </mat-grid-tile>\r\n    \r\n\r\n                        <mat-grid-tile [colspan]=\"3\">\r\n                                <button mat-raised-button type=\"button\" routerLink=\"/register\" class=\"login-button\">\r\n                                    <mat-icon>accessibility</mat-icon> Register\r\n                                </button>\r\n    \r\n                            </mat-grid-tile>\r\n\r\n                    </mat-grid-list>\r\n\r\n                </form>\r\n                </div>\r\n                <!-- Template Body ends -->\r\n\r\n            </div>\r\n        </mat-grid-tile>\r\n        <!-- Writing markup for login ends -->\r\n        <mat-grid-tile></mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login-details/login-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\nLogin template using Angular Material\r\n@author Shashank Tiwari\r\n*/\nbody {\n  background-color: #e91e63;\n  font-family: 'Roboto', sans-serif;\n  margin: 0px !important; }\n\n.app-header {\n  color: #fff;\n  background-color: #e91e63;\n  text-align: center;\n  padding: 1%;\n  box-shadow: 2px 4px 58px -20px black; }\n\nbody, html {\n  height: 100%; }\n\n.bg {\n  /* The image used */\n  background-image: url(\"/assets/img/Work-Safety-Collage.jpg\");\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.login-container {\n  width: 100%;\n  height: auto;\n  padding: 0% !important;\n  background-color: #fffdfd;\n  box-shadow: 2px 4px 58px -20px black; }\n\n.login-box-header {\n  width: auto;\n  height: 20%;\n  background-color: #673ab7;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 3em;\n  padding: 2%;\n  color: #fff; }\n\n.login-box-body {\n  width: auto;\n  height: 100%;\n  padding: 5% 5% 5% 5%;\n  color: #d2d2d2; }\n\n.login-icon {\n  margin-top: -2px; }\n\n.justifier {\n  width: 100%;\n  padding-bottom: 2%; }\n\n.login-button {\n  width: 100%;\n  padding: 1.5% !important;\n  background-color: #673ab7;\n  font-size: 1.5em;\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-details/login-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginDetailsComponent = /** @class */ (function () {
    //contrustor
    function LoginDetailsComponent() {
        this.externalLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Output Event to pass value to Parent Component
        this.formSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.btnExternalLogin = 'External Login';
    }
    ;
    //on Initialize of component
    LoginDetailsComponent.prototype.ngOnInit = function () {
    };
    //submit Event Emitter to pass form values to parent component
    LoginDetailsComponent.prototype.onSubmit = function () {
        this.formSubmit.emit(this.form.value);
    };
    /**
     * Federate SAML Authentication
     */
    LoginDetailsComponent.prototype.federateAuthentication = function () {
        this.externalLogin.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginDetailsComponent.prototype, "formClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginDetailsComponent.prototype, "btnSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginDetailsComponent.prototype, "controls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */])
    ], LoginDetailsComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoginDetailsComponent.prototype, "externalLogin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], LoginDetailsComponent.prototype, "formSubmit", void 0);
    LoginDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-details',
            template: __webpack_require__("../../../../../src/app/login/login-details/login-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login-details/login-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginDetailsComponent);
    return LoginDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_vendor_css__ = __webpack_require__("../../../../../src/styles/vendor.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_vendor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_vendor_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());

;


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <app-login-details [formClass]=\"'form-signin'\" (externalLogin)=\"externalLogin($event)\" (formSubmit)=\"login($event)\" [form]=\"form\" [controls]=\"controls\" [btnSubmit]=\"'Login'\">\r\n\r\n</app-login-details> \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_forms_control_textbox__ = __webpack_require__("../../../../../src/app/shared/forms/control-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_account_account_service__ = __webpack_require__("../../../../../src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/services/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_dialogModal_dialogModal_service__ = __webpack_require__("../../../../../src/app/services/dialogModal/dialogModal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountService, formControlService, utilityService, _router, toasterService, vcRef, authService, snackBar, dialogService) {
        this.accountService = accountService;
        this.formControlService = formControlService;
        this.utilityService = utilityService;
        this._router = _router;
        this.toasterService = toasterService;
        this.vcRef = vcRef;
        this.authService = authService;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        //container for errors
        this.errorsArray = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        //initialize login dynamic form
        var controls = [
            new __WEBPACK_IMPORTED_MODULE_2__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'email',
                required: false,
                order: 1,
                class: 'login-icon',
                icon: 'lock'
            }),
            new __WEBPACK_IMPORTED_MODULE_2__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: false,
                order: 2,
                class: 'login-icon',
                icon: 'remove_red_eye'
            })
        ];
        this.controls = controls;
        //initialize form
        this.form = this.formControlService.toControlGroup(this.controls);
    };
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.errorsArray = [];
        this.dialogService.openDialog();
        this.accountService.login(model)
            .subscribe(function (result) {
            console.log();
            _this.dialogService.closedDialog('/main');
        }, function (errors) {
            if (errors.status == 0) {
                _this.snackBar.open("You are in offline mode", "Close", {
                    duration: 2000,
                });
            }
            else {
                //check
                var error = JSON.parse(errors['_body']);
                if (typeof (error) !== 'undefined' && error instanceof Object) {
                    _this.snackBar.open(error.error, "Close", {
                        duration: 2000,
                    });
                }
            }
        });
    };
    /**
     * External Event
     * @param event
     */
    LoginComponent.prototype.externalLogin = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'appc-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_7__router_animations__["a" /* routerTransition */])()],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_account_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__services_formcontrol_form_control_service__["a" /* FormControlService */],
            __WEBPACK_IMPORTED_MODULE_4__services_utility_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_token_auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_10__services_dialogModal_dialogModal_service__["a" /* DialogAppService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_details_login_details_component__ = __webpack_require__("../../../../../src/app/login/login-details/login-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_login_spinning_bar_modal_login_spinning_bar_modal_component__ = __webpack_require__("../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { ServicesModule } from '../services/services.module';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_toaster__["a" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatDialogModule */],
                // ServicesModule,
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatIconModule */],
            ],
            providers: [],
            exports: [__WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__login_details_login_details_component__["a" /* LoginDetailsComponent */], __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__modals_login_spinning_bar_modal_login_spinning_bar_modal_component__["a" /* LoginSpinningBarModalComponent */]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"bg\">\n        \n            <mat-grid-list cols=\"3\">\n                <mat-grid-tile [rowspan]=\"1\"></mat-grid-tile>\n         \n                        <!-- Template Body starts -->\n              \n                        <mat-grid-tile class='login-element'>\n                    <div class=\"login-container\">\n          <!-- Writing markup for login starts -->\n                            <div class=\"login-box-body\">\n                                <form class=\"{{formClass}}\" #f=\"ngForm\" (ngSubmit)=\"this.onSubmit()\" [formGroup]=\"this.registerForm\" role=\"form\">\n                                        <mat-grid-list cols=\"9\">\n                                        \n                                            <mat-grid-tile [colspan]=\"2\" class=\"login-icon\">\n                    \n                                            </mat-grid-tile>\n                                            <mat-grid-tile  [colspan]=\"7\">\n                                            \n                                            </mat-grid-tile>\n                                        </mat-grid-list>\n                                    <!--generate template automatically -->\n                                        <mat-grid-list cols=\"9\" *ngFor=\"let control of registerFormControlsContainer\" >\n                                                <mat-grid-tile [rowspan]=\"1\" class={{control.class}}>\n                                                    <mat-icon>{{control.icon}}</mat-icon>\n                                                </mat-grid-tile>\n                                                <mat-grid-tile [colspan]=\"7\">\n                                                    <mat-input-container class=\"justifier\" required >\n                                                        <input matInput  placeholder=\"{{control.placeholder}}\" [formControlName]=\"control.key\"  type=\"{{control.type}}\">\n                                                    </mat-input-container>\n                                                </mat-grid-tile>\n                                        </mat-grid-list>\n                                        \n                                    \n                                        <mat-grid-list cols=\"9\">\n                                            <mat-grid-tile [rowspan]=\"1\" [colspan]=\"1\">\n                                            </mat-grid-tile>\n                            \n                                            <mat-grid-tile [colspan]=\"3\">\n                                                <button mat-raised-button type=\"submit\" routerLink='/login' class=\"login-button\">\n                                                    <mat-icon>input</mat-icon> Login\n                                                </button>\n                    \n                                            </mat-grid-tile>\n                    \n                                            <mat-grid-tile [colspan]=\"1\">\n                                                \n                                            </mat-grid-tile>\n                        \n                                            <!-- Markup for getting Password ends -->\n                                           \n                                                <mat-grid-tile [colspan]=\"3\">\n                                                    <button mat-raised-button type=\"button\" type=\"submit\" class=\"login-button\">\n                                                        <mat-icon>accessibility</mat-icon> Register\n                                                    </button>\n                                                </mat-grid-tile>                    \n                                        </mat-grid-list>\n                \n                                    </form>\n                            </div>\n                      \n        \n                    </div>\n                </mat-grid-tile>\n             \n                <mat-grid-tile></mat-grid-tile>\n        \n            </mat-grid-list>\n        \n        \n        \n        </div>\n\n    <app-footer></app-footer>     <!-- Writing markup for login ends -->"

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i\nbody {\n  background-color: #e91e63;\n  font-family: 'Roboto', sans-serif;\n  margin: 0px !important; }\n\n.app-header {\n  color: #fff;\n  background-color: #e91e63;\n  text-align: center;\n  padding: 1%;\n  box-shadow: 2px 4px 58px -20px black; }\n\nbody, html {\n  height: 100%; }\n\n.bg {\n  /* The image used */\n  background-image: url(\"/assets/img/Work-Safety-Collage.jpg\");\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.login-container {\n  width: 100%;\n  height: auto;\n  padding: 0% !important;\n  background-color: #fffdfd;\n  box-shadow: 2px 4px 58px -20px black; }\n\n.login-box-header {\n  width: auto;\n  height: 20%;\n  background-color: #673ab7;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 3em;\n  padding: 2%;\n  color: #fff; }\n\n.login-box-body {\n  width: auto;\n  height: 100%;\n  padding: 5% 5% 5% 5%;\n  color: #d2d2d2; }\n\n.login-icon {\n  margin-top: -2px; }\n\n.justifier {\n  width: 100%;\n  padding-bottom: 2%; }\n\n.login-button {\n  width: 100%;\n  padding: 1.5% !important;\n  background-color: #673ab7;\n  font-size: 1.5em;\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__ = __webpack_require__("../../../../../src/app/shared/forms/control-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_account_service__ = __webpack_require__("../../../../../src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dialogModal_dialogModal_service__ = __webpack_require__("../../../../../src/app/services/dialogModal/dialogModal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, formBuilder, formControlService, accountService, snackBar, dialogService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.formControlService = formControlService;
        this.accountService = accountService;
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.formClass = '';
        //create a form
        this.createRegisterForm();
        this.btnSubmit = "Register";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        //subscribe any changes in register form to chec
        this.registerForm.valueChanges.subscribe(function (val) {
        });
    };
    //create a form
    RegisterComponent.prototype.createRegisterForm = function () {
        var controls = [
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'firstname',
                label: 'First Name',
                placeholder: 'First Name',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'lastname',
                label: 'Last Name',
                placeholder: 'Last Name',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                order: 5
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'confirmpassword',
                label: 'Confirm Password',
                placeholder: 'Confirm Password',
                value: '',
                class: 'col-4 col-form-label',
                labelclass: 'form-control',
                type: 'password',
                required: true,
                order: 6
            })
        ];
        this.registerFormControlsContainer = controls;
        //initialize form
        this.registerForm = this.formControlService.toControlGroup(this.registerFormControlsContainer);
    };
    //onsubmit form
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('submit register');
        var result = this.serializeRegisterVMData(this.registerForm);
        this.dialogService.openDialog();
        this.accountService.register(this.registerForm.value).subscribe(function (val) {
        }, function (error) {
            if (error.succeeded == false) {
                error.errors.forEach(function (element) {
                    _this.snackBar.open(element.description, "Close", {
                        duration: 2000,
                    });
                });
            }
        });
    };
    RegisterComponent.prototype.serializeRegisterVMData = function (form) {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/login/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/register/register.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [Object(__WEBPACK_IMPORTED_MODULE_6__router_animations__["a" /* routerTransition */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_formcontrol_form_control_service__["a" /* FormControlService */],
            __WEBPACK_IMPORTED_MODULE_5__services_account_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__services_dialogModal_dialogModal_service__["a" /* DialogAppService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/business-unit/business-unit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" flex-container\" fxLayout=\"column\" >\n  <div class=\"item item-1\" fxFlex=\"40%\">\n    <mat-card>\n      <mat-card-title>Create Business Unit</mat-card-title>\n      <mat-card-content>\n        <mat-horizontal-stepper [linear]=\"isLinear\">\n          <mat-step [stepControl]=\"businessUnitForm\" *ngFor=\"let control of this.businessUnitControls\">\n            <form [formGroup]=\"businessUnitForm\" (submit)=\"this.onSubmit()\">\n              <div *ngFor=\"let item of control\">\n                <ng-template matStepLabel>{{item.label}}</ng-template>\n                <mat-form-field>\n                  <input matInput [placeholder]=\"item.placeholder\" [formControlName]=\"item.key\" required>\n                </mat-form-field>\n              </div>\n            </form>\n            <div class=\"button-row\">\n              <button mat-button color=\"primary\" matStepperNext>Next</button>\n            </div>\n          </mat-step>\n\n          <!-- Submit Button -->\n          <mat-step>\n            <form [formGroup]=\"businessUnitForm\" (submit)=\"this.onSubmit()\">\n              <ng-template matStepLabel>Submit</ng-template>\n              Click to Save\n              <div class=\"button-row\">\n                <button mat-button color=\"warn\" type=\"button\" (click)=\"this.onSubmit()\">Save</button>\n              </div>\n            </form>\n          </mat-step>\n\n        </mat-horizontal-stepper>\n      </mat-card-content>\n    </mat-card>\n  </div>\n      <div class=\"item item-2\" fxFlex=\"40%\" fxFlexOrder=\"3\">\n      \n        <mat-table #table [dataSource]=\"dataSourceSec\">\n          \n              <!--- Note that these columns can be defined in any order.\n                    The actual rendered columns are set as a property on the row definition\" -->\n          \n              <!-- Position Column -->\n              <ng-container matColumnDef=\"businessName\">\n                <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.businessName}} </mat-cell>\n              </ng-container>\n          \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"postCode\">\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.postCode}} </mat-cell>\n              </ng-container>\n          \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"street1\">\n                <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.street1}} </mat-cell>\n              </ng-container>\n          \n              <!-- Color Column -->\n              <ng-container matColumnDef=\"street2\">\n                <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.street2}} </mat-cell>\n              </ng-container>\n          \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>   \n       \n        </mat-table>\n  </div>\n  <div class=\"item item-3\" fxFlex>Item 3</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/business-unit/business-unit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/business-unit/business-unit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ExampleDataSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUnitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__ = __webpack_require__("../../../../../src/app/shared/forms/control-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dialogModal_dialogModal_service__ = __webpack_require__("../../../../../src/app/services/dialogModal/dialogModal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/app-settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_business_unit_business_unit_service__ = __webpack_require__("../../../../../src/app/services/business-unit/business-unit.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var data = [
    { businessName: 'Value Not Loaded', postCode: 'Value Not Loaded', street1: 'Value Not Loaded', street2: 'Value Not Loaded' }
];
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    /** Constructor */
    function ExampleDataSource(buService) {
        var _this = 
        // call parent class
        _super.call(this) || this;
        _this.buService = buService;
        /** This is a data Source Container */
        _this.dataSource = new Array();
        _this.dataSouceArray = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](data);
        _this.delegateToConvert = _this.convertToModel;
        _this.buService.BusinessUnitContainerSubscription$.subscribe(function (res) {
            _this.dataSouceArray.next(_this.delegateToConvert(res));
        });
        return _this;
    }
    /** convert view model to model */
    ExampleDataSource.prototype.convertToModel = function (value) {
        var array = new Array();
        if (value instanceof Array) {
            value.forEach(function (element) {
                array.push(element);
            });
        }
        return array;
    };
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].of(this.dataSouceArray.value);
    };
    /** Disconnect */
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__["a" /* DataSource */]));

var BusinessUnitComponent = /** @class */ (function () {
    function BusinessUnitComponent(_formBuilder, formControlService, appSettingsService, dialogService, businessUnitService) {
        this._formBuilder = _formBuilder;
        this.formControlService = formControlService;
        this.appSettingsService = appSettingsService;
        this.dialogService = dialogService;
        this.businessUnitService = businessUnitService;
        this.displayedColumns = ['businessName', 'postCode', 'street1', 'street2'];
        this.dataSourceSec = new ExampleDataSource(this.businessUnitService);
        //array of controls
        this.businessUnitControls = [];
        this.isLinear = false;
    }
    BusinessUnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        //generate new form
        this.generateControlsForBusinessUnit();
        this.businessUnitService.getAllBusinessUnit().subscribe(function (result) {
            if (result.status == 200) {
                var arrayBU = JSON.parse(result['_body']);
                _this.businessUnitService.BusinessUnitContainerSubscription$.next(arrayBU);
            }
        }, function (error) {
            _this.dialogService.openSnackBar(error.error);
        });
    };
    /**
     * Generate new Form
     */
    BusinessUnitComponent.prototype.generateControlsForBusinessUnit = function () {
        //initialize login dynamic form
        var controls = [
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'Street1',
                label: 'Main Street',
                placeholder: 'Main Street',
                value: '',
                type: 'test',
                required: true,
                order: 2,
                class: 'login-icon',
                icon: 'lock'
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'Street2',
                label: 'Second Street',
                placeholder: 'Second Street',
                value: '',
                type: 'test',
                required: true,
                order: 2,
                class: 'login-icon',
                icon: 'remove_red_eye'
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'BusinessName',
                label: 'Business Name',
                placeholder: 'Business Name',
                value: '',
                type: 'test',
                required: true,
                order: 1,
                class: 'login-icon',
                icon: 'remove_red_eye'
            }),
            new __WEBPACK_IMPORTED_MODULE_3__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'PostCode',
                label: 'Street PostCode',
                placeholder: 'Street PostCode',
                value: '',
                type: 'test',
                required: true,
                order: 2,
                class: 'login-icon',
                icon: 'remove_red_eye'
            })
        ];
        for (var i = 0; i < controls.length; i++) {
            var index = controls[i].order;
            //check if the array is empty then initialize
            //find the order and put together to be display in the stepper
            if (typeof (this.businessUnitControls[index - 1]) === 'undefined') {
                this.businessUnitControls[index - 1] = new Array();
                this.businessUnitControls[index - 1].push(controls[i]);
            }
            else {
                var index_1 = controls[i].order;
                //this is a index to store value
                this.businessUnitControls[index_1 - 1].push(controls[i]);
            }
        }
        this.businessUnitForm = this.formControlService.toControlGroup(controls);
    };
    /**
     * Create Business Unit
     */
    BusinessUnitComponent.prototype.onSubmit = function () {
        var _this = this;
        //check for value
        var model = this.businessUnitForm.value;
        if (!(model instanceof Object)) {
            //return error
            this.dialogService.openMessageDialog();
        }
        else {
            this.dialogService.openDialog();
            this.businessUnitService.createBusinessUnit(model).subscribe(function (res) {
                if (res.status === 200) {
                    _this.dialogService.closedDialog();
                }
            }, function (errors) {
                _this.dialogService.closedDialog();
                var errorModel = errors;
                _this.dialogService.openSnackBar(errorModel.statusText);
            });
        }
    };
    BusinessUnitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-business-unit',
            template: __webpack_require__("../../../../../src/app/main/business-unit/business-unit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/business-unit/business-unit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_formcontrol_form_control_service__["a" /* FormControlService */],
            __WEBPACK_IMPORTED_MODULE_5__services_app_settings_app_settings_service__["a" /* AppSettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_dialogModal_dialogModal_service__["a" /* DialogAppService */],
            __WEBPACK_IMPORTED_MODULE_15__services_business_unit_business_unit_service__["a" /* BusinessUnitService */]])
    ], BusinessUnitComponent);
    return BusinessUnitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" fullscreen>\r\n        <mat-grid-tile\r\n            *ngFor=\"let tile of tiles\"\r\n            [colspan]=\"tile.cols\"\r\n            [rowspan]=\"tile.rows\"\r\n            [style.background]=\"tile.color\">\r\n          {{tile.text}}\r\n        </mat-grid-tile>\r\n      </mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.tiles = [
            { text: 'One', cols: 4, rows: 5, color: 'lightblue' },
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/dashboard/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/main/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/main/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__business_unit_business_unit_component__ = __webpack_require__("../../../../../src/app/main/business-unit/business-unit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_overview_user_overview_component__ = __webpack_require__("../../../../../src/app/main/user-overview/user-overview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_authentication_guard__["a" /* AuthenticationGuard */]],
        children: [
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* SettingsComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'dashboards', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_6__transactions_transactions_component__["a" /* TransactionsComponent */] },
            { path: 'user-overview', component: __WEBPACK_IMPORTED_MODULE_9__user_overview_user_overview_component__["a" /* UserOverviewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_admin_guard__["a" /* AdminGuardGuard */]], canDeactivate: [__WEBPACK_IMPORTED_MODULE_8__guards_admin_guard__["a" /* AdminGuardGuard */]] },
            { path: 'business-unit', component: __WEBPACK_IMPORTED_MODULE_7__business_unit_business_unit_component__["a" /* BusinessUnitComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_admin_guard__["a" /* AdminGuardGuard */]], canDeactivate: [__WEBPACK_IMPORTED_MODULE_8__guards_admin_guard__["a" /* AdminGuardGuard */]] },
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"demo-root\" fullscreen>\r\n  <mat-sidenav fixedInViewport=\"true\" [mode]=\"'side'\" [opened]=\"false\"    #start>\r\n      <mat-nav-list>\r\n        <span mat-list-item>Organization Settings</span>\r\n        <span class=\"app-toolbar-filler\"></span>\r\n        <mat-icon class=\"example-icon\">build</mat-icon>\r\n      </mat-nav-list>\r\n      <hr>\r\n      <mat-nav-list>\r\n         <a mat-list-item tabindex=\"-1\" >fdsfd</a>\r\n      </mat-nav-list>\r\n    <mat-nav-list>\r\n      <a *ngFor=\"let navItem of this.navItemsAdministrator\" mat-list-item (click)=\"start.close()\"   [routerLink]=\"[navItem.route]\" routerLinkActive #routerLinkActiveInstance=\"routerLinkActive\">\r\n        {{navItem.name}}\r\n      </a>\r\n    </mat-nav-list>\r\n    <button mat-button tabindex=\"-1\" (click)=\"start.close()\">CLOSE</button>\r\n  </mat-sidenav>\r\n\r\n  <div>\r\n        <app-header-admin (toggleSideBar)=\"start.open()\"></app-header-admin>\r\n        <router-outlet></router-outlet>    \r\n  </div>\r\n</mat-sidenav-container> \r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: Roboto, 'Helvetica Neue', sans-serif; }\n  body * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  body .mat-sidenav {\n    min-width: 15vw; }\n    body .mat-sidenav .mat-button {\n      width: 100%;\n      position: relative;\n      bottom: 0;\n      margin: 24px 0; }\n  body span#example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto; }\n  body .mat-toolbar .mat-icon {\n    cursor: pointer; }\n  body .mat-toolbar .demo-toolbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n  body .example-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto; }\n  body h1 {\n    font-size: 20px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.demo-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box; }\n\nmat-sidenav {\n  background-color: rgba(96, 100, 96, 0.808);\n  box-shadow: 0 0 4px 3px black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_account_account_service__ = __webpack_require__("../../../../../src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/services/auth-token/auth-token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainComponent = /** @class */ (function () {
    function MainComponent(http, titleService, tokens, applicationService, toasterService, cd, vcRef, accountService, _element, _renderer, _overlayContainer) {
        var _this = this;
        this.http = http;
        this.titleService = titleService;
        this.tokens = tokens;
        this.applicationService = applicationService;
        this.toasterService = toasterService;
        this.cd = cd;
        this.vcRef = vcRef;
        this.accountService = accountService;
        this._element = _element;
        this._renderer = _renderer;
        this._overlayContainer = _overlayContainer;
        this.timerRefresherSubject$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        //navigation on side nav bar
        this.navItemsAdministrator = [
            { name: 'Dashboard', route: '/main/dashboards' },
            { name: 'Business Units', route: '/business-unit' },
            { name: 'User Overview', route: '/usersoverview' }
        ];
        //get value
        this.applicationService.getAllValues().subscribe(function (result) { }, function (error) { });
        this.timeoutSubscription$;
        this.timerRefresher$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].timer(2000, 5000);
        this.timeoutSubscription$ = this.timerRefresher$.subscribe(function (val) {
            _this.timerRefresherSubject$.next(val);
            _this.applicationService.getUpdateValue().subscribe();
        });
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        //assign state
        this.authSubscribption$ = this.applicationService.profileUserContainer$.subscribe(function (result) {
            console.log(result);
            if (result.profile != null) {
                _this.profileState = result.profile.exp;
                _this.name = result.profile.unique_name;
            }
        }, function (error) { });
    };
    MainComponent.prototype.showToogleBar = function (event) {
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.timeoutSubscription$.unsubscribe();
        this.authSubscribption$.unsubscribe();
        this.applicationService.getAllValues();
        // this.tokenRefreshSubscription$.unsubscribe();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_9__services_auth_token_auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_6__services_application_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_8__services_account_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["e" /* OverlayContainer */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__("../../../../../src/app/main/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__("../../../../../src/app/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/main/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mat_help_mat_help_module__ = __webpack_require__("../../../../../src/app/mat-help/mat-help.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__business_unit_business_unit_component__ = __webpack_require__("../../../../../src/app/main/business-unit/business-unit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_message_form_message_form_component__ = __webpack_require__("../../../../../src/app/shared/message-form/message-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_overview_user_overview_component__ = __webpack_require__("../../../../../src/app/main/user-overview/user-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__main_routing_module__["a" /* MainRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["JsonpModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__mat_help_mat_help_module__["a" /* MatHelpModule */],
                __WEBPACK_IMPORTED_MODULE_14__swimlane_ngx_datatable__["NgxDatatableModule"]
                //  SidebarModule.forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__business_unit_business_unit_component__["a" /* BusinessUnitComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_overview_user_overview_component__["a" /* UserOverviewComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__business_unit_business_unit_component__["a" /* BusinessUnitComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_overview_user_overview_component__["a" /* UserOverviewComponent */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_10__angular_cdk_overlay__["e" /* OverlayContainer */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_cdk_overlay__["b" /* FullscreenOverlayContainer */] }],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__shared_message_form_message_form_component__["a" /* MessageFormComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" fullscreen>\n    <mat-grid-tile\n        *ngFor=\"let tile of tiles\"\n        [colspan]=\"tile.cols\"\n        [rowspan]=\"tile.rows\"\n        [style.background]=\"tile.color\">\n      {{tile.text}}\n    </mat-grid-tile>\n  </mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/main/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#buttonSubmit {\n  background-color: #191919;\n  font-size: 11px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_settingsSettings, _applicationService, _toastService, router, formBuilder, cd, formControlService) {
        var _this = this;
        this._settingsSettings = _settingsSettings;
        this._applicationService = _applicationService;
        this._toastService = _toastService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cd = cd;
        this.formControlService = formControlService;
        this.bitcoinAddressWaletContainer = new Array();
        //enable or disable button for generate token
        this.enableOrDisableGenerateWallet = false;
        this.tiles = [
            { text: 'One', cols: 1, rows: 2, color: 'lightblue' },
            { text: 'Two', cols: 3, rows: 1, color: 'lightgreen' },
            { text: 'Four', cols: 3, rows: 1, color: '#DDBDF1' },
        ];
        this.errorHandler = {};
        this.handlerEvent = {};
        this.userNameSubscription$ = this._applicationService.userNameSubscription$.subscribe(function (result) {
            _this.username = result;
            _this.cd.markForCheck();
        }, function (error) {
            _this._toastService.pop('error', 'BTCApp Error', error);
        });
    }
    /**
     * Load All Setttings
     */
    SettingsComponent.prototype.loadSettingsValues = function () {
    };
    /**
     * Submit Settings
     */
    SettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        //update First Name and Last Name in the future any value
        this._applicationService.updateUserSettings(this.settingsForm.value).subscribe(function (result) {
            _this._toastService.pop("success", "The User Information has been updated", "");
        }, function (error) { });
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.userNameSubscription$.unsubscribe();
    };
    //create a form
    SettingsComponent.prototype.createSettingsForm = function () {
        var _this = this;
        //settings controls
        this.settingsFormControlsContainer = this._settingsSettings.controls;
        //bitcoin address controls
        this.bitcoinsFormControlsContainer = this._settingsSettings.bitcoinAddressControls;
        this._settingsSettings.controls.forEach(function (element) {
            _this.errorHandler[element.key] = '';
        });
        this._settingsSettings.controls.forEach(function (element) {
            _this.handlerEvent[element.key] = { 'required': 'Required', 'tab': 'tab-settings' };
        });
        //initialize form
        this.settingsForm = this.formControlService.toControlGroup(this.settingsFormControlsContainer);
        this.bitcoinAddressForm = this.formControlService.toControlGroup(this.bitcoinsFormControlsContainer);
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.loadSettingsValues();
        //this.createSettingsForm();
        //initialize layout of personal details
        // this.initializeLayout();
        //bind valud to the form
        //this.bindUserSettingsValueInToForm();
    };
    /**
   * Bind Settings to the form
   */
    SettingsComponent.prototype.bindUserSettingsValueInToForm = function () {
        var _this = this;
        if (this.userSettingInformationContainer != null) {
            var keys = Object.keys(this.userSettingInformationContainer);
            keys.forEach(function (element) {
                _this.settingsForm.controls[element.toLocaleLowerCase()].setValue(_this.userSettingInformationContainer[element]);
            });
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/main/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/settings/settings.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_application_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_6__services_formcontrol_form_control_service__["a" /* FormControlService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/transactions/services/transactions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionsService = /** @class */ (function () {
    function TransactionsService() {
    }
    TransactionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TransactionsService);
    return TransactionsService;
}());



/***/ }),

/***/ "../../../../../src/app/main/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <!-- information about transactions-->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/transactions/transactions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("../../../../../src/app/main/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/transactions/transactions.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/user-overview/user-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-overview works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/main/user-overview/user-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/user-overview/user-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserOverviewComponent = /** @class */ (function () {
    function UserOverviewComponent() {
    }
    UserOverviewComponent.prototype.ngOnInit = function () {
    };
    UserOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-overview',
            template: __webpack_require__("../../../../../src/app/main/user-overview/user-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/user-overview/user-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserOverviewComponent);
    return UserOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mat-help/mat-help.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatHelpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__ = __webpack_require__("../../../cdk/esm5/platform.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MatHelpModule = /** @class */ (function () {
    function MatHelpModule() {
    }
    MatHelpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["f" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_portal__["g" /* PortalModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_layout__["c" /* LayoutModule */],
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_cdk_bidi__["a" /* BidiModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_cdk_observers__["a" /* ObserversModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["f" /* OverlayModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_platform__["b" /* PlatformModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_portal__["g" /* PortalModule */],
            ]
        })
    ], MatHelpModule);
    return MatHelpModule;
}());



/***/ }),

/***/ "../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-content{\r\n    background-color: transparent;\r\n    border-radius: 0;\r\n    background-clip: content-box;\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSpinningBarModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginSpinningBarModalComponent = /** @class */ (function () {
    function LoginSpinningBarModalComponent() {
    }
    LoginSpinningBarModalComponent.prototype.ngOnInit = function () {
    };
    LoginSpinningBarModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-spinning-bar-modal',
            template: __webpack_require__("../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LoginSpinningBarModalComponent);
    return LoginSpinningBarModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/contianers.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContianersPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContianersPipe = /** @class */ (function () {
    function ContianersPipe() {
    }
    ContianersPipe.prototype.transform = function (value, args) {
        return null;
    };
    ContianersPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'contianerspipe'
        })
    ], ContianersPipe);
    return ContianersPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contianers_pipe__ = __webpack_require__("../../../../../src/app/pipes/contianers.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__contianers_pipe__["a" /* ContianersPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contianers_pipe__["a" /* ContianersPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* unused harmony export slideToRight */
/* unused harmony export slideToLeft */
/* unused harmony export slideToBottom */
/* unused harmony export slideToTop */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({})),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "../../../../../src/app/services/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/services/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

var AccountService = /** @class */ (function () {
    function AccountService(http, authTokens, utilityService, dateService, appService, settingService) {
        this.http = http;
        this.authTokens = authTokens;
        this.utilityService = utilityService;
        this.dateService = dateService;
        this.appService = appService;
        this.settingService = settingService;
    }
    AccountService.prototype.register = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__constants_url__["h" /* REGISTER */], data, options)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(res.json()); })
            .do(function (res) { console.log('User created ' + res); });
    };
    AccountService.prototype.login = function (user) {
        return this.authTokens.getTokens(user, 'password')
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(res); })
            .do(function (res) { });
    };
    AccountService.prototype.logout = function () {
        this.authTokens.deleteTokens();
        this.authTokens.unsubscribeRefresh();
        this.appService.expirationDate$.next('');
        this.appService.showTImeoutMessage$.next(false);
        //check if user was logged internally or using AAD
        if (this.settingService.isInternalLogin) {
        }
        else {
        }
        this.utilityService.navigateToSignIn();
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__auth_token_auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_2__utility_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__application_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_8__settings_settings_service__["a" /* SettingsService */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/services/app-settings/app-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSettingsService = /** @class */ (function () {
    function AppSettingsService(dataService) {
        this.dataService = dataService;
    }
    AppSettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */]])
    ], AppSettingsService);
    return AppSettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/application/application.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApplicationService = /** @class */ (function () {
    function ApplicationService(dataService, _settingService) {
        this.dataService = dataService;
        this._settingService = _settingService;
        this.timeSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](Date.now().toString());
        //subscribe for open and closed side bar navigation
        this.slidenavigationbarSubject$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.expirationDate$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.showTImeoutMessage$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.expDateToken = '';
        //username getusenr
        this.userNameSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('User unknown');
        this.applicationUserInformation$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.isUserLogged = false;
        //profile of user
        this.profileUserContainer$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        //check if the user profile has been saved if yes just ignored incoming requrest
        this.isProfileUserInformationSaveInMemory = false;
        //subscribe currenty
        this.krakenCurrencySubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('Value not loaded');
        //bitcoin curren
        this.btcCurrencyInfoSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ high: 'Value not loaded', low: 'Value not loaded' });
        this.userProfileSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.tokenSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.authTokensSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.isUserloggedSubscription$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    //get currency from kraken
    ApplicationService.prototype.getKrakenCurrency = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__constants_url__["g" /* KRAKENCURRENCY */];
        return this.dataService.get(url)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(res); })
            .do(function (res) {
            if (res != null) {
                if (res.status == 200) {
                    var tempObject = JSON.parse(res._body).result;
                    _this.krakenCurrencySubscription$.next(tempObject);
                }
                if (res.status == 0) {
                    _this.krakenCurrencySubscription$.next('Value not loaded');
                }
            }
        });
    };
    ApplicationService.prototype.getAdminDummyValue = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__constants_url__["a" /* ADMIN_URL */];
        return this.dataService.get(url)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(res); })
            .do(function (res) { });
    };
    //get bitcoin currency again usd
    ApplicationService.prototype.getBTCUSDFromBitstamp = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__constants_url__["b" /* BTCSTAMPUSD */];
        return this.dataService.get(url)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(res); })
            .do(function (res) {
            if (res != null) {
                if (res.status == 200) {
                    var tempResponse = JSON.parse(res._body);
                    _this.btcCurrencyInfoSubscription$.next(tempResponse);
                }
                if (res.status == 0) {
                    _this.btcCurrencyInfoSubscription$.next('Value Not loaded');
                }
            }
        });
    };
    ApplicationService.prototype.getUpdateValue = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin([
            this.getBTCUSDFromBitstamp(),
            this.getKrakenCurrency(),
        ]);
    };
    ApplicationService.prototype.getAllValues = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin(this.getBTCUSDFromBitstamp(), this.getKrakenCurrency(), this._settingService.loadAllValuds());
    };
    //udpate user settings
    ApplicationService.prototype.updateUserSettings = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_4__constants_url__["i" /* UPDATEUSERSETTINGS */];
        return this.dataService.post(url, data)
            .catch(function (res) { return res.json(); })
            .do(function (res) { });
    };
    ApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_6__settings_settings_service__["a" /* SettingsService */]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-token/auth-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants_config__ = __webpack_require__("../../../../../src/app/constants/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_users_user_service__ = __webpack_require__("../../../../../src/app/services/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AuthTokenService = /** @class */ (function () {
    function AuthTokenService(http, applicationService, dataService, settingsService, userService) {
        this.http = http;
        this.applicationService = applicationService;
        this.dataService = dataService;
        this.settingsService = settingsService;
        this.userService = userService;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.isUserExternalLoggin = false;
        //config for post token
        this.configAPi = __WEBPACK_IMPORTED_MODULE_11__constants_config__["a" /* configTokenPost */];
    }
    AuthTokenService.prototype.getTokens = function (data, grantType) {
        var _this = this;
        // data can be any since it can either be a refresh tokens or login details
        // The request for tokens must be x-www-form-urlencoded
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Accept','application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        Object.assign(data, {
            grant_type: this.configAPi.grant_type,
            // offline_access is required for a refresh token
            scope: this.configAPi.scope,
            //client_secret: this.configAPi.client_secret,
            client_id: this.configAPi.client_id
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__constants_url__["j" /* URL_LOGIN */], this.encodeObjectToParams(data), options)
            .map(function (res) { return res.json(); })
            .flatMap(function (tokens) {
            var now = new Date();
            tokens.expiration_date = new Date(now.getTime() + (tokens.expires_in ? (tokens.expires_in * 1000) : 0)).getTime().toString();
            _this.applicationService.authTokensSubscription$.next(tokens);
            var profile = _this.jwtHelper.decodeToken(tokens.access_token);
            localStorage.setItem('auth-tokens', JSON.stringify(tokens.access_token));
            _this.applicationService.userProfileSubscription$.next(profile);
            _this.userService.userNameSubscription$.next(profile['name']);
            //save role
            _this.userService.userRoleSubscription$.next(profile.role);
            _this.applicationService.profileUserContainer$.next(profile);
            _this.applicationService.tokenSubscription$.next(tokens.access_token);
            _this.applicationService.isUserloggedSubscription$.next(true);
            //subscribe the time zone 
            _this.applicationService.expirationDate$.next(tokens.expiration_date);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(tokens);
        });
    };
    AuthTokenService.prototype.deleteTokens = function () {
        localStorage.removeItem('auth-tokens');
    };
    AuthTokenService.prototype.unsubscribeRefresh = function () {
        if (this.refreshSubscription$) {
            this.refreshSubscription$.unsubscribe();
        }
    };
    /**
     * Subscribe External Login from Azure into
     * Store
     */
    AuthTokenService.prototype.storeAzureADDTokenInStore = function (tokens) {
        this.dataService.isUserExternalLoggin = true;
        this.settingsService.isInternalLogin = false;
        //store user external login
        var profile = (tokens.profile);
        this.applicationService.profileUserContainer$.next(profile);
        this.applicationService.profileUserContainer$.next(profile);
        localStorage.setItem('auth-tokens', tokens.token);
    };
    AuthTokenService.prototype.refreshTokens = function () {
        var _this = this;
        return this.applicationService.tokenSubscription$
            .flatMap(function (tokens) {
            return _this.getTokens({ refresh_token: tokens.refresh_token }, 'refresh_token')
                .catch(function (error) {
                // let the app know that we cant refresh the token
                // which means something is invalid and they aren't logged in
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Session Expired');
            });
        });
    };
    AuthTokenService.prototype.startupTokenRefresh = function () {
        var _this = this;
        var tokensString = localStorage.getItem('auth-tokens');
        var tokensModel = tokensString === null ? null : JSON.parse(tokensString);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(tokensModel)
            .flatMap(function (tokens) {
            // check if the token is even if localStorage, if it isn't tell them it's not and return
            if (!tokens) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('No token in Storage');
            }
            _this.applicationService.authTokensSubscription$.next(tokens);
            // the "+" below is to convert "tokens.expiration_date" to a number so we can compare
            if (+tokens.expiration_date > new Date().getTime()) {
                // grab the profile out so we can store it
                var profile = _this.jwtHelper.decodeToken(tokens.id_token);
                _this.applicationService.profileUserContainer$.next(profile);
                _this.applicationService.isUserloggedSubscription$.next(true);
            }
            return _this.refreshTokens()
                .map(function () {
                _this.scheduleRefresh();
            });
        })
            .catch(function (error) {
            _this.applicationService.isUserloggedSubscription$.next(false);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AuthTokenService.prototype.scheduleRefresh = function () {
        var _this = this;
        var source = this.applicationService.tokenSubscription$
            .take(1)
            .flatMap(function (tokens) {
            // the interval is how long inbetween token refreshes
            // here we are taking half of the time it takes to expired
            // you may want to change how this time interval is calculated
            var interval = tokens.expires_in ? (tokens.expires_in / 2 * 1000) : 0;
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(interval);
        });
        this.refreshSubscription$ = source.subscribe(function () {
            _this.refreshTokens()
                .subscribe();
        });
    };
    AuthTokenService.prototype.encodeObjectToParams = function (obj) {
        return Object.keys(obj)
            .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); })
            .join('&');
    };
    AuthTokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_8__application_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_9__data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_10__settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_users_user_service__["a" /* UserService */]])
    ], AuthTokenService);
    return AuthTokenService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





;
var AuthenticationService = /** @class */ (function () {
    //constructor
    function AuthenticationService(applicationService) {
        var _this = this;
        this.applicationService = applicationService;
        this.isUserLogged = false;
        this.securityRole = "";
        this.applicationService.isUserloggedSubscription$.subscribe(function (result) {
            _this.isUserLogged = result;
        });
        this.applicationService.profileUserContainer$.subscribe(function (result) {
            _this.securityRole = result.role;
        }, function (error) { });
    }
    AuthenticationService.prototype.setUserAuthentication = function (isAuthenticated) {
        this.isUserLogged = isAuthenticated;
    };
    AuthenticationService.prototype.getSecurityRoleName = function () {
        return this.securityRole;
    };
    //check and return boolean true if user has access false if not
    AuthenticationService.prototype.checkIfTheUserHasToken = function () {
        if (typeof (this.isUserLogged) !== 'undefined') {
            if (this.isUserLogged) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__application_application_service__["a" /* ApplicationService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/business-unit/business-unit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessUnitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessUnitService = /** @class */ (function () {
    function BusinessUnitService(dataService) {
        this.dataService = dataService;
        /**
         * Hold all Business Unit
         */
        this.BusinessUnitContainerSubscription$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new Array());
    }
    BusinessUnitService.prototype.getAllBusinessUnit = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_url__["e" /* GETBUSINESSUNIT */];
        return this.dataService.get(url);
    };
    /**
     *
     */
    BusinessUnitService.prototype.getRefreshBusinessUnit = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_url__["e" /* GETBUSINESSUNIT */];
    };
    /**
   * Create Business Unit Model
   * @param model Model for VM Business Unit
   */
    BusinessUnitService.prototype.createBusinessUnit = function (model) {
        var url = __WEBPACK_IMPORTED_MODULE_3__constants_url__["c" /* CREATEBUSINESSUNIT */];
        return this.dataService.post(url, model)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error); });
    };
    BusinessUnitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service_data_service__["a" /* DataService */]])
    ], BusinessUnitService);
    return BusinessUnitService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data-service/data.service.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceOptions; });
var DataServiceOptions = /** @class */ (function () {
    function DataServiceOptions() {
        this.headers = {};
        this.params = {};
        this.data = {};
    }
    return DataServiceOptions;
}());



/***/ }),

/***/ "../../../../../src/app/services/data-service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service_options__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.options.ts");
// https://blog.sstorie.com/adapting-ben-nadels-apigateway-to-pure-typescript/
// My updates are mostly adapting it for Typescript:
//  1. Importing required modules
//  2. Adding type notations
//  3. Using the 'fat-arrow' syntax to properly scope in-line functions
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = /** @class */ (function () {
    function DataService(http, us) {
        this.http = http;
        this.us = us;
        this.isUserExternalLoggin = false;
        // Define the internal Subject we'll use to push the command count
        this.pendingCommandsSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
        this.pendingCommandCount = 0;
        this.pendingCommands$ = this.pendingCommandsSubject.asObservable();
    }
    // I perform a GET request to the API, appending the given params
    // as URL search parameters. Returns a stream.
    DataService.prototype.get = function (url, params) {
        var options = new __WEBPACK_IMPORTED_MODULE_5__data_service_options__["a" /* DataServiceOptions */]();
        options.method = __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get;
        options.url = url;
        options.params = params;
        return this.request(options);
    };
    // I perform a POST request to the API. If both the params and data
    // are present, the params will be appended as URL search parameters
    // and the data will be serialized as a JSON payload. If only the
    // data is present, it will be serialized as a JSON payload. Returns
    // a stream.
    DataService.prototype.post = function (url, data, params) {
        if (!data) {
            data = params;
            params = {};
        }
        var options = new __WEBPACK_IMPORTED_MODULE_5__data_service_options__["a" /* DataServiceOptions */]();
        options.method = __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Post;
        options.url = url;
        options.params = params;
        options.data = data;
        return this.request(options);
    };
    DataService.prototype.put = function (url, data, params) {
        if (!data) {
            data = params;
            params = {};
        }
        var options = new __WEBPACK_IMPORTED_MODULE_5__data_service_options__["a" /* DataServiceOptions */]();
        options.method = __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Put;
        options.url = url;
        options.params = params;
        options.data = data;
        return this.request(options);
    };
    DataService.prototype.delete = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_5__data_service_options__["a" /* DataServiceOptions */]();
        options.method = __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Delete;
        options.url = url;
        return this.request(options);
    };
    DataService.prototype.request = function (options) {
        var _this = this;
        options.method = (options.method || __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestMethod"].Get);
        options.url = (options.url || '');
        options.headers = (options.headers || {});
        options.params = (options.params || {});
        options.data = (options.data || {});
        this.addXsrfToken(options);
        this.addBearerHeaderToken(options);
        this.addContentType(options);
        this.addAuthToken(options);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.method = options.method;
        requestOptions.url = options.url;
        requestOptions.headers = options.headers;
        requestOptions.search = this.buildUrlSearchParams(options.params);
        requestOptions.body = JSON.stringify(options.data);
        this.pendingCommandsSubject.next(++this.pendingCommandCount);
        var stream = this.http.request(options.url, requestOptions)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        })
            .finally(function () {
            _this.pendingCommandsSubject.next(--_this.pendingCommandCount);
        });
        return stream;
    };
    DataService.prototype.addContentType = function (options) {
        // if (options.method !== RequestMethod.Get) {
        options.headers['Content-Type'] = 'application/json; charset=UTF-8';
        // }
        return options;
    };
    DataService.prototype.addAuthToken = function (options) {
        var authTokens = localStorage.getItem('auth-tokens');
        if (authTokens) {
            if (this.isUserExternalLoggin == true) {
                options.headers.Authorization = 'Bearer ' + authTokens;
            }
            else {
                // tslint:disable-next-line:whitespace
                options.headers.Authorization = 'Bearer ' + authTokens.substr(1, authTokens.length - 2);
            }
        }
        return options;
    };
    DataService.prototype.addBearerHeaderToken = function (options) {
        options.headers['Bearer'] = 'Bearer';
        return options;
    };
    DataService.prototype.extractValue = function (collection, key) {
        var value = collection[key];
        delete (collection[key]);
        return value;
    };
    DataService.prototype.addXsrfToken = function (options) {
        var xsrfToken = this.getXsrfCookie();
        if (xsrfToken) {
            options.headers['X-XSRF-TOKEN'] = xsrfToken;
        }
        return options;
    };
    DataService.prototype.getXsrfCookie = function () {
        var matches = document.cookie.match(/\bXSRF-TOKEN=([^\s;]+)/);
        try {
            return matches ? decodeURIComponent(matches[1]) : '';
        }
        catch (decodeError) {
            return '';
        }
    };
    // private addCors(options: DataServiceOptions): DataServiceOptions {
    //     options.headers['Access-Control-Allow-Origin'] = '*';
    //     return options;
    // }
    DataService.prototype.buildUrlSearchParams = function (params) {
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                searchParams.append(key, params[key]);
            }
        }
        return searchParams;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_4__utility_utility_service__["a" /* UtilityService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dialogModal/dialogModal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_loadingbar_loadingbar_component__ = __webpack_require__("../../../../../src/app/shared/loadingbar/loadingbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_message_form_message_form_component__ = __webpack_require__("../../../../../src/app/shared/message-form/message-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogAppService = /** @class */ (function () {
    function DialogAppService(dialog, utilityService, snackBar) {
        this.dialog = dialog;
        this.utilityService = utilityService;
        this.snackBar = snackBar;
    }
    DialogAppService.prototype.openDialog = function () {
        this.dialogref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__shared_loadingbar_loadingbar_component__["a" /* LoadingbarComponent */], {
            width: '250px',
            data: ''
        });
    };
    DialogAppService.prototype.openMessageDialog = function () {
        this.messageDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_message_form_message_form_component__["a" /* MessageFormComponent */], {
            width: '250px',
            data: ''
        });
    };
    /**
     * Open Snack Bar
     * @param text Test to be display
     */
    DialogAppService.prototype.openSnackBar = function (text) {
        this.snackBar.open(text, "Close", {
            duration: 20000,
            verticalPosition: this.snackVertical,
        });
    };
    /**
     *
     * @param url Close dialog
     */
    DialogAppService.prototype.closedDialog = function (url) {
        //close dialog
        this.dialog.closeAll();
        if (url != '') {
            this.utilityService.navigate(url);
        }
    };
    DialogAppService.prototype.closedMessageDialog = function (url) {
        this.dialog.closeAll();
    };
    DialogAppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__utility_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBar */]])
    ], DialogAppService);
    return DialogAppService;
}());



/***/ }),

/***/ "../../../../../src/app/services/formcontrol/form-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormControlService = /** @class */ (function () {
    function FormControlService() {
    }
    FormControlService.prototype.toControlGroup = function (controls) {
        //Group Controls
        var group_control = {};
        controls.forEach(function (control) {
            var validators = [];
            //Required
            if (control.required) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required);
            }
            //MinLength
            if (control.minlength) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(control.minlength));
            }
            //MaxLength
            if (control.maxlength) {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(control.maxlength));
            }
            //Email
            if (control.type == 'email') {
            }
            //Password
            if (control.type == 'password') {
            }
            group_control[control.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](control.value || '', validators);
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group_control);
    };
    FormControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FormControlService);
    return FormControlService;
}());



/***/ }),

/***/ "../../../../../src/app/services/forms/form-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormService = /** @class */ (function () {
    function FormService() {
    }
    FormService.prototype.toControlGroup = function (controls) {
        var group = {};
        controls.forEach(function (control) {
            group[control.key] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](control.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group);
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/app/services/heroes/heroes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroesService = /** @class */ (function () {
    function HeroesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.userUrl = 'api/users';
    }
    HeroesService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroesService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroesService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroesService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroesService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroesService.prototype.getUsers = function () {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/heroes/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemHeroService; });
var InMemHeroService = /** @class */ (function () {
    function InMemHeroService() {
    }
    InMemHeroService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' },
            { id: 21, name: 'Dynama' },
            { id: 22, name: 'Dr IQ' },
            { id: 23, name: 'Magma' },
            { id: 24, name: 'Sivak' }
        ];
        var users = [
            { username: 'test', password: 'Password' }
        ];
        var token = {
            "access_token": "fdkljaldkfjlajsfdlksd",
            "refresh_token": "43",
            "id_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NfdG9rZW4iOiJmZGtsamFsZGtmamxhanNmZGxrc2QiLCJyZWZyZXNoX3Rva2VuIjoiNDMiLCJpZF90b2tlbiI6IjEyNjU0ZnNkZnNhZGZzYWRmc2QiLCJleHBpcmVzX2luIjoiMjAxNzAyMDIiLCJ0b2tlbl90eXBlIjoiand0IiwiZXhwaXJhdGlvbl9kYXRlIjoiMjAxODAyMDIiLCJqdGkiOiJkY2ZkODIyZC01Y2IzLTQ1OTgtODM5OS1kZWU4NGQzNDkzODYiLCJpYXQiOjE0OTI0MzI0NzQsImV4cCI6MTQ5MjQzNjA3NH0.E9TgiDhfkp-_2RM9ply7iEFijL57LAmz_wbve3kOvqY",
            "expires_in": "20170202",
            "token_type": "jwt",
            "expiration_date": "20180202",
            "jti": "dcfd822d-5cb3-4598-8399-dee84d349386",
            "iat": 1492432474,
            "exp": 1492436074
        };
        return { heroes: heroes, users: users, token: token };
    };
    return InMemHeroService;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/heroes/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_service__ = __webpack_require__("../../../../../src/app/services/heroes/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_token_auth_token_service__ = __webpack_require__("../../../../../src/app/services/auth-token/auth-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_service__ = __webpack_require__("../../../../../src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forms_form_control_service__ = __webpack_require__("../../../../../src/app/services/forms/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transaction_transaction_service__ = __webpack_require__("../../../../../src/app/services/transaction/transaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_dashboard_services_dashboard_service__ = __webpack_require__("../../../../../src/app/main/dashboard/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_transactions_services_transactions_service__ = __webpack_require__("../../../../../src/app/main/transactions/services/transactions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialogModal_dialogModal_service__ = __webpack_require__("../../../../../src/app/services/dialogModal/dialogModal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_user_service__ = __webpack_require__("../../../../../src/app/services/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/app-settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__business_unit_business_unit_service__ = __webpack_require__("../../../../../src/app/services/business-unit/business-unit.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule_1 = ServicesModule;
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__formcontrol_form_control_service__["a" /* FormControlService */],
                __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_service__["a" /* HeroesService */],
                __WEBPACK_IMPORTED_MODULE_3__heroes_in_memory_data_service__["a" /* InMemHeroService */],
                __WEBPACK_IMPORTED_MODULE_9__forms_form_control_service__["a" /* FormService */],
                __WEBPACK_IMPORTED_MODULE_5__auth_token_auth_token_service__["a" /* AuthTokenService */],
                __WEBPACK_IMPORTED_MODULE_6__utility_utility_service__["a" /* UtilityService */],
                __WEBPACK_IMPORTED_MODULE_20__app_settings_app_settings_service__["a" /* AppSettingsService */],
                __WEBPACK_IMPORTED_MODULE_13__main_dashboard_services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_14__settings_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_15__main_transactions_services_transactions_service__["a" /* TransactionsService */],
                __WEBPACK_IMPORTED_MODULE_8__account_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_19__guards_admin_guard__["a" /* AdminGuardGuard */],
                __WEBPACK_IMPORTED_MODULE_7__guards_authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_21__business_unit_business_unit_service__["a" /* BusinessUnitService */],
                __WEBPACK_IMPORTED_MODULE_17__dialogModal_dialogModal_service__["a" /* DialogAppService */],
                __WEBPACK_IMPORTED_MODULE_10__data_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_11__transaction_transaction_service__["a" /* TransactionService */],
                __WEBPACK_IMPORTED_MODULE_12__application_application_service__["a" /* ApplicationService */],
                __WEBPACK_IMPORTED_MODULE_18__users_user_service__["a" /* UserService */]
            ]
        };
    };
    ServicesModule = ServicesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]]
        })
    ], ServicesModule);
    return ServicesModule;
    var ServicesModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__ = __webpack_require__("../../../../../src/app/shared/forms/control-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsService = /** @class */ (function () {
    function SettingsService(_dateService) {
        this._dateService = _dateService;
        this.isInternalLogin = true;
        this.initializeControls();
    }
    /**
     * Initialize Controls for Setting Form
     */
    SettingsService.prototype.initializeControls = function () {
        this.controls = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'username',
                label: 'Username',
                placeholder: 'Username',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-md-2 col-form-label',
                labelclass: 'form-control',
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'firstname',
                label: 'First Name',
                placeholder: 'First Name',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-md-2 col-form-label',
                labelclass: 'form-control',
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'lastname',
                label: 'Last Name',
                placeholder: 'Last Name',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-md-2 col-form-label',
                labelclass: 'form-control',
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                class: 'col-md-2 col-form-label',
                labelclass: 'form-control',
                order: 4
            }),
        ];
    };
    SettingsService.prototype.initializeBitCoinWalletControls = function () {
        this.bitcoinAddressControls = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_forms_control_textbox__["a" /* ControlTextbox */]({
                key: 'encryptpassword',
                label: 'Private Encrypted Key Hash',
                placeholder: 'Key Hash',
                value: '',
                type: 'textbox',
                required: true,
                class: 'col-md-2 col-form-label',
                labelclass: 'form-control',
                order: 1
            }),
        ];
    };
    /**
     * Get UserInformation Settings
     */
    SettingsService.prototype.getUserInformationSettings = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_url__["f" /* GETUSERSETTINGINFORMATION */];
        return this._dateService.get(url)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(res); });
    };
    /**
     * Load All Valus for Settings
     */
    SettingsService.prototype.loadAllValuds = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([]);
    };
    SettingsService.prototype.createNewBitcoinAddress = function (model) {
        var url = __WEBPACK_IMPORTED_MODULE_2__constants_url__["d" /* CREATENEWBITCOINADDRESS */];
        return this._dateService.post(url, model)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(res); });
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service_data_service__["a" /* DataService */]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/transaction/transaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__("../../../../../src/app/services/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_url__ = __webpack_require__("../../../../../src/app/constants/url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionService = /** @class */ (function () {
    function TransactionService(dataService) {
        this.dataService = dataService;
    }
    TransactionService.prototype.do = function () {
        return this.dataService.get(__WEBPACK_IMPORTED_MODULE_2__constants_url__["a" /* ADMIN_URL */]);
    };
    TransactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(appService) {
        this.appService = appService;
        //User Role
        this.userRoleSubscription$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
        this.userNameSubscription$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('');
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__application_application_service__["a" /* ApplicationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/utility/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilityService = /** @class */ (function () {
    function UtilityService(router) {
        this._router = router;
    }
    UtilityService.prototype.convertDateTime = function (date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    };
    UtilityService.prototype.navigate = function (path) {
        this._router.navigate([path]);
    };
    UtilityService.prototype.navigateToSignIn = function () {
        this.navigate('/login');
    };
    UtilityService.prototype.getParams = function () {
        var searchParams = window.location.search.split('?')[1];
        if (searchParams) {
            var paramsObj_1 = {};
            searchParams.split('&').forEach(function (i) {
                paramsObj_1[i.split('=')[0]] = i.split('=')[1];
            });
            return paramsObj_1;
        }
        return undefined;
    };
    UtilityService.prototype.readableColumnName = function (columnName) {
        // Convert underscores to spaces
        if (typeof (columnName) === 'undefined' || columnName === undefined || columnName === null) {
            return columnName;
        }
        if (typeof (columnName) !== 'string') {
            columnName = String(columnName);
        }
        return columnName.replace(/_+/g, ' ')
            .replace(/^[A-Z]+$/, function (match) {
            return ((match.charAt(0)).toUpperCase() + match.slice(1)).toLowerCase();
        })
            .replace(/([\w\u00C0-\u017F]+)/g, function (match) {
            return (match.charAt(0)).toUpperCase() + match.slice(1);
        })
            .replace(/(\w+?(?=[A-Z]))/g, '$1 ');
    };
    UtilityService.prototype.loadStyle = function (link) {
        if (this.isLoadedStyle(link)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('');
        }
        else {
            var head = document.getElementsByTagName('head')[0];
            // Load jquery Ui
            var styleNode = document.createElement('link');
            styleNode.rel = 'stylesheet';
            styleNode.type = 'text/css';
            styleNode.href = link;
            styleNode.media = 'all';
            head.appendChild(styleNode);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(styleNode, 'load');
        }
    };
    UtilityService.prototype.loadScript = function (script) {
        if (this.isLoadedScript(script)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of('');
        }
        else {
            var head = document.getElementsByTagName('head')[0];
            // Load jquery Ui
            var scriptNode = document.createElement('script');
            scriptNode.src = script;
            scriptNode.async = false;
            // scriptNode.type = 'text/javascript';
            // scriptNode.charset = 'utf-8';
            head.insertBefore(scriptNode, head.firstChild);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(scriptNode, 'load');
        }
    };
    // Detect if library loaded
    UtilityService.prototype.isLoadedScript = function (lib) {
        return document.querySelectorAll('[src="' + lib + '"]').length > 0;
    };
    UtilityService.prototype.isLoadedStyle = function (lib) {
        return document.querySelectorAll('[href="' + lib + '"]').length > 0;
    };
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/dnd.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DndDirective = /** @class */ (function () {
    function DndDirective() {
        this.background = '#eee';
        this.filesChangeEmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.allowed_extensions = [];
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#999';
        console.log('fsdf');
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        console.log('fsdf');
    };
    DndDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var file = evt.dataTransfer.files;
        var valid_files = [];
        if (file.length > 0) {
            if (file[0].size > 5000000) {
                window.alert("The file is over 5MB" + file[0].size);
            }
            this.background = '#eee';
            console.log('fsdf');
            var ext_1 = file[0].name.split('.')[file[0].name.split('.').length - 1];
            this.allowed_extensions.forEach(function (element) {
                if (ext_1 === element) {
                    valid_files.push(file);
                }
            });
            this.filesChangeEmiter.emit(valid_files);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.background'),
        __metadata("design:type", Object)
    ], DndDirective.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DndDirective.prototype, "filesChangeEmiter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DndDirective.prototype, "allowed_extensions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDrop", null);
    DndDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDnd]'
        }),
        __metadata("design:paramtypes", [])
    ], DndDirective);
    return DndDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer class=\"footer\">\n   \n  </footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/control-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlBase; });
var ControlBase = /** @class */ (function () {
    function ControlBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.minlength = options.minlength;
        this.maxlength = options.maxlength;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.class = options.class || '';
        this.labelclass = options.labelclass || '';
        this.icon = options.icon || '';
    }
    return ControlBase;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/control-textbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlTextbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control_base__ = __webpack_require__("../../../../../src/app/shared/forms/control-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ControlTextbox = /** @class */ (function (_super) {
    __extends(ControlTextbox, _super);
    function ControlTextbox(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.type = options.type || 'textbox';
        return _this;
    }
    return ControlTextbox;
}(__WEBPACK_IMPORTED_MODULE_0__control_base__["a" /* ControlBase */]));



/***/ }),

/***/ "../../../../../src/app/shared/forms/dynamic-form-control.component.html":
/***/ (function(module, exports) {

module.exports = "<!--tslint:disabled-->\r\n<div #f=\"ngForm\" [formGroup]=\"form\" [ngSwitch]=\"control.type\" class=\"form-group {{control.class}}\" [class.has-danger]=\"invalid\"\r\n  [class.has-success]=\"valid\" [class.form-check]=\"control.type === 'checkbox'\">\r\n\r\n  <label *ngSwitchCase=\"'dropdown'\" [attr.for]=\"control.key\" class=\"col-form-label\">{{control.label}}</label>\r\n  <select *ngSwitchCase=\"'dropdown'\" [id]=\"control.key\" [formControlName]=\"control.key\" [class.form-control-success]=\"valid\"\r\n    [class.form-control-danger]=\"invalid\" class=\"form-control\">\r\n            <option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n    </select>\r\n\r\n  <label *ngSwitchCase=\"'checkbox'\" [attr.for]=\"control.key\" class=\"form-check-label\">\r\n              <input #ck *ngSwitchCase=\"'checkbox'\" (change)=\"control.value = ck.checked\" [id]=\"control.key\" [formControlName]=\"control.key\"\r\n               [type]=\"control.type\" class=\"form-check-input\" >\r\n               {{control.label}}\r\n          </label>\r\n\r\n  <!-- This is not the switch case because of multiple contorl types -->\r\n  <label *ngIf=\"control.type === 'textbox' || control.type ==='email' || control.type ==='password'\" [attr.for]=\"control.key\"\r\n    class=\"col-form-label\">{{control.label}}</label>\r\n  <input *ngIf=\"control.type === 'textbox' || control.type ==='email' || control.type ==='password'\" [attr.for]=\"control.key\"\r\n    class=\"col-form-label\" [placeholder]=\"control.placeholder\" [class.form-control-success]=\"valid\" [class.form-control-danger]=\"invalid\"\r\n    class=\"form-control\">\r\n\r\n  <app-control-error-message [form]=\"f\" [control]=\"control\"></app-control-error-message>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/forms/dynamic-form-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_base__ = __webpack_require__("../../../../../src/app/shared/forms/control-base.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormControlComponent = /** @class */ (function () {
    function DynamicFormControlComponent() {
    }
    Object.defineProperty(DynamicFormControlComponent.prototype, "valid", {
        get: function () {
            return this.form.controls[this.control.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormControlComponent.prototype, "invalid", {
        get: function () {
            return !this.form.controls[this.control.key].valid && this.form.controls[this.control.key].touched;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__control_base__["a" /* ControlBase */])
    ], DynamicFormControlComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */])
    ], DynamicFormControlComponent.prototype, "form", void 0);
    DynamicFormControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-control',
            template: __webpack_require__("../../../../../src/app/shared/forms/dynamic-form-control.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormControlComponent);
    return DynamicFormControlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"{{formClass}}\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" role=\"form\">\r\n    <app-dynamic-control *ngFor=\"let ctrl of controls\" [control]=\"ctrl\" [form]=\"form\" ></app-dynamic-control>\r\n\r\n    <!-- Button -->\r\n    <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"form.valid\">{{btnText}}</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/shared/forms/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_formcontrol_form_control_service__ = __webpack_require__("../../../../../src/app/services/formcontrol/form-control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(_controlService) {
        this._controlService = _controlService;
        //variable
        this.controls = [];
        this.btnText = 'Login'; //Default value at least
        this.formClass = 'form-horizontal';
        this.formSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    //on Init
    DynamicFormComponent.prototype.ngOnInit = function () {
        var sortedControls = this.controls.sort(function (a, b) { return a.order - b.order; });
        this.form = this._controlService.toControlGroup(sortedControls);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.formSubmit.emit(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "controls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "btnText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "formClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "formSubmit", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__("../../../../../src/app/shared/forms/dynamic-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_formcontrol_form_control_service__["a" /* FormControlService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/error-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_base__ = __webpack_require__("../../../../../src/app/shared/forms/control-base.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    Object.defineProperty(ErrorMessageComponent.prototype, "errorMessage", {
        get: function () {
            var c = this.form.form.get(this.control.key);
            for (var propertyName in c.errors) {
                if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__control_base__["a" /* ControlBase */])
    ], ErrorMessageComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroupDirective */])
    ], ErrorMessageComponent.prototype, "form", void 0);
    ErrorMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control-error-message',
            template: "<div *ngIf=\"errorMessage\" class=\"form-control-feedback\">{{errorMessage}}</div>"
        })
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/forms/error-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" *ngIf=\"errors?.length > 0\">\r\n    <div *ngFor=\"let error of errors\">\r\n        {{error}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/forms/error-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorSummaryComponent = /** @class */ (function () {
    function ErrorSummaryComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ErrorSummaryComponent.prototype, "errors", void 0);
    ErrorSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-summary',
            template: __webpack_require__("../../../../../src/app/shared/forms/error-summary.component.html")
        })
    ], ErrorSummaryComponent);
    return ErrorSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header-admin/header-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n        <button mat-icon-button (click)=\"this.openSideBar()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n        \r\n        <h1>BTC Buddy</h1>\r\n        <span class=\"example-spacer\"></span>\r\n        <span>Welcome {{this.username}}</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <span>{{this.dateTimeValue | date: 'medium'}}</span>\r\n       <!--<button mat-icon-button (click)=\"toggleFullscreen()\" title=\"Toggle fullscreen\">\r\n           <mat-icon>fullscreen</mat-icon>\r\n        </button>-->\r\n        <button mat-button (click)=\"toggleTheme()\">{{dark ? 'Light' : 'Dark'}} theme</button>\r\n             \r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>person</mat-icon>\r\n          </button>\r\n          <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item>\r\n              <mat-icon>dialpad</mat-icon>\r\n              <span>Redial</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"settings()\">\r\n              <mat-icon>settings</mat-icon>\r\n              <span>User Settings</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"logout()\">\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span>Logout</span>\r\n            </button>          \r\n          </mat-menu>\r\n        \r\n      </mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/shared/header-admin/header-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".topnav {\n  border-radius: 0;\n  background-color: #222;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n    .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #222 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header-admin/header-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_account_service__ = __webpack_require__("../../../../../src/app/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_application_application_service__ = __webpack_require__("../../../../../src/app/services/application/application.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_users_user_service__ = __webpack_require__("../../../../../src/app/services/users/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HeaderAdminComponent = /** @class */ (function () {
    function HeaderAdminComponent(_accountService, _applicationService, cd, router, _element, _renderer, _overlayContainer, _userService) {
        var _this = this;
        this._accountService = _accountService;
        this._applicationService = _applicationService;
        this.cd = cd;
        this.router = router;
        this._element = _element;
        this._renderer = _renderer;
        this._overlayContainer = _overlayContainer;
        this._userService = _userService;
        this.dark = false;
        this.toogleSideBar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.shorOrHide = false;
        this.timerSubscription$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].timer(1000, 1000);
        this.timer$ = this.timerSubscription$.subscribe(function (res) {
            var date = new Date(Date.now());
            _this.dateTimeValue = date;
            _this.cd.markForCheck();
        });
        this.roleSubscription$ = this._userService.userRoleSubscription$.subscribe(function (res) { _this.roleUserName = res; });
        this.profileSubscribe$ = this._applicationService.profileUserContainer$.subscribe(function (result) {
            if (result != null) {
                _this.username = result.email;
            }
        }, function (error) { });
        this.userNameSubscription$ = this._userService.userNameSubscription$.subscribe(function (res) {
            _this.username = res;
        }, function (error) {
        });
    }
    HeaderAdminComponent.prototype.ngOnInit = function () {
        this._applicationService.slidenavigationbarSubject$.next(false);
    };
    HeaderAdminComponent.prototype.ngOnDestroy = function () {
        this.profileSubscribe$.unsubscribe();
        this.timer$.unsubscribe();
        this.roleSubscription$.unsubscribe();
        this.userNameSubscription$.unsubscribe();
    };
    HeaderAdminComponent.prototype.logout = function () {
        this._accountService.logout();
    };
    HeaderAdminComponent.prototype.openSideBar = function () {
        this.toogleSideBar.emit(true);
    };
    HeaderAdminComponent.prototype.settings = function () {
        this.router.navigate(['/settings']);
    };
    HeaderAdminComponent.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    HeaderAdminComponent.prototype.toggleTheme = function () {
        var darkThemeClass = 'unicorn-dark-theme';
        this.dark = !this.dark;
        if (this.dark) {
            this._renderer.addClass(this._element.nativeElement, darkThemeClass);
            this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, darkThemeClass);
            this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("toggleSideBar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HeaderAdminComponent.prototype, "toogleSideBar", void 0);
    HeaderAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-admin',
            template: __webpack_require__("../../../../../src/app/shared/header-admin/header-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header-admin/header-admin.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__services_application_application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["e" /* OverlayContainer */],
            __WEBPACK_IMPORTED_MODULE_6__services_users_user_service__["a" /* UserService */]])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/loadingbar/loadingbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loadingbar/loadingbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/shared/loadingbar/loadingbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LoadingbarComponent = /** @class */ (function () {
    function LoadingbarComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    LoadingbarComponent.prototype.ngOnInit = function () {
    };
    LoadingbarComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoadingbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loadingbar',
            template: __webpack_require__("../../../../../src/app/shared/loadingbar/loadingbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/loadingbar/loadingbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], LoadingbarComponent);
    return LoadingbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/message-form/message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "../../../../../src/app/shared/message-form/message-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/message-form/message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-form',
            template: __webpack_require__("../../../../../src/app/shared/message-form/message-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/message-form/message-form.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar-admin/navbar-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <ul class=\"list-group\">\n        <a routerLink=\"/main/dashboards\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{'dashboard'}}\n        </a>\n        <a [routerLink]=\"['/transactions']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'transactions'   }}\n        </a>\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'tables'   }}\n        </a>\n      <!-- <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'forms'   }}\n        </a>\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'boostrapElement'   }}\n        </a>\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'boostrapGrid'   }}\n        </a>\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;{{ 'component'   }}\n        </a>\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\n                <span><i class=\"fa fa-plus\"></i>&nbsp; {{ 'menu'   }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'submenu'   }}</span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'submenu'   }}</span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><span>{{ 'submenu'   }}</span></a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;{{ 'blankpage'   }}\n        </a>\n        <a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\" >\n            {{ 'moretheme'   }}\n        </a>-->\n    </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar-admin/navbar-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 55px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n    .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar-admin/navbar-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarAdminComponent = /** @class */ (function () {
    function NavbarAdminComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    NavbarAdminComponent.prototype.ngOnInit = function () {
    };
    NavbarAdminComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    NavbarAdminComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    NavbarAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar-admin',
            template: __webpack_require__("../../../../../src/app/shared/navbar-admin/navbar-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar-admin/navbar-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarAdminComponent);
    return NavbarAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_dynamic_form_control_component__ = __webpack_require__("../../../../../src/app/shared/forms/dynamic-form-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_dynamic_form_component__ = __webpack_require__("../../../../../src/app/shared/forms/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_error_message_component__ = __webpack_require__("../../../../../src/app/shared/forms/error-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_error_summary_component__ = __webpack_require__("../../../../../src/app/shared/forms/error-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_admin_header_admin_component__ = __webpack_require__("../../../../../src/app/shared/header-admin/header-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_admin_navbar_admin_component__ = __webpack_require__("../../../../../src/app/shared/navbar-admin/navbar-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__uploadfile_uploadfile_component__ = __webpack_require__("../../../../../src/app/shared/uploadfile/uploadfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_dnd_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dnd.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loadingbar_loadingbar_component__ = __webpack_require__("../../../../../src/app/shared/loadingbar/loadingbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modals_login_spinning_bar_modal_login_spinning_bar_modal_component__ = __webpack_require__("../../../../../src/app/modals/login-spinning-bar-modal/login-spinning-bar-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mat_help_mat_help_module__ = __webpack_require__("../../../../../src/app/mat-help/mat-help.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__message_form_message_form_component__ = __webpack_require__("../../../../../src/app/shared/message-form/message-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["JsonpModule"],
                __WEBPACK_IMPORTED_MODULE_16__mat_help_mat_help_module__["a" /* MatHelpModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__forms_dynamic_form_control_component__["a" /* DynamicFormControlComponent */],
                __WEBPACK_IMPORTED_MODULE_6__forms_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__forms_error_message_component__["a" /* ErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__forms_error_summary_component__["a" /* ErrorSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_admin_header_admin_component__["a" /* HeaderAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_admin_navbar_admin_component__["a" /* NavbarAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_11__uploadfile_uploadfile_component__["a" /* UploadfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__message_form_message_form_component__["a" /* MessageFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_dnd_directive__["a" /* DndDirective */],
                __WEBPACK_IMPORTED_MODULE_13__loadingbar_loadingbar_component__["a" /* LoadingbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__modals_login_spinning_bar_modal_login_spinning_bar_modal_component__["a" /* LoginSpinningBarModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__forms_dynamic_form_control_component__["a" /* DynamicFormControlComponent */],
                __WEBPACK_IMPORTED_MODULE_6__forms_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__forms_error_message_component__["a" /* ErrorMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__forms_error_summary_component__["a" /* ErrorSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__message_form_message_form_component__["a" /* MessageFormComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__header_admin_header_admin_component__["a" /* HeaderAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_admin_navbar_admin_component__["a" /* NavbarAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_11__uploadfile_uploadfile_component__["a" /* UploadfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_dnd_directive__["a" /* DndDirective */],
                __WEBPACK_IMPORTED_MODULE_15__modals_login_spinning_bar_modal_login_spinning_bar_modal_component__["a" /* LoginSpinningBarModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__loadingbar_loadingbar_component__["a" /* LoadingbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/uploadfile/uploadfile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropzone {\r\n  min-height: 400px;\r\n  min-width: 400px;\r\n  display: table;\r\n  width: 100%;\r\n  background-color: #eee;\r\n  border: dotted 1px #aaa;\r\n}\r\n\r\n.text-wrapper {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.centered {\r\n  font-family: sans-serif;\r\n  font-size: 1.3em;\r\n  font-weight: bold;\r\n  text-align:center;\r\n}\r\n\r\n.dropzone-list > ul {\r\n  width: 30%;\r\n  list-style: none;\r\n}\r\n.dropzone-list > ul > li:before {\r\n  content : '+';\r\n  color: #6def9a;\r\n}\r\n.dropzone-list > ul > li {\r\n  border: 1px solid black;\r\n  padding-bottom: 5px;\r\n  padding-left: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/uploadfile/uploadfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropzone\" appDnd (filesChangeEmiter)=\"onFilesChange($event)\" [allowed_extensions]=\"['png', 'jpg', 'bmp']\">\n  <div class=\"text-wrapper\">\n    <div class=\"centered\">Drop your file here!</div>\n  </div>\n</div>\n\n<div class=\"dropzone-list\">\n  <ul>\n    <li *ngFor=\"let file of fileList\">\n      {{ file.name }}\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/uploadfile/uploadfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadfileComponent = /** @class */ (function () {
    function UploadfileComponent() {
        this.fileList = [];
    }
    UploadfileComponent.prototype.ngOnInit = function () {
    };
    UploadfileComponent.prototype.onFilesChange = function (fileList) {
        // do stuff here
        console.log(fileList);
        this.fileList = fileList;
    };
    UploadfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uploadfile',
            template: __webpack_require__("../../../../../src/app/shared/uploadfile/uploadfile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/uploadfile/uploadfile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadfileComponent);
    return UploadfileComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    envName: "staging",
    identityUrl: 'http://appbuddiesidentity.azurewebsites.net/',
    appresource1Url: 'http://appbuddiesidentity.azurewebsites.net/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_vendor_css__ = __webpack_require__("../../../../../src/styles/vendor.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_vendor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_vendor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_scan__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);

















/*
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);*/
Object(__WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_15__app_app_module__["a" /* AppModule */]).then(function (ref) {
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/













/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "../../../../../src/styles/vendor.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles/vendor.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/index.js??postcss!./vendor.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--7-1!../../node_modules/postcss-loader/index.js??postcss!./vendor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles/vendor.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map