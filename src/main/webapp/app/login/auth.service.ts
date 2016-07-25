import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
    constructor(){

    }

    isAuthorized(path){
        if(path.url === "/login"){
            return true;
        }
        return false;
    }
}