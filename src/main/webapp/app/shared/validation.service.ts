import {FormControl} from '@angular/forms';

export class ValidationService{

    static validateEmail(usernameCntrl:FormControl){
        var email = usernameCntrl.value;
        var rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!rejex.test(email)){
            return { emailInValid: true };
        }
        return null;

    }

    static validatePassword(passwordCntrl:FormControl) {
        // {5,100}           - Assert password is between 5 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (passwordCntrl.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,100}$/)) {
            return null;
        } else {
            return { invalidPassword: true };
        }
    }

    static checkIfUsernameIsAlreadyTaken(userNameCntrl: FormControl){
        let value = userNameCntrl.value;
        if(value === 'Appi'){
            console.log("returning as duplicate");
            return { duplicate : true };
        }
        return null;
        
    }

    

 }