import { Component, Input } from '@angular/core';
import {CourseMediaComponent} from './course-media.component';

@Component({
    selector: 'course-list',
    templateUrl:'app/home/course-list.html',
    directives:[CourseMediaComponent]
})
export class CourseListComponent{
    @Input()courses;
}