System.register(['@angular/core', '@angular/forms', '../shared/validation.service', '../shared/control-messages', './user.service', '@angular/http', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, validation_service_1, control_messages_1, user_service_1, http_1, router_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            },
            function (control_messages_1_1) {
                control_messages_1 = control_messages_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_userService, fb, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.checking = false;
                    this.signupForm = fb.group({
                        'user_name': ['',
                            forms_1.Validators.compose([forms_1.Validators.required,
                                validation_service_1.ValidationService.validateEmail
                            ])
                        ],
                        'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), validation_service_1.ValidationService.validatePassword])],
                        'first_name': ['', forms_1.Validators.required],
                        'middle_name': [''],
                        'last_name': ['', forms_1.Validators.required],
                        'company': ['']
                    });
                }
                SignupComponent.prototype.signup = function () {
                    var _this = this;
                    console.log("In signup");
                    console.log(this.signupForm.value);
                    this._userService.createUser(this.signupForm.value).subscribe(function (res) {
                        console.log(res);
                        _this._router.navigate(['/home']);
                    }, function (error) {
                        console.log(error);
                    });
                };
                SignupComponent.prototype.checkIfUsernameIsAlreadyTaken = function (userNameCntrl) {
                    var _this = this;
                    console.log(userNameCntrl);
                    this.checking = true;
                    this._userService.checkIfUsernameExists(userNameCntrl.value)
                        .subscribe(function (result) {
                        _this.checking = false;
                        if (result === true) {
                            console.log("Returing duplicated as true");
                            return { duplicated: true };
                        }
                        console.log("Returning null");
                        return null;
                    });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'sign-up',
                        templateUrl: 'app/signup/signup.html',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, control_messages_1.ControlMessages],
                        providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, forms_1.FormBuilder, router_1.Router])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map