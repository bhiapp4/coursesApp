import { Component }from '@angular/core';
import { FormControl, FormBuilder,Validators,FormGroup,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';
import { ControlMessages } from '../shared/control-messages';
import { UserService } from './user.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector:'sign-up',
    templateUrl:'app/signup/signup.html',
    directives:[REACTIVE_FORM_DIRECTIVES, ControlMessages],
    providers:[UserService, HTTP_PROVIDERS]
})
export class SignupComponent{
    signupForm:FormGroup;
    checking:boolean = false;
    constructor( private _userService:UserService, fb:FormBuilder, private _router:Router){
        this.signupForm = fb.group({
            'user_name':['',
                        Validators.compose([Validators.required
                        ,ValidationService.validateEmail
                        ])
                        //,
                        //Validators.composeAsync([ValidationService.checkIfUsernameIsAlreadyTaken])
                        //Validators.composeAsync([this.checkIfUsernameIsAlreadyTaken.bind(this)])                   
                        ],
            'password':['',Validators.compose([Validators.required,Validators.minLength(5),ValidationService.validatePassword])],
            'first_name':['',Validators.required],
            'middle_name':[''],
            'last_name':['', Validators.required],
            'company':['']
        })
    }

    signup(){
        console.log("In signup");
        console.log(this.signupForm.value);
       this._userService.createUser(this.signupForm.value).subscribe((res) =>{
           console.log(res);
           this._router.navigate(['/home']);
       },(error) =>{
           console.log(error);
       });
    }

    checkIfUsernameIsAlreadyTaken(userNameCntrl: FormControl){
        console.log(userNameCntrl);
        this.checking = true;
        this._userService.checkIfUsernameExists(userNameCntrl.value)
            .subscribe(result =>{
                this.checking = false;
                if(result === true){
                    console.log("Returing duplicated as true");
                    return { duplicated : true };
                }
                console.log("Returning null");
                return null;
            }
        );
    }
 }