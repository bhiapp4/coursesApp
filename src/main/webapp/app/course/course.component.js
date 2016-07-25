System.register(['@angular/core', '@angular/forms', '../shared/control-messages'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, control_messages_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (control_messages_1_1) {
                control_messages_1 = control_messages_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent(_fb) {
                    this._fb = _fb;
                    this.moduleGroupsArray = new forms_1.FormArray([this.getNewModuleGroup()]);
                    this.course = {
                        title: "", author: "", description: "", fee: "", category: "", end_goal: "", level: "", duration: "", requirements: "",
                        modules: [{ module_name: "", clips: [{ name: "", duration: "" }, { name: "", duration: "" }] },
                            { module_name: "", clips: [{ name: "", duration: "" }, { name: "", duration: "" }] }]
                    };
                    this.courseForm = _fb.group({
                        'title': ['', forms_1.Validators.required],
                        'description': [''],
                        'fee': [''],
                        'category': ['', forms_1.Validators.required],
                        'end_goal': [''],
                        'level': ['', forms_1.Validators.required],
                        'requirements': [''],
                        'duration': ['', forms_1.Validators.required],
                        'modules': this.moduleGroupsArray
                    });
                }
                CourseComponent.prototype.getNewModuleGroup = function () {
                    return this._fb.group({
                        'module_name': ['', forms_1.Validators.required],
                        'clips': new forms_1.FormArray([
                            this.getNewClipGroup()
                        ])
                    });
                };
                CourseComponent.prototype.getNewClipGroup = function () {
                    return this._fb.group({
                        'name': ['', forms_1.Validators.required],
                        'duration': ['', forms_1.Validators.required]
                    });
                };
                CourseComponent.prototype.addModule = function () {
                    this.moduleGroupsArray.push(this.getNewModuleGroup());
                };
                CourseComponent.prototype.removeModule = function (index) {
                    this.moduleGroupsArray.removeAt(index);
                    console.log(this.moduleGroupsArray);
                };
                CourseComponent.prototype.addClip = function (clips) {
                    clips.push(this.getNewClipGroup());
                };
                CourseComponent.prototype.removeClip = function (clips, index) {
                    clips.removeAt(index);
                };
                CourseComponent.prototype.saveCourse = function () {
                    console.log(this.courseForm);
                };
                CourseComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/course/add-course.html',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.FORM_DIRECTIVES, control_messages_1.ControlMessages],
                        styles: ["\n        .glyphicon{\n            cursor:pointer;\n        }   \n    "]
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map