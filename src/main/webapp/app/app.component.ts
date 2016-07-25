import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ControlMessages } from './shared/control-messages'; 
import { AuthService } from './login/auth.service';

@Component({
    selector: 'my-app',
    template: `
		<nav-bar></nav-bar>
		<div class="container">
			<router-outlet></router-outlet>
		</div>
    `,
    directives:[ROUTER_DIRECTIVES, NavbarComponent,ControlMessages],
    providers:[AuthService]
})
export class AppComponent { 

    constructor(private _router:Router, private _authService:AuthService){
      _router.events.subscribe(path =>{
        if(!_authService.isAuthorized(path)){
          this._router.navigate(['/login']);
        }
        //console.log(path);
      });

    }

}