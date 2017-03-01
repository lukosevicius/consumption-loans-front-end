webpackJsonp([1,4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckStatusComponent = (function () {
    function CheckStatusComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CheckStatusComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .then(function (customers) {
            _this.customers = customers;
            console.log('success');
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    ;
    CheckStatusComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CheckStatusComponent.prototype.checkLoanCode = function (loan_code) {
        this.neededLoanCode = loan_code;
        this.buttonClicked = "true";
        console.log(loan_code);
    };
    CheckStatusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-check-status',
            template: __webpack_require__(542),
            styles: [__webpack_require__(535)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CheckStatusComponent);
    return CheckStatusComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/check-status.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(customerService, route, location) {
        this.customerService = customerService;
        this.route = route;
        this.location = location;
    }
    CustomerDetailsComponent.prototype.acceptLoan = function () {
        this.customer.status = "patvirtina";
    };
    CustomerDetailsComponent.prototype.declineLoan = function () {
        this.customer.status = "atmesta";
    };
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnit suveike");
        this.route.params
            .switchMap(function (params) { return _this.customerService.getCustomer(+params['id']); })
            .subscribe(function (customer) { return _this.customer = customer; });
    };
    CustomerDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    CustomerDetailsComponent.prototype.save = function () {
        var _this = this;
        this.customerService.update(this.customer)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__customer__["a" /* Customer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__customer__["a" /* Customer */]) === 'function' && _a) || Object)
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'customer-details',
            template: __webpack_require__(543),
            styles: [__webpack_require__(536)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _d) || Object])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/customer-details.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = (function () {
    function CustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    // getCustomers(): void{
    //   this.customerService.getCustomers().then(customers => this.customers = customers);
    // }
    CustomerComponent.prototype.gotoDetail = function () {
        this.router.navigate(["/detail", this.selectedCustomer.id]);
    };
    //   static checkIfNoDraft(customer) {
    //   return customer.draft == false;
    // }
    // this.customers = customers.filter(CustomerComponent.checkIfNoDraft);
    CustomerComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers()
            .then(function (customers) {
            _this.customers = customers;
            console.log('success');
        }).catch(function (error) {
            _this.error = error;
            console.log(error);
        });
    };
    ;
    CustomerComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        //this.customers.filter(checkIfNoDraft);
    };
    CustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'my-customers',
            template: __webpack_require__(544),
            styles: [__webpack_require__(537)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/customer-table.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraftsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraftsComponent = (function () {
    function DraftsComponent(customerService) {
        this.customerService = customerService;
        this.customers = [];
    }
    DraftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        function checkIfHasDraft(customer) {
            return customer.status == 'Nebaigta';
        }
        this.customerService.getCustomers()
            .then(function (customers) { return _this.customers = customers.filter(checkIfHasDraft); });
    };
    DraftsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'uncompleted-drafts ',
            template: __webpack_require__(545),
            styles: [__webpack_require__(538)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object])
    ], DraftsComponent);
    return DraftsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/drafts.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers_customer_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(customerService) {
        this.customerService = customerService;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.submitLoanApplication = function (name, surname, personal_code, doc_type, doc_code, country, city, address, phone_number, email, salary, amount, term, payment_day) {
        console.log(name + surname + amount);
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.loan_code = getRandomInt(100, 999).toString() + '-' + getRandomInt(100, 999).toString() + '-' + getRandomInt(100, 999).toString();
        console.log(this.loan_code);
        this.message = 'Užsirašykite šį kodą:';
        this.customerService.create(name, surname, personal_code, doc_type, doc_code, country, city, address, phone_number, email, salary, amount, term, payment_day, this.loan_code);
    };
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-anketa',
            template: __webpack_require__(546),
            styles: [__webpack_require__(539)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customers_customer_service__["a" /* CustomerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__customers_customer_service__["a" /* CustomerService */]) === 'function' && _a) || Object])
    ], FormComponent);
    return FormComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/form.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.isValid = false;
        this.result = 0;
        this.result1 = 0;
        this.errors = false;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.sudet = function (income1, income2, income3) {
        this.isValid = true;
        if (income1 < 20001) {
            if (income2 > 650 || income2 + income3 > 650 || income1 / income2 < 3.67) {
                this.result = (income1 * 0.16) / 0.524;
                this.result1 = (this.result + income1) / 60;
                this.errors = false;
                return this.result, this.result1;
            }
            else
                this.errors = true;
        }
        else
            this.errors = true;
    };
    SliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'radio-overview-example',
            template: __webpack_require__(547),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], SliderComponent);
    return SliderComponent;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/slider.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 352;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(473);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/main.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customers_drafts_drafts_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customers_customer_table_customer_table_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_customer_details_customer_details_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customers_check_status_check_status_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider_slider_component__ = __webpack_require__(315);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    // {
    //     path: '',
    //     redirectTo: '/drafts',
    //     pathMatch: 'full'
    // },
    {
        path: 'drafts',
        component: __WEBPACK_IMPORTED_MODULE_2__customers_drafts_drafts_component__["a" /* DraftsComponent */]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__customers_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__customers_customer_table_customer_table_component__["a" /* CustomerComponent */]
    },
    {
        path: 'form',
        component: __WEBPACK_IMPORTED_MODULE_6__form_form_component__["a" /* FormComponent */]
    },
    {
        path: 'slider',
        component: __WEBPACK_IMPORTED_MODULE_7__slider_slider_component__["a" /* SliderComponent */]
    },
    {
        path: 'check',
        component: __WEBPACK_IMPORTED_MODULE_5__customers_check_status_check_status_component__["a" /* CheckStatusComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/app-routing.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(["en", "lt"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|lt/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(541),
            styles: [__webpack_require__(534)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/app.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customers_customer_details_customer_details_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customers_customer_table_customer_table_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__customers_customer_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customers_drafts_drafts_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__slider_slider_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customers_check_status_check_status_component__ = __webpack_require__(310);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_13__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__customers_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__customers_customer_table_customer_table_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__customers_drafts_drafts_component__["a" /* DraftsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__slider_slider_component__["a" /* SliderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__customers_check_status_check_status_component__["a" /* CheckStatusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                //InMemoryWebApiModule.forRoot(InMemoryDataService),  IMA duomenis is in-memory-service ir neleidzia imt is remote db
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
                    }
                }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__customers_customer_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/customer.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/environment.js.map

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = ".navbar-inverse{background-color: #f5871f}\r\n.glyphicon{color:white;}\r\n.glyphicon-user{color:white;}\r\n.navbar a {color: white;  }\r\n.navbar a:hover {color: black;  }\r\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = ".hello{\r\n  margin-top: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.content {\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n  padding: 200px 50px;\r\n  display: block;\r\n  background-color: #cccccc;\r\n  width: 50%;\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: 1cm;\r\n  border-top-right-radius: 1cm;\r\n  border-bottom-left-radius: 1cm;\r\n  border-bottom-right-radius: 1cm;\r\n  border-color: #f5871f;\r\n}\r\n\r\n\r\n.content label{\r\n  margin-right: 30px;\r\n}\r\n\r\n.content button{\r\n  margin-left: 30px;\r\n}\r\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "button {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n}\r\n\r\nbody {\r\n    margin-top: 80px;\r\n    margin-bottom: 80px;\r\n    margin-right: 150px;\r\n    margin-left: 60px;\r\n}"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = ".panel > .panel-heading {\r\n  background-color: lightgrey;\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: .5cm;\r\n  border-top-right-radius: .5cm;\r\n  border-bottom-left-radius: .5cm;\r\n  border-bottom-right-radius: .5cm;\r\n  border-color: #f5871f;\r\n}\r\n\r\n\r\n.selected {\r\n  background-color: #CFD8DC !important;\r\n  color: #cccccc;\r\n}\r\n\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: .5cm;\r\n  border-top-right-radius: .5cm;\r\n  border-bottom-left-radius: .5cm;\r\n  border-bottom-right-radius: .5cm;\r\n  border-color: #f5871f;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = ".hello{\r\n  margin-top: 100px;\r\n  text-align: center;\r\n}\r\n\r\n.content {\r\n  text-align: center;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n  padding: 50px 0px;\r\n  display: block;\r\n  background-color: #cccccc;\r\n  width: 30%;\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: 1cm;\r\n  border-top-right-radius: 1cm;\r\n  border-bottom-left-radius: 1cm;\r\n  border-bottom-right-radius: 1cm;\r\n  border-color: #f5871f;\r\n}\r\n.draft-costumers{\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = ".container{\r\n  background-color: lightgrey;\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: 1cm;\r\n  border-top-right-radius: 1cm;\r\n  border-bottom-left-radius: 1cm;\r\n  border-bottom-right-radius: 1cm;\r\n  border-color: #f5871f;\r\n}\r\nhr {\r\n  -moz-border-bottom-colors: none;\r\n  -moz-border-image: none;\r\n  -moz-border-left-colors: none;\r\n  -moz-border-right-colors: none;\r\n  -moz-border-top-colors: none;\r\n  border-color: grey;\r\n  border-style: solid none;\r\n  border-width: 1px 0;\r\n  margin: 18px 0;\r\n}\r\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = ".container{\r\n  border-top:double;\r\n  border-left: double;\r\n  border-bottom: double;\r\n  border-right:double;\r\n  border-top-left-radius: .4cm;\r\n  border-top-right-radius: .4cm;\r\n  border-bottom-left-radius: .4cm;\r\n  border-bottom-right-radius: .4cm;\r\n  background-color: #cccccc;\r\n}\r\n.md-slider-horizontal {\r\n  width:100%;\r\n}\r\n\r\n#page-padding {\r\n  padding: 0 1.5em 1.5em 1.5em;\r\n}\r\n.hr {\r\n  color: #f00;\r\n  background-color: #f00;\r\n  height: 5px;\r\n}\r\n\r\ninput.col-xs-8{\r\n  display: inline-block;\r\n  width: 60%;\r\n}\r\n\r\n\r\n.digits{\r\n  margin-left: 40px;\r\n}\r\n\r\ninput.col-xs-7{\r\n  display: inline-block;\r\n  width: 60%;\r\n}\r\n\r\nlabel.col-xs-3{\r\n  width: 17%;\r\n}\r\n\r\nlabel.col-xs-12{\r\n  padding: 50px 0px;\r\n}\r\n\r\nh4{\r\n  text-align: center;\r\n  margin-bottom: 50px;\r\n}\r\n.col-xs-4 input{\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\ndiv.col-xs-12{\r\n  margin-top: 50px;\r\n  margin-left: 50px;\r\n}\r\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">SwedBeam</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/form\">{{ 'Form' | translate }}</a></li>\r\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/drafts\">{{ 'Draf' | translate}} </a></li>\r\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/slider\">{{ 'Calc' | translate}}</a></li>\r\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/admin\">{{ 'Admin' | translate}}</a></li>\r\n      <li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/check\">{{ 'Check' | translate}}</a></li>\r\n      <li class=\"dropdown\"><select #langSelect (change)=\"translate.use(langSelect.value)\">\r\n        <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n      </select></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!--<img src=\"../assets/swedbank_logo.png\" alt=\"Swedbank logo\">-->\r\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div class=\"hello\">\r\n  <h3>{{ 'LoanbyCode' | translate }}</h3>\r\n</div>\r\n<div class=\"content\">\r\n<label>{{ 'AddCod' | translate }}:</label>\r\n<input class=\"form-field-narrow\"  id=\"loan_code\"  #loan_code>\r\n\r\n\r\n<button type=\"submit\" class=\"btn btn-primary\"   (click)=\"checkLoanCode(loan_code.value)\">\r\n  {{ 'CheckS' | translate }}\r\n</button>\r\n</div>\r\n<p *ngFor=\"let customer of customers\">\r\n  <span *ngIf=\"buttonClicked == 'true' \" >\r\n\r\n      <span style=\"font-size:300%;\" *ngIf=\"customer.loanCode == neededLoanCode \">{{customer.name}} {{customer.surname}}, Statusas: {{customer.status}}</span>\r\n\r\n  </span>\r\n</p>\r\n"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"container\">\r\n<div *ngIf=\"customer\">\r\n    <h1>Kliento duomenys:</h1>\r\n\r\n    <div><label>Vardas: </label> {{customer.name}}</div>\r\n    <div><label>Pavardė: </label> {{customer.surname}}</div>\r\n    <div><label>Suma: </label> €{{customer.amount}}</div>\r\n    <div><label>Grynosios mėnesio pajamos: </label> €{{customer.salary}}</div>\r\n    <div><label>Statusas: </label>{{customer.status}}</div>\r\n\r\n\r\n    <div><label>Kodas: </label>{{customer.loanCode}}</div>\r\n\r\n\r\n    <div *ngIf = \"customer.status == 'Atmesta' || customer.status == 'Patvirtinta' || customer.status == 'Nepatikrinta'\">\r\n        <button (click)=\"acceptLoan()\">\r\n            Patvirtinti\r\n        </button>\r\n        <button (click)=\"declineLoan()\">\r\n            Atmesti\r\n        </button>\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n    <!--<div *ngIf=\"customer.draft == true\">-->\r\n    <button (click)=\"goBack()\">Back</button>\r\n    <!--</div>-->\r\n\r\n    <button (click)=\"save()\">Save</button>\r\n\r\n</div>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\"><h1 style=\"text-align:center\">{{'Name of customers' | translate}}</h1></div>\r\n\r\n\r\n  <table class=\"table table-striped\" >\r\n    <thead class=\"thead-inverse\">\r\n    <tr>\r\n      <th >{{'Size2' | translate}}</th>\r\n      <th>{{'Person' | translate}}</th>\r\n      <th>{{'Status' | translate}}</th>\r\n      <th>{{'Date' | translate}}</th>\r\n\r\n    </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let customer of customers\"\r\n        [class.selected]=\"customer === selectedCustomer\"\r\n        (click) = \"onSelect(customer)\"\r\n        >\r\n      <td  *ngIf = \"customer.status == 'Atmesta' || customer.status == 'Patvirtinta' || customer.status == 'Nepatikrinta'\">\r\n        €{{customer.amount}}\r\n      </td>\r\n      <td *ngIf = \"customer.status == 'Atmesta' || customer.status == 'Patvirtinta' || customer.status == 'Nepatikrinta'\">\r\n        {{customer.name}} {{customer.surname}}\r\n      </td>\r\n      <td   *ngIf = \"customer.status == 'Atmesta' || customer.status == 'Patvirtinta' || customer.status == 'Nepatikrinta'\">\r\n        {{customer.status}}\r\n      </td>\r\n      <td   *ngIf = \"customer.status == 'Atmesta' || customer.status == 'Patvirtinta' || customer.status == 'Nepatikrinta'\">\r\n        {{customer.date |date:'MM/dd/yyyy'}}\r\n        <!--{{customer.date.toDateString()}}-->\r\n      </td>\r\n    </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div *ngIf = \"selectedCustomer\">\r\n  <h2>\r\n    {{selectedCustomer.name | uppercase}}, statusas: {{selectedCustomer.status}}\r\n  </h2>\r\n  <button (click)=\"gotoDetail()\">Peržiūrėti</button>\r\n</div>\r\n</div>\r\n\r\n<!--<customer-details [customer]=\"selectedCustomer\"></customer-details>-->\r\n\r\n\r\n\r\n\r\n<!--<br>-->\r\n<!--<div class=\"panel panel-default\" >-->\r\n<!--<div class=\"panel-footer\"><h1 style=\"text-align:center\"></h1></div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<div class=\"hello\">\r\n  <h3>{{'Drafthead' | translate}}:</h3>\r\n</div>\r\n\r\n<div class=\"content\">\r\n  <div class=\"grid grid-pad\">\r\n    <a *ngFor=\"let customer of customers\" [routerLink]=\"['/detail', customer.id]\" class=\"col-1-4\">\r\n      <div class=\"module customer\">\r\n        <div class=\"draft-costumers\">\r\n          <h4>{{customer.name}} {{customer.surname}}</h4>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<body class=\"container\">\r\n<form class=\"form-horizontal\" data-toggle=\"validator\" role=\"form\">\r\n\r\n  <div style=\"padding-top:0.5cm\" >\r\n        <button type=\"submit\" class=\"btn btn-primary\">{{'Valid' | translate}}</button>\r\n        <button type=\"submit\" class=\"btn btn-default\"   (click)=\"submitLoanApplication(\r\n               name.value,\r\n               surname.value,\r\n               personal_code.value,\r\n               doc_type.value,\r\n               doc_code.value,\r\n               country.value,\r\n               city.value,\r\n               address.value,\r\n               phone_number.value,\r\n               email.value,\r\n               amount.value,\r\n               salary.value,\r\n               term.value,\r\n               payment_day.value\r\n\r\n               )\">\r\n          {{'Save' | translate}}\r\n        </button>\r\n    </div>\r\n    <br>\r\n\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\" style=\"text-align: right\">{{'Loan size' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"number\" class=\"form-control\" id=\"amount\" #amount >\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"row\">\r\n\r\n      <div class=\"col-xs-1\">\r\n        <div class=\"form-inline\">-->\r\n    <label class=\"control-label col-md-5\">{{'Loan term' | translate}}:*</label>\r\n    <div class=\"form-inline\">\r\n        <div class=\"col-md-1\">\r\n            <select class=\"form-control\" id=\"term\" #term >\r\n                <option value=\"1\">1 {{'Years' | translate}}</option>\r\n                <option value=\"2\">2 {{'Years' | translate}}</option>\r\n                <option value=\"3\">3 {{'Years' | translate}}</option>\r\n                <option value=\"4\">4 {{'Years' | translate}}</option>\r\n                <option value=\"5\">5 {{'Years' | translate}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-2\">\r\n            <select class=\"form-control\" id=\"selectLoanMonth\" >\r\n                <option value=\"1\">1 {{'Month1' | translate}}</option>\r\n                <option value=\"2\">2 {{'Month2' | translate}}</option>\r\n                <option value=\"3\">3 {{'Month2' | translate}}</option>\r\n                <option value=\"4\">4 {{'Month2' | translate}}</option>\r\n                <option value=\"5\">5 {{'Month2' | translate}}</option>\r\n                <option value=\"6\">6 {{'Month2' | translate}}</option>\r\n                <option value=\"7\">7 {{'Month2' | translate}}</option>\r\n                <option value=\"8\">8 {{'Month2' | translate}}</option>\r\n                <option value=\"9\">9 {{'Month2' | translate}}</option>\r\n                <option value=\"10\">10 {{'Month3' | translate}}</option>\r\n                <option value=\"11\">11 {{'Month3' | translate}}</option>\r\n                <option value=\"12\">12 {{'Month3' | translate}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\">{{'Loan pay day' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <select class=\"form-control\" id=\"payment_day\" #payment_day >\r\n                <option value=\"3\">3</option>\r\n                <option value=\"7\">7</option>\r\n                <option value=\"12\">12</option>\r\n                <option value=\"17\">17</option>\r\n                <option value=\"22\">22</option>\r\n                <option value=\"27\">27</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"name\" class=\"control-label col-md-5\">{{'Name' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"name\" #name >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"surname\" class=\"control-label col-md-5\">{{'Surname' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"text\" class=\"form-control\" id=\"surname\" #surname >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-5\">{{'Personal Code' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"number\" class=\"form-control\" id=\"personal_code\"  #personal_code >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\">{{'ID type' | translate}}:*</label>\r\n        <div class=\"col-md-3\">\r\n            <select class=\"form-control\" id=\"doc_type\" #doc_type >\r\n\r\n                <option value=\"1\">{{'Passport' | translate}}</option>\r\n\r\n                <option value=\"2\">{{'ID card' | translate}}/option>\r\n\r\n                <option value=\"3\">{{'Driver license' | translate}}</option>\r\n\r\n\r\n                <option value=\"4\">Tarnybinis pasas</option>\r\n\r\n                <option value=\"5\">Diplomatinis pasas</option>\r\n\r\n                <option value=\"6\">Užsieniečio pasas</option>\r\n\r\n                <option value=\"7.\">Migracijos tarnybos pasas</option>\r\n\r\n                <option value=\"8\">Kita</option>\r\n\r\n                <option value=\"4\">{{'Another' | translate}}</option>\r\n\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\">{{'Document number' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"number\" class=\"form-control\" id=\"doc_code\" #doc_code >\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <h4><b>Kontaktinai duomenys</b></h4>\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\">{{'Country' | translate}}:*</label>\r\n        <div class=\"col-md-3\">\r\n            <select class=\"form-control\" id=\"country\" #country >\r\n                <option value=\"AF\">AFGHANISTAN</option>\r\n\r\n                <option value=\"AX\"><span class=\"flag-icon flag-icon-gr\">ALAND ISLANDS</span></option>\r\n\r\n                <option value=\"AL\" data-countries=\"AL\">ALBANIA</option>\r\n\r\n                <option value=\"DZ\">ALGERIA</option>\r\n\r\n                <option value=\"AS\">AMERICAN SAMOA</option>\r\n\r\n                <option value=\"AD\">ANDORRA</option>\r\n\r\n                <option value=\"AO\">ANGOLA</option>\r\n\r\n                <option value=\"AI\">ANGUILLA</option>\r\n\r\n                <option value=\"AQ\">ANTARCTICA</option>\r\n\r\n                <option value=\"AG\">ANTIGUA AND BARBUDA</option>\r\n\r\n                <option value=\"AR\">ARGENTINA</option>\r\n\r\n                <option value=\"AM\">ARMENIA</option>\r\n\r\n                <option value=\"AW\">ARUBA</option>\r\n\r\n                <option value=\"AU\">AUSTRALIA</option>\r\n\r\n                <option value=\"AT\">AUSTRIA</option>\r\n\r\n                <option value=\"AZ\">AZERBAIJAN</option>\r\n\r\n                <option value=\"BS\">BAHAMAS</option>\r\n\r\n                <option value=\"BH\">BAHRAIN</option>\r\n\r\n                <option value=\"BD\">BANGLADESH</option>\r\n\r\n                <option value=\"BB\">BARBADOS</option>\r\n\r\n                <option value=\"BY\">BELARUS</option>\r\n\r\n                <option value=\"BE\">BELGIUM</option>\r\n\r\n                <option value=\"BZ\">BELIZE</option>\r\n\r\n                <option value=\"BJ\">BENIN</option>\r\n\r\n                <option value=\"BM\">BERMUDA</option>\r\n\r\n                <option value=\"BT\">BHUTAN</option>\r\n\r\n                <option value=\"BO\">BOLIVIA</option>\r\n\r\n                <option value=\"BQ\">BONAIRE, SAINT EUSTATIUS and SABA</option>\r\n\r\n                <option value=\"BA\">BOSNIA AND HERZEGOVINA</option>\r\n\r\n                <option value=\"BW\">BOTSWANA</option>\r\n\r\n                <option value=\"BV\">BOUVET ISLAND</option>\r\n\r\n                <option value=\"BR\">BRAZIL</option>\r\n\r\n                <option value=\"IO\">BRITISH INDIAN OCEAN TERRITORY</option>\r\n\r\n                <option value=\"BN\">BRUNEI DARUSSALAM</option>\r\n\r\n                <option value=\"BG\">BULGARIA</option>\r\n\r\n                <option value=\"BF\">BURKINA FASO</option>\r\n\r\n                <option value=\"BI\">BURUNDI</option>\r\n\r\n                <option value=\"KH\">CAMBODIA</option>\r\n\r\n                <option value=\"CM\">CAMEROON</option>\r\n\r\n                <option value=\"CA\">CANADA</option>\r\n\r\n                <option value=\"CV\">CAPE VERDE</option>\r\n\r\n                <option value=\"KY\">CAYMAN ISLANDS</option>\r\n\r\n                <option value=\"CF\">CENTRAL AFRICAN REPUBLIC</option>\r\n\r\n                <option value=\"TD\">CHAD</option>\r\n\r\n                <option value=\"CL\">CHILE</option>\r\n\r\n                <option value=\"CN\">CHINA</option>\r\n\r\n                <option value=\"CX\">CHRISTMAS ISLAND</option>\r\n\r\n                <option value=\"CC\">COCOS (KEELING) ISLANDS</option>\r\n\r\n                <option value=\"CO\">COLOMBIA</option>\r\n\r\n                <option value=\"KM\">COMOROS</option>\r\n\r\n                <option value=\"CG\">CONGO</option>\r\n\r\n                <option value=\"CD\">CONGO, THE DEMOCRATIC REPUBLIC OF THE</option>\r\n\r\n                <option value=\"CK\">COOK ISLANDS</option>\r\n\r\n                <option value=\"CR\">COSTA RICA</option>\r\n\r\n                <option value=\"CI\">COTE D'IVOIRE</option>\r\n\r\n                <option value=\"HR\">CROATIA</option>\r\n\r\n                <option value=\"CU\">CUBA</option>\r\n\r\n                <option value=\"CW\">CURACAO</option>\r\n\r\n                <option value=\"CY\">CYPRUS</option>\r\n\r\n                <option value=\"CZ\">CZECH REPUBLIC</option>\r\n\r\n                <option value=\"DK\">DENMARK</option>\r\n\r\n                <option value=\"DJ\">DJIBOUTI</option>\r\n\r\n                <option value=\"DM\">DOMINICA</option>\r\n\r\n                <option value=\"DO\">DOMINICAN REPUBLIC</option>\r\n\r\n                <option value=\"EC\">ECUADOR</option>\r\n\r\n                <option value=\"EG\">EGYPT</option>\r\n\r\n                <option value=\"SV\">EL SALVADOR</option>\r\n\r\n                <option value=\"GQ\">EQUATORIAL GUINEA</option>\r\n\r\n                <option value=\"ER\">ERITREA</option>\r\n\r\n                <option value=\"EE\">ESTONIA</option>\r\n\r\n                <option value=\"ET\">ETHIOPIA</option>\r\n\r\n                <option value=\"FO\">FAEROE ISLANDS</option>\r\n\r\n                <option value=\"FK\">FALKLAND ISLANDS (MALVINAS)</option>\r\n\r\n                <option value=\"FJ\">FIJI</option>\r\n\r\n                <option value=\"FI\">FINLAND</option>\r\n\r\n                <option value=\"FR\">FRANCE</option>\r\n\r\n                <option value=\"GF\">FRENCH GUIANA</option>\r\n\r\n                <option value=\"PF\">FRENCH POLYNESIA</option>\r\n\r\n                <option value=\"TF\">FRENCH SOUTHERN TERRITORIES</option>\r\n\r\n                <option value=\"GA\">GABON</option>\r\n\r\n                <option value=\"GM\">GAMBIA</option>\r\n\r\n                <option value=\"GE\">GEORGIA</option>\r\n\r\n                <option value=\"DE\">GERMANY</option>\r\n\r\n                <option value=\"GH\">GHANA</option>\r\n\r\n                <option value=\"GI\">GIBRALTAR</option>\r\n\r\n                <option value=\"GR\">GREECE</option>\r\n\r\n                <option value=\"GL\">GREENLAND</option>\r\n\r\n                <option value=\"GD\">GRENADA</option>\r\n\r\n                <option value=\"GP\">GUADELOUPE</option>\r\n\r\n                <option value=\"GU\">GUAM</option>\r\n\r\n                <option value=\"GT\">GUATEMALA</option>\r\n\r\n                <option value=\"GG\">GUERNSEY, C.I.</option>\r\n\r\n                <option value=\"GN\">GUINEA</option>\r\n\r\n                <option value=\"GW\">GUINEA-BISSAU</option>\r\n\r\n                <option value=\"GY\">GUYANA</option>\r\n\r\n                <option value=\"HT\">HAITI</option>\r\n\r\n                <option value=\"HM\">HEARD ISLAND AND MCDONALD ISLANDS</option>\r\n\r\n                <option value=\"VA\">HOLY SEE (VATICAN CITY STATE)</option>\r\n\r\n                <option value=\"HN\">HONDURAS</option>\r\n\r\n                <option value=\"HK\">HONG KONG</option>\r\n\r\n                <option value=\"HU\">HUNGARY</option>\r\n\r\n                <option value=\"IS\">ICELAND</option>\r\n\r\n                <option value=\"IN\">INDIA</option>\r\n\r\n                <option value=\"ID\">INDONESIA</option>\r\n\r\n                <option value=\"IR\">IRAN, ISLAMIC REPUBLIC OF</option>\r\n\r\n                <option value=\"IQ\">IRAQ</option>\r\n\r\n                <option value=\"IE\">IRELAND</option>\r\n\r\n                <option value=\"IM\">ISLE OF MAN</option>\r\n\r\n                <option value=\"IL\">ISRAEL</option>\r\n\r\n                <option value=\"IT\">ITALY</option>\r\n\r\n                <option value=\"JM\">JAMAICA</option>\r\n\r\n                <option value=\"JP\">JAPAN</option>\r\n\r\n                <option value=\"JE\">JERSEY</option>\r\n\r\n                <option value=\"JO\">JORDAN</option>\r\n\r\n                <option value=\"KZ\">KAZAKHSTAN</option>\r\n\r\n                <option value=\"KE\">KENYA</option>\r\n\r\n                <option value=\"KI\">KIRIBATI</option>\r\n\r\n                <option value=\"KP\">KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF</option>\r\n\r\n                <option value=\"KR\">KOREA, REPUBLIC OF</option>\r\n\r\n                <option value=\"KS\">KOSOVO</option>\r\n\r\n                <option value=\"KW\">KUWAIT</option>\r\n\r\n                <option value=\"KG\">KYRGYZSTAN</option>\r\n\r\n                <option value=\"LA\">LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>\r\n\r\n                <option value=\"LV\">LATVIA</option>\r\n\r\n                <option value=\"LB\">LEBANON</option>\r\n\r\n                <option value=\"LS\">LESOTHO</option>\r\n\r\n                <option value=\"LR\">LIBERIA</option>\r\n\r\n                <option value=\"LY\">LIBYA</option>\r\n\r\n                <option value=\"LI\">LIECHTENSTEIN</option>\r\n\r\n                <option selected value=\"LT\">LIETUVA</option>\r\n\r\n                <option value=\"LU\">LUXEMBOURG</option>\r\n\r\n                <option value=\"MO\">MACAO</option>\r\n\r\n                <option value=\"MK\">MACEDONIA,THE FORMER YUGOSLAV REPUBL. OF</option>\r\n\r\n                <option value=\"MG\">MADAGASCAR</option>\r\n\r\n                <option value=\"MW\">MALAWI</option>\r\n\r\n                <option value=\"MY\">MALAYSIA</option>\r\n\r\n                <option value=\"MV\">MALDIVES</option>\r\n\r\n                <option value=\"ML\">MALI</option>\r\n\r\n                <option value=\"MT\">MALTA</option>\r\n\r\n                <option value=\"MH\">MARSHALL ISLANDS</option>\r\n\r\n                <option value=\"MQ\">MARTINIQUE</option>\r\n\r\n                <option value=\"MR\">MAURITANIA</option>\r\n\r\n                <option value=\"MU\">MAURITIUS</option>\r\n\r\n                <option value=\"YT\">MAYOTTE</option>\r\n\r\n                <option value=\"MX\">MEXICO</option>\r\n\r\n                <option value=\"FM\">MICRONESIA, FEDERATED STATES OF</option>\r\n\r\n                <option value=\"MD\">MOLDOVA</option>\r\n\r\n                <option value=\"MC\">MONACO</option>\r\n\r\n                <option value=\"MN\">MONGOLIA</option>\r\n\r\n                <option value=\"ME\">MONTENEGRO</option>\r\n\r\n                <option value=\"MS\">MONTSERRAT</option>\r\n\r\n                <option value=\"MA\">MOROCCO</option>\r\n\r\n                <option value=\"MZ\">MOZAMBIQUE</option>\r\n\r\n                <option value=\"MM\">MYANMAR</option>\r\n\r\n                <option value=\"NA\">NAMIBIA</option>\r\n\r\n                <option value=\"NR\">NAURU</option>\r\n\r\n                <option value=\"NP\">NEPAL</option>\r\n\r\n                <option value=\"NL\">NETHERLANDS</option>\r\n\r\n                <option value=\"NC\">NEW CALEDONIA</option>\r\n\r\n                <option value=\"NZ\">NEW ZEALAND</option>\r\n\r\n                <option value=\"NI\">NICARAGUA</option>\r\n\r\n                <option value=\"NE\">NIGER</option>\r\n\r\n                <option value=\"NG\">NIGERIA</option>\r\n\r\n                <option value=\"NU\">NIUE</option>\r\n\r\n                <option value=\"NF\">NORFOLK ISLAND</option>\r\n\r\n                <option value=\"MP\">NORTHERN MARIANA ISLANDS</option>\r\n\r\n                <option value=\"NO\">NORWAY</option>\r\n\r\n                <option value=\"OM\">OMAN</option>\r\n\r\n                <option value=\"PK\">PAKISTAN</option>\r\n\r\n                <option value=\"PW\">PALAU</option>\r\n\r\n                <option value=\"PS\">PALESTINIAN TERRITORY, OCCUPIED</option>\r\n\r\n                <option value=\"PA\">PANAMA</option>\r\n\r\n                <option value=\"PG\">PAPUA NEW GUINEA</option>\r\n\r\n                <option value=\"PY\">PARAGUAY</option>\r\n\r\n                <option value=\"PE\">PERU</option>\r\n\r\n                <option value=\"PH\">PHILIPPINES</option>\r\n\r\n                <option value=\"PN\">PITCAIRN</option>\r\n\r\n                <option value=\"PL\">POLAND</option>\r\n\r\n                <option value=\"PT\">PORTUGAL</option>\r\n\r\n                <option value=\"PR\">PUERTO RICO</option>\r\n\r\n                <option value=\"QA\">QATAR</option>\r\n\r\n                <option value=\"RE\">REUNION</option>\r\n\r\n                <option value=\"RO\">ROMANIA</option>\r\n\r\n                <option value=\"RU\">RUSSIAN FEDERATION</option>\r\n\r\n                <option value=\"RW\">RWANDA</option>\r\n\r\n                <option value=\"BL\">SAINT BARTHELEMY</option>\r\n\r\n                <option value=\"SH\">SAINT HELENA</option>\r\n\r\n                <option value=\"KN\">SAINT KITTS AND NEVIS</option>\r\n\r\n                <option value=\"LC\">SAINT LUCIA</option>\r\n\r\n                <option value=\"SX\">SAINT MAARTEN(DUTCH PART)</option>\r\n\r\n                <option value=\"MF\">SAINT MARTIN</option>\r\n\r\n                <option value=\"PM\">SAINT PIERRE AND MIQUELON</option>\r\n\r\n                <option value=\"VC\">SAINT VINCENT AND THE GRENADINES</option>\r\n\r\n                <option value=\"WS\">SAMOA</option>\r\n\r\n                <option value=\"SM\">SAN MARINO</option>\r\n\r\n                <option value=\"ST\">SAO TOME AND PRINCIPE</option>\r\n\r\n                <option value=\"SA\">SAUDI ARABIA</option>\r\n\r\n                <option value=\"SN\">SENEGAL</option>\r\n\r\n                <option value=\"RS\">SERBIA</option>\r\n\r\n                <option value=\"SC\">SEYCHELLES</option>\r\n\r\n                <option value=\"SL\">SIERRA LEONE</option>\r\n\r\n                <option value=\"SG\">SINGAPORE</option>\r\n\r\n                <option value=\"SK\">SLOVAKIA</option>\r\n\r\n                <option value=\"SI\">SLOVENIA</option>\r\n\r\n                <option value=\"SB\">SOLOMON ISLANDS</option>\r\n\r\n                <option value=\"SO\">SOMALIA</option>\r\n\r\n                <option value=\"ZA\">SOUTH AFRICA</option>\r\n\r\n                <option value=\"GS\">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>\r\n\r\n                <option value=\"SS\">SOUTH SUDAN,REPUBLIC OF</option>\r\n\r\n                <option value=\"ES\">SPAIN</option>\r\n\r\n                <option value=\"LK\">SRI LANKA</option>\r\n\r\n                <option value=\"SD\">SUDAN</option>\r\n\r\n                <option value=\"SR\">SURINAME</option>\r\n\r\n                <option value=\"SJ\">SVALBARD AND JAN MAYEN</option>\r\n\r\n                <option value=\"SZ\">SWAZILAND</option>\r\n\r\n                <option value=\"SE\">SWEDEN</option>\r\n\r\n                <option value=\"CH\">SWITZERLAND</option>\r\n\r\n                <option value=\"SY\">SYRIAN ARAB REPUBLIC</option>\r\n\r\n                <option value=\"TW\">TAIWAN, PROVINCE OF CHINA</option>\r\n\r\n                <option value=\"TJ\">TAJIKISTAN</option>\r\n\r\n                <option value=\"TZ\">TANZANIA, UNITED REPUBLIC OF</option>\r\n\r\n                <option value=\"TH\">THAILAND</option>\r\n\r\n                <option value=\"TL\">TIMOR-LESTE</option>\r\n\r\n                <option value=\"TG\">TOGO</option>\r\n\r\n                <option value=\"TK\">TOKELAU</option>\r\n\r\n                <option value=\"TO\">TONGA</option>\r\n\r\n                <option value=\"TT\">TRINIDAD AND TOBAGO</option>\r\n\r\n                <option value=\"TN\">TUNISIA</option>\r\n\r\n                <option value=\"TR\">TURKEY</option>\r\n\r\n                <option value=\"TM\">TURKMENISTAN</option>\r\n\r\n                <option value=\"TC\">TURKS AND CAICOS ISLANDS</option>\r\n\r\n                <option value=\"TV\">TUVALU</option>\r\n\r\n                <option value=\"UG\">UGANDA</option>\r\n\r\n                <option value=\"UA\">UKRAINE</option>\r\n\r\n                <option value=\"AE\">UNITED ARAB EMIRATES</option>\r\n\r\n                <option value=\"GB\">UNITED KINGDOM</option>\r\n\r\n                <option value=\"US\">UNITED STATES</option>\r\n\r\n                <option value=\"UM\">UNITED STATES MINOR OUTLYING ISLANDS</option>\r\n\r\n                <option value=\"UY\">URUGUAY</option>\r\n\r\n                <option value=\"UZ\">UZBEKISTAN</option>\r\n\r\n                <option value=\"VU\">VANUATU</option>\r\n\r\n                <option value=\"VE\">VENEZUELA</option>\r\n\r\n                <option value=\"VN\">VIET NAM</option>\r\n\r\n                <option value=\"VG\">VIRGIN ISLANDS, BRITISH</option>\r\n\r\n                <option value=\"VI\">VIRGIN ISLANDS, U.S.</option>\r\n\r\n                <option value=\"WF\">WALLIS AND FUTUNA</option>\r\n\r\n                <option value=\"EH\">WESTERN SAHARA</option>\r\n\r\n                <option value=\"YE\">YEMEN</option>\r\n\r\n                <option value=\"ZM\">ZAMBIA</option>\r\n\r\n                <option value=\"ZW\">ZIMBABWE</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-5\">{{'City' | translate}}:*</label>\r\n        <div class=\"col-md-3\">\r\n            <select class=\"form-control\" id=\"city\" #city >\r\n                <option value=\"242\">Akmenė</option>\r\n\r\n                <option value=\"348\">Akmenės raj.</option>\r\n\r\n                <option value=\"277\">Akmenės raj. Naujoji Akmenė</option>\r\n\r\n                <option value=\"279\">Akmenės raj. Venta</option>\r\n\r\n                <option value=\"278\">Akmenės raj. Viekšniai</option>\r\n\r\n                <option value=\"346\">Alytaus raj.</option>\r\n\r\n                <option value=\"247\">Alytaus raj. Daugai</option>\r\n\r\n                <option value=\"249\">Alytaus raj. Simnas</option>\r\n\r\n                <option value=\"235\">Alytus</option>\r\n\r\n                <option value=\"200\">Anykščiai</option>\r\n\r\n                <option value=\"311\">Anykščių raj.</option>\r\n\r\n                <option value=\"292\">Anykščių raj. Kavarskas</option>\r\n\r\n                <option value=\"293\">Anykščių raj. Troškūnai</option>\r\n\r\n                <option value=\"240\">Birštonas</option>\r\n\r\n                <option value=\"201\">Biržai</option>\r\n\r\n                <option value=\"312\">Biržų raj.</option>\r\n\r\n                <option value=\"270\">Biržų raj. Vabalninkas</option>\r\n\r\n                <option value=\"237\">Druskininkai</option>\r\n\r\n                <option value=\"202\">Ignalina</option>\r\n\r\n                <option value=\"313\">Ignalinos raj.</option>\r\n\r\n                <option value=\"294\">Ignalinos raj. Dūkštas</option>\r\n\r\n                <option value=\"204\">Jonava</option>\r\n\r\n                <option value=\"315\">Jonavos raj.</option>\r\n\r\n                <option value=\"314\">Joniškio raj.</option>\r\n\r\n                <option value=\"280\">Joniškio raj. Žagarė</option>\r\n\r\n                <option value=\"203\">Joniškis</option>\r\n\r\n                <option value=\"205\">Jurbarkas</option>\r\n\r\n                <option value=\"316\">Jurbarko raj.</option>\r\n\r\n                <option value=\"287\">Jurbarko raj. Smalininkai</option>\r\n\r\n                <option value=\"317\">Kaišiadorių r.</option>\r\n\r\n                <option value=\"251\">Kaišiadorių raj. Žiežmariai</option>\r\n\r\n                <option value=\"206\">Kaišiadorys</option>\r\n\r\n                <option value=\"231\">Kaunas</option>\r\n\r\n                <option value=\"342\">Kauno raj.</option>\r\n\r\n                <option value=\"253\">Kauno raj. Ežerėlis</option>\r\n\r\n                <option value=\"254\">Kauno raj. Garliava</option>\r\n\r\n                <option value=\"255\">Kauno raj. Kačerginė</option>\r\n\r\n                <option value=\"256\">Kauno raj. Kulautuva</option>\r\n\r\n                <option value=\"252\">Kauno raj. Vilkija</option>\r\n\r\n                <option value=\"207\">Kelmė</option>\r\n\r\n                <option value=\"318\">Kelmės raj.</option>\r\n\r\n                <option value=\"281\">Kelmės raj. Tytuvėnai</option>\r\n\r\n                <option value=\"282\">Kelmės raj. Užventis</option>\r\n\r\n                <option value=\"232\">Klaipėda</option>\r\n\r\n                <option value=\"343\">Klaipėdos raj.</option>\r\n\r\n                <option value=\"259\">Klaipėdos raj. Gargždai</option>\r\n\r\n                <option value=\"260\">Klaipėdos raj. Priekulė</option>\r\n\r\n                <option value=\"208\">Kretinga</option>\r\n\r\n                <option value=\"319\">Kretingos raj.</option>\r\n\r\n                <option value=\"261\">Kretingos raj. Salantai</option>\r\n\r\n                <option value=\"320\">Kupiškio raj.</option>\r\n\r\n                <option value=\"271\">Kupiškio raj. Subačius</option>\r\n\r\n                <option value=\"209\">Kupiškis</option>\r\n\r\n                <option value=\"246\">Kėdainiai</option>\r\n\r\n                <option value=\"352\">Kėdainių raj.</option>\r\n\r\n                <option value=\"210\">Lazdijai</option>\r\n\r\n                <option value=\"321\">Lazdijų raj.</option>\r\n\r\n                <option value=\"250\">Lazdijų raj. Veisiejai</option>\r\n\r\n                <option value=\"236\">Marijampolė</option>\r\n\r\n                <option value=\"347\">Marijampolės r.</option>\r\n\r\n                <option value=\"265\">Marijampolės raj. Kalvarija</option>\r\n\r\n                <option value=\"264\">Marijampolės raj. Kazlų Rūda</option>\r\n\r\n                <option value=\"211\">Mažeikiai</option>\r\n\r\n                <option value=\"322\">Mažeikių raj.</option>\r\n\r\n                <option value=\"289\">Mažeikių raj. Seda</option>\r\n\r\n                <option value=\"212\">Molėtai</option>\r\n\r\n                <option value=\"323\">Molėtų raj.</option>\r\n\r\n                <option value=\"239\">Neringa</option>\r\n\r\n                <option value=\"213\">Pakruojis</option>\r\n\r\n                <option value=\"324\">Pakruojo raj.</option>\r\n\r\n                <option value=\"283\">Pakruojo raj. Linkuva</option>\r\n\r\n                <option value=\"238\">Palanga</option>\r\n\r\n                <option value=\"345\">Panevėžio raj.</option>\r\n\r\n                <option value=\"272\">Panevėžio raj. Ramygala</option>\r\n\r\n                <option value=\"234\">Panevėžys</option>\r\n\r\n                <option value=\"325\">Pasvalio raj.</option>\r\n\r\n                <option value=\"273\">Pasvalio raj. Joniškėlis</option>\r\n\r\n                <option value=\"214\">Pasvalys</option>\r\n\r\n                <option value=\"215\">Plungė</option>\r\n\r\n                <option value=\"326\">Plungės raj.</option>\r\n\r\n                <option value=\"290\">Plungės raj. Rietavas</option>\r\n\r\n                <option value=\"216\">Prienai</option>\r\n\r\n                <option value=\"327\">Prienų raj.</option>\r\n\r\n                <option value=\"257\">Prienų raj. Jieznas</option>\r\n\r\n                <option value=\"333\">Radviliškio r.</option>\r\n\r\n                <option value=\"285\">Radviliškio raj. Tyruliai</option>\r\n\r\n                <option value=\"284\">Radviliškio raj. Šeduva</option>\r\n\r\n                <option value=\"222\">Radviliškis</option>\r\n\r\n                <option value=\"223\">Raseiniai</option>\r\n\r\n                <option value=\"334\">Raseinių raj.</option>\r\n\r\n                <option value=\"258\">Raseinių raj. Ariogala</option>\r\n\r\n                <option value=\"335\">Rokiškio raj.</option>\r\n\r\n                <option value=\"276\">Rokiškio raj. Juodupė</option>\r\n\r\n                <option value=\"274\">Rokiškio raj. Obeliai</option>\r\n\r\n                <option value=\"275\">Rokiškio raj. Pandėlys</option>\r\n\r\n                <option value=\"224\">Rokiškis</option>\r\n\r\n                <option value=\"225\">Skuodas</option>\r\n\r\n                <option value=\"336\">Skuodo raj.</option>\r\n\r\n                <option value=\"199\">Tauragė</option>\r\n\r\n                <option value=\"310\">Tauragės raj.</option>\r\n\r\n                <option value=\"288\">Tauragės raj. Skaudvilė</option>\r\n\r\n                <option value=\"220\">Telšiai</option>\r\n\r\n                <option value=\"291\">Telšių raj. Varniai</option>\r\n\r\n                <option value=\"221\">Trakai</option>\r\n\r\n                <option value=\"332\">Trakų raj.</option>\r\n\r\n                <option value=\"305\">Trakų raj. Elektrėnai</option>\r\n\r\n                <option value=\"306\">Trakų raj. Grigiškės</option>\r\n\r\n                <option value=\"303\">Trakų raj. Lentvaris</option>\r\n\r\n                <option value=\"307\">Trakų raj. Rūdiškės</option>\r\n\r\n                <option value=\"304\">Trakų raj. Vievis</option>\r\n\r\n                <option value=\"228\">Ukmergė</option>\r\n\r\n                <option value=\"339\">Ukmergės raj.</option>\r\n\r\n                <option value=\"229\">Utena</option>\r\n\r\n                <option value=\"340\">Utenos raj.</option>\r\n\r\n                <option value=\"230\">Varėna</option>\r\n\r\n                <option value=\"341\">Varėnos raj.</option>\r\n\r\n                <option value=\"349\">Vilkaviškio r.</option>\r\n\r\n                <option value=\"268\">Vilkaviškio raj. Kybartai</option>\r\n\r\n                <option value=\"269\">Vilkaviškio raj. Virbalis</option>\r\n\r\n                <option value=\"243\">Vilkaviškis</option>\r\n\r\n                <option value=\"309\">Vilniaus raj.</option>\r\n\r\n                <option value=\"300\">Vilniaus raj. Nemenčinė</option>\r\n\r\n                <option value=\"198\">Vilnius</option>\r\n\r\n                <option value=\"241\">Visaginas</option>\r\n\r\n                <option value=\"244\">Zarasai</option>\r\n\r\n                <option value=\"350\">Zarasų raj.</option>\r\n\r\n                <option value=\"295\">Zarasų raj. Dusetos</option>\r\n\r\n                <option value=\"297\">Zarasų raj. Turmantas</option>\r\n\r\n                <option value=\"226\">Šakiai</option>\r\n\r\n                <option value=\"337\">Šakių raj.</option>\r\n\r\n                <option value=\"267\">Šakių raj. Gelgaudiškis</option>\r\n\r\n                <option value=\"266\">Šakių raj. Kudirkos Naumiestis</option>\r\n\r\n                <option value=\"227\">Šalčininkai</option>\r\n\r\n                <option value=\"338\">Šalčininkų raj.</option>\r\n\r\n                <option value=\"299\">Šalčininkų raj. Baltoji Vokė</option>\r\n\r\n                <option value=\"298\">Šalčininkų raj. Eišiškės</option>\r\n\r\n                <option value=\"233\">Šiauliai</option>\r\n\r\n                <option value=\"344\">Šiaulių raj.</option>\r\n\r\n                <option value=\"286\">Šiaulių raj. Kuršėnai</option>\r\n\r\n                <option value=\"217\">Šilalė</option>\r\n\r\n                <option value=\"328\">Šilalės raj.</option>\r\n\r\n                <option value=\"218\">Šilutė</option>\r\n\r\n                <option value=\"329\">Šilutės raj.</option>\r\n\r\n                <option value=\"262\">Šilutės raj. Pagėgiai</option>\r\n\r\n                <option value=\"263\">Šilutės raj. Panemunė</option>\r\n\r\n                <option value=\"219\">Širvintos</option>\r\n\r\n                <option value=\"330\">Širvintų raj.</option>\r\n\r\n                <option value=\"351\">Švenčionių r.</option>\r\n\r\n                <option value=\"301\">Švenčionių raj. Pabradė</option>\r\n\r\n                <option value=\"302\">Švenčionių raj. Švenčionėliai</option>\r\n\r\n                <option value=\"245\">Švenčionys</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-5\">{{'Address' | translate}}:*</label>\r\n        <div class=\"col-md-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" #address >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"control-label col-md-5\">{{'Phone' | translate}}:*</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"tel\" class=\"form-control\" id=\"phone_number\" #phone_number >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"telefone2\" class=\"control-label col-md-5\">{{'Phone2' | translate}}:</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"tel\" class=\"form-control\" id=\"telefone2\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label  class=\"control-label col-md-5\">{{'Email' | translate}}:</label>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"email\" id=\"email\" #email class=\"form-control\" >\r\n        </div>\r\n    </div>\r\n    <div class=\"form-inline\">\r\n        <label  class=\"control-label col-md-5\">{{'Salary' | translate}}*</label>\r\n        <div class=\"col-md-1\">\r\n            <input type=\"number\" class=\"form-control\" id=\"salary\" #salary  >\r\n        </div>\r\n        <label class=\"control-label col-md-2\" style=\"padding-bottom: 1cm\">EUR</label>\r\n    </div>\r\n</form>\r\n</body>\r\n\r\n\r\n<h1>{{message}} {{loan_code}} </h1>\r\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h4><b>{{'loan title' | translate}}</b></h4>\r\n  <label class=\"col-xs-2\">{{'Loan' | translate}}</label>\r\n  <input type=\"range\" [(ngModel)]=\"income1\" class=\"col-xs-8\"\r\n         showTicks=\"true\" max=\"20000\" min=\"500\" id=\"a1\" step=\"1\" thumbLabel=\"true\">\r\n\r\n  <input [(ngModel)]=\"income1\" class=\"digits col-xs-1\">\r\n  <label class=\"col-xs-1\">EUR</label>\r\n  <label class=\"col-xs-5\" style=\"text-align: right\">{{'loaners1' | translate}}</label>\r\n  <div class=\"col-xs-4\">\r\n    <input type=\"radio\" name=\"take1\" [(ngModel)]=\"ifAlone\" checked>{{'loaners2' | translate}}\r\n    <input type=\"radio\" name=\"take1\" [(ngModel)]=\"ifAlone\" value=\"true\">{{'loaners3' | translate}})\r\n  </div>\r\n  <label col-xs-3></label>\r\n  <div *ngIf=\"ifAlone\">\r\n    <label class=\"col-xs-12\"> </label>\r\n    <label class=\"col-xs-3\">{{'spouse' | translate}}</label>\r\n    <input type=\"range\" [(ngModel)]=\"income3\" class=\"col-xs-7\"\r\n           showTicks=\"true\" max=\"20000\" id=\"a2\" min=\"245\" step=\"1\" thumbLabel=\"true\">\r\n    <input [(ngModel)]=\"income3\" class=\"digits col-xs-1\">\r\n    <label class=\"col-xs-1\">{{'EURmo' | translate}}</label>\r\n  </div>\r\n  <label style=\"color:grey\" class=\"col-xs-12\"><hr /></label>\r\n  <h4 class=\"col-xs-12\"><b>{{'earnings1' | translate}}</b></h4>\r\n  <label class=\"col-xs-3\">{{'earnings2' | translate}}</label>\r\n  <input  type=\"range\" [(ngModel)]=\"income2\" class=\"col-xs-7\"\r\n          showTicks=\"true\" max=\"8000\" id=\"a3\" min=\"245\" step=\"1\" thumbLabel=\"true\">\r\n  <input [(ngModel)]=\"income2\" class=\"digits col-xs-1\">\r\n  <label class=\"col-xs-1\">{{'EURmo' | translate}}</label>\r\n  <div class=\"col-xs-12\">\r\n    <button type=\"submit\"  class=\"btn btn-primary\" (click)=\"sudet(income1,income2,income3)\">{{'calculate' | translate}}</button>\r\n  </div>\r\n  <p class=\"col-xs-4\" *ngIf=\"errors\"><b>{{'err' | translate}}</b></p>\r\n  <div *ngIf=\"!errors\">\r\n    <div *ngIf=\"isValid\">\r\n      <label class=\"col-xs-4\" style=\"text-align: right\">{{'addictionally' | translate}}</label>\r\n      <label class=\"col-xs-1\">{{this.result | currency :'EUR' :true:'1.2-2' }}</label>\r\n      <label class=\"col-xs-4\"  style=\"text-align: right\">{{'PaymentMonth' | translate}}:</label>\r\n      <label class=\"col-xs-1\">{{this.result1 | currency :'EUR' :true:'1.2-2' }}</label>\r\n      <label class=\"col-xs-3\"></label>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        //DUOMENU IMIMAS IS mock-data.ts
        // getCustomers(): Promise<Customer[]> {
        //   return Promise.resolve(CUSTOMERS);
        // }
        this.customersUrl = 'api/customers';
        this.mydbUrl = 'http://localhost:8080/customers';
        this.beanloanUrl = 'https://bank-loans-project.herokuapp.com/loan/get/all/';
        this.beanloanGetIDUrl = 'https://bank-loans-project.herokuapp.com/loan';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    // DUOMENU IMIMAS IS LOCAL DUOMENU BAZES
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.beanloanUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // getCustomers(): Promise<Customer[]> {
    //   return this.http.get(this.customersUrl)
    //       .toPromise()
    //       .then(response => response.json().data as Customer[])
    //       .catch(this.handleError);
    // }
    CustomerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CustomerService.prototype.getCustomer = function (id) {
        var url = this.beanloanGetIDUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.update = function (customer) {
        var url = this.customersUrl + "/" + customer.id;
        return this.http
            .put(url, JSON.stringify(customer), { headers: this.headers })
            .toPromise()
            .then(function () { return customer; })
            .catch(this.handleError);
    };
    CustomerService.prototype.create = function (name, surname, personal_code, doc_type, doc_code, country, city, address, phone_number, email, salary, amount, term, payment_day, loan_code) {
        console.log("cj suveike");
        return this.http
            .post("https://bank-loans-project.herokuapp.com/loan/newjson", ({
            name: name,
            surname: surname,
            personal_code: personal_code,
            doc_type: doc_type,
            doc_code: doc_code,
            country: country,
            city: city,
            address: address,
            phone_number: phone_number,
            email: email,
            salary: salary,
            amount: amount,
            term: term,
            payment_day: payment_day,
            loan_code: loan_code
        }), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    CustomerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Mantas/Desktop/SUPER/bank-loans-web-app-project/src/customer.service.js.map

/***/ })

},[580]);
//# sourceMappingURL=main.bundle.map