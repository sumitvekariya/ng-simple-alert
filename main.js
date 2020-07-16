(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.component.ts":
/*!***************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.component.ts ***!
  \***************************************************************/
/*! exports provided: NgSimpleAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertComponent", function() { return NgSimpleAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-simple-alert.service */ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { background: a0 }; };
function NgSimpleAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSimpleAlertComponent_div_0_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alertMessage_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, alertMessage_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", alertMessage_r1 == null ? null : alertMessage_r1.prefix, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alertMessage_r1 == null ? null : alertMessage_r1.message, " ");
} }
class NgSimpleAlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.close$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.alertMessage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.alertService.alertMessage$, this.close$);
    }
    closeAlert() {
        this.close$.next();
    }
}
NgSimpleAlertComponent.ɵfac = function NgSimpleAlertComponent_Factory(t) { return new (t || NgSimpleAlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertService"])); };
NgSimpleAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSimpleAlertComponent, selectors: [["ng-alert"]], decls: 2, vars: 3, consts: [["class", "alert", 3, "ngStyle", 4, "ngIf"], [1, "alert", 3, "ngStyle"], [1, "closebtn", 3, "click"]], template: function NgSimpleAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSimpleAlertComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.alertMessage$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".alert[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n.closebtn[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n  color: white;\r\n  font-weight: bold;\r\n  float: right;\r\n  font-size: 22px;\r\n  line-height: 20px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\n.closebtn[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLXNpbXBsZS1hbGVydC9zcmMvbGliL25nLXNpbXBsZS1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicHJvamVjdHMvbmctc2ltcGxlLWFsZXJ0L3NyYy9saWIvbmctc2ltcGxlLWFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2VidG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY2xvc2VidG46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSimpleAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-alert',
                template: `
    <div class="alert" *ngIf="alertMessage$ | async as alertMessage" [ngStyle]="{ background: alertMessage.color }">
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage?.prefix }}!</strong> {{ alertMessage?.message }}
    </div>
  `,
                styleUrls: ['./ng-simple-alert.component.css'],
            }]
    }], function () { return [{ type: _ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertService"] }]; }, null); })();


/***/ }),

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.module.ts":
/*!************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.module.ts ***!
  \************************************************************/
/*! exports provided: NgSimpleAlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertModule", function() { return NgSimpleAlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-simple-alert.component */ "../ng-simple-alert/src/lib/ng-simple-alert.component.ts");




class NgSimpleAlertModule {
}
NgSimpleAlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSimpleAlertModule });
NgSimpleAlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgSimpleAlertModule_Factory(t) { return new (t || NgSimpleAlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSimpleAlertModule, { declarations: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSimpleAlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts":
/*!*************************************************************!*\
  !*** ../ng-simple-alert/src/lib/ng-simple-alert.service.ts ***!
  \*************************************************************/
/*! exports provided: NgSimpleAlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSimpleAlertService", function() { return NgSimpleAlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class NgSimpleAlertService {
    constructor() {
        this.alertMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    createSuccessAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Success', message, 'green'));
    }
    createDangerAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Danger', message, 'red'));
    }
    createWarningAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
    }
    createInfoAlert(message) {
        this.alertMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
    }
    createAlertMessage(prefix, message, color) {
        return { prefix, message, color };
    }
}
NgSimpleAlertService.ɵfac = function NgSimpleAlertService_Factory(t) { return new (t || NgSimpleAlertService)(); };
NgSimpleAlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgSimpleAlertService, factory: NgSimpleAlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSimpleAlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_simple_alert_src_lib_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ng-simple-alert/src/lib/ng-simple-alert.service */ "../ng-simple-alert/src/lib/ng-simple-alert.service.ts");
/* harmony import */ var _ng_simple_alert_src_lib_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-simple-alert/src/lib/ng-simple-alert.component */ "../ng-simple-alert/src/lib/ng-simple-alert.component.ts");




class AppComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    createSuccessMessage() {
        this.alertService.createSuccessAlert('Sample success message');
    }
    createDangerMessage() {
        this.alertService.createDangerAlert('Sample danger message');
    }
    createWarningMessage() {
        this.alertService.createWarningAlert('Sample warning message');
    }
    createInfoMessage() {
        this.alertService.createInfoAlert('Sample info message');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_simple_alert_src_lib_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_1__["NgSimpleAlertService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "success", 3, "click"], [1, "danger", 3, "click"], [1, "warning", 3, "click"], [1, "info", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.createSuccessMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create success alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { return ctx.createDangerMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create danger alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.createWarningMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create warning alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.createInfoMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create info alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_simple_alert_src_lib_ng_simple_alert_component__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertComponent"]], styles: ["button[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\nbutton.success[_ngcontent-%COMP%] {\r\n  background: green;\r\n}\r\n\r\nbutton.danger[_ngcontent-%COMP%] {\r\n  background: red;\r\n}\r\n\r\nbutton.info[_ngcontent-%COMP%] {\r\n  background: dodgerblue;\r\n}\r\n\r\nbutton.warning[_ngcontent-%COMP%] {\r\n  background: darkorange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWFsZXJ0LXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoicHJvamVjdHMvbmctYWxlcnQtc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuYnV0dG9uLnN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG5idXR0b24uZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG5idXR0b24ud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogZGFya29yYW5nZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <ng-alert></ng-alert>
    <button class="success" (click)="createSuccessMessage()">Create success alert</button>
    <button class="danger" (click)="createDangerMessage()">Create danger alert</button>
    <button class="warning" (click)="createWarningMessage()">Create warning alert</button>
    <button class="info" (click)="createInfoMessage()">Create info alert</button>
  `,
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _ng_simple_alert_src_lib_ng_simple_alert_service__WEBPACK_IMPORTED_MODULE_1__["NgSimpleAlertService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-simple-alert/src/lib/ng-simple-alert.module */ "../ng-simple-alert/src/lib/ng-simple-alert.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_simple_alert_src_lib_ng_simple_alert_module__WEBPACK_IMPORTED_MODULE_2__["NgSimpleAlertModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


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
const environment = {
    production: false,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\default.LAPTOP-4GUG181F\Documents\GitHub\LEARN\ng-simple-alert\projects\ng-alert-showcase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map