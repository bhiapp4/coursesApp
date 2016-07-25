System.register(['@angular/core', './course-media.component'], function(exports_1, context_1) {
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
    var core_1, course_media_component_1;
    var CourseListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_media_component_1_1) {
                course_media_component_1 = course_media_component_1_1;
            }],
        execute: function() {
            CourseListComponent = (function () {
                function CourseListComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CourseListComponent.prototype, "courses", void 0);
                CourseListComponent = __decorate([
                    core_1.Component({
                        selector: 'course-list',
                        templateUrl: 'app/home/course-list.html',
                        directives: [course_media_component_1.CourseMediaComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseListComponent);
                return CourseListComponent;
            }());
            exports_1("CourseListComponent", CourseListComponent);
        }
    }
});
//# sourceMappingURL=course-list.component.js.map