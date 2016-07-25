import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HomeService{
    
    private _url:string="/courses"

    constructor(private _http:Http){
        
    }

    getNewestCourses(){
        return this._http.get(this._url+'/Newest')
            .map(result => result.json());
    }

    getPopularCourses(){
        return this._http.get(this._url+'/Popular')
            .map(result =>result.json());
    }

    getRecommendedCourses(){
        return this._http.get(this._url+'/Recommended')
            .map(result => result.json());
    }

}