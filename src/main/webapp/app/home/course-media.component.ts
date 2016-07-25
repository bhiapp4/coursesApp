import { Component, Input } from '@angular/core';

@Component({
    selector :'course-media',
    template:`
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src={{course.imgSrc}}>
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{course.title}}</h4>
                <div class="description">
                    {{course.description}}
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-3">
                        {{course.author}}
                    </div>

                    <div class="col-lg-3 col-sm-3">
                        {{course.level}}
                    </div>

                    <div class="col-lg-3 col-sm-3">
                        {{course.duration}}
                    </div>                  

                    <div class="col-lg-3 col-sm-3">
                        {{course.updated_date | date: 'yyyy-MM-dd'}}
                    </div>                  
                </div>
            </div>
        </div>
    `,
    styles:[`
        .media{
            margin-bottom:10px;
        }

        .description{
            margin-bottom:5px;
            margin-top:10px;
        }
    
    `]
})
export class CourseMediaComponent{
    @Input() course;    
}