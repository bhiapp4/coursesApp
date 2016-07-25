System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, forms_1;
    var ControlMessages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            ControlMessages = (function () {
                function ControlMessages() {
                }
                ControlMessages.getValidationMessage = function (propName, errorsObj) {
                    var ERROR_MESSAGES = {
                        'required': 'Required Field',
                        'emailInValid': 'Email is invalid',
                        'minlength': "Minium length is " + errorsObj.requiredLength,
                        'invalidPassword': 'Password should have 1 number',
                        'duplicated': 'Username is already taken'
                    };
                    return ERROR_MESSAGES[propName];
                };
                Object.defineProperty(ControlMessages.prototype, "errorMessage", {
                    get: function () {
                        var errors = this.control.errors;
                        // console.log(this.control);
                        for (var propName in errors) {
                            if (errors.hasOwnProperty(propName) && this.control.touched) {
                                if (errors[propName] != null) {
                                    return ControlMessages.getValidationMessage(propName, errors[propName]);
                                }
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', forms_1.FormControl)
                ], ControlMessages.prototype, "control", void 0);
                ControlMessages = __decorate([
                    core_1.Component({
                        selector: 'control-messages',
                        template: "\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">\n            {{errorMessage}}\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ControlMessages);
                return ControlMessages;
            }());
            exports_1("ControlMessages", ControlMessages);
        }
    }
});
//# sourceMappingURL=control-messages.js.map