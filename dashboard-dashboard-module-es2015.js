(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/@angular/fire/auth-guard/es2015/auth-guard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/fire/auth-guard/es2015/auth-guard.js ***!
  \********************************************************************/
/*! exports provided: AngularFireAuthGuard, canActivate, loggedIn, isNotAnonymous, idTokenResult, emailVerified, customClaims, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function() { return AngularFireAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canActivate", function() { return canActivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function() { return isNotAnonymous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idTokenResult", function() { return idTokenResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailVerified", function() { return emailVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customClaims", function() { return customClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function() { return hasCustomClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function() { return redirectUnauthorizedTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function() { return redirectLoggedInTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AngularFireAuthGuard = class AngularFireAuthGuard {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    canActivate(next, state) {
        const authPipeFactory = next.data.authGuardPipe || (() => loggedIn);
        return this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(canActivate => typeof canActivate == "boolean" ? canActivate : this.router.createUrlTree(canActivate)));
    }
};
AngularFireAuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AngularFireAuthGuard);

const canActivate = (pipe) => ({
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: pipe.name === "" ? pipe : () => pipe }
});
const ɵ0 = user => !!user;
const loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ0);
const ɵ1 = user => !!user && !user.isAnonymous;
const isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ1);
const ɵ2 = (user) => user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
const idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(ɵ2);
const ɵ3 = user => !!user && user.emailVerified;
const emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ3);
const ɵ4 = idTokenResult => idTokenResult ? idTokenResult.claims : [];
const customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ4));
const hasCustomClaim = (claim) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(claims => claims.hasOwnProperty(claim)));
const redirectUnauthorizedTo = (redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(loggedIn => loggedIn || redirect));
const redirectLoggedInTo = (redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(loggedIn => loggedIn && redirect || true));

//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth-guard/es2015/auth-guard.module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/fire/auth-guard/es2015/auth-guard.module.js ***!
  \***************************************************************************/
/*! exports provided: AngularFireAuthGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function() { return AngularFireAuthGuardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/auth-guard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AngularFireAuthGuardModule = class AngularFireAuthGuardModule {
};
AngularFireAuthGuardModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"]]
    })
], AngularFireAuthGuardModule);

//# sourceMappingURL=auth-guard.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth-guard/es2015/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/fire/auth-guard/es2015/index.js ***!
  \***************************************************************/
/*! exports provided: AngularFireAuthGuard, canActivate, loggedIn, isNotAnonymous, idTokenResult, emailVerified, customClaims, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, AngularFireAuthGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/auth-guard/es2015/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canActivate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["canActivate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["loggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isNotAnonymous"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idTokenResult", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["idTokenResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emailVerified", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["emailVerified"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customClaims", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["customClaims"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hasCustomClaim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["redirectUnauthorizedTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["redirectLoggedInTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵ0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵ1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵ2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵ3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ɵ4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthGuardModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/auth-guard/es2015/public_api.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/fire/auth-guard/es2015/public_api.js ***!
  \********************************************************************/
/*! exports provided: AngularFireAuthGuard, canActivate, loggedIn, isNotAnonymous, idTokenResult, emailVerified, customClaims, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, AngularFireAuthGuardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/auth-guard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canActivate", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["canActivate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["loggedIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["isNotAnonymous"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idTokenResult", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["idTokenResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emailVerified", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["emailVerified"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customClaims", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["customClaims"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["hasCustomClaim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["redirectUnauthorizedTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["redirectLoggedInTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["ɵ0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["ɵ1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["ɵ2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["ɵ3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["ɵ4"]; });

/* harmony import */ var _auth_guard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.module */ "./node_modules/@angular/fire/auth-guard/es2015/auth-guard.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function() { return _auth_guard_module__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuardModule"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-steps/dt-steps.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dt-track/dt-steps/dt-steps.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <span class=\"inline-block-text-box\">Stage {{stage.level + 1}}: {{stage.name}}</span>\n    <span class=\"px-2\"></span>\n\n    <ng-template ngFor let-index [ngForOf]=\"max_level | fill\">\n        <app-step class=\"inline-block-text-box\" [step]=\"getStep(index)\" [index]=\"index\" (selected)=\"onSelected($event)\">\n        </app-step>\n        <span class=\"px-2\"></span>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-steps/step/step.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dt-track/dt-steps/step/step.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"dot shadow\" [style.cursor]=\"getCursor()\" [style.background-color]=\"getBg()\" (click)=\"selectStage()\">\n    <span class=\"placeholder\">1</span>\n</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-track.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dt-track/dt-track.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"detailedTopic\">\n    <div class=\"py-3\"></div>\n    <h4> {{ detailedTopic.topic }}</h4>\n    <p> with {{ detailedTopic.member_count }} community members</p>\n    <div class=\"py-2\"></div>\n    <app-whiteboard></app-whiteboard>\n    <div class=\"py-2\"></div>\n    <app-dt-steps [stage]=\"stage\" [max-level]=\"detailedTopic.max_level\" [best-level]=\"detailedTopic.best_level\" (selected)=\"onStageSelected($event)\">\n    </app-dt-steps>\n    <div class=\"py-3\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/whiteboard/whiteboard.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dt-track/whiteboard/whiteboard.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"whiteboard-container\">\n    <div id=\"aww-wrapper\" class=\"aww\" style=\"height: 700px; border-style: solid; border-color: red;\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/layout/layout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/layout/layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-main d-flex\">\n    <app-user-sidebar></app-user-sidebar>\n    <div class=\"page-content-wrapper container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/profile/profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/profile/profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/topics-list/topic/topic.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/topics-list/topic/topic.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"redirectable col-sm\" (click)=\"redirect()\">\n        <h4>{{ simpleTopic.topic }}</h4>\n        <p> in stage: {{ simpleTopic.stage }} </p>\n        <p> {{ simpleTopic.member_count }} members</p>\n    </div>\n    <div class=\"col-sm\">\n        <img alt=\"pic1\">\n        <img alt=\"pic2\">\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/topics-list/topics-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/topics-list/topics-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-3\"></div>\n<div>\n    <h5>Participating Topics</h5>\n    <p> working with {{ getTotalMembers()}} community members</p>\n    \n    <ng-template ngFor let-topic [ngForOf]=\"topics\">\n        <app-topic [topic]=\"topic\"></app-topic>\n        <hr>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/user-sidebar/user-sidebar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/user-sidebar/user-sidebar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light border-right\" id=\"sidebar-wrapper\" [style.min-height.px]=\"minHeight\">\n    <div class=\"sidebar-heading\">\n        <div style=\"text-align: center\">\n        <img src=\"assets/img/people/mckuok.jpg\" class=\"rounded-circle\" width=\"100\" height=\"100\"> \n        <div>Man Chon Kuok</div>\n        <div>Honolulu, Hawaii</div>\n        <div style=\"display: inline\">\n            <i class=\"large material-icons icon-yellow\">flare</i>\n            <i class=\"large material-icons icon-green\">mood</i>\n            <i class=\"large material-icons icon-red\">turned_in_not</i>\n        </div>\n    </div>\n    </div>\n    <div class=\"list-group list-group-flush\">\n        <a [routerLink]=\"['/dashboard']\" class=\"list-group-item list-group-item-action bg-light\">Dashboard</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">Shortcuts</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\">Overview</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\"><i class=\"large material-icons\">event</i>Events</a>\n        <a [routerLink]=\"['profile']\" class=\"list-group-item list-group-item-action bg-light\"><i class=\"large material-icons\">person</i>Profile</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-light\"><i class=\"large material-icons\">explore</i>Status</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _routing_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/dashboard-routing.module */ "./src/app/dashboard/routing/dashboard-routing.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/dashboard/layout/layout.component.ts");
/* harmony import */ var _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-sidebar/user-sidebar.component */ "./src/app/dashboard/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var _topics_list_topic_topic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topics-list/topic/topic.component */ "./src/app/dashboard/topics-list/topic/topic.component.ts");
/* harmony import */ var _topics_list_topics_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topics-list/topics-list.component */ "./src/app/dashboard/topics-list/topics-list.component.ts");
/* harmony import */ var _dt_track_dt_track_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dt-track/dt-track.component */ "./src/app/dashboard/dt-track/dt-track.component.ts");
/* harmony import */ var _dt_track_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dt-track/whiteboard/whiteboard.component */ "./src/app/dashboard/dt-track/whiteboard/whiteboard.component.ts");
/* harmony import */ var _dt_track_dt_steps_dt_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dt-track/dt-steps/dt-steps.component */ "./src/app/dashboard/dt-track/dt-steps/dt-steps.component.ts");
/* harmony import */ var _dt_track_dt_steps_step_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dt-track/dt-steps/step/step.component */ "./src/app/dashboard/dt-track/dt-steps/step/step.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utility/utility.module */ "./src/app/utility/utility.module.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");















let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
            _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["UserSidebarComponent"],
            _topics_list_topic_topic_component__WEBPACK_IMPORTED_MODULE_6__["TopicComponent"],
            _topics_list_topics_list_component__WEBPACK_IMPORTED_MODULE_7__["TopicsListComponent"],
            _dt_track_dt_track_component__WEBPACK_IMPORTED_MODULE_8__["DtTrackComponent"],
            _dt_track_whiteboard_whiteboard_component__WEBPACK_IMPORTED_MODULE_9__["WhiteboardComponent"],
            _dt_track_dt_steps_dt_steps_component__WEBPACK_IMPORTED_MODULE_10__["DtStepsComponent"],
            _dt_track_dt_steps_step_step_component__WEBPACK_IMPORTED_MODULE_11__["StepComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _routing_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _utility_utility_module__WEBPACK_IMPORTED_MODULE_13__["UtilityModule"].forRoot(),
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthGuardModule"]
        ],
        providers: [],
        exports: [
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-steps/dt-steps.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-steps/dt-steps.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-block-text-box {\n  display: inline-block !important;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21ja3Vvay9wcm9qZWN0cy9jYW1wZmlyZS1mcm9udC9zcmMvYXBwL2Rhc2hib2FyZC9kdC10cmFjay9kdC1zdGVwcy9kdC1zdGVwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2R0LXRyYWNrL2R0LXN0ZXBzL2R0LXN0ZXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2R0LXRyYWNrL2R0LXN0ZXBzL2R0LXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubGluZS1ibG9jay10ZXh0LWJveCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiIsIi5pbmxpbmUtYmxvY2stdGV4dC1ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-steps/dt-steps.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-steps/dt-steps.component.ts ***!
  \*******************************************************************/
/*! exports provided: DtStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtStepsComponent", function() { return DtStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step/step.component */ "./src/app/dashboard/dt-track/dt-steps/step/step.component.ts");



let DtStepsComponent = class DtStepsComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getStep(index) {
        if (this.stage.level == index) {
            return _step_step_component__WEBPACK_IMPORTED_MODULE_2__["Step"].Current;
        }
        else if (this.best_level >= index) {
            return _step_step_component__WEBPACK_IMPORTED_MODULE_2__["Step"].Past;
        }
        else if (this.best_level < index) {
            return _step_step_component__WEBPACK_IMPORTED_MODULE_2__["Step"].Future;
        }
    }
    onSelected(index) {
        this.selected.emit(index);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('stage')
], DtStepsComponent.prototype, "stage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('max-level')
], DtStepsComponent.prototype, "max_level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('best-level')
], DtStepsComponent.prototype, "best_level", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DtStepsComponent.prototype, "selected", void 0);
DtStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dt-steps',
        template: __webpack_require__(/*! raw-loader!./dt-steps.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-steps/dt-steps.component.html"),
        styles: [__webpack_require__(/*! ./dt-steps.component.scss */ "./src/app/dashboard/dt-track/dt-steps/dt-steps.component.scss")]
    })
], DtStepsComponent);



/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-steps/step/step.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-steps/step/step.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\n  line-height: 30px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.shadow {\n  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.32) !important;\n}\n\n.placeholder {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21ja3Vvay9wcm9qZWN0cy9jYW1wZmlyZS1mcm9udC9zcmMvYXBwL2Rhc2hib2FyZC9kdC10cmFjay9kdC1zdGVwcy9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kdC10cmFjay9kdC1zdGVwcy9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBR0UsMERBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZHQtdHJhY2svZHQtc3RlcHMvc3RlcC9zdGVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvdCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNoYWRvdyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCA4cHggMnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDRweCA4cHggMnB4IHJnYmEoMCwwLDAsMC4zMik7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDJweCByZ2JhKDAsMCwwLDAuMzIpICFpbXBvcnRhbnQ7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iLCIuZG90IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2hhZG93IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggNHB4IDhweCAycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcbiAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zMikgIWltcG9ydGFudDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-steps/step/step.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-steps/step/step.component.ts ***!
  \********************************************************************/
/*! exports provided: Step, StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var Step;
(function (Step) {
    Step["Past"] = "lightgreen";
    Step["Current"] = "green";
    Step["Future"] = "lightgrey";
})(Step || (Step = {}));
let StepComponent = class StepComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getCursor() {
        return this.step != Step.Future ? 'pointer' : 'not-allowed';
    }
    getBg() {
        return this.step.valueOf();
    }
    selectStage() {
        if (this.step != Step.Future) {
            this.selected.emit(this.index);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('step')
], StepComponent.prototype, "step", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index')
], StepComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StepComponent.prototype, "selected", void 0);
StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step',
        template: __webpack_require__(/*! raw-loader!./step.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-steps/step/step.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./step.component.scss */ "./src/app/dashboard/dt-track/dt-steps/step/step.component.scss")]
    })
], StepComponent);



/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-track.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-track.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kdC10cmFjay9kdC10cmFjay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dt-track/dt-track.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dt-track/dt-track.component.ts ***!
  \**********************************************************/
/*! exports provided: DtTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DtTrackComponent", function() { return DtTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/services/loading/loading-state.service */ "./src/app/utility/services/loading/loading-state.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utility/services/topics/topic.service */ "./src/app/utility/services/topics/topic.service.ts");






let DtTrackComponent = class DtTrackComponent {
    constructor(topicService, route, loadingService) {
        this.topicService = topicService;
        this.route = route;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.loadingService.setLoading(true);
        this.state$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => window.history.state)).subscribe(topic => {
            if (Object.keys(topic).length == 1) {
                this.fetchTopicFromDb();
            }
            else {
                this.detailedTopic = this.toDetailedTopic(topic);
                this.dbTopic = topic;
                this.stage = this.detailedTopic.current_stage;
            }
        });
    }
    onStageSelected(index) {
        this.stage = this.getStage(this.dbTopic, index);
    }
    toDetailedTopic(dbTopic) {
        const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1];
        return {
            topic: dbTopic.data.topic,
            current_stage: this.getStage(dbTopic, lastIteration.stages.length - 1),
            member_count: dbTopic.data.members.length,
            topic_id: dbTopic.id,
            best_level: lastIteration.stages.length - 1,
            max_level: 5
        };
    }
    getStage(dbTopic, index) {
        const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1];
        const stage = lastIteration.stages[index];
        return {
            level: index,
            name: _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_5__["TopicService"].convertStageIndexToName(index),
            board_url: stage.board_url
        };
    }
    ngOnDestroy() {
        this.state$.unsubscribe();
        if (this.routeId$) {
            this.routeId$.unsubscribe();
        }
    }
    fetchTopicFromDb() {
        this.routeId$ = this.route.params.subscribe(params => {
            const topicId = params['id'];
            this.topicService.getTopicById(topicId).subscribe(topic => {
                this.detailedTopic = this.toDetailedTopic(topic);
                this.dbTopic = topic;
                this.stage = this.detailedTopic.current_stage;
            });
        });
    }
};
DtTrackComponent.ctorParameters = () => [
    { type: _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_5__["TopicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStateService"] }
];
DtTrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dt-track',
        template: __webpack_require__(/*! raw-loader!./dt-track.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/dt-track.component.html"),
        styles: [__webpack_require__(/*! ./dt-track.component.scss */ "./src/app/dashboard/dt-track/dt-track.component.scss")]
    })
], DtTrackComponent);



/***/ }),

/***/ "./src/app/dashboard/dt-track/whiteboard/whiteboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/dt-track/whiteboard/whiteboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kdC10cmFjay93aGl0ZWJvYXJkL3doaXRlYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dt-track/whiteboard/whiteboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dt-track/whiteboard/whiteboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: WhiteboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteboardComponent", function() { return WhiteboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utility_services_scripts_loader_script_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utility/services/scripts-loader/script-loading.service */ "./src/app/utility/services/scripts-loader/script-loading.service.ts");
/* harmony import */ var _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/services/loading/loading-state.service */ "./src/app/utility/services/loading/loading-state.service.ts");




let WhiteboardComponent = class WhiteboardComponent {
    constructor(scriptLoader, loadingService) {
        this.scriptLoader = scriptLoader;
        this.loadingService = loadingService;
    }
    ngOnInit() {
        this.scriptLoader.load('whiteboard').then(data => {
            const aww = new AwwBoard('#aww-wrapper', {
                apiKey: '17b81ad8-cd02-4061-8475-9666eceace71',
                multiPage: true,
                sendUserPointer: true,
                showUserPointers: true
            });
            window['aww'] = aww;
            $.ajax({
                'method': 'GET',
                'url': 'https://awwapp.com/static/widget/sample_toolbar.html'
            }).done((res, status) => {
                $('#aww-wrapper').append(res);
                // remove logo
                $('.logo__box').empty();
                this.scriptLoader.load('whiteboard_toolbar').then(data => {
                    initToolbar();
                    this.loadingService.setLoading(false);
                });
            });
        }).catch(error => console.log(error));
    }
    ngOnDestroy() {
        delete window['aww'];
    }
};
WhiteboardComponent.ctorParameters = () => [
    { type: _utility_services_scripts_loader_script_loading_service__WEBPACK_IMPORTED_MODULE_2__["ScriptLoadingService"] },
    { type: _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStateService"] }
];
WhiteboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whiteboard',
        template: __webpack_require__(/*! raw-loader!./whiteboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dt-track/whiteboard/whiteboard.component.html"),
        styles: [__webpack_require__(/*! ./whiteboard.component.scss */ "./src/app/dashboard/dt-track/whiteboard/whiteboard.component.scss")]
    })
], WhiteboardComponent);



/***/ }),

/***/ "./src/app/dashboard/layout/layout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/layout/layout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content-wrapper {\n  width: 100%;\n}\n\n.dashboard-main {\n  height: 100%;\n  float: none;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21ja3Vvay9wcm9qZWN0cy9jYW1wZmlyZS1mcm9udC9zcmMvYXBwL2Rhc2hib2FyZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGFzaGJvYXJkLW1haW4ge1xuICBoZWlnaHQ6MTAwJTsgXG4gIGZsb2F0Om5vbmU7XG4gIGRpc3BsYXk6YmxvY2s7XG59IiwiLnBhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmQtbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LayoutComponent = class LayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/dashboard/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/dashboard/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/dashboard/routing/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/routing/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.component */ "./src/app/dashboard/layout/layout.component.ts");
/* harmony import */ var _topics_list_topics_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topics-list/topics-list.component */ "./src/app/dashboard/topics-list/topics-list.component.ts");
/* harmony import */ var _dt_track_dt_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dt-track/dt-track.component */ "./src/app/dashboard/dt-track/dt-track.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/es2015/index.js");








const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectUnauthorizedTo"])(["login"]);
const routes = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _topics_list_topics_list_component__WEBPACK_IMPORTED_MODULE_4__["TopicsListComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
            { path: 'topic/:id', component: _dt_track_dt_track_component__WEBPACK_IMPORTED_MODULE_5__["DtTrackComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]], data: { authGuardPipe: redirectUnauthorizedToLogin } },
        ]
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/topics-list/topic/topic.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/topics-list/topic/topic.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redirectable {\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21ja3Vvay9wcm9qZWN0cy9jYW1wZmlyZS1mcm9udC9zcmMvYXBwL2Rhc2hib2FyZC90b3BpY3MtbGlzdC90b3BpYy90b3BpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL3RvcGljcy1saXN0L3RvcGljL3RvcGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90b3BpY3MtbGlzdC90b3BpYy90b3BpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRpcmVjdGFibGUge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufSIsIi5yZWRpcmVjdGFibGUge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/topics-list/topic/topic.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/topics-list/topic/topic.component.ts ***!
  \****************************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utility_services_topics_topic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utility/services/topics/topic */ "./src/app/utility/services/topics/topic.ts");
/* harmony import */ var _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/services/topics/topic.service */ "./src/app/utility/services/topics/topic.service.ts");





let TopicComponent = class TopicComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.simpleTopic = this.toTopic(this.topic);
    }
    redirect() {
        this.topic.data.members = this.topic.data.members.map((docRef) => docRef.id);
        this.router.navigateByUrl('dashboard/topic/' + this.simpleTopic.topic_id, { state: this.topic });
    }
    toTopic(dbTopic) {
        const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1];
        return new _utility_services_topics_topic__WEBPACK_IMPORTED_MODULE_3__["default"](dbTopic.data.topic, _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"].convertStageIndexToName(lastIteration.stages.length - 1), dbTopic.data.members.length, dbTopic.id);
    }
};
TopicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TopicComponent.prototype, "topic", void 0);
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/topics-list/topic/topic.component.html"),
        styles: [__webpack_require__(/*! ./topic.component.scss */ "./src/app/dashboard/topics-list/topic/topic.component.scss")]
    })
], TopicComponent);



/***/ }),

/***/ "./src/app/dashboard/topics-list/topics-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/topics-list/topics-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90b3BpY3MtbGlzdC90b3BpY3MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/topics-list/topics-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/topics-list/topics-list.component.ts ***!
  \****************************************************************/
/*! exports provided: TopicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsListComponent", function() { return TopicsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/services/topics/topic.service */ "./src/app/utility/services/topics/topic.service.ts");
/* harmony import */ var _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utility/services/loading/loading-state.service */ "./src/app/utility/services/loading/loading-state.service.ts");




let TopicsListComponent = class TopicsListComponent {
    constructor(topicService, loadingService) {
        this.topicService = topicService;
        this.loadingService = loadingService;
        this.topics = [];
    }
    ngOnInit() {
        this.loadingService.setLoading(true);
        this.topicService.getTopicsByUser().subscribe(dbTopic => {
            this.topics.push(dbTopic);
            this.loadingService.setLoading(false);
        });
    }
    getTotalMembers() {
        return this.topics.reduce((sum, currentTopic) => sum + currentTopic.data.members.length, 0);
    }
};
TopicsListComponent.ctorParameters = () => [
    { type: _utility_services_topics_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"] },
    { type: _utility_services_loading_loading_state_service__WEBPACK_IMPORTED_MODULE_3__["LoadingStateService"] }
];
TopicsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topics-list',
        template: __webpack_require__(/*! raw-loader!./topics-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/topics-list/topics-list.component.html"),
        styles: [__webpack_require__(/*! ./topics-list.component.scss */ "./src/app/dashboard/topics-list/topics-list.component.scss")]
    })
], TopicsListComponent);



/***/ }),

/***/ "./src/app/dashboard/user-sidebar/user-sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user-sidebar/user-sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar-wrapper {\n  min-height: 100%;\n  margin-left: -15rem;\n  -webkit-transition: margin 0.25s ease-out;\n  transition: margin 0.25s ease-out;\n  min-height: 100%;\n}\n\n#sidebar-wrapper .sidebar-heading {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n\n#sidebar-wrapper .list-group {\n  width: 15rem;\n}\n\n#page-content-wrapper {\n  min-width: 100vw;\n}\n\n#wrapper.toggled #sidebar-wrapper {\n  margin-left: 0;\n}\n\n.list-group-item {\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #E0F2F1;\n}\n\n#sidebar-wrapper {\n  background-color: #E0F2F1;\n}\n\ni.icon-yellow {\n  color: yellow;\n}\n\ni.icon-green {\n  color: green;\n}\n\ni.icon-red {\n  color: red;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled #sidebar-wrapper {\n    margin-left: -15rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21ja3Vvay9wcm9qZWN0cy9jYW1wZmlyZS1mcm9udC9zcmMvYXBwL2Rhc2hib2FyZC91c2VyLXNpZGViYXIvdXNlci1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvdXNlci1zaWRlYmFyL3VzZXItc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUdBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRTtJQUNFLGNBQUE7RUNDSjs7RURFRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDQ0o7O0VERUU7SUFDRSxtQkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdXNlci1zaWRlYmFyL3VzZXItc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIFxuICAjc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcbiAgICB3aWR0aDogMTVyZW07XG4gIH1cbiAgXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEYyRjE7XG4gIH1cblxuICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBGMkYxO1xuICB9XG5cbiAgaS5pY29uLXllbGxvdyB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuXG4gIGkuaWNvbi1ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG5cbiAgaS5pY29uLXJlZCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIFxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAgIH1cbiAgfVxuXG4iLCIjc2lkZWJhci13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xuICB3aWR0aDogMTVyZW07XG59XG5cbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbiN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEYyRjE7XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBGMkYxO1xufVxuXG5pLmljb24teWVsbG93IHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuaS5pY29uLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG5pLmljb24tcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/user-sidebar/user-sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user-sidebar/user-sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: UserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSidebarComponent", function() { return UserSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utility_services_screen_dimension_screen_dimension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/services/screen-dimension/screen-dimension.service */ "./src/app/utility/services/screen-dimension/screen-dimension.service.ts");



let UserSidebarComponent = class UserSidebarComponent {
    constructor(screenDimService) {
        this.screenDimService = screenDimService;
        this.minHeight = 30000;
    }
    ngOnInit() {
        this.screenDimService.minHeight.subscribe(height => {
            this.minHeight = Math.min(height, this.minHeight);
        });
        this.screenDimService.contentHeight.subscribe(height => {
            this.minHeight = Math.min(height, this.minHeight);
        });
    }
};
UserSidebarComponent.ctorParameters = () => [
    { type: _utility_services_screen_dimension_screen_dimension_service__WEBPACK_IMPORTED_MODULE_2__["ScreenDimensionService"] }
];
UserSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-sidebar',
        template: __webpack_require__(/*! raw-loader!./user-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/user-sidebar/user-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./user-sidebar.component.scss */ "./src/app/dashboard/user-sidebar/user-sidebar.component.scss")]
    })
], UserSidebarComponent);



/***/ }),

/***/ "./src/app/utility/services/topics/topic.ts":
/*!**************************************************!*\
  !*** ./src/app/utility/services/topics/topic.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Topic; });
class Topic {
    constructor(topic, stage, member_count, topic_id) {
        this.topic = topic;
        this.stage = stage;
        this.member_count = member_count;
        this.topic_id = topic_id;
    }
}
Topic.ctorParameters = () => [
    null,
    null,
    null,
    null
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map