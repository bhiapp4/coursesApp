import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';
import { ControlMessages } from '../shared/control-messages'; 
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserService } from '../signup/user.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
	selector:'login',
    templateUrl:'app/login/login.html',
    directives:[REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, ControlMessages],
    providers:[UserService, HTTP_PROVIDERS]
 })
export class LoginComponent{

    loginForm:FormGroup;

    constructor(fb:FormBuilder, private _router:Router, private _userService:UserService){
        this.loginForm = fb.group({
            'user_name':['',Validators.compose([Validators.required,ValidationService.validateEmail])],
            'password':['',Validators.required]
        });
    }

    login(){
        this._userService.checkCredentials(this.loginForm.value)
            .subscribe((res)=>{
                console.log(res);
                if(res.valid){
                    this._router.navigate(['/home']);                    
                }else{
                    alert("Invalid login..");
                }
            },(err) =>{
                console.log(err)
            });
        
    }
}