(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angela\Guidscout\src\main.ts */"zUnb");


/***/ }),

/***/ "5rcd":
/*!********************************************************!*\
  !*** ./src/app/notfoundpage/notfoundpage.component.ts ***!
  \********************************************************/
/*! exports provided: NotfoundpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundpageComponent", function() { return NotfoundpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NotfoundpageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigate() {
        this.router.navigateByUrl('/dashboard');
    }
}
NotfoundpageComponent.ɵfac = function NotfoundpageComponent_Factory(t) { return new (t || NotfoundpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NotfoundpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundpageComponent, selectors: [["app-notfoundpage"]], decls: 7, vars: 0, consts: [[1, "notfoundpage"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function NotfoundpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotfoundpageComponent_Template_button_click_5_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".notfoundpage[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  text-shadow: #9e7d7d 5px 5px 5px;\n  padding-top: 20%;\n  font-size: xxx-large;\n  font-style: italic;\n  font-family: \"Times New Roman\", Times, serif;\n  background-image: url('404page.jpg');\n}\n\np[_ngcontent-%COMP%] {\n  padding: 1%;\n  color: firebrick;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGZvdW5kcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBRUEsb0NBQUE7QUFBQTs7QUFFQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNBIiwiZmlsZSI6Im5vdGZvdW5kcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZHBhZ2V7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IDEwMCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC1zaGFkb3c6IHJnYigxNTgsIDEyNSwgMTI1KSA1cHggNXB4IDVweDtcclxucGFkZGluZy10b3A6MjAlO1xyXG5mb250LXNpemU6IHh4eC1sYXJnZTtcclxuZm9udC1zdHlsZTogaXRhbGljO1xyXG5mb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuXHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzLzQwNHBhZ2UuanBnJyk7XHJcbn1cclxucHtcclxucGFkZGluZzogMSU7XHJcbmNvbG9yOiBmaXJlYnJpY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfoundpage',
                templateUrl: './notfoundpage.component.html',
                styleUrls: ['./notfoundpage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "6PAF":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar2/toolbarP.component.ts ***!
  \***********************************************************/
/*! exports provided: ToolbarPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarPComponent", function() { return ToolbarPComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/register/register.component */ "ZGml");
/* harmony import */ var src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/login/login.component */ "bsvf");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


















function ToolbarPComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angela");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 11, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarPComponent_div_7_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/profile");
} }
function ToolbarPComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarPComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const lang_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.setLanguage(lang_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r6.title);
} }
class ToolbarPComponent {
    constructor(form, 
    // private _translateService: TranslateService,
    authService) {
        this.form = form;
        this.authService = authService;
        this.search = this.form.group({
            searchControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        // Set the defaults
        this.userStatusOptions = [{
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];
        this.languages = [{
                id: 'fr',
                title: 'Français',
                flag: 'fr'
            },
            {
                id: 'it',
                title: 'Italien',
                flag: 'it'
            }
        ];
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.selectedLanguage = {
            id: 'fr',
            title: 'Français',
            flag: 'fr'
        };
        this.user = this.authService.user;
        console.log(this.user);
        // Subscribe to the config changes
        // Set the selected language from default languages
        // this.selectedLanguage = _.find(this.languages, {id: this._translateService.currentLang});
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    /**
     * Search
     *
     * @param value
     */
    // search(value:any): void
    // {
    //     // Do your search here...
    //     console.log(value);
    // }
    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang) {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;
        // Use the selected language for translations
        // this._translateService.use(lang.id);
    }
    openLogin() {
        this.authService.opendialog(src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]);
    }
    openRegister() {
        this.authService.opendialog(src_app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]);
    }
    logOut() {
        this.authService.logOut();
    }
}
ToolbarPComponent.ɵfac = function ToolbarPComponent_Factory(t) { return new (t || ToolbarPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ToolbarPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarPComponent, selectors: [["toolbarP"]], decls: 39, vars: 7, consts: [["fxFlex", "", "fxFill", "", "fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "1 0 auto", "fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "logo", "ml-16"], ["src", "", 1, "logo-icon"], ["fxFlex", "0 1 auto", "fxLayout", "row", "fxLayoutAlign", "space-around center", 1, ""], [4, "ngIf"], [1, "toolbar-separator"], ["mat-button", "", "fxHide", "", "fxShow.gt-xs", "", 1, "language-button", 3, "matMenuTriggerFor"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "iso", "text-uppercase"], [3, "overlapTrigger"], ["languageMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "routerLink"], ["fxHide", "", "fxShow.gt-xs", "", 1, "toolbar-separator"], ["fxLayout", "row", "fxLayoutAlign", "end center"], [1, "example-spacer"], ["mat-button", "", 1, "button-login", 3, "click"], ["fxFlex", "", "fxFill", "", "fxLayout", "row", "fxLayoutAlign", "start center"], [1, "search-view"], [3, "formGroup"], ["formControlName", "searchControl", "matInput", "", "placeholder", "..."], ["mat-icon-button", "", "matSuffix", ""], ["mat-button", "", 1, "user-button", 3, "matMenuTriggerFor"], ["fxHide", "", "fxShow.gt-sm", "", 1, "username", "mr-12"], ["fxHide.xs", "", 1, "s-16"], ["userMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "iso"]], template: function ToolbarPComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolbarPComponent_div_7_Template, 24, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ToolbarPComponent_button_16_Template, 4, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarPComponent_Template_button_click_25_listener() { return ctx.openLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarPComponent_Template_button_click_27_listener() { return ctx.openRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Signout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.x_token != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedLanguage.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/components/multi-language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.search);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultShowHideDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: [".logo {\n  display: flex;\n  align-items: center;\n}\n.logo .logo-icon {\n  width: 38px;\n}\n.toolbar-separator {\n  height: 64px;\n  width: 1px;\n}\n.search-view {\n  width: 250px;\n  box-shadow: #bbf7ff 5px 5px;\n  border-radius: 50%;\n}\n.button-login {\n  margin: 5%;\n  border-radius: 50%;\n  width: 60%;\n  height: 80%;\n  box-shadow: #bbf7ff 5px 5px 5px;\n}\n.example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b29sYmFyUC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxXQUFBO0FBQ1o7QUFHSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBQVI7QUFPQTtFQUVJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFPQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFKSjtBQU9BO0VBQ0ksY0FBQTtBQUpKIiwiZmlsZSI6InRvb2xiYXJQLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5sb2dvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAubG9nby1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRvb2xiYXItc2VwYXJhdG9yIHtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICB3aWR0aDogMXB4O1xuXG4gICAgICAgIC8vIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQoJ3hzJykge1xuICAgICAgICAvLyAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4uc2VhcmNoLXZpZXd7XG4gICBcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiKDE4NywgMjQ3LCAyNTUpIDVweCA1cHggO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idXR0b24tbG9naW57XG4gICAgbWFyZ2luOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3gtc2hhZG93OiByZ2IoMTg3LCAyNDcsIDI1NSkgNXB4IDVweCA1cHg7XG4gICAgXG59XG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarPComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'toolbarP',
                templateUrl: './toolbarP.component.html',
                styleUrls: ['./toolbarP.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/contact.model */ "Qo3f");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");













class ProfileComponent {
    constructor(form, authService, _snackBar, router) {
        this.form = form;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.contact = new src_app_auth_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"]({});
    }
    ngOnInit() {
        this.contact = this.authService.decodeToken();
        this.formProfile = this.createFormProfile();
    }
    createFormProfile() {
        return this.form.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.username || ''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.email || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.password || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5)]),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.adresse || ''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.city || ''),
            pays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.pays || ''),
            code_postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.code_postal || ''),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](['Admin']),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact.phone || '')
        });
    }
    profileUpdate() {
        console.log(this.formProfile.value);
        this.contact = this.formProfile.value;
        this.regAuth = this.authService.updateUser(this.contact).then(res => {
            if (!res.status) {
                this.openSnackBar('vérifier les champs');
            }
            else {
                this.openSnackBar('Profile modifié avec succés');
                this.authService.closedialog();
                this.router.navigateByUrl('/Profile');
            }
        });
    }
    openSnackBar(action) {
        this._snackBar.open('', action, {
            duration: 5000
        });
    }
    goback() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 70, vars: 2, consts: [[1, "formajout"], ["mat-fab", "", "color", "primary", 3, "routerLink"], ["svgIcon", "home"], [3, "formGroup"], [1, "input-style"], ["matSuffix", "", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "firstName", "placeholder", "Enter your name"], ["type", "text", "matInput", "", "formControlName", "lastName", "placeholder", "Enter your last name"], ["type", "text", "matInput", "", "formControlName", "username", "placeholder", "Enter your username"], ["matSuffix", "", "svgIcon", "mail", 1, "secondary-text"], ["type", "email", "matInput", "", "formControlName", "email", "placeholder", "Ex. pat@example.com"], ["type", "password", "matInput", "", "formControlName", "password"], ["type", "text", "matInput", "", "formControlName", "phone", "placeholder", ""], ["type", "text", "matInput", "", "formControlName", "adresse", "placeholder", ""], ["type", "text", "matInput", "", "formControlName", "city"], ["type", "text", "matInput", "", "formControlName", "pays"], ["type", "text", "matInput", "", "formControlName", "code_postal"], [2, "text-align", "center"], [1, "buttonstyle"], ["type", "submit", "mat-button", "", "color", "primary", 3, "click"], ["svgIcon", "edit"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ZIP code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_64_listener() { return ctx.profileUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_68_listener() { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formProfile);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".input-style[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: italic;\n  padding-left: 10%;\n}\n\n.formajout[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  width: 80%;\n  padding-left: 5%;\n  border: none;\n  box-shadow: #c4d1d1 5px 5px 5px;\n  background-color: #fcf5f5;\n}\n\n.titre[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: x-large;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: italic;\n  margin: 5%;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  width: 80%;\n}\n\n.buttonstyle[_ngcontent-%COMP%] {\n  margin: 1%;\n  font-size: large;\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0M7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQUlKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmlucHV0LXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxufVxyXG4uZm9ybWFqb3V0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMTk2LCAyMDksIDIwOSkgNXB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDUsIDI0NSk7XHJcbiAgICBcclxufS50aXRyZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuLmJ1dHRvbnN0eWxle1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "IzeU":
/*!***********************************!*\
  !*** ./src/app/svgicon.module.ts ***!
  \***********************************/
/*! exports provided: SvgIconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconModule", function() { return SvgIconModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




const MAIL = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    ' <g transform="translate(0 -1028.4)">' +
    ' <path d="m3 1033.4c-1.1046 0-2 0.9-2 2v3 2 2 2 3c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-7-2-3c0-1.1-0.895-2-2-2h-9-9z" fill="#7f8c8d"/>' +
    '  <path d="m3 1032.4c-1.1046 0-2 0.9-2 2v3 2 2 2 3c0 1.1 0.8954 2 2 2h9 9c1.105 0 2-0.9 2-2v-7-2-3c0-1.1-0.895-2-2-2h-9-9z" fill="#bdc3c7"/>' +
    '  <path d="m3 1048.4c-0.5523 0-1.0443-0.3-1.4062-0.6l10.406-10.4 10.406 10.4c-0.362 0.3-0.854 0.6-1.406 0.6h-18z" fill="#95a5a6"/>' +
    ' <path d="m1.8438 5l10.156 12 10.156-12h-20.312z" transform="translate(0 1028.4)" fill="#7f8c8d"/>' +
    ' <path d="m3 1032.4c-0.5523 0-1.0443 0.2-1.4062 0.6l10.406 10.4 10.406-10.4c-0.362-0.4-0.854-0.6-1.406-0.6h-18z" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const LOCK = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    ' <g transform="translate(0 -1028.4)">' +
    '  <path d="m5 1037.4c-1.1046 0-2 0.9-2 2v1 6 1c0 1.1 0.8954 2 2 2h2 10 2c1.105 0 2-0.9 2-2v-7-1c0-1.1-0.895-2-2-2h-2-12z" fill="#f1c40f"/>' +
    '  <path d="m5 1040.4c-1.1046 0-2 0.9-2 2v1 6 1c0 1.1 0.8954 2 2 2h2 10 2c1.105 0 2-0.9 2-2v-7-1c0-1.1-0.895-2-2-2h-2-12z" fill="#f39c12"/>' +
    '  <path d="m12 1029.4c-3.866 0-7 3.1-7 7h3c0-2.2 1.7909-4 4-4 2.209 0 4 1.8 4 4h3c0-3.9-3.134-7-7-7z" fill="#bdc3c7"/>' +
    '  <path d="m5 14v1h14v-1h-14zm0 2v1h14v-1h-14zm0 2v1h14v-1h-14zm0 2v1h14v-1h-14z" transform="translate(0 1028.4)" fill="#e67e22"/>' +
    '  <path d="m5 1037.4v1c0 0.5 0.6716 1 1.5 1s1.5-0.5 1.5-1v-1c0 0.5-0.6716 1-1.5 1s-1.5-0.5-1.5-1z" fill="#7f8c8d"/>' +
    '  <path d="m16 1037.4v1c0 0.5 0.672 1 1.5 1s1.5-0.5 1.5-1v-1c0 0.5-0.672 1-1.5 1s-1.5-0.5-1.5-1z" fill="#7f8c8d"/>' +
    '  <path d="m12 2.4375c-0.351 0-0.699 0.0338-1.031 0.0937-0.247 0.0446-0.487 0.1129-0.719 0.1876-0.217 0.0698-0.4229 0.1561-0.625 0.25-0.106 0.0492-0.2109 0.1008-0.3125 0.1562-0.1319 0.0719-0.2513 0.1682-0.375 0.25-0.1158 0.0765-0.2356 0.1342-0.3437 0.2188-0.1407 0.1097-0.2799 0.2211-0.4063 0.3437-0.0369 0.0362-0.0581 0.0878-0.0937 0.125-0.1684 0.1744-0.3313 0.3356-0.4688 0.5313-0.1402 0.1993-0.2704 0.4065-0.375 0.625-0.004 0.0084 0.004 0.0227 0 0.0312-0.1111 0.2359-0.2159 0.4959-0.2812 0.75-0.253 0.5844-0.9424 1-1.75 1-0.06 0-0.0832 0.0018-0.125 0-0.0105-0.0004-0.0168 0.0014-0.0313 0l-0.0625 1v1 1h3v-1-1c0-0.2761 0.0405-0.5521 0.0938-0.8125 0.3729-1.8227 1.9732-3.1875 3.9062-3.1875 2.209 0 4 1.7909 4 4v1 1h3v-1-1l-0.062-1c-0.015 0.0014-0.021-0.0004-0.032 0h-0.125c-0.807 0-1.497-0.4156-1.75-1-0.065-0.2541-0.17-0.5141-0.281-0.75-0.004-0.0085 0.004-0.0228 0-0.0312-0.105-0.2185-0.235-0.4257-0.375-0.625-0.138-0.1957-0.3-0.3569-0.469-0.5313-0.036-0.038-0.055-0.0881-0.094-0.125-0.126-0.1226-0.265-0.234-0.406-0.3437-0.104-0.0817-0.232-0.1448-0.344-0.2188-0.122-0.0809-0.244-0.1788-0.374-0.25-0.101-0.055-0.208-0.1074-0.313-0.1562-0.202-0.0939-0.408-0.1802-0.625-0.25-0.232-0.0747-0.472-0.143-0.719-0.1876-0.332-0.0599-0.68-0.0937-1.031-0.0937z" transform="translate(0 1028.4)" fill="#95a5a6"/>' +
    ' </g>' +
    '</svg>';
const KEY = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    ' <g transform="matrix(.70711 .70711 -.70711 .70711 740.06 298.16)">' +
    '  <path d="m10.541 1028.9c-3.3134 0-5.9997 2.6-5.9997 6 0 3.3 2.6863 6 5.9997 6 3.314 0 6-2.7 6-6 0-3.4-2.686-6-6-6zm0 2c1.105 0 2 0.9 2 2s-0.895 2-2 2c-1.1042 0-1.9997-0.9-1.9997-2s0.8955-2 1.9997-2z" fill="#f39c12"/>' +
    '  <g fill="#f1c40f">' +
    '   <path d="m10 0c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6c3.314 0 6-2.6863 6-6s-2.686-6-6-6zm0 2c1.105 0 2 0.8954 2 2s-0.895 2-2 2c-1.1046 0-2-0.8954-2-2s0.8954-2 2-2z" transform="translate(0 1028.4)"/>' +
    '   <rect height="2" width="6" y="1039.4" x="7"/>' +
    '   <path d="m8 13v9l2 2 2-2v-1l-2-1 2-1v-1l-1-1 1-1v-3z" transform="translate(0 1028.4)"/>' +
    '  </g>' +
    '  <path d="m11 1041.4v4l1-1v-3h-1zm0 4v2.5l1-0.5v-1l-1-1zm0 3.5v2.5l1-1v-1l-1-0.5z" fill="#f39c12"/>' +
    '  <path d="m9 1041.4v10l1 1v-4-7h-1z" fill="#f39c12"/>' +
    ' </g>' +
    '</g>' +
    '</svg>';
const KARROUSSA = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="59px" height="56px" viewBox="0 0 59 56" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>008 - Add Shopping Trolley</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="008---Add-Shopping-Trolley">' +
    '<circle id="Oval" fill="#95A5A5" cx="20" cy="51" r="4"/>' +
    '<circle id="Oval" fill="#95A5A5" cx="48" cy="51" r="4"/>' +
    '<path d="M58.35,15 L54.35,25 L53.55,27 L48.45,39.74 C48.1512796,40.5006042 47.4171611,41.0005984 46.6,41 L18.31,41 L17.92,41.14 L13.02,27 L12.33,25 L8.86,15 L58.35,15 Z" id="Path" fill="#BDC3C7"/>' +
    '<path d="M58.85,13.74 L58.35,15 L8.86,15 L7.47,11 L57,11 C57.6616896,11.0026657 58.2792309,11.3324316 58.6495,11.8808303 C59.0197692,12.4292289 59.0948325,13.1252665 58.85,13.74 Z" id="Path" fill="#3B97D3"/>' +
    '<path d="M39.03,41 L42.29,27 L53.55,27 L54.35,25 L42.76,25 L45.09,15 L43.04,15 L40.71,25 L26.29,25 L23.96,15 L21.91,15 L24.24,25 L13.382,25 L5.411,2.017 C4.99229998,0.809721181 3.85482308,0.000161937461 2.577,0 L1,0 C0.44771525,0 6.76353751e-17,0.44771525 0,1 C-6.76353751e-17,1.55228475 0.44771525,2 1,2 L2.577,2 C3.00297635,1.99986273 3.38227977,2.2695896 3.522,2.672 L19.009,47.328 C19.1485997,47.7300635 19.527391,47.9997115 19.953,48 L48,48 C48.5522847,48 49,47.5522847 49,47 C49,46.4477153 48.5522847,46 48,46 L20.665,46 L14.076,27 L24.71,27 L27.98,41 L30.02,41 L26.76,27 L40.24,27 L36.97,41 L39.03,41 Z" id="Path" fill="#95A5A5"/>' +
    '<path d="M20,56 C17.2385763,56 15,53.7614237 15,51 C15,48.2385763 17.2385763,46 20,46 C22.7614237,46 25,48.2385763 25,51 C24.9966939,53.7600532 22.7600532,55.9966939 20,56 Z M20,48 C18.3431458,48 17,49.3431458 17,51 C17,52.6568542 18.3431458,54 20,54 C21.6568542,54 23,52.6568542 23,51 C23,49.3431458 21.6568542,48 20,48 Z" id="Shape" fill="#393F4A" fill-rule="nonzero"/>' +
    '<path d="M48,56 C45.2385763,56 43,53.7614237 43,51 C43,48.2385763 45.2385763,46 48,46 C50.7614237,46 53,48.2385763 53,51 C52.9966939,53.7600532 50.7600532,55.9966939 48,56 Z M48,48 C46.3431458,48 45,49.3431458 45,51 C45,52.6568542 46.3431458,54 48,54 C49.6568542,54 51,52.6568542 51,51 C51,49.3431458 49.6568542,48 48,48 Z" id="Shape" fill="#393F4A" fill-rule="nonzero"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="20" cy="51" r="1"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="48" cy="51" r="1"/>' +
    '<path d="M40,50 L28,50 C27.4477153,50 27,50.4477153 27,51 C27,51.5522847 27.4477153,52 28,52 L40,52 C40.5522847,52 41,51.5522847 41,51 C41,50.4477153 40.5522847,50 40,50 Z" id="Path" fill="#7F8C8D"/>' +
    '<circle id="Oval" fill="#24AE5F" cx="50" cy="13" r="9"/>' +
    '<path d="M54,12 L51,12 L51,9 C51,8.44771525 50.5522847,8 50,8 C49.4477153,8 49,8.44771525 49,9 L49,12 L46,12 C45.4477153,12 45,12.4477153 45,13 C45,13.5522847 45.4477153,14 46,14 L49,14 L49,17 C49,17.5522847 49.4477153,18 50,18 C50.5522847,18 51,17.5522847 51,17 L51,14 L54,14 C54.5522847,14 55,13.5522847 55,13 C55,12.4477153 54.5522847,12 54,12 Z" id="Path" fill="#FFFFFF"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const INTERDI = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m12 1031.4c-2.2482 0-4.3298 0.7-6 2-2.4327 1.8-4 4.7-4 8 0 5.5 4.4772 10 10 10 5.523 0 10-4.5 10-10 0-5.6-4.477-10-10-10zm0 3c3.866 0 7 3.1 7 7 0 1.4-0.426 2.7-1.156 3.8l-9.6878-9.7c1.1055-0.7 2.4198-1.1 3.8438-1.1zm-5.9375 3.3 9.6255 9.6c-1.073 0.7-2.331 1.1-3.688 1.1-3.866 0-7-3.2-7-7 0-1.4 0.3937-2.7 1.0625-3.7z" fill="#c0392b"/>' +
    '<path d="m12 2c-2.2482 0-4.3298 0.7477-6 2-2.4327 1.8241-4 4.7254-4 8 0 5.523 4.4772 10 10 10 5.523 0 10-4.477 10-10 0-5.5228-4.477-10-10-10zm0 3c3.866 0 7 3.134 7 7 0 1.424-0.426 2.738-1.156 3.844l-9.6878-9.6878c1.1055-0.7305 2.4198-1.1562 3.8438-1.1562zm-5.9375 3.3125l9.6255 9.6255c-1.073 0.668-2.331 1.062-3.688 1.062-3.866 0-7-3.134-7-7 0-1.357 0.3937-2.6145 1.0625-3.6875z" transform="translate(0 1028.4)" fill="#e74c3c"/>' +
    '</g>' +
    '</svg>';
const HOME = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<rect height="5.9999" width="3" y="1031.4" x="17" fill="#c0392b"/>' +
    '<path d="m12 3.0312l-9 8.9688v1.812 5.376 1.812h1 8 8 1v-1.812-5.376-1.812l-9-8.9688z" transform="translate(0 1028.4)" fill="#bdc3c7"/>' +
    '<path fill="#95a5a6" d="m12 1032-9 8.9v1.9 0.1l9-9 9 9v-0.1-1.9l-9-8.9z"/>' +
    '<g>' +
    '<path d="m12 1029.4-11.314 11.3 1.4145 1.4 9.8995-9.9 9.899 9.9 1.415-1.4-11.314-11.3z" fill="#e74c3c"/>' +
    '<path d="m14 9a2 2 0 1 1 -4 0 2 2 0 1 1 4 0z" transform="translate(0 1029.4)" fill="#3498db"/>' +
    '<rect height="6" width="4" y="1043.4" x="10" fill="#e67e22"/>' +
    '<path d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z" transform="translate(1.5 1029.4)" fill="#d35400"/>' +
    '<path d="m12 1036.4c-1.105 0-2 0.9-2 2 0 0.1 0.021 0.3 0.062 0.5 0.222-0.9 1.006-1.5 1.938-1.5s1.716 0.6 1.938 1.5c0.041-0.2 0.062-0.4 0.062-0.5 0-1.1-0.895-2-2-2z" fill="#2980b9"/>' +
    '<path d="m12 17.5a0.5 0.5 0 1 1 -1 0 0.5 0.5 0 1 1 1 0z" transform="translate(1.5 1028.9)" fill="#f1c40f"/>' +
    '<rect height="1" width="4" y="1042.4" x="10" fill="#d35400"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const HAND = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m13.562 6.0312l-4.1245 6.7808 5.7815 2.438-0.219 1.75 1 1 7-3-1.719-3.031 0.875-0.813-2.062-1.2185-1.094-1.9375-1.375 0.4688-4.063-2.4376z" transform="translate(0 1028.4)" fill="#bdc3c7"/>' +
    '<path fill="#7f8c8d" d="m5 1036.4c-1.3333 2.3-2.6667 4.6-4 7l11.442 4.5c0.427 0.4 1.13 0.6 1.694 0.3 0.5-0.2 0.076-1.6 0.792-0.9 0.928 0.4 1.652-0.7 1.495-1.5 0.521 0.6 1.695 0.6 1.957-0.3 0.122-0.4-0.23-1.2 0.523-0.9 0.848 0 1.186-0.9 1.087-1.7-0.38-0.5-1.074-0.9-1.597-1.3-2.464-1.8-4.929-3.5-7.393-5.2h-6z"/>' +
    '<path fill="#95a5a6" d="m5 1036.4c-0.7615 1.3-1.5197 2.6-2.2812 4h13.969c-1.892-1.4-3.797-2.7-5.688-4h-6z"/>' +
    '<g>' +
    '<path d="m1 1045.4 2 1 4-10-6-3z" fill="#ecf0f1"/>' +
    '<path d="m1 1040.4v5l2 1 2.4023-6z" fill="#ecf0f1"/>' +
    '<path d="m0 17 2 1 4-11-6-3z" transform="translate(0 1028.4)" fill="#3498db"/>' +
    '<path fill="#2980b9" d="m0 1040.4v5l2 1 2.1875-6h-4.1875z"/>' +
    '<path d="m13.451 1034.3c-0.717-0.4-1.635-0.2-2.049 0.6l-0.75 1.3-0.7501 1.3-0.9019 1.9 1 1c0.717 0.4 2.086-0.7 2.5-1.4l1.5-2.6c0.414-0.8 0.168-1.7-0.549-2.1z" fill="#bdc3c7"/>' +
    '<path d="m5.015 1043.7c-0.5335-0.2-1.0818 0.1-1.2248 0.7l-0.5176 1.9c-0.143 0.5 0.1736 1.1 0.7071 1.2 0.5335 0.2 1.0818-0.2 1.2247-0.7-0.1429 0.5 0.1737 1.1 0.7072 1.2 0.5334 0.2 1.0818-0.1 1.2247-0.7-0.1429 0.6 0.1736 1.1 0.7071 1.3 0.5335 0.1 1.0818-0.2 1.2247-0.8-0.1429 0.6 0.1737 1.1 0.7072 1.3 0.5337 0.1 1.0817-0.2 1.2247-0.7l0.518-2c0.143-0.5-0.174-1.1-0.707-1.2-0.534-0.1-1.0823 0.2-1.2252 0.7 0.1429-0.5-0.1737-1.1-0.7071-1.2-0.5335-0.2-1.0818 0.2-1.2248 0.7 0.143-0.5-0.1736-1.1-0.7071-1.2-0.5334-0.2-1.0818 0.1-1.2247 0.7 0.1429-0.6-0.1737-1.1-0.7071-1.2z" fill="#bdc3c7"/>' +
    '<path d="m23 1045.4-2 1-4-10 6-3z" fill="#ecf0f1"/>' +
    '<path d="m24 1045.4-2 1-4-11 6-3z" fill="#3498db"/>' +
    '<path fill="#2980b9" d="m24 1040.4v5l-2 1-2.188-6h4.188z"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const GENTEL = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m8 1044.4c-2.2849 1.1-4.5727 2.2-6.856 3.4-0.89518 0.5-1.2293 1.6-1.144 2.6 0.041664 0.6-0.18109 1.4 0.44089 1.8 0.59091 0.3 1.2837 0.1 1.9252 0.2h20.736c0.769-0.1 0.973-0.9 0.898-1.5 0.014-1 0.068-2-0.658-2.7-0.591-0.6-1.435-0.9-2.157-1.3-1.728-0.8-3.457-1.7-5.185-2.5h-8z" fill="#2c3e50"/>' +
    '<path d="m8 16h8l-2 8h-4l-2-8z" transform="translate(0 1028.4)" fill="#bdc3c7"/>' +
    '<path d="m10 18v3l1 1-1 2h4l-1-2 1-1v-3h-4z" transform="translate(0 1028.4)" fill="#2c3e50"/>' +
    '<rect height="5" width="6" y="1041.4" x="9" fill="#95a5a6"/>' +
    '<path d="m8 16 1-1 3 3 3-3 1 1-2 5-2-3-2 3z" transform="translate(0 1028.4)" fill="#ecf0f1"/>' +
    '<path d="m12 0c-2.9626 0-5.418 2.6899-5.9062 6.2188-0.1135-0.031-0.2401-0.0651-0.3438-0.0313-0.5251 0.171-0.6545 1.1685-0.3125 2.2187 0.2007 0.6163 0.5346 1.1015 0.875 1.375 0.7763 3.0178 3.015 5.2188 5.6875 5.2188 2.672 0 4.911-2.201 5.688-5.2188 0.34-0.2736 0.674-0.7588 0.874-1.375 0.342-1.0502 0.213-2.0477-0.312-2.2187-0.104-0.0338-0.23 0.0003-0.344 0.0313-0.488-3.529-2.943-6.2188-5.906-6.2188z" transform="translate(0 1028.4)" fill="#bdc3c7"/>' +
    '<path d="m8 16l-2 1v3h2l-2 1 2 3h2l-2-8zm8 0l-2 8h2l2-3-2-1h2v-3l-2-1z" transform="translate(0 1028.4)" fill="#34495e"/>' +
    '<path d="m12 1028.4c-2.0429-0.1-3.9387 1.3-4.9801 3.2-0.5302 0.9-0.8839 2-1.0398 3 0.3344-0.1 0.6002 0.1 0.903-0.3 0.629-0.6 0.9084-1.1 1.1368-1.9 0.3901-0.9 1.2432-2.3 2.0001-2 0.693 0.2 1 0.6 2 0.6s1.307-0.4 2-0.6c0.757-0.3 1.61 1.1 2 2 0.228 0.8 0.468 1.3 1.097 1.9 0.303 0.4 0.568 0.2 0.903 0.3-0.156-1-0.51-2.1-1.04-3-1.041-1.9-2.937-3.3-4.98-3.2z" fill="#34495e"/>' +
    '</g>' +
    '</svg>';
const EDIT = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<g transform="matrix(1.0607 1.0607 -1.0607 1.0607 1146.8 34.926)">' +
    '<path d="m-63 1003.4v11.3 0.7 1l2 2 2-2v-1-0.7-11.3h-4z" fill="#ecf0f1"/>' +
    '<path d="m-61 1003.4v15l2-2v-1-0.7-11.3h-2z" fill="#bdc3c7"/>' +
    '<rect height="11" width="4" y="1004.4" x="-63" fill="#e67e22"/>' +
    '<path d="m-61 1000.4c-1.105 0-2 0.9-2 2v1h4v-1c0-1.1-0.895-2-2-2z" fill="#7f8c8d"/>' +
    '<g transform="translate(-7,1)">' +
    '<path d="m-55.406 1016 1.406 1.4 1.406-1.4h-1.406-1.406z" fill="#34495e"/>' +
    '<path d="m-54 1016v1.4l1.406-1.4h-1.406z" fill="#2c3e50"/>' +
    '</g>' +
    '<path d="m-61 1000.4c-1.105 0-2 0.9-2 2v1h2v-3z" fill="#95a5a6"/>' +
    '<rect height="11" width="2" y="1004.4" x="-61" fill="#d35400"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const DELETE = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1029.4)" fill="#c0392b"/>' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1028.4)" fill="#e74c3c"/>' +
    '<path d="m7.0503 1037.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z" fill="#c0392b"/>' +
    '<path d="m7.0503 1036.8 3.5357 3.6-3.5357 3.5 1.4142 1.4 3.5355-3.5 3.536 3.5 1.414-1.4-3.536-3.5 3.536-3.6-1.414-1.4-3.536 3.5-3.5355-3.5-1.4142 1.4z" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const CORBEILLE = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m3 1032.4v4 2 3 1 1 1 5c0 1.1 0.8954 2 2 2h7 7c1.105 0 2-0.9 2-2v-5-1-1-1-3-2-4c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z" fill="#bdc3c7"/>' +
    '<path d="m3 1033.4v4 0.7c0.2945 0.2 0.635 0.3 1 0.3h2 5 2 5 2c0.365 0 0.705-0.1 1-0.3v-0.7-4c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z" fill="#95a5a6"/>' +
    '<path d="m12 1037.4h-1.156l-1.9378 3.3 1.7498 1 1.344-2.3 1 1.7-0.875 0.5 2.75 0.8 0.719-2.8-0.875 0.5-1.563-2.7h-0.031-1.125zm-2.5625 5-2.75 0.8 0.875 0.5-1.5937 2.7 1.1562 2h3.875v-2h-2.7188l1-1.7 0.8748 0.5-0.7185-2.8zm6.9375 0.6-1.719 1 1.344 2.4h-2v-1l-2 2 2 2v-1h3.156 0.032l1.124-2-1.937-3.4z" fill="#27ae60"/>' +
    '<path d="m3 1049.4v1c0 1.1 0.8954 2 2 2h7 7c1.105 0 2-0.9 2-2v-1c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z" fill="#95a5a6"/>' +
    '<path d="m4 1029.4c-1.1046 0-2 0.9-2 2v1 1 1 1c0 1.1 0.8954 2 2 2h2 5 2 5 2c1.105 0 2-0.9 2-2v-1-1-1-1c0-1.1-0.895-2-2-2h-2-5-2-5-2z" fill="#bdc3c7"/>' +
    '<path d="m5 1030.4c-0.5523 0-1 0.4-1 1v1 1 1c0 0.5 0.4477 1 1 1h14c0.552 0 1-0.5 1-1v-1-1-1c0-0.6-0.448-1-1-1h-14z" fill="#7f8c8d"/>' +
    '<path d="m12 1037.4h-1.156l-0.563 1h3.438l-0.563-1h-0.031-1.125z" fill="#7f8c8d"/>' +
    '<path d="m10.438 1.4375l-0.7818 0.5625-0.375 0.2812-0.2812-0.2812-1 1h-1l-1-1-2 2v1 1c0 0.5523 0.4477 1 1 1h3 11c0.552 0 1-0.4477 1-1l-1-1v-1h-1l-1-1h-2v-0.5h-1l-0.312-0.5-0.282-0.4062-0.406 0.4062-1 1-1-1-0.562-0.5625z" transform="translate(0 1028.4)" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const CLOSED = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58px" height="48px" viewBox="0 0 58 48" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>067 - Closed</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="067---Closed">' +
    '<path d="M51.1,20.084 L29.636,2.407 C29.6064044,2.38902586 29.5756731,2.37299214 29.544,2.359 C29.4888701,2.32145234 29.4298646,2.28993807 29.368,2.265 C29.3099212,2.241126 29.2496294,2.22303845 29.188,2.211 C29.0638151,2.18700548 28.9361849,2.18700548 28.812,2.211 C28.7504057,2.22318032 28.6901275,2.24126378 28.632,2.265 C28.5701354,2.28993807 28.5111299,2.32145234 28.456,2.359 C28.4243269,2.37299214 28.3935956,2.38902586 28.364,2.407 L6.509,20.4 C6.18211812,20.6682711 6.05931738,21.1131544 6.20229816,21.5111213 C6.34527894,21.9090882 6.72312892,22.1740987 7.146,22.173 C7.37749023,22.1734612 7.60182278,22.0927864 7.78,21.945 L29,4.476 L49.833,21.629 C50.2613484,21.949931 50.8664491,21.8766821 51.2058482,21.4628134 C51.5452473,21.0489447 51.4985933,20.4412148 51.1,20.084 Z" id="Path" fill="#CBB292"/>' +
    '<rect id="Rectangle" fill="#FF5364" x="0" y="18" width="58" height="30" rx="2"/>' +
    '<circle id="Oval" fill="#F0C419" cx="29" cy="4" r="4"/>' +
    '<path d="M24,26 L23,26 C20.790861,26 19,27.790861 19,30 L19,36 C19,38.209139 20.790861,40 23,40 L24,40 C26.209139,40 28,38.209139 28,36 L28,30 C28,27.790861 26.209139,26 24,26 Z M26,36 C26,37.1045695 25.1045695,38 24,38 L23,38 C21.8954305,38 21,37.1045695 21,36 L21,30 C21,28.8954305 21.8954305,28 23,28 L24,28 C25.1045695,28 26,28.8954305 26,30 L26,36 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M51,26 L47,26 C46.4477153,26 46,26.4477153 46,27 L46,39 C46,39.5522847 46.4477153,40 47,40 L51,40 C53.209139,40 55,38.209139 55,36 L55,30 C55,27.790861 53.209139,26 51,26 Z M53,36 C53,37.1045695 52.1045695,38 51,38 L48,38 L48,28 L51,28 C52.1045695,28 53,28.8954305 53,30 L53,36 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M18,38 L15,38 L15,27 C15,26.4477153 14.5522847,26 14,26 C13.4477153,26 13,26.4477153 13,27 L13,39 C13,39.5522847 13.4477153,40 14,40 L18,40 C18.5522847,40 19,39.5522847 19,39 C19,38.4477153 18.5522847,38 18,38 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M33,28 C34.1045695,28 35,28.8954305 35,30 C35,30.5522847 35.4477153,31 36,31 C36.5522847,31 37,30.5522847 37,30 C37,27.790861 35.209139,26 33,26 C30.790861,26 29,27.790861 29,30 C29,32.209139 30.790861,34 33,34 C34.1045695,34 35,34.8954305 35,36 C35,37.1045695 34.1045695,38 33,38 C31.8954305,38 31,37.1045695 31,36 C31,35.4477153 30.5522847,35 30,35 C29.4477153,35 29,35.4477153 29,36 C29,38.209139 30.790861,40 33,40 C35.209139,40 37,38.209139 37,36 C37,33.790861 35.209139,32 33,32 C31.8954305,32 31,31.1045695 31,30 C31,28.8954305 31.8954305,28 33,28 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M7,28 L8,28 C9.1045695,28 10,28.8954305 10,30 C10,30.5522847 10.4477153,31 11,31 C11.5522847,31 12,30.5522847 12,30 C12,27.790861 10.209139,26 8,26 L7,26 C4.790861,26 3,27.790861 3,30 L3,36 C3,38.209139 4.790861,40 7,40 L8,40 C10.209139,40 12,38.209139 12,36 C12,35.4477153 11.5522847,35 11,35 C10.4477153,35 10,35.4477153 10,36 C10,37.1045695 9.1045695,38 8,38 L7,38 C5.8954305,38 5,37.1045695 5,36 L5,30 C5,28.8954305 5.8954305,28 7,28 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M44,28 C44.5522847,28 45,27.5522847 45,27 C45,26.4477153 44.5522847,26 44,26 L39,26 C38.4477153,26 38,26.4477153 38,27 L38,39 C38,39.5522847 38.4477153,40 39,40 L44,40 C44.5522847,40 45,39.5522847 45,39 C45,38.4477153 44.5522847,38 44,38 L40,38 L40,34 L43,34 C43.5522847,34 44,33.5522847 44,33 C44,32.4477153 43.5522847,32 43,32 L40,32 L40,28 L44,28 Z" id="Path" fill="#FFFFFF"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const CARTEBANQ = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58px" height="40px" viewBox="0 0 58 40" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>048 - Add Payment Card</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="048---Add-Payment-Card">' +
    '<path d="M41.52,36 L4,36 C1.790861,36 2.22044605e-16,34.209139 0,32 L0,4 C-2.22044605e-16,1.790861 1.790861,0 4,0 L50,0 C52.209139,0 54,1.790861 54,4 L54,23.52 L41.52,36 Z" id="Path" fill="#F29C1F"/>' +
    '<rect id="Rectangle" fill="#464F5D" x="0" y="6" width="54" height="8"/>' +
    '<path d="M7,25 L5,25 C4.44771525,25 4,24.5522847 4,24 C4,23.4477153 4.44771525,23 5,23 L7,23 C7.55228475,23 8,23.4477153 8,24 C8,24.5522847 7.55228475,25 7,25 Z" id="Path" fill="#F3D55B"/>' +
    '<path d="M13,25 L11,25 C10.4477153,25 10,24.5522847 10,24 C10,23.4477153 10.4477153,23 11,23 L13,23 C13.5522847,23 14,23.4477153 14,24 C14,24.5522847 13.5522847,25 13,25 Z" id="Path" fill="#F3D55B"/>' +
    '<path d="M19,25 L17,25 C16.4477153,25 16,24.5522847 16,24 C16,23.4477153 16.4477153,23 17,23 L19,23 C19.5522847,23 20,23.4477153 20,24 C20,24.5522847 19.5522847,25 19,25 Z" id="Path" fill="#F3D55B"/>' +
    '<path d="M25,25 L23,25 C22.4477153,25 22,24.5522847 22,24 C22,23.4477153 22.4477153,23 23,23 L25,23 C25.5522847,23 26,23.4477153 26,24 C26,24.5522847 25.5522847,25 25,25 Z" id="Path" fill="#F3D55B"/>' +
    '<path d="M58,31 C58.003238,35.1324722 55.1939289,38.7369928 51.1857912,39.7430592 C47.1776536,40.7491256 42.9990957,38.8986012 41.0503577,35.2544611 C39.1016197,31.610321 39.8827089,27.107579 42.9449534,24.3326924 C46.0071979,21.5578058 50.5648867,21.2227553 54,23.52 C56.4983677,25.1892918 57.9988932,27.9952745 58,31 Z" id="Path" fill="#24AE5F"/>' +
    '<path d="M53,30 L50,30 L50,27 C50,26.4477153 49.5522847,26 49,26 C48.4477153,26 48,26.4477153 48,27 L48,30 L45,30 C44.4477153,30 44,30.4477153 44,31 C44,31.5522847 44.4477153,32 45,32 L48,32 L48,35 C48,35.5522847 48.4477153,36 49,36 C49.5522847,36 50,35.5522847 50,35 L50,32 L53,32 C53.5522847,32 54,31.5522847 54,31 C54,30.4477153 53.5522847,30 53,30 Z" id="Path" fill="#FFFFFF"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const CARLOVE = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
    'viewBox="0 0 61.5 52.5" enable-background="new 0 0 61.5 52.5" xml:space="preserve">' +
    '<g>' +
    '<path fill="#F9BEC7" d="M23.5,36.6h-5.8V24.4c0-1.1,0.9-2,2-2c1,0,1.8,0.7,1.9,1.7L23.5,36.6z M23.5,36.6"/>' +
    '<path fill="#F7ABB7" d="M19.7,22.4c0,0-0.1,0-0.1,0l1.1,14.2h2.9l-1.9-12.5c0-0.3-0.2-0.6-0.4-0.9C20.8,22.7,20.3,22.4,19.7,22.4' +
    'L19.7,22.4z M19.7,22.4"/>' +
    '<path fill="#A498A2" d="M45.4,32.5l-4.3-7.3c-0.2-0.4-0.6-0.6-1-0.6c-0.8,0-1.4,0.8-1.1,1.6l2.6,7.6h3.8V32.5"/>' +
    '<path fill="#C1BAC0" d="M43.9,33.7h1.5v-1.2l-4.3-7.3c-0.2-0.4-0.6-0.6-1-0.6c-0.2,0-0.4,0.1-0.6,0.1L43.9,33.7z M43.9,33.7"/>' +
    '<path fill="#978A94" d="M58.7,36.7c0-1.4-1.1-2.7-2.5-2.8l-10.7-1.4H20.8c-0.9,0-1.7-0.8-1.7-1.7c0-1-0.9-1.8-1.9-1.7L6.4,30.3' +
    'c-1.2,0.1-2,1.1-2,2.3V40H3.2c-0.6,0-1.2,0.5-1.2,1.2v1.3c0,0.7,0.5,1.2,1.2,1.2h55.4V36.7z M58.7,36.7"/>' +
    '<path fill="#8B7D88" d="M4.4,40H3.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0' +
    'c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0' +
    'c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0' +
    'c0,0,0,0.1,0,0.1v1.3c0,0.1,0,0.2,0,0.2c0,0,0,0.1,0,0.1c0.1,0.4,0.4,0.7,0.8,0.8c0.1,0,0.2,0.1,0.4,0.1h55.4V40L4.4,40z M4.4,40"' +
    '/>' +
    '<path fill="#8B7D88" d="M56.2,33.8l-5.3-0.7c1,0.5,1.6,1.4,1.6,2.6v7.9h6.2v-7C58.7,35.2,57.6,34,56.2,33.8L56.2,33.8z M56.2,33.8"' +
    '/>' +
    '<path fill="#CFC9CE" d="M60.1,40.1h-7.6v3.5H60c0.6,0,1.1-0.5,1.1-1.1v-1.4C61.1,40.6,60.6,40.1,60.1,40.1L60.1,40.1z M60.1,40.1"' +
    '/>' +
    '<path fill="#C1BAC0" d="M60,41.9h-7.5v1.8H60c0.6,0,1.1-0.5,1.1-1.1v-1.4c0-0.1,0-0.1,0-0.2C61,41.5,60.5,41.9,60,41.9L60,41.9z' +
    'M60,41.9"/>' +
    '<g>' +
    '<defs>' +
    '<rect id="SVGID_1_" x="2.1" y="2.8" width="59.1" height="46.1"/>' +
    '</defs>' +
    '<clipPath id="SVGID_2_">' +
    '<use xlink:href="#SVGID_1_"  overflow="visible"/>' +
    '</clipPath>' +
    '<path clip-path="url(#SVGID_2_)" fill="#655160" d="M54.6,43.1c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7' +
    'c0-3.2,2.6-5.7,5.7-5.7C52,37.3,54.6,39.9,54.6,43.1L54.6,43.1z M54.6,43.1"/>' +
    '<path clip-path="url(#SVGID_2_)" fill="#554051" d="M52.9,47.1c2.2-2.2,2.2-5.9,0-8.1l-8.1,8.1C47.1,49.4,50.7,49.4,52.9,47.1' +
    'L52.9,47.1z M52.9,47.1"/>' +
    '</g>' +
    '<path fill="#FACDD4" d="M22.9,35.1h-1.8c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h1.8c0.5,0,0.9-0.4,0.9-0.9' +
    'C23.8,35.5,23.4,35.1,22.9,35.1L22.9,35.1z M22.9,35.1"/>' +
    '<path fill="#CFC9CE" d="M51.2,43.1c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3C50.1,40.8,51.2,41.8,51.2,43.1' +
    'L51.2,43.1z M51.2,43.1"/>' +
    '<path fill="#F6A1AF" d="M36.8,3c-2.1,0-4,1-5.2,2.5C30.4,4,28.5,3,26.4,3c-3.7,0-6.6,3-6.6,6.6c0,8.3,11.8,12.9,11.8,12.9' +
    'S43.4,18,43.4,9.6C43.4,6,40.5,3,36.8,3L36.8,3z M36.8,3"/>' +
    '<path fill="#F593A3" d="M36.8,3c-1.1,0-2.2,0.3-3.2,0.8c2.1,1.1,3.5,3.3,3.5,5.8c0,5.2-2.7,9.7-5.5,12.9c0,0,0,0,0,0' +
    ' S43.4,18,43.4,9.6C43.4,6,40.5,3,36.8,3L36.8,3z M36.8,3"/>' +
    '<path fill="#CFC9CE" d="M3.2,40c-0.1,0-0.3,0-0.4,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0' +
    'c-0.1,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.3v1.3c0,0.7,0.5,1.2,1.2,1.2h7.5V40' +
    'L3.2,40z M3.2,40"/>' +
    '<path fill="#C1BAC0" d="M2.1,40.8c0,0.1,0,0.2,0,0.3v1.3c0,0.7,0.5,1.2,1.2,1.2h7.5v-1.8H3.3C2.7,41.8,2.2,41.4,2.1,40.8L2.1,40.8z' +
    'M2.1,40.8"/>' +
    '<path fill="#655160" d="M19.4,43.1c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7' +
    ' C16.8,37.3,19.4,39.9,19.4,43.1L19.4,43.1z M19.4,43.1"/>' +
    '<g>' +
    '<defs>' +
    '<rect id="SVGID_3_" x="2.1" y="2.8" width="59.1" height="46.1"/>' +
    '</defs>' +
    '<clipPath id="SVGID_4_">' +
    '<use xlink:href="#SVGID_3_"  overflow="visible"/>' +
    '</clipPath>' +
    '<path clip-path="url(#SVGID_4_)" fill="#655160" d="M19.4,43.1c0,3.2-2.6,5.7-5.7,5.7c-3.2,0-5.7-2.6-5.7-5.7' +
    ' c0-3.2,2.6-5.7,5.7-5.7C16.8,37.3,19.4,39.9,19.4,43.1L19.4,43.1z M19.4,43.1"/>' +
    '<path clip-path="url(#SVGID_4_)" fill="#554051" d="M17.7,47.1c2.2-2.2,2.2-5.9,0-8.1l-8.1,8.1C11.8,49.4,15.5,49.4,17.7,47.1' +
    ' L17.7,47.1z M17.7,47.1"/>' +
    '</g>' +
    '<path fill="#CFC9CE" d="M16,43.1c0,1.3-1,2.3-2.3,2.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3C14.9,40.8,16,41.8,16,43.1L16,43.1' +
    'z M16,43.1"/>' +
    '</g>' +
    '</svg>';
const CAMPER = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
    'viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">' +
    '<path style="fill:#ABFFDB;" d="M251.762,79.646h162.846c30.69,0,60.849,8.009,87.495,23.236l0,0' +
    'c4.207,2.404,2.501,8.829-2.345,8.829H166.61c-4.846,0-6.552-6.424-2.344-8.829l0,0C190.913,87.656,221.072,79.646,251.762,79.646z"' +
    '/>' +
    '<path style="fill:#FFC850;" d="M482.856,240.307l-28.777-80.573c-3.418-9.571-12.484-15.96-22.647-15.96H80.559' +
    'c-10.163,0-19.229,6.389-22.647,15.96l-28.777,80.573c-3.709,10.384-5.604,21.328-5.604,32.354v111.594h464.928V272.661' +
    'C488.46,261.635,486.564,250.691,482.856,240.307z"/>' +
    '<path style="fill:#ABFFDB;" d="M29.136,240.307c-2.736,7.661-4.468,15.629-5.198,23.707h464.116' +
    'c-0.729-8.079-2.462-16.047-5.198-23.707l-23.025-64.469H52.161L29.136,240.307z"/>' +
    '<g>' +
    '<path style="fill:#FFFFFF;" d="M23.532,272.661v111.594h464.928V272.661c0-2.892-0.147-5.775-0.406-8.646H23.938' +
    'C23.679,266.886,23.532,269.769,23.532,272.661z"/>' +
    '<path style="fill:#FFFFFF;" d="M304.092,264.015H207.9c-8.854,0-16.032-7.178-16.032-16.032v-24.048' +
    'c0-8.854,7.178-16.032,16.032-16.032h96.192c8.854,0,16.032,7.178,16.032,16.032v24.048' +
    'C320.124,256.837,312.946,264.015,304.092,264.015z"/>' +
    '<path style="fill:#FFFFFF;" d="M352.189,223.934v24.048c0,8.854,7.178,16.032,16.032,16.032h65.265' +
    'c10.87,0,18.65-10.606,15.31-20.951c-0.298-0.923-0.61-1.842-0.937-2.757l-7.773-21.766c-2.279-6.381-8.323-10.64-15.098-10.64' +
    'H368.22C359.365,207.903,352.189,215.081,352.189,223.934z"/>' +
    '<path style="fill:#FFFFFF;" d="M159.805,223.934v24.048c0,8.854-7.178,16.032-16.032,16.032H78.507' +
    'c-10.87,0-18.651-10.606-15.31-20.951c0.298-0.923,0.61-1.842,0.937-2.757l7.773-21.766c2.279-6.381,8.323-10.64,15.098-10.64' +
    'h56.767C152.627,207.903,159.805,215.081,159.805,223.934z"/>' +
    '</g>' +
    '<path style="fill:#FF8031;" d="M480.444,296.078c-8.854,0-16.032,7.178-16.032,16.032c0,8.854,7.178,16.032,16.032,16.032h8.016' +
    'v-32.064L480.444,296.078L480.444,296.078z"/>' +
    '<g>' +
    '<path style="fill:#FFC850;" d="M488.054,264.015H63.612v8.016c0,8.854,7.178,16.032,16.032,16.032H488.46v-15.402' +
    'C488.46,269.769,488.313,266.886,488.054,264.015z"/>' +
    '<path style="fill:#FFC850;" d="M441.394,352.189c-4.137,0-8.217-1.497-11.09-4.474c-11.642-12.062-27.957-19.574-46.052-19.574' +
    'c-18.096,0-34.41,7.512-46.052,19.574c-2.873,2.977-6.953,4.474-11.09,4.474H184.882c-4.137,0-8.217-1.497-11.09-4.474' +
    'c-11.642-12.062-27.957-19.574-46.052-19.574s-34.41,7.512-46.052,19.574c-2.873,2.977-6.953,4.474-11.09,4.474l-47.065,0.001' +
    'v32.064H488.46V352.19L441.394,352.189z"/>' +
    '</g>' +
    '<circle style="fill:#C3C8D1;" cx="127.738" cy="392.273" r="40.079"/>' +
    '<g>' +
    '<path style="fill:#E4EAF8;" d="M47.58,400.287H15.516c-4.427,0-8.016-3.589-8.016-8.016v-16.032c0-4.427,3.589-8.016,8.016-8.016' +
    'h32.063c4.427,0,8.016,3.589,8.016,8.016v16.032C55.596,396.698,52.007,400.287,47.58,400.287z"/>' +
    '<path style="fill:#E4EAF8;" d="M496.476,400.287h-32.064c-4.427,0-8.016-3.589-8.016-8.016v-16.032' +
    'c0-4.427,3.589-8.016,8.016-8.016h32.064c4.427,0,8.016,3.589,8.016,8.016v16.032C504.492,396.698,500.903,400.287,496.476,400.287' +
    'z"/>' +
    '</g>' +
    '<circle style="fill:#C3C8D1;" cx="384.254" cy="392.273" r="40.079"/>' +
    '<path style="fill:#474D54;" d="M496.476,360.723h-0.516v-88.063c0-11.918-2.032-23.652-6.041-34.875l-28.777-80.573';
'c-4.472-12.523-16.412-20.938-29.71-20.938H415.8v-17.064h83.959c5.624,0,10.372-3.652,11.816-9.087';
'	c1.443-5.436-0.868-10.963-5.75-13.753c-27.733-15.848-59.275-24.224-91.216-24.224H251.762c-31.94,0-63.483,8.377-91.217,24.224';
'	c-4.883,2.79-7.194,8.317-5.751,13.753c1.444,5.436,6.192,9.087,11.816,9.087h81.886v17.064H80.559';
'	c-13.298,0-25.238,8.414-29.71,20.938l-28.777,80.573c-4.009,11.224-6.041,22.958-6.041,34.875v88.063h-0.516';
'	C6.96,360.723,0,367.683,0,376.239v16.032c0,8.556,6.96,15.516,15.516,15.516h32.063c8.556,0,15.516-6.96,15.516-15.516v-0.516';
'	h17.078c-0.002,0.173-0.013,0.343-0.013,0.516c0,26.236,21.345,47.58,47.58,47.58s47.58-21.345,47.58-47.58';
'	c0-0.173-0.011-0.344-0.013-0.516h161.377c-0.002,0.173-0.013,0.343-0.013,0.516c0,26.236,21.345,47.58,47.58,47.58';
'	c26.236,0,47.58-21.345,47.58-47.58c0-0.173-0.011-0.344-0.013-0.516h17.077v0.516c0,8.556,6.961,15.516,15.516,15.516h32.064';
'	c8.556,0,15.516-6.96,15.516-15.516v-16.032C511.992,367.683,505.032,360.723,496.476,360.723z M415.799,87.164';
'	c25.224,0.179,50.148,6.03,72.774,17.047h-72.774V87.164z M263.496,87.147H400.8v17.064H263.496V87.147z M263.496,119.21H400.8';
'	v17.064H263.496V119.21z M177.796,104.21c22.006-10.715,46.185-16.541,70.701-17.018v17.018H177.796z M48.096,392.271';
'	c0,0.285-0.231,0.516-0.516,0.516H15.516c-0.285,0-0.516-0.231-0.516-0.516v-16.032c0-0.285,0.231-0.516,0.516-0.516h32.063';
'	c0.285,0,0.516,0.231,0.516,0.516v16.032H48.096z M127.74,424.85c-17.965,0-32.58-14.616-32.58-32.58';
'	c0-17.965,14.616-32.581,32.58-32.581s32.58,14.616,32.58,32.581C160.32,410.236,145.705,424.85,127.74,424.85z M384.252,424.85';
'	c-17.965,0-32.58-14.616-32.58-32.58c0-17.965,14.616-32.581,32.58-32.581c17.965,0,32.581,14.616,32.581,32.581';
'	C416.832,410.236,402.217,424.85,384.252,424.85z M480.96,360.723h-16.548c-8.556,0-15.516,6.96-15.516,15.516v0.516h-19.676';
'	c-6.45-18.638-24.165-32.063-44.968-32.063c-20.804,0-38.519,13.426-44.969,32.063H172.708';
'	c-6.45-18.638-24.165-32.063-44.968-32.063c-20.803,0-38.518,13.426-44.968,32.063H63.096v-0.516c0-8.556-6.96-15.516-15.516-15.516';
'	H31.032v-88.063c0-0.383,0.02-0.764,0.024-1.146l1.47-15c0.859-4.637,2.074-9.21,3.672-13.685l21.248-59.491l5.357-15l2.172-6.082';
'	c2.346-6.569,8.608-10.982,15.584-10.982h350.875c6.976,0,13.238,4.414,15.584,10.982l2.172,6.082l5.357,15l21.248,59.491';
'	c1.598,4.475,2.813,9.048,3.672,13.685l1.47,15c0.005,0.382,0.024,0.763,0.024,1.146v15.919v72.144H480.96z M496.992,392.271';
'	c0,0.285-0.231,0.516-0.516,0.516h-32.064c-0.285,0-0.516-0.231-0.516-0.516v-16.032c0-0.285,0.232-0.516,0.516-0.516h32.064';
'	c0.285,0,0.516,0.231,0.516,0.516V392.271z"/>' +
    '<g>' +
    '<path style="fill:#FFFFFF;" d="M127.82,384.771h-0.081c-4.142,0-7.459,3.358-7.459,7.5c0,4.142,3.398,7.5,7.54,7.5';
'c4.142,0,7.5-3.358,7.5-7.5C135.32,388.129,131.962,384.771,127.82,384.771z"/>' +
    '<path style="fill:#FFFFFF;" d="M384.332,384.771h-0.08c-4.142,0-7.46,3.358-7.46,7.5c0,4.142,3.398,7.5,7.54,7.5s7.5-3.358,7.5-7.5';
'C391.832,388.129,388.474,384.771,384.332,384.771z"/>' +
    '</g>' +
    '<path style="fill:#979BA0;" d="M376.236,296.595h-16.032c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h16.032';
'c4.142,0,7.5-3.358,7.5-7.5S380.378,296.595,376.236,296.595z"/>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '</svg>';
const BUYNOW = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58px" height="59px" viewBox="0 0 58 59" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>065 - Buy Now</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="065---Buy-Now">' +
    '<path d="M46,51.25 C34.1609661,60.3145485 17.2997036,58.5350261 7.61375417,47.1987503 C-2.07219523,35.8624745 -1.19878414,18.9300788 9.60215644,8.65056292 C20.403097,-1.62895294 37.3579675,-1.66416309 48.2015096,8.5704037 C59.0450518,18.8049705 59.988782,35.7335926 50.35,47.11 L46,51.25 Z" id="Path" fill="#FF5364"/>' +
    '<path d="M57,29 C57.0073858,35.6353798 54.649668,42.0561723 50.35,47.11 L46,51.25 C36.8830739,58.2037595 24.4487493,58.8991878 14.6132841,53.0053999 C4.77781892,47.111612 -0.472671053,35.8187644 1.36,24.5 C3.55563744,38.0598179 15.2635709,48.0244665 29,48.0244665 C42.7364291,48.0244665 54.4443626,38.0598179 56.64,24.5 C56.8818288,25.987756 57.0022259,27.4927196 57,29 Z" id="Path" fill="#DF4D60"/>' +
    '<path d="M57.293,55.467 L54.467,58.293 C54.0765001,58.6833819 53.4434999,58.6833819 53.053,58.293 L46,51.25 L42.44,47.69 L40.693,49.371 C40.4039901,49.6488103 39.9770076,49.7271774 39.6081805,49.5701045 C39.2393535,49.4130317 38.999975,49.0508806 39,48.65 L39,41 C39,40.4477153 39.4477153,40 40,40 L47.65,40 C48.0508806,39.999975 48.4130317,40.2393535 48.5701045,40.6081805 C48.7271774,40.9770076 48.6488103,41.4039901 48.371,41.693 L46.69,43.44 L50.35,47.11 L57.293,54.053 C57.6833819,54.4434999 57.6833819,55.0765001 57.293,55.467 Z" id="Path" fill="#464F5D"/>' +
    '<path d="M24,14.5 C24,12.5670034 22.4329966,11 20.5,11 L17,11 C16.4477153,11 16,11.4477153 16,12 L16,22 C16,22.5522847 16.4477153,23 17,23 L20.5,23 C21.9231971,23.0019513 23.2054376,22.1407255 23.7419453,20.8225247 C24.278453,19.504324 23.962062,17.9924551 22.942,17 C23.618076,16.3439224 23.9997353,15.4420809 24,14.5 Z M22,19.5 C22,20.3284271 21.3284271,21 20.5,21 L18,21 L18,18 L20.5,18 C21.3284271,18 22,18.6715729 22,19.5 Z M18,16 L18,13 L20.5,13 C21.3284271,13 22,13.6715729 22,14.5 C22,15.3284271 21.3284271,16 20.5,16 L18,16 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M32,11 C31.4477153,11 31,11.4477153 31,12 L31,19 C31,20.1045695 30.1045695,21 29,21 C27.8954305,21 27,20.1045695 27,19 L27,12 C27,11.4477153 26.5522847,11 26,11 C25.4477153,11 25,11.4477153 25,12 L25,19 C25,21.209139 26.790861,23 29,23 C31.209139,23 33,21.209139 33,19 L33,12 C33,11.4477153 32.5522847,11 32,11 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M29,25 C26.790861,25 25,26.790861 25,29 L25,33 C25,35.209139 26.790861,37 29,37 C31.209139,37 33,35.209139 33,33 L33,29 C33,26.790861 31.209139,25 29,25 Z M31,33 C31,34.1045695 30.1045695,35 29,35 C27.8954305,35 27,34.1045695 27,33 L27,29 C27,27.8954305 27.8954305,27 29,27 C30.1045695,27 31,27.8954305 31,29 L31,33 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M37,17.277 L37,22 C37,22.5522847 37.4477153,23 38,23 C38.5522847,23 39,22.5522847 39,22 L39,17.277 L41.857,12.515 C42.1293636,12.042653 41.9731362,11.439184 41.5057839,11.1583363 C41.0384316,10.8774887 40.4322402,11.0227947 40.143,11.485 L38,15.057 L35.857,11.485 C35.5677598,11.0227947 34.9615684,10.8774887 34.4942161,11.1583363 C34.0268638,11.439184 33.8706364,12.042653 34.143,12.515 L37,17.277 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M23,25 C22.4477153,25 22,25.4477153 22,26 L22,32.39 L17.857,25.485 C17.6254967,25.099997 17.1656633,24.9166297 16.7327576,25.036687 C16.2998519,25.1567443 16.0001421,25.550755 16,26 L16,36 C16,36.5522847 16.4477153,37 17,37 C17.5522847,37 18,36.5522847 18,36 L18,29.61 L22.143,36.515 C22.3237575,36.8158613 22.6490146,36.9999332 23,37 C23.0901947,36.9997765 23.179967,36.9876724 23.267,36.964 C23.7002476,36.8439652 24.0001364,36.4495685 24,36 L24,26 C24,25.4477153 23.5522847,25 23,25 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M41,25 C40.4477153,25 40,25.4477153 40,26 L40,32.39 L38.857,30.485 C38.6629812,30.2027946 38.3424663,30.0341952 38,30.0341952 C37.6575337,30.0341952 37.3370188,30.2027946 37.143,30.485 L36,32.39 L36,26 C36,25.4477153 35.5522847,25 35,25 C34.4477153,25 34,25.4477153 34,26 L34,36 C34.0001421,36.449245 34.2998519,36.8432557 34.7327576,36.963313 C35.1656633,37.0833703 35.6254967,36.900003 35.857,36.515 L38,32.943 L40.143,36.515 C40.3237575,36.8158613 40.6490146,36.9999332 41,37 C41.0901947,36.9997765 41.179967,36.9876724 41.267,36.964 C41.7002476,36.8439652 42.0001364,36.4495685 42,36 L42,26 C42,25.4477153 41.5522847,25 41,25 Z" id="Path" fill="#FFFFFF"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const BACK = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1029.4)" fill="#2980b9"/>' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1028.4)" fill="#3498db"/>' +
    '<path d="m18 1042.4v-2h-9l4-3-1-2-7 6 7 6 1-2-4-3z" fill="#2980b9"/>' +
    '<path d="m18 1041.4v-2h-9l4-3-1-2-7 6 7 6 1-2-4-3z" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const ALERT = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m6 3a3 3 0 1 1 -6 0 3 3 0 1 1 6 0z" transform="translate(9 1045.4)" fill="#f39c12"/>' +
    '<path d="m12 0c-0.828 1.4803e-16 -1.5 0.67157-1.5 1.5 0 0.1829 0.034 0.3691 0.094 0.5312-1.3613 0.1978-2.4534 0.6879-3.2502 1.4688-0.8462 0.8288-1.2501 1.9648-1.25 3.375-0.0001 2.2393-0.4576 4.381-1.3126 6.406-0.8549 2.017-2.1065 3.687-3.7812 5.063 0 0.444 0.1651 0.831 0.5 1.156s0.7292 0.5 1.1875 0.5h3.2813 2.625 0.4687 0.5937 0.4378 0.562 4.75 5.906c0.459 0 0.853-0.175 1.188-0.5s0.5-0.712 0.5-1.156c-1.675-1.376-2.926-3.046-3.781-5.063-0.855-2.025-1.313-4.1667-1.313-6.406 0-1.4102-0.404-2.5462-1.25-3.375-0.797-0.7809-1.889-1.271-3.25-1.4688 0.06-0.1621 0.094-0.3483 0.094-0.5312 0-0.82843-0.672-1.5-1.5-1.5z" transform="translate(0 1028.4)" fill="#f1c40f"/>' +
    '<path d="m12 1045.4c-1.657 0-3 1.3-3 3 0 1.6 1.343 3 3 3v-6z" fill="#e67e22"/>' +
    '<path fill="#f39c12" d="m12 1028.4c-0.828 0-1.5 0.6-1.5 1.5 0 0.1 0.034 0.3 0.094 0.5-1.3613 0.2-2.4534 0.7-3.2502 1.5-0.8462 0.8-1.2501 1.9-1.25 3.3-0.0001 2.3-0.4576 4.4-1.3126 6.4-0.8549 2.1-2.1065 3.7-3.7812 5.1 0 0.5 0.1651 0.8 0.5 1.2 0.3349 0.3 0.7292 0.5 1.1875 0.5h3.2813 2.625 0.4687 0.5937 0.4378 0.562 1.344v-20z"/>' +
    '<path d="m9 1048.4c0 0.3 0.074 0.6 0.1875 1h5.6245c0.114-0.4 0.188-0.7 0.188-1h-6z" fill="#e67e22"/>' +
    '</g>' +
    '</svg>';
const ADRESS = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
    'viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">' +
    '<g>' +
    '<g>' +
    '<g>' +
    '<path fill="#FFD41D" d="M32,0c17.7,0,32,14.3,32,32S49.7,64,32,64S0,49.7,0,32S14.3,0,32,0z"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<path fill="#FFFFFF" d="M49,30h-8.4h-2.3H15L9,50h46L49,30z"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<polygon fill="#63B0E5" points="51.7,46.9 52,48 26,48 25.6,41.4 			"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<polygon fill="#FFF4C5" points="47,32 25,32 25.5,39.3 31.5,40.6 51,44.8 			"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<polygon fill="#54D1AD" points="23.6,41 24,48 12,48 14.8,39.2 			"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<polygon fill="#FCDD5B" points="51.7,46.9 51,44.8 31.5,40.6 25.5,39.3 25,32 23,32 23.4,38.8 15.4,37.1 14.8,39.2 23.6,41 ' +
    '24,48 26,48 25.6,41.4 			"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<polygon fill="#63B0E5" points="23,32 23.4,38.8 15.4,37.1 17,32 			"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<path fill="#E84B4B" d="M32,10c-5.5,0-10,4.7-10,10.5c0,3.1,1.7,6.5,3.7,9.5c0.5,0.7,0.9,1.3,1.4,2c2,2.8,4.1,5,4.9,6' +
    ' c0.8-1,2.9-3.3,4.9-6c0.5-0.6,0.9-1.3,1.4-2c2-3,3.7-6.4,3.7-9.5C42,14.7,37.5,10,32,10z M32,23c-1.7,0-3-1.3-3-3' +
    'c0-1.7,1.3-3,3-3s3,1.3,3,3C35,21.7,33.7,23,32,23z"/>' +
    '</g>' +
    '</g>' +
    '<g>' +
    '<g>' +
    '<path fill="#C93D3D" d="M32,15c2.8,0,5,2.2,5,5c0,2.8-2.2,5-5,5s-5-2.2-5-5C27,17.2,29.2,15,32,15z M35,20c0-1.7-1.3-3-3-3' +
    's-3,1.4-3,3c0,1.6,1.3,3,3,3S35,21.7,35,20z"/>' +
    '</g>' +
    '</g>' +
    '</g>' +
    '</svg>';
const SHOP = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="59px" viewBox="0 0 60 59" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>050 - Shop</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="050---Shop">' +
    '<path d="M54,31 L54,58 L6,58 L6,31 C8.209139,31 10,29.209139 10,27 C10,29.209139 11.790861,31 14,31 C16.209139,31 18,29.209139 18,27 C18,29.209139 19.790861,31 22,31 C24.209139,31 26,29.209139 26,27 C26,29.209139 27.790861,31 30,31 C32.209139,31 34,29.209139 34,27 C34,29.209139 35.790861,31 38,31 C40.209139,31 42,29.209139 42,27 C42,29.209139 43.790861,31 46,31 C48.209139,31 50,29.209139 50,27 C50,29.209139 51.790861,31 54,31 Z" id="Path" fill="#F29C1F"/>' +
    '<path d="M10,24 L10,27 C10,29.209139 8.209139,31 6,31 C3.790861,31 2,29.209139 2,27 L2,24 L10,24 Z" id="Path" fill="#F0C419"/>' +
    '<path d="M58,24 L58,27 C58,29.209139 56.209139,31 54,31 C51.790861,31 50,29.209139 50,27 L50,24 L58,24 Z" id="Path" fill="#F0C419"/>' +
    '<path d="M42,36 C45.8659932,36 49,39.1340068 49,43 L49,58 L35,58 L35,43 C35,39.1340068 38.1340068,36 42,36 Z" id="Path" fill="#A56A43"/>' +
    '<path d="M13,38 L28,38 C28.5522847,38 29,38.4477153 29,39 L29,49 L12,49 L12,39 C12,38.4477153 12.4477153,38 13,38 Z" id="Path" fill="#2FA8CC"/>' +
    '<rect id="Rectangle" fill="#F0C419" x="10" y="49" width="21" height="4" rx="1"/>' +
    '<path d="M50,24 L50,27 C50,29.209139 48.209139,31 46,31 C43.790861,31 42,29.209139 42,27 L42,24 L50,24 Z" id="Path" fill="#FF5364"/>' +
    '<path d="M42,24 L42,27 C42,29.209139 40.209139,31 38,31 C35.790861,31 34,29.209139 34,27 L34,24 L42,24 Z" id="Path" fill="#F0C419"/>' +
    '<path d="M34,24 L34,27 C34,29.209139 32.209139,31 30,31 C27.790861,31 26,29.209139 26,27 L26,24 L34,24 Z" id="Path" fill="#FF5364"/>' +
    '<path d="M26,24 L26,27 C26,29.209139 24.209139,31 22,31 C19.790861,31 18,29.209139 18,27 L18,24 L26,24 Z" id="Path" fill="#F0C419"/>' +
    '<path d="M18,24 L18,27 C18,29.209139 16.209139,31 14,31 C11.790861,31 10,29.209139 10,27 L10,24 L18,24 Z" id="Path" fill="#FF5364"/>' +
    '<polygon id="Path" fill="#F3D55B" points="58 24 2 24 13 18 47 18"/>' +
    '<rect id="Rectangle" fill="#E64C3C" x="8" y="0" width="44" height="18" rx="2"/>' +
    '<path d="M17.5,5 C18.3284271,5 19,5.67157288 19,6.5 C19,7.05228475 19.4477153,7.5 20,7.5 C20.5522847,7.5 21,7.05228475 21,6.5 C21,4.56700338 19.4329966,3 17.5,3 C15.5670034,3 14,4.56700338 14,6.5 C14,8.43299662 15.5670034,10 17.5,10 C18.3284271,10 19,10.6715729 19,11.5 C19,12.3284271 18.3284271,13 17.5,13 C16.6715729,13 16,12.3284271 16,11.5 C16,10.9477153 15.5522847,10.5 15,10.5 C14.4477153,10.5 14,10.9477153 14,11.5 C14,13.4329966 15.5670034,15 17.5,15 C19.4329966,15 21,13.4329966 21,11.5 C21,9.56700338 19.4329966,8 17.5,8 C16.6715729,8 16,7.32842712 16,6.5 C16,5.67157288 16.6715729,5 17.5,5 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M28,3 C27.4477153,3 27,3.44771525 27,4 L27,8 L24,8 L24,4 C24,3.44771525 23.5522847,3 23,3 C22.4477153,3 22,3.44771525 22,4 L22,14 C22,14.5522847 22.4477153,15 23,15 C23.5522847,15 24,14.5522847 24,14 L24,10 L27,10 L27,14 C27,14.5522847 27.4477153,15 28,15 C28.5522847,15 29,14.5522847 29,14 L29,4 C29,3.44771525 28.5522847,3 28,3 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M34,3 C31.790861,3 30,4.790861 30,7 L30,11 C30,13.209139 31.790861,15 34,15 C36.209139,15 38,13.209139 38,11 L38,7 C38,4.790861 36.209139,3 34,3 Z M36,11 C36,12.1045695 35.1045695,13 34,13 C32.8954305,13 32,12.1045695 32,11 L32,7 C32,5.8954305 32.8954305,5 34,5 C35.1045695,5 36,5.8954305 36,7 L36,11 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M43,3 L40,3 C39.4477153,3 39,3.44771525 39,4 L39,14 C39,14.5522847 39.4477153,15 40,15 C40.5522847,15 41,14.5522847 41,14 L41,10 L43,10 C44.6568542,10 46,8.65685425 46,7 L46,6 C46,4.34314575 44.6568542,3 43,3 Z M44,7 C44,7.55228475 43.5522847,8 43,8 L41,8 L41,5 L43,5 C43.5522847,5 44,5.44771525 44,6 L44,7 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="12" cy="4" r="1"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="12" cy="14" r="1"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="48" cy="4" r="1"/>' +
    '<circle id="Oval" fill="#ECF0F1" cx="48" cy="14" r="1"/>' +
    '<path d="M45,47 L43,47 C42.4477153,47 42,47.4477153 42,48 C42,48.5522847 42.4477153,49 43,49 L45,49 C45.5522847,49 46,48.5522847 46,48 C46,47.4477153 45.5522847,47 45,47 Z" id="Path" fill="#805333"/>' +
    '<path d="M59,59 L1,59 C0.44771525,59 6.76353751e-17,58.5522847 0,58 C-6.76353751e-17,57.4477153 0.44771525,57 1,57 L59,57 C59.5522847,57 60,57.4477153 60,58 C60,58.5522847 59.5522847,59 59,59 Z" id="Path" fill="#D25627"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const SEARCH = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<rect transform="rotate(-45)" height="10" width="4" y="747.57" x="-729.04" fill="#95a5a6"/>' +
    '<rect transform="rotate(-45)" height="3" width="4" y="747.57" x="-729.04" fill="#7f8c8d"/>' +
    '<path d="m3.201 1031.4c-3.5147 3.5-3.5147 9.2 0 12.7 3.5148 3.5 9.213 3.5 12.728 0s3.515-9.2 0-12.7-9.2133-3.5-12.728 0zm2.1213 2.1c2.3432-2.3 6.1417-2.3 8.4857 0 2.343 2.4 2.343 6.2 0 8.5-2.344 2.3-6.1425 2.3-8.4857 0-2.3431-2.3-2.3431-6.1 0-8.5z" fill="#bdc3c7"/>' +
    '<path d="m16 9.5a6.5 6.5 0 1 1 -13 0 6.5 6.5 0 1 1 13 0z" transform="translate(0 1028.4)" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const SAVE = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m5 1031.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h13 1c1.105 0 2-0.9 2-2v-13l-3-3h-13z" fill="#3498db"/>' +
    '<path d="m7 1031.4v1 5c0 0.5 0.4477 1 1 1h8c0.552 0 1-0.5 1-1v-5-1h-10z" fill="#2980b9"/>' +
    '<path d="m7 3v5c0 0.5523 0.4477 1 1 1h8c0.552 0 1-0.4477 1-1v-5h-10z" transform="translate(0 1028.4)" fill="#ecf0f1"/>' +
    '<path d="m6 1040.4c-0.5523 0-1 0.4-1 1v3 2 3h4 6 4v-3-2-3c0-0.6-0.448-1-1-1h-4-4-4z" fill="#ecf0f1"/>' +
    '<g fill="#bdc3c7">' +
    '<rect height="1" width="14" y="1048.4" x="5"/>' +
    '<rect height="1" width="10" y="1042.4" x="7"/>' +
    '<rect height="1" width="10" y="1044.4" x="7"/>' +
    '</g>' +
    '<rect height="4" width="3" y="1032.4" x="13" fill="#3498db"/>' +
    '<rect height=".99998" width="3" y="1032.4" x="13" fill="#2980b9"/>' +
    '</g>' +
    '</svg>';
const SALE = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="58px" height="48px" viewBox="0 0 58 48" version="1.1">' +
    '<!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch -->' +
    '<title>052 - Sale Sign</title>' +
    '<desc>Created with Sketch.</desc>' +
    '<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
    '<g id="052---Sale-Sign">' +
    '<path d="M7.25,22.088 C6.82731253,22.0886744 6.44985154,21.8235136 6.30713191,21.425649 C6.16441228,21.0277843 6.28726163,20.5831552 6.614,20.315 L26.769,3.72 C27.19564,3.3687469 27.8262469,3.42986003 28.1775,3.8565 C28.5287531,4.28313997 28.46764,4.9137469 28.041,5.265 L7.885,21.86 C7.706516,22.0079319 7.48181891,22.0886105 7.25,22.088 Z" id="Path" fill="#CB8252"/>' +
    '<path d="M50.855,22.175 C50.6233121,22.1748557 50.398863,22.0942661 50.22,21.947 L29.854,5.179 C29.4273601,4.82802304 29.3660231,4.19763998 29.717,3.77100002 C30.067977,3.34436006 30.69836,3.28302306 31.125,3.634 L51.492,20.4 C51.8188819,20.6682711 51.9416826,21.1131544 51.7987018,21.5111213 C51.6557211,21.9090882 51.2778711,22.1740987 50.855,22.173 L50.855,22.175 Z" id="Path" fill="#CB8252"/>' +
    '<rect id="Rectangle" fill="#FF5364" x="0" y="18" width="58" height="30" rx="2"/>' +
    '<path d="M10.5,27 C12.4,27 14,28.145 14,29.5 C14,30.0522847 14.4477153,30.5 15,30.5 C15.5522847,30.5 16,30.0522847 16,29.5 C16,27.019 13.533,25 10.5,25 C7.467,25 5,27.019 5,29.5 C5,31.981 7.467,34 10.5,34 C12.4,34 14,35.145 14,36.5 C14,37.855 12.4,39 10.5,39 C8.6,39 7,37.855 7,36.5 C7,35.9477153 6.55228475,35.5 6,35.5 C5.44771525,35.5 5,35.9477153 5,36.5 C5,38.981 7.467,41 10.5,41 C13.533,41 16,38.981 16,36.5 C16,34.019 13.533,32 10.5,32 C8.6,32 7,30.855 7,29.5 C7,28.145 8.6,27 10.5,27 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M24.942,25.664 C24.8000709,25.2656325 24.4228954,24.9996129 24,24.9996129 C23.5771046,24.9996129 23.1999291,25.2656325 23.058,25.664 L18.058,39.664 C17.8724323,40.1842522 18.1437478,40.7564323 18.664,40.942 C19.1842522,41.1275676 19.7564323,40.8562522 19.942,40.336 L21.49,36 L26.51,36 L28.058,40.336 C28.2000592,40.7342148 28.5772047,41.0000584 29,41 C29.1145738,40.9999643 29.2282682,40.9800001 29.336,40.941 C29.8557723,40.755483 30.126988,40.1839607 29.942,39.664 L24.942,25.664 Z M22.205,34 L24,28.974 L25.8,34 L22.205,34 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"/>' +
    '<path d="M40,39 L34,39 L34,26 C34,25.4477153 33.5522847,25 33,25 C32.4477153,25 32,25.4477153 32,26 L32,40 C32,40.5522847 32.4477153,41 33,41 L40,41 C40.5522847,41 41,40.5522847 41,40 C41,39.4477153 40.5522847,39 40,39 Z" id="Path" fill="#FFFFFF"/>' +
    '<path d="M51,39 L45,39 L45,34 L50,34 C50.5522847,34 51,33.5522847 51,33 C51,32.4477153 50.5522847,32 50,32 L45,32 L45,27 L51,27 C51.5522847,27 52,26.5522847 52,26 C52,25.4477153 51.5522847,25 51,25 L44,25 C43.4477153,25 43,25.4477153 43,26 L43,40 C43,40.5522847 43.4477153,41 44,41 L51,41 C51.5522847,41 52,40.5522847 52,40 C52,39.4477153 51.5522847,39 51,39 Z" id="Path" fill="#FFFFFF"/>' +
    '<circle id="Oval" fill="#F0C419" cx="29" cy="4" r="4"/>' +
    '</g>' +
    '</g>' +
    '</svg>';
const PHONE = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m23.015 1046.8c0 0.3-0.052 0.6-0.156 1.1-0.105 0.4-0.214 0.8-0.329 1-0.219 0.6-0.855 1.1-1.907 1.7-0.98 0.5-1.95 0.8-2.909 0.8h-0.828c-0.261-0.1-0.558-0.2-0.892-0.2-0.333-0.1-0.583-0.2-0.75-0.3-0.156 0-0.443-0.1-0.86-0.3s-0.672-0.2-0.766-0.3c-1.022-0.3-1.934-0.8-2.736-1.3-1.3346-0.8-2.7157-1.9-4.1438-3.3-1.4176-1.5-2.5381-2.9-3.3616-4.2-0.5003-0.8-0.9329-1.7-1.2977-2.7-0.0313-0.1-0.1251-0.4-0.2815-0.8-0.1563-0.4-0.2658-0.7-0.3283-0.9-0.0522-0.1-0.1251-0.4-0.2189-0.7s-0.1616-0.6-0.2033-0.9c-0.0313-0.3-0.0469-0.5-0.0469-0.8 0-1 0.2658-2 0.7974-2.9 0.5837-1.1 1.1362-1.7 1.6574-2 0.2606-0.1 0.615-0.2 1.0632-0.3 0.4586-0.1 0.8287-0.1 1.1101-0.1h0.3284c0.1876 0.1 0.4638 0.5 0.8287 1.2 0.1146 0.2 0.271 0.5 0.469 0.8 0.1981 0.4 0.3805 0.7 0.5473 1 0.1667 0.3 0.3283 0.6 0.4847 0.9 0.0312 0 0.1198 0.1 0.2658 0.4 0.1563 0.2 0.271 0.4 0.344 0.5 0.0729 0.2 0.1094 0.3 0.1094 0.5s-0.1511 0.4-0.4534 0.8c-0.2919 0.3-0.615 0.6-0.9694 0.8-0.344 0.3-0.6672 0.5-0.9694 0.8-0.2919 0.3-0.4378 0.6-0.4378 0.8 0 0.1 0.026 0.2 0.0781 0.3 0.0522 0.2 0.0939 0.3 0.1251 0.3 0.0417 0.1 0.1147 0.2 0.2189 0.4 0.1147 0.2 0.1772 0.3 0.1877 0.3 0.7922 1.4 1.699 2.7 2.7205 3.7 1.0213 1 2.2463 1.9 3.6743 2.7 0.021 0 0.12 0.1 0.297 0.2s0.302 0.2 0.375 0.2 0.178 0.1 0.313 0.1c0.146 0.1 0.266 0.1 0.36 0.1 0.187 0 0.427-0.1 0.719-0.4s0.568-0.6 0.829-1c0.26-0.3 0.547-0.7 0.86-1 0.312-0.3 0.573-0.4 0.781-0.4 0.146 0 0.292 0 0.438 0.1 0.157 0.1 0.344 0.2 0.563 0.3 0.219 0.2 0.349 0.3 0.391 0.3 0.261 0.2 0.537 0.3 0.829 0.5 0.302 0.2 0.635 0.3 1 0.5s0.647 0.4 0.845 0.5c0.729 0.4 1.125 0.7 1.188 0.8 0.031 0.1 0.047 0.2 0.047 0.4" fill="#e74c3c"/>' +
    '<path d="m1.2188 4.75c-0.1453 0.5076-0.2188 1.0294-0.2188 1.5312 0 0.282 0.0312 0.5414 0.0625 0.8126 0.0417 0.2608 0.0937 0.572 0.1875 0.9062 0.0938 0.3337 0.1666 0.5829 0.2188 0.75 0.0625 0.1564 0.1873 0.4575 0.3437 0.875 0.1564 0.417 0.25 0.656 0.2813 0.75 0.3648 1.023 0.7809 1.946 1.2812 2.75 0.8235 1.336 1.9574 2.695 3.375 4.125 1.428 1.419 2.7908 2.55 4.125 3.375 0.803 0.501 1.728 0.947 2.75 1.313 0.094 0.031 0.333 0.124 0.75 0.281 0.417 0.156 0.719 0.25 0.875 0.312 0.167 0.052 0.416 0.125 0.75 0.219s0.614 0.177 0.875 0.219c0.271 0.031 0.562 0.031 0.844 0.031 0.959 0 1.926-0.249 2.906-0.781 1.053-0.585 1.687-1.135 1.906-1.657 0.115-0.26 0.208-0.613 0.313-1.062 0.104-0.459 0.156-0.844 0.156-1.125 0-0.146 0-0.271-0.031-0.344-0.037-0.111-0.227-0.263-0.5-0.437-0.253 0.494-0.853 1.012-1.844 1.562-0.98 0.532-1.947 0.813-2.906 0.813-0.282 0-0.573-0.031-0.844-0.063-0.261-0.042-0.541-0.093-0.875-0.187s-0.583-0.167-0.75-0.219c-0.156-0.063-0.458-0.187-0.875-0.344-0.417-0.156-0.656-0.25-0.75-0.281-1.022-0.365-1.947-0.78-2.75-1.281-1.3342-0.825-2.697-1.956-4.125-3.375-1.4176-1.43-2.5515-2.821-3.375-4.157-0.5003-0.8032-0.9164-1.6954-1.2812-2.7182-0.0313-0.094-0.1249-0.3639-0.2813-0.7813-0.1564-0.4175-0.2812-0.6873-0.3437-0.8437-0.0522-0.1672-0.125-0.4164-0.2188-0.75-0.0224-0.0796-0.0119-0.1433-0.0312-0.2188z" transform="translate(0 1028.4)" fill="#c0392b"/>' +
    '</g>' +
    '</svg>';
const PERSON = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m12 0c-0.405 0-0.805 0.060326-1.188 0.15625-0.224 0.05678-0.44 0.13135-0.656 0.21875-0.083 0.03401-0.1679 0.05534-0.2498 0.09375-0.034 0.01583-0.06 0.04594-0.0937 0.0625-0.2032 0.10058-0.4021 0.21704-0.5937 0.34375-0.027 0.0174-0.0671 0.01339-0.0938 0.03125-0.0563 0.03864-0.101 0.08419-0.1562 0.12495-0.1569 0.1126-0.3216 0.216-0.4688 0.3438-0.1342 0.1207-0.2494 0.2724-0.375 0.4062-0.4251 0.4359-0.7936 0.8971-1.0938 1.4376-0.5154 0.9034-0.9002 1.9205-1.0624 2.9687-0.0783-0.0165-0.1501-0.0224-0.2188 0-0.5251 0.171-0.6545 1.1685-0.3125 2.2187 0.2007 0.6163 0.5346 1.1015 0.875 1.375 0.4573 1.7778 1.4257 3.2598 2.6875 4.1878v1.031l-1 1-2 1c-1.6173 0.801-3.2284 1.605-4.8438 2.406-0.89513 0.54-1.2415 1.6-1.1562 2.594 0.041664 0.626-0.18448 1.427 0.4375 1.844 0.5909 0.304 1.2959 0.106 1.9375 0.156 1.8766-0.001 3.7484 0 5.625 0 2.669 0.001 5.331 0 8 0 2.367 0 4.727 0.004 7.094 0 0.768-0.054 0.981-0.865 0.906-1.5 0.014-0.932 0.069-1.976-0.656-2.688-0.592-0.602-1.434-0.84-2.156-1.25-1.061-0.525-2.128-1.037-3.188-1.562l-2-1-1-1v-1.031c1.262-0.928 2.23-2.41 2.688-4.1878 0.34-0.2736 0.674-0.7588 0.874-1.375 0.342-1.0502 0.213-2.0477-0.312-2.2187-0.069-0.0224-0.14-0.0165-0.219 0-0.162-1.0482-0.547-2.0653-1.062-2.9687-0.3-0.5405-0.669-1.0017-1.094-1.4376-0.126-0.1338-0.241-0.2855-0.375-0.4062-0.006-0.0055-0.025 0.0055-0.031 0-0.392-0.3499-0.827-0.61894-1.281-0.84375-0.115-0.05622-0.227-0.10854-0.344-0.15625-0.084-0.03401-0.165-0.06426-0.25-0.09375-0.255-0.08848-0.516-0.17356-0.782-0.21875-0.02-0.003405-0.042 0.003148-0.062 0-0.249-0.039144-0.495-0.06525-0.75-0.0625z" transform="translate(0 1028.4)" fill="#34495e"/>' +
    '<path d="m0 1051.4c0.026419 0.3 0.12651 0.6 0.4375 0.8 0.5909 0.3 1.2959 0.1 1.9375 0.2h5.625 8 7.094c0.576-0.1 0.842-0.5 0.906-1h-24z" fill="#2c3e50"/>' +
    '</g>' +
    '</svg>';
const OK = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1029.4)" fill="#27ae60"/>' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1028.4)" fill="#2ecc71"/>' +
    '<path d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z" fill="#27ae60"/>' +
    '<path d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
const NAUTIC = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title>nautic-sports-sailing-person</title><circle class="a" cx="3.999" cy="6.99" r="2.5"/><path class="a" d="M10.038,1.175l6.022,18a.5.5,0,0,0,.928.035,6.659,6.659,0,0,1,5.91-4.193.5.5,0,0,0,.461-.616C22.677,11.758,19.382,1.07,10.534.512A.5.5,0,0,0,10.038,1.175Z"/><line class="a" x1="13.154" y1="10.49" x2="22.023" y2="10.49"/>' + '<line class="a" x1="12.15" y1="7.49" x2="20.517" y2="7.49"/>' + '<path class="a" d="M10.11,20.222a2.484,2.484,0,0,0-1.769-.732H6a1.5,1.5,0,0,1-1.393-.943l-2-5A1.5,1.5,0,0,1,4,11.491H6.549a2.51,2.51,0,0,0,1.6-.579l1.888-1.573a1.5,1.5,0,0,1,1.92,2.3L10.07,13.216A5.507,5.507,0,0,1,6.549,14.49H6.213l.8,2H8.34A5.464,5.464,0,0,1,12.23,18.1L13.6,19.662"/><path class="a" d="M23.5,23.378c-2.5.521-4.06-1.979-4.06-1.979h0a4.4,4.4,0,0,1-3.621,2.056A3.822,3.822,0,0,1,12.5,21.4h0a5.282,5.282,0,0,1-3.922,2.056A4.6,4.6,0,0,1,4.96,21.4h0s-2,2.542-4.455,2.02"/></svg>';
const MOTO = '<svg version="1.1" id="Layer_1_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
    'viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">' +
    '<g id="Guide">' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '<g>' +
    '</g>' +
    '</g>' +
    '<path d="M54,32c-1.388,0-2.71,0.285-3.913,0.799l0.77-1.284C50.951,31.359,51,31.181,51,31V21h2.184c0.414,1.161,1.514,2,2.816,2' +
    '	c1.654,0,3-1.346,3-3v-7c0-1.654-1.346-3-3-3c-1.302,0-2.402,0.839-2.816,2H48c-1.654,0-3,1.346-3,3v10.713L35.446,41H24v-4.586' +
    '	l4.461-4.461C29.895,31.73,31,30.497,31,29c0-1.654-1.346-3-3-3H16.414l-1.707-1.707C14.52,24.105,14.265,24,14,24H6' +
    '	c-2.206,0-4,1.794-4,4c0,1.542,0.886,2.867,2.167,3.534C1.472,34.771,0,38.807,0,43.071V46c0,4.962,4.038,9,9,9' +
    '	c4.624,0,8.441-3.507,8.941-8H41c0.351,0,0.677-0.184,0.857-0.485l2.356-3.926C44.395,42.832,44.672,43,45,43h0.466' +
    '	c-0.343,0.964-0.539,1.975-0.539,3c0,4.962,4.038,9,9,9s9-4.038,9-9c0-1.025-0.195-2.037-0.538-3H63c0.552,0,1-0.448,1-1' +
    '	C64,36.486,59.514,32,54,32z M56,12c0.551,0,1,0.449,1,1v7c0,0.551-0.449,1-1,1s-1-0.449-1-1v-7C55,12.449,55.449,12,56,12z M48,14' +
    '	c0.551,0,1,0.449,1,1s-0.449,1-1,1s-1-0.449-1-1S47.449,14,48,14z M6,26h7.586l1.707,1.707C15.48,27.895,15.735,28,16,28h12' +
    '	c0.551,0,1,0.449,1,1s-0.449,1-1,1H6c-1.103,0-2-0.897-2-2S4.897,26,6,26z M9,53c-3.519,0-6.432-2.613-6.92-6h2.021' +
    '	C4.566,49.279,6.586,51,9,51s4.434-1.721,4.899-4h2.021C15.432,50.387,12.519,53,9,53z M6.184,47h5.631' +
    '	c-0.414,1.161-1.514,2-2.816,2S6.598,48.161,6.184,47z M40.434,45H2v-1.929C2,38.915,3.567,34.999,6.421,32h19.165l-3.293,3.293' +
    '	C22.105,35.48,22,35.735,22,36v6c0,0.552,0.448,1,1,1h13c0.345,0,0.665-0.178,0.848-0.47l10-16C46.947,26.371,47,26.188,47,26' +
    '	v-8.184C47.314,17.928,47.648,18,48,18c1.654,0,3-1.346,3-3c0-0.352-0.072-0.686-0.184-1H53v5h-3c-0.552,0-1,0.448-1,1v10.723' +
    '	L40.434,45z M60.927,46c0,3.86-3.14,7-7,7s-7-3.14-7-7c0-1.035,0.234-2.062,0.682-3h2.417C49.391,43.838,49,44.87,49,46' +
    '	c0,2.757,2.243,5,5,5s5-2.243,5-5c0-1.13-0.391-2.162-1.026-3h2.272C60.693,43.938,60.927,44.964,60.927,46z M53,43.184V46h2v-2.816' +
    '	c1.161,0.414,2,1.514,2,2.816c0,1.654-1.346,3-3,3s-3-1.346-3-3C51,44.698,51.839,43.598,53,43.184z M60.849,41H47.006h-0.944' +
    '	c0.494-3.941,3.866-7,7.938-7s7.444,3.059,7.938,7H60.849z"/>' +
    '<rect x="5" y="37" width="7" height="2"/>' +
    '<rect x="4" y="41" width="7" height="2"/>' +
    '<rect x="18" y="34" width="2" height="2"/>' +
    '<rect x="14" y="34" width="2" height="2"/>' +
    '<rect x="10" y="34" width="2" height="2"/>' +
    '<path d="M36.885,59.576c-0.642,0.113-1.296,0.204-1.945,0.272l0.208,1.989c0.695-0.073,1.396-0.17,2.083-0.292L36.885,59.576z"/>' +
    '<path d="M23.298,58.622l-0.62,1.901c0.666,0.217,1.347,0.413,2.023,0.582l0.484-1.94C24.555,59.007,23.92,58.825,23.298,58.622z"/>' +
    '<path d="M27.107,59.574l-0.348,1.97c0.686,0.121,1.387,0.219,2.086,0.292l0.207-1.989C28.401,59.779,27.747,59.687,27.107,59.574z"/>' +
    '<path d="M19.663,57.143l-0.882,1.795c0.627,0.309,1.273,0.598,1.921,0.861l0.753-1.853C20.851,57.701,20.248,57.431,19.663,57.143z"/>' +
    '<path d="M48.846,56.827l-1.125-1.654c-0.539,0.367-1.098,0.719-1.662,1.047l1.007,1.729C47.67,57.597,48.269,57.219,48.846,56.827z"/>' +
    '<path d="M17.931,56.215c-0.565-0.329-1.124-0.681-1.662-1.047l-1.126,1.653c0.577,0.393,1.176,0.77,1.782,1.123L17.931,56.215z"/>' +
    '<path d="M44.328,57.147c-0.588,0.289-1.19,0.559-1.791,0.802l0.751,1.854c0.645-0.261,1.291-0.551,1.921-0.861L44.328,57.147z"/>' +
    '<path d="M32.981,59.983c-0.652,0.023-1.312,0.022-1.967,0l-0.069,1.999C31.296,61.994,31.647,62,32,62c0.352,0,0.702-0.006,1.05-0.018L32.981,59.983z"/>' +
    '<path d="M40.692,58.625c-0.619,0.202-1.253,0.384-1.887,0.542l0.484,1.94c0.679-0.169,1.36-0.365,2.023-0.582L40.692,58.625z"/>' +
    '<path d="M14.886,9.837c0.516-0.399,1.052-0.785,1.595-1.146l-1.11-1.664c-0.581,0.388-1.156,0.801-1.708,1.229L14.886,9.837z"/>' +
    '<path d="M18.151,7.659c0.571-0.325,1.156-0.632,1.739-0.911l-0.865-1.804c-0.625,0.3-1.252,0.629-1.864,0.978L18.151,7.659z"/>' +
    '<path d="M20.952,4.1l0.737,1.859c0.606-0.241,1.228-0.462,1.848-0.658l-0.603-1.907C22.269,3.605,21.602,3.842,20.952,4.1z"/>' +
    '<path d="M13.375,11.093L12.044,9.6c-0.521,0.464-1.032,0.953-1.521,1.454l1.432,1.396C12.412,11.982,12.889,11.526,13.375,11.093z"/>' +
    '<path d="M7.804,14.261l1.612,1.184c0.388-0.528,0.797-1.047,1.217-1.542l-1.524-1.294C8.659,13.14,8.22,13.695,7.804,14.261z"/>' +
    '<path d="M6.451,20.526l-1.824-0.82c-0.286,0.635-0.553,1.291-0.795,1.949l1.877,0.69C5.935,21.73,6.185,21.119,6.451,20.526z"/>' +
    '<path d="M25.429,4.775c0.632-0.152,1.279-0.284,1.924-0.391l-0.329-1.973c-0.691,0.115-1.385,0.256-2.062,0.419L25.429,4.775z"/>' +
    '<path d="M8.31,17.068L6.618,16c-0.375,0.594-0.731,1.206-1.061,1.817l1.762,0.947C7.626,18.193,7.959,17.623,8.31,17.068z"/>' +
    '<path d="M49.504,10.144l1.252-1.56c-0.544-0.437-1.112-0.86-1.688-1.259L47.93,8.969C48.467,9.342,48.997,9.737,49.504,10.144z"/>' +
    '<path d="M29.299,4.129C29.95,4.067,30.61,4.027,31.26,4.01l-0.052-1.999c-0.696,0.018-1.402,0.061-2.1,0.127L29.299,4.129z"/>' +
    '<path d="M46.278,7.908l1.02-1.721c-0.606-0.359-1.227-0.699-1.846-1.01l-0.897,1.787C45.131,7.255,45.711,7.572,46.278,7.908z"/>' +
    '<path d="M42.769,6.145l0.77-1.846c-0.647-0.27-1.311-0.52-1.971-0.741L40.93,5.454C41.546,5.661,42.165,5.893,42.769,6.145z"/>' +
    '<path d="M35.186,4.179l0.225-1.987c-0.696-0.079-1.402-0.134-2.099-0.164l-0.086,1.998C33.876,4.054,34.536,4.106,35.186,4.179z"/>' +
    '<path d="M39.047,4.894l0.502-1.936c-0.679-0.176-1.371-0.33-2.056-0.457l-0.363,1.967C37.769,4.586,38.414,4.729,39.047,4.894z"/>' +
    '</svg>';
const ADD = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">' +
    '<g transform="translate(0 -1028.4)">' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1029.4)" fill="#27ae60"/>' +
    '<path d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z" transform="translate(0 1028.4)" fill="#2ecc71"/>' +
    '<path d="m6.0001 1042.4h4.9999v5h2v-5h5v-2h-5v-5h-2v5h-4.9999v2z" fill="#27ae60"/>' +
    '<path d="m6 1041.4h5v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" fill="#ecf0f1"/>' +
    '</g>' +
    '</svg>';
class SvgIconModule {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIconLiteral('mail', sanitizer.bypassSecurityTrustHtml(MAIL));
        iconRegistry.addSvgIconLiteral('lock', sanitizer.bypassSecurityTrustHtml(LOCK));
        iconRegistry.addSvgIconLiteral('key', sanitizer.bypassSecurityTrustHtml(KEY));
        iconRegistry.addSvgIconLiteral('karroussa', sanitizer.bypassSecurityTrustHtml(KARROUSSA));
        iconRegistry.addSvgIconLiteral('interdi', sanitizer.bypassSecurityTrustHtml(INTERDI));
        iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(HOME));
        iconRegistry.addSvgIconLiteral('hand', sanitizer.bypassSecurityTrustHtml(HAND));
        iconRegistry.addSvgIconLiteral('gentel', sanitizer.bypassSecurityTrustHtml(GENTEL));
        iconRegistry.addSvgIconLiteral('edit', sanitizer.bypassSecurityTrustHtml(EDIT));
        iconRegistry.addSvgIconLiteral('delete', sanitizer.bypassSecurityTrustHtml(DELETE));
        iconRegistry.addSvgIconLiteral('corbeille', sanitizer.bypassSecurityTrustHtml(CORBEILLE));
        iconRegistry.addSvgIconLiteral('closed', sanitizer.bypassSecurityTrustHtml(CLOSED));
        iconRegistry.addSvgIconLiteral('cartebanq', sanitizer.bypassSecurityTrustHtml(CARTEBANQ));
        iconRegistry.addSvgIconLiteral('carlove', sanitizer.bypassSecurityTrustHtml(CARLOVE));
        iconRegistry.addSvgIconLiteral('camper', sanitizer.bypassSecurityTrustHtml(CAMPER));
        iconRegistry.addSvgIconLiteral('buynow', sanitizer.bypassSecurityTrustHtml(BUYNOW));
        iconRegistry.addSvgIconLiteral('back', sanitizer.bypassSecurityTrustHtml(BACK));
        iconRegistry.addSvgIconLiteral('alert', sanitizer.bypassSecurityTrustHtml(ALERT));
        iconRegistry.addSvgIconLiteral('adress', sanitizer.bypassSecurityTrustHtml(ADRESS));
        iconRegistry.addSvgIconLiteral('shop', sanitizer.bypassSecurityTrustHtml(SHOP));
        iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(SEARCH));
        iconRegistry.addSvgIconLiteral('save', sanitizer.bypassSecurityTrustHtml(SAVE));
        iconRegistry.addSvgIconLiteral('sale', sanitizer.bypassSecurityTrustHtml(SALE));
        iconRegistry.addSvgIconLiteral('phone', sanitizer.bypassSecurityTrustHtml(PHONE));
        iconRegistry.addSvgIconLiteral('person', sanitizer.bypassSecurityTrustHtml(PERSON));
        iconRegistry.addSvgIconLiteral('ok', sanitizer.bypassSecurityTrustHtml(OK));
        iconRegistry.addSvgIconLiteral('nautic', sanitizer.bypassSecurityTrustHtml(NAUTIC));
        iconRegistry.addSvgIconLiteral('moto', sanitizer.bypassSecurityTrustHtml(MOTO));
        iconRegistry.addSvgIconLiteral('add', sanitizer.bypassSecurityTrustHtml(ADD));
    }
}
SvgIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SvgIconModule });
SvgIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SvgIconModule_Factory(t) { return new (t || SvgIconModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Qo3f":
/*!***************************************!*\
  !*** ./src/app/auth/contact.model.ts ***!
  \***************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(contact) {
        {
            this.id = contact.id || '';
            this.username = contact.username || '';
            this.password = contact.password || '';
            this.email = contact.email || '';
            this.roles = contact.roles || '';
            this.firstName = contact.firstName || '';
            this.lastName = contact.lastName || '';
            this.phone = contact.phone || '';
            this.adresse = contact.adresse || '';
            this.code_postal = contact.code_postal || '';
            this.pays = contact.pays || '';
            this.city = contact.city || '';
        }
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toolbar2/toolbarP.component */ "6PAF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'guidscout';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "toolbarP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarPComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notfoundpage/notfoundpage.component */ "5rcd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _svgicon_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgicon.module */ "IzeU");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _svgicon_module__WEBPACK_IMPORTED_MODULE_10__["SvgIconModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({})
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundpageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _svgicon_module__WEBPACK_IMPORTED_MODULE_10__["SvgIconModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_7__["NotfoundpageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _svgicon_module__WEBPACK_IMPORTED_MODULE_10__["SvgIconModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({})
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.model */ "Qo3f");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "bsvf");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















class RegisterComponent {
    constructor(form, authService, _snackBar, router) {
        this.form = form;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.contact = new _contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"]({});
    }
    ngOnInit() {
        this.registerForm = this.createFormRegister();
    }
    createFormRegister() {
        return this.form.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5)]),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            code_postal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](['Admin']),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    register() {
        console.log(this.registerForm.value);
        this.contact = this.registerForm.value;
        this.regAuth = this.authService.register(this.contact).then(res => {
            if (!res.status) {
                this.openSnackBar('vérifier les champs');
            }
            else {
                this.openSnackBar('register avec succés');
                this.authService.closedialog();
                this.router.navigateByUrl('/dashboad/myadverts/:iduser' + this.regAuth.resultat.id);
            }
        });
    }
    openSnackBar(action) {
        this._snackBar.open('', action, {
            duration: 5000
        });
    }
    openLogin() {
        this.authService.closedialog();
        this.authService.opendialog(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 63, vars: 1, consts: [["mat-dialog", "", 1, "register-card"], ["mat-dilog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], [1, "input-form"], ["matSuffix", "", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "firstName", "placeholder", "Enter your name"], ["type", "text", "matInput", "", "formControlName", "lastName", "placeholder", "Enter your last name"], ["type", "text", "matInput", "", "formControlName", "username", "placeholder", "Enter your username"], ["matSuffix", "", "svgIcon", "mail", 1, "secondary-text"], ["type", "email", "matInput", "", "formControlName", "email", "placeholder", "Ex. pat@example.com"], ["type", "password", "matInput", "", "formControlName", "password"], ["type", "text", "matInput", "", "formControlName", "phone", "placeholder", ""], ["type", "text", "matInput", "", "formControlName", "adresse", "placeholder", ""], ["type", "text", "matInput", "", "formControlName", "city"], ["type", "text", "matInput", "", "formControlName", "pays"], ["type", "text", "matInput", "", "formControlName", "code_postal"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "text-link", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "procide your registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ZIP code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_57_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Have you an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_61_listener() { return ctx.openLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: [".input-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 5px 5px #f8e3c7;\n  text-align: center;\n  font-style: italic;\n  background-color: #faf6f0;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuICAuaW5wdXQtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzowcHggNXB4IDVweCByZ2IoMjQ4LCAyMjcsIDE5OSkgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUwLCAyNDYsIDI0MCk7XHJcblxyXG4gIH1cclxuICAuY2FyZC10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register.component */ "ZGml");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
class LoginComponent {
    constructor(form, authService, router, _snackBar) {
        this.form = form;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.actionAuth = '';
        this.loginForm = this.form.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() { }
    login() {
        this.contact = this.loginForm.value;
        this.authService.login(this.contact).subscribe(res => {
            console.log(res);
            if (res.statut) {
                this.actionAuth = 'Email ou mot de passe incorrect';
                this.openSnackBar(this.actionAuth);
            }
            else {
                this.actionAuth = 'merci de connecté';
                localStorage.setItem('x-token', res.resultat);
                this.authService.closedialog();
                this.router.navigateByUrl('/dashboard');
                this.openSnackBar(this.actionAuth);
            }
        });
    }
    openSnackBar(action) {
        this._snackBar.open('', action, {
            duration: 5000
        });
    }
    openRegister() {
        this.authService.closedialog();
        this.authService.opendialog(_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 1, consts: [["mat-dialog", "", 1, "example-card"], [1, "card-title"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], [1, "example-full-width"], ["matSuffix", "", "svgIcon", "gentel", 1, "secondary-text"], ["type", "text", "matInput", "", "formControlName", "username", "placeholder", "Ex. pat@example.com"], ["matSuffix", "", "svgIcon", "lock", 1, "secondary-text"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "enter your password"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "text-link", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hello! Log in with your email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_24_listener() { return ctx.openRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".example-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  height: 100%;\n  box-shadow: 0px 5px 5px #f8e3c7;\n  text-align: center;\n  font-style: italic;\n  background-color: #faf6f0;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtBQURKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OjBweCA1cHggNXB4IHJnYigyNDgsIDIyNywgMTk5KSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTAsIDI0NiwgMjQwKTtcclxuXHJcblxyXG4gIH1cclxuICAuY2FyZC10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "np0s");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar2/toolbarP.component */ "6PAF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "DZ0t");











class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarPComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]], exports: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarPComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarPComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
                ],
                exports: [
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
                    _toolbar2_toolbarP_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarPComponent"]
                ],
                providers: [
                    _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToolbarComponent {
    // search=this.form.group({
    //   searchControl:new FormControl('')
    //   })
    constructor() { }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 0, vars: 0, template: function ToolbarComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");









class AuthService {
    constructor(_httpClient, router, jwtHelper, dialog) {
        this._httpClient = _httpClient;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.dialog = dialog;
        // x_token=localStorage.getItem('x-token')||'';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            // "x-token":this.x_token,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        this.onContactChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    login(contact) {
        return this._httpClient.post("http://localhost:3000/user/login", contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
    // islogged(){
    //   let token=localStorage.getItem('x-token')||'';
    //   if(!token)
    //   {  this.router.navigate(['auth/login']) 
    //       return false;
    //    }
    //   let jwtHelper=new JwtHelper();
    //   let expirationdate=jwtHelper.getTokenExpirationDate(token);
    //   let isExpiredToken=jwtHelper.isTokenExpired(token)
    //      console.log("date"+ expirationdate);
    //      console.log("isexpired"+ isExpiredToken);
    //      return !isExpiredToken;
    // }
    decodeToken() {
        let token = localStorage.getItem('x-token');
        if (!token) {
            this.router.navigate(['auth/login']);
        }
        else {
            let d = this.decoded = this.jwtHelper.decodeToken(token);
            return d;
        }
    }
    logOut() {
        localStorage.removeItem('x-token');
        this.router.navigate(['/dashboard']);
        this.user.closed;
    }
    getUserData(user) {
        return this._httpClient.get('http://localhost:3000/user/currentUser/' + user.id, { headers: this.headers
        })
            .subscribe(res => {
            this.user.next(res.resultat);
            this.user = res.resultat;
            console.log();
        });
    }
    register(contact) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('http://localhost:3000/user/new', contact, { headers: this.headers })
                .subscribe(response => {
                resolve(response);
            });
        });
    }
    opendialog(compDialog) {
        this.dialogRef = this.dialog.open(compDialog, {
            width: '500px',
        });
        this.dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    }
    closedialog() {
        return this.dialogRef.close();
    }
    updateUser(contact) {
        return new Promise((resolve, reject) => {
            this._httpClient.put('http://localhost:3000/user/update/:id' + contact.id, contact, { headers: this.headers })
                .subscribe(response => {
                resolve(response);
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
















































class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbAlertModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbAlertModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_46__["NgbAlertModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfoundpage/notfoundpage.component */ "5rcd");





const routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule) },
    { path: '**', component: _notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundpageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a0) { return [a0]; };
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class SidebarComponent {
    constructor() {
        this.items = [{ 'name': 'Cars', 'link': 'all' }, { 'name': 'Motocycle', 'link': 'all' }, { 'name': 'Pièces', 'link': 'all' }];
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 10, vars: 1, consts: [["matSubheader", ""], [4, "ngFor", "ngForOf"], ["mat-raised-button", ""], [3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cat\u00E9gories des marchandises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ajouter Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map