import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray, Validators, REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES } from '@angular/forms';
import {ControlMessages} from '../shared/control-messages';

@Component({
    templateUrl:'app/course/add-course.html',
    directives:[REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, ControlMessages],
    styles:[`
        .glyphicon{
            cursor:pointer;
        }   
    `]
})
export class CourseComponent{
    courseForm:FormGroup;
    moduleGroupsArray=new FormArray([this.getNewModuleGroup()])
    course = {
        title:"",author:"",description:"",fee:"",category:"",end_goal:"",level:"",duration:"",requirements:"",
        modules:[{module_name:"",clips:[{name:"",duration:""},{name:"",duration:""}]},
            {module_name:"",clips:[{name:"",duration:""},{name:"",duration:""}]}]
    };

    constructor(private _fb:FormBuilder){
        this.courseForm = _fb.group({
            'title':['',Validators.required],
            'description':[''],
            'fee':[''],
            'category':['',Validators.required],
            'end_goal':[''],
            'level':['', Validators.required],
            'requirements':[''],
            'duration':['',Validators.required],
            'modules': this.moduleGroupsArray
        });
     }

    getNewModuleGroup(){
        return this._fb.group({
                'module_name':['', Validators.required],
                'clips': new FormArray([
                    this.getNewClipGroup()
                ])
         });
    }

    getNewClipGroup(){
        return this._fb.group({
            'name':['', Validators.required],
            'duration':['', Validators.required]
        });  
    }


    addModule(){
        this.moduleGroupsArray.push(this.getNewModuleGroup());    
    }

    removeModule(index){
        this.moduleGroupsArray.removeAt(index);
        console.log(this.moduleGroupsArray);
    }

    addClip(clips){
        clips.push(this.getNewClipGroup());
    }

    removeClip(clips,index){
        clips.removeAt(index);
    }

    saveCourse(){
        console.log(this.courseForm);
    }

}