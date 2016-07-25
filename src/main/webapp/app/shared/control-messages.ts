import {Component,Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector:'control-messages',
    template:`
        <div class="alert alert-danger" *ngIf="errorMessage != null">
            {{errorMessage}}
        </div>
    `
})
export class ControlMessages{
    @Input()control:FormControl;
    
    constructor(){

    }    

   static getValidationMessage(propName, errorsObj?:any):string{
        let ERROR_MESSAGES={
            'required' : 'Required Field',
            'emailInValid' : 'Email is invalid',
            'minlength': `Minium length is ${errorsObj.requiredLength}`,
            'invalidPassword':'Password should have 1 number',
            'duplicated': 'Username is already taken'
        }
        return ERROR_MESSAGES[propName];
    }

    get errorMessage():string{
        let errors = this.control.errors;
       // console.log(this.control);
        for (let propName in errors){
            if(errors.hasOwnProperty(propName) && this.control.touched){
                if (errors[propName] != null){
                    return ControlMessages.getValidationMessage(propName, errors[propName]);
                }
            }
        }
    }

 }

