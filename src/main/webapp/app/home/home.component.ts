import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Params, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { CourseListComponent } from './course-list.component';

@Component({
    templateUrl:'app/home/home.html',
    providers:[HTTP_PROVIDERS, HomeService],
    directives:[CourseListComponent,ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit{
    
    newestCourses;
    popularCourses;
    recommendedCourses;
    currentActiveTab:string = 'Newest';

    constructor(private _homeService:HomeService, private _activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        let courseType = this._activatedRoute.params['courseType'];

        if(courseType != null){
            this.currentActiveTab = courseType;
        }

        if(this.currentActiveTab === 'Newest'){
            this._homeService.getNewestCourses().subscribe(response =>{
                this.newestCourses = response;
                for (var i = 0; i < this.newestCourses.length; i++){
                    this.newestCourses[i].imgSrc="http://lorempixel.com/80/80/people?random="+i;
                }
            });
        }

        if(this.currentActiveTab === 'Popular'){
            this._homeService.getPopularCourses().subscribe(response =>{
                this.popularCourses = response;
            });
        }

        if(this.currentActiveTab === 'Recommended'){
            this._homeService.getRecommendedCourses().subscribe(response =>{
                this.recommendedCourses = response;
            });
        }
    }
}