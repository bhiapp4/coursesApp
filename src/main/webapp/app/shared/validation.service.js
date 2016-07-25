System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            ValidationService = (function () {
                function ValidationService() {
                }
                ValidationService.validateEmail = function (usernameCntrl) {
                    var email = usernameCntrl.value;
                    var rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!rejex.test(email)) {
                        return { emailInValid: true };
                    }
                    return null;
                };
                ValidationService.validatePassword = function (passwordCntrl) {
                    // {5,100}           - Assert password is between 5 and 100 characters
                    // (?=.*[0-9])       - Assert a string has at least one number
                    if (passwordCntrl.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,100}$/)) {
                        return null;
                    }
                    else {
                        return { invalidPassword: true };
                    }
                };
                ValidationService.checkIfUsernameIsAlreadyTaken = function (userNameCntrl) {
                    var value = userNameCntrl.value;
                    if (value === 'Appi') {
                        console.log("returning as duplicate");
                        return { duplicate: true };
                    }
                    return null;
                };
                return ValidationService;
            }());
            exports_1("ValidationService", ValidationService);
        }
    }
});
//# sourceMappingURL=validation.service.js.map