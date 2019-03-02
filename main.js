(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    font-weight: bold;\r\n}\r\n\r\n.jobDesc {\r\n    margin: 30px;\r\n    padding: 10px;\r\n    background-color: rgb(245, 245, 245);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxxQ0FBcUM7Q0FDeEMiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmpvYkRlc2Mge1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Who am I?</h1>\n\n<p class=\"lead\">\n    My goal is to become a fullstack developer, profficient in .Net Core technologies and Angular on the front end.\n    I got into programming through curiosity and began with C#, then moved on to web development and still continuously \n    explore other areas of computer science and coding as both a hobby and for self-development.\n</p>\n<p class=\"lead\">\n    Technology is not my only interest however, I finished university with a degree in Music Production and still today\n    spend time playing instruments (mostly the guitar and piano) and producing backing tracks to improvise over.\n</p>\n\n<h1>Work</h1>\n\n<div class=\"jobDesc\">\n    <h4><b>Health Informatics Programme Admin</b></h4>\n    <span><b>Blackpool Victoria Hospital</b></span>\n    <p><b>September 2018 – Present</b></p>\n    <p>\n        In this role I manage proposals for new services, software and suppliers by collecting all the necessary details and presenting it to senior managers within the trust. This involves looking at the advantages of bringing in the proposal, what resources will be required, how in-depth a data protection impact assessment must be, finding better solutions etc.<br>\n        Another part of my role is to set up meetings for the project managers and external companies we are contracted to, take minutes and help test software during it's pilot/upgrade.\n        Finally I am responsible for the team's SharePoint website, which I have designed with the feedback of my peers; aiming to fit the needs of my team and be as efficient as possible.\n    </p>\n</div>\n\n<div class=\"jobDesc\">\n    <h4><b>Information Governance Officer</b></h4>\n    <span><b>Blackpool Victoria Hospital</b></span>\n    <p><b>August 2017 – August 2018</b></p>\n    <p>\n        My main priorities in this role involved auditing the hospital wards and offices, discovering any possible risks/data breaches, advising staff members on any issues concerning data protection, handling Freedom of Information requests and publication to the trust's disclosure log, training staff to be compliant in data protection, which was mandatory through the IG toolkit (now Data Security and Protection Toolkit) and finally advising on projects <br>\n        During my time here I took a course on the General Data Protection Regulation (GDPR) and Data Protection Act 2018 with 'Act Now' since I was required to have an in-depth understanding of these legislation.\n    </p>\n</div>\n\n<div class=\"jobDesc\">\n    <h4><b>Medical Records Clerk</b></h4>\n    <span><b>Blackpool Victoria Hospital</b></span>\n    <p><b>June 2017 – August 2017</b></p>\n    <p>\n        I was required to store and retrieve patient notes from around the hospital, trace them to the correct departments and prepare them in time for appointments. This means confirming all the details for the patient inside are still correct by matching it to the system,putting together new folders if necessary and finding previous references from GP’s or other areas of the hospital to place into the file.\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space{\r\n    margin-top:150px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6MTUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container text-center\">\r\n    <router-outlet></router-outlet>\r\n    <div class=\"space\"></div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolioV2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _linksbar_linksbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./linksbar/linksbar.component */ "./src/app/linksbar/linksbar.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _linksbar_linksbar_component__WEBPACK_IMPORTED_MODULE_9__["LinksbarComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'prefix', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'about', pathMatch: 'full', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
                    { path: 'projects', pathMatch: 'full', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
                    { path: '**', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"] },
                ], { useHash: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>404 - Try another link in the menu.</h1>"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    width: 100%;\r\n    height: 80px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    margin-top: auto;\r\n    background-color: rgb(245, 245, 245);\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 995px){\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsbUJBQW1CO0NBQ3RCOztBQUVEOztDQUVDIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk1cHgpe1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer pt-2\">\n  <div>\n    <span class=\"text-muted text-center\">&copy; Ryan Beckett, Portfolio 2018</span>\n  </div>\n  <app-linksbar></app-linksbar>  \n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#siteLogo{\r\n    margin-top: 50px;\r\n    max-width: 1000px;\r\n    width: 100%;\r\n}\r\n\r\nh1 {\r\n    margin-top: 15px;\r\n}\r\n\r\nh1, h2 {\r\n    letter-spacing: 20px;\r\n}\r\n\r\n@media screen and (max-width:990px){\r\n    #siteLogo{\r\n        margin-top: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n    #siteLogo {\r\n        margin:auto;\r\n        width: 100%;\r\n        display: block\r\n    }\r\n    #siteLogo{\r\n        display:none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJO1FBQ0ksaUJBQWlCO0tBQ3BCO0NBQ0o7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztLQUNqQjtJQUNEO1FBQ0ksYUFBYTtLQUNoQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2l0ZUxvZ297XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuaDEsIGgyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXtcclxuICAgICNzaXRlTG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAjc2l0ZUxvZ28ge1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcbiAgICAjc2l0ZUxvZ297XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img id=\"siteLogo\" src=\"assets/img/SiteLogo.png\">\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/linksbar/linksbar.component.css":
/*!*************************************************!*\
  !*** ./src/app/linksbar/linksbar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes linkHover {\r\n    from { border-radius: 0}\r\n    to { border-radius: 50%}\r\n}\r\n@keyframes linkHover {\r\n    from { border-radius: 0}\r\n    to { border-radius: 50%}\r\n}\r\n@-webkit-keyframes linkUnhover {\r\n    from { border-radius: 50%}\r\n    to { border-radius: 0}\r\n}\r\n@keyframes linkUnhover {\r\n    from { border-radius: 50%}\r\n    to { border-radius: 0}\r\n}\r\nimg {\r\n    height: 40px;\r\n    -webkit-animation-name: linkUnhover;\r\n            animation-name: linkUnhover;\r\n    -webkit-animation-duration: 0.5s;\r\n            animation-duration: 0.5s;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\nimg:hover{\r\n    -webkit-animation-name: linkHover;\r\n            animation-name: linkHover;\r\n    -webkit-animation-duration: 0.5s;\r\n            animation-duration: 0.5s;\r\n    border-radius: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlua3NiYXIvbGlua3NiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU8sZ0JBQWdCLENBQUM7SUFDeEIsS0FBSyxrQkFBa0IsQ0FBQztDQUMzQjtBQUhEO0lBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztJQUN4QixLQUFLLGtCQUFrQixDQUFDO0NBQzNCO0FBQ0Q7SUFDSSxPQUFPLGtCQUFrQixDQUFDO0lBQzFCLEtBQUssZ0JBQWdCLENBQUM7Q0FDekI7QUFIRDtJQUNJLE9BQU8sa0JBQWtCLENBQUM7SUFDMUIsS0FBSyxnQkFBZ0IsQ0FBQztDQUN6QjtBQUVEO0lBQ0ksYUFBYTtJQUNiLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbGlua3NiYXIvbGlua3NiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbGlua0hvdmVyIHtcclxuICAgIGZyb20geyBib3JkZXItcmFkaXVzOiAwfVxyXG4gICAgdG8geyBib3JkZXItcmFkaXVzOiA1MCV9XHJcbn1cclxuQGtleWZyYW1lcyBsaW5rVW5ob3ZlciB7XHJcbiAgICBmcm9tIHsgYm9yZGVyLXJhZGl1czogNTAlfVxyXG4gICAgdG8geyBib3JkZXItcmFkaXVzOiAwfVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmtVbmhvdmVyO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pbWc6aG92ZXJ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGlua0hvdmVyO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/linksbar/linksbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/linksbar/linksbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a target=\"_blank\" href=\"mailto:ryan.beckett@outlook.com\"><img src=\"assets/icons/mail.svg\"></a>\n  <a target=\"_blank\" href=\"https://www.linkedin.com/in/ryan-beckett-75112510b/\"><img src=\"assets/icons/linkedin.svg\"></a>\n  <a target=\"_blank\" href=\"https://twitter.com/RyanBcktt\"><img src=\"assets/icons/twitter.svg\"></a>\n  <a target=\"_blank\" href=\"https://www.instagram.com/ryan.bcktt/\"><img src=\"assets/icons/instagram.svg\"></a>\n  <a target=\"_blank\" href=\"https://github.com/cPango\"><img src=\"assets/icons/github.png\"></a>\n</div>"

/***/ }),

/***/ "./src/app/linksbar/linksbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/linksbar/linksbar.component.ts ***!
  \************************************************/
/*! exports provided: LinksbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksbarComponent", function() { return LinksbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksbarComponent = /** @class */ (function () {
    function LinksbarComponent() {
    }
    LinksbarComponent.prototype.ngOnInit = function () {
    };
    LinksbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linksbar',
            template: __webpack_require__(/*! ./linksbar.component.html */ "./src/app/linksbar/linksbar.component.html"),
            styles: [__webpack_require__(/*! ./linksbar.component.css */ "./src/app/linksbar/linksbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinksbarComponent);
    return LinksbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#siteLogo{\r\n    display:none;\r\n}\r\n\r\n#menuIcon {\r\n    display: none;\r\n}\r\n\r\n.nav-web{\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.nav-web > li {\r\n    display:inline-block;\r\n}\r\n\r\nul > li > a {\r\n    font-size: 26px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: black;\r\n}\r\n\r\nul > li > a:hover {\r\n    -webkit-animation: blurry 0.5s;\r\n            animation: blurry 0.5s;\r\n    -webkit-filter: blur(1.5px);\r\n            filter: blur(1.5px);\r\n}\r\n\r\n@-webkit-keyframes blurry {\r\n    from {-webkit-filter: blur(0px);filter: blur(0px);}\r\n    to {-webkit-filter: blur(1.5px);filter: blur(1.5px);}\r\n}\r\n\r\n@keyframes blurry {\r\n    from {-webkit-filter: blur(0px);filter: blur(0px);}\r\n    to {-webkit-filter: blur(1.5px);filter: blur(1.5px);}\r\n}\r\n\r\n@media screen and (max-width: 480px){\r\n    ul > li > a {\r\n        font-size: 36px;\r\n        padding: 4px;\r\n        margin: 5px;\r\n        background-color: rgb(107, 107, 107);\r\n        color: white;\r\n    }\r\n    ul > li > a:hover {\r\n        -webkit-animation: none;\r\n                animation: none;\r\n        -webkit-filter: none;\r\n                filter: none;\r\n        background-color: rgb(136, 136, 136);\r\n    }\r\n    .nav-web > li {\r\n        display:block;\r\n    }\r\n    #menuIcon{\r\n        display:block;\r\n        margin-left: 10px;\r\n    }\r\n    #dash {\r\n        display:none;\r\n    }\r\n    #siteLogo{\r\n        display:block;\r\n        width: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkOztBQUNEO0lBQ0kscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw0QkFBb0I7WUFBcEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksTUFBTSwwQkFBa0IsQUFBbEIsa0JBQWtCLENBQUM7SUFDekIsSUFBSSw0QkFBb0IsQUFBcEIsb0JBQW9CLENBQUM7Q0FDNUI7O0FBSEQ7SUFDSSxNQUFNLDBCQUFrQixBQUFsQixrQkFBa0IsQ0FBQztJQUN6QixJQUFJLDRCQUFvQixBQUFwQixvQkFBb0IsQ0FBQztDQUM1Qjs7QUFFRDtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixZQUFZO1FBQ1oscUNBQXFDO1FBQ3JDLGFBQWE7S0FDaEI7SUFDRDtRQUNJLHdCQUFnQjtnQkFBaEIsZ0JBQWdCO1FBQ2hCLHFCQUFhO2dCQUFiLGFBQWE7UUFDYixxQ0FBcUM7S0FDeEM7SUFDRDtRQUNJLGNBQWM7S0FDakI7SUFDRDtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7S0FDckI7SUFDRDtRQUNJLGFBQWE7S0FDaEI7SUFDRDtRQUNJLGNBQWM7UUFDZCxZQUFZO0tBQ2Y7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaXRlTG9nb3tcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuI21lbnVJY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdi13ZWJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5uYXYtd2ViID4gbGkge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVsID4gbGkgPiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnVsID4gbGkgPiBhOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogYmx1cnJ5IDAuNXM7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMS41cHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsdXJyeSB7XHJcbiAgICBmcm9tIHtmaWx0ZXI6IGJsdXIoMHB4KTt9XHJcbiAgICB0byB7ZmlsdGVyOiBibHVyKDEuNXB4KTt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAgIHVsID4gbGkgPiBhIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICB1bCA+IGxpID4gYTpob3ZlciB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgICAgIGZpbHRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XHJcbiAgICB9XHJcbiAgICAubmF2LXdlYiA+IGxpIHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgfVxyXG4gICAgI21lbnVJY29ue1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAjZGFzaCB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgI3NpdGVMb2dve1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"router.url === '/'\" id=\"siteLogo\" src=\"assets/img/SiteLogo.png\">\n<ul class=\"mt-2 nav-web justify-content-center\">\n  <li class=\"nav-mobile\">\n    <a class=\"nav-link\" routerLink=\"/\">Home</a>\n  </li>\n  <span id=\"dash\">-</span>\n  <li class=\"nav-mobile\">\n    <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n  </li>\n  <span id=\"dash\">-</span>\n  <li class=\"nav-mobile\">\n    <a class=\"nav-link\" routerLink=\"/about\">About</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project {\r\n    margin: 30px;\r\n    padding: 10px;\r\n    background-color: rgb(245, 245, 245);\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n}\r\n\r\n.project_image {\r\n    height: 150px;\r\n    max-width: 220px;\r\n    padding: 10px;\r\n}\r\n\r\n.project_title {\r\n    font-weight: bold;\r\n}\r\n\r\n.project_link {\r\n    color: rgb(139, 107, 47);\r\n    font-weight: bold;\r\n}\r\n\r\n.project_infoColumn {\r\n    flex-grow: 3;\r\n    margin-top:20px;\r\n    word-wrap: normal;\r\n}\r\n\r\nh1 {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n@media screen and (max-width:768px){\r\n    .project {\r\n        height: auto;\r\n        flex-wrap: wrap;\r\n        text-align: center;\r\n    }\r\n    img {\r\n        float: none;\r\n        margin: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksWUFBWTtRQUNaLGFBQWE7S0FDaEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdCB7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5wcm9qZWN0X2ltYWdlIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnByb2plY3RfdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0X2xpbmsge1xyXG4gICAgY29sb3I6IHJnYigxMzksIDEwNywgNDcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0X2luZm9Db2x1bW4ge1xyXG4gICAgZmxleC1ncm93OiAzO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgd29yZC13cmFwOiBub3JtYWw7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLnByb2plY3Qge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><b>Projects</b></h1>\n\n<div>\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/repoViewerV2.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">Repo*Viewer~V2</h4>\n      <p>Using Angular, this app pulls Repo's through GitHub's API and displays their commits</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/repoViewerV2\">See code</a> / \n      <a class=\"project_link\" target=\"_blank\" href=\"http://www.ryanbeckett.uk/repoViewerV2/\">Try App</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/CCC.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">Cybele Cycling Club [WiP]</h4>\n      <p>Website built with bootstrap and custom CSS</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/CybeleSite\">See code</a> / \n      <a class=\"project_link\" target=\"_blank\" href=\"https://cranky-lamport-8a6267.netlify.com/\">See Website</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/ickletots.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">IckleTots</h4>\n      <p>Website built with bootstrap and custom CSS</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/IckleTots.com\">See code</a> / \n      <a class=\"project_link\" target=\"_blank\" href=\"https://www.IckleTots.com\">See Website</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/ListProj.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">List in Local Storage</h4>\n      <p>My first ever application developed with vanilla Javascript & some Jquery</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/ListApp-Web-Storage-API\">See code</a> / \n      <a class=\"project_link\" target=\"_blank\" href=\"https://www.ryanbeckett.uk/ListApp-Web-Storage-API/\">See App</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/arpm.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">AR-Property Maintenance</h4>\n      <p>Website built with bootstrap and custom CSS</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/arPropertyMaintenance\">See code</a> / \n      <a class=\"project_link\" target=\"_blank\" href=\"https://www.ar-propertymaintenance.co.uk\">See Website</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/discordBot.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">Discord Bot</h4>\n      <p>A Discord companion with multi-functionality. Written with NodeJS</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/discordBot\">See code</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/PlayerVsFoe_Game.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">Knights & Warlocks</h4>\n      <p>A text-based RPG for the console written in C#</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://github.com/cPango/KnightsAndWarlocks\">See code</a>\n    </section>\n  </div>\n\n  <div class=\"project\">\n    <img class=\"project_image\" src=\"assets/img/TicTacToeGame.png\"/>\n    <section class=\"project_infoColumn\">\n      <h4 class=\"project_title\">Tic Tac Boom!</h4>\n      <p>A simple game of Tic Tac Toe written in C#</p>\n      <a class=\"project_link\" target=\"_blank\" href=\"https://gist.github.com/cPango/17d8b4be56a1505fd26b1fbb449326a6\">See code</a>\n    </section>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cPango\Documents\Code\portfolioV2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map