import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService{
    private _url="users";

    constructor(private _http: Http){
    }
    
    checkIfUsernameExists(username){
        return this._http.get(this._url+"/"+username)
                   .map(response => response.json())
    }

    createUser(user){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')       
        return this._http.post(this._url, 
            JSON.stringify(user),{headers: headers})
            .map(response => response.json());
    }

    checkCredentials(login){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')  
        return this._http.post(this._url+"/validate",
            JSON.stringify(login),{headers:headers})
            .map(res => res.json());     
    
    }
}