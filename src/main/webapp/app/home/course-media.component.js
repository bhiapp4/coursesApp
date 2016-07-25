System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CourseMediaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CourseMediaComponent = (function () {
                function CourseMediaComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CourseMediaComponent.prototype, "course", void 0);
                CourseMediaComponent = __decorate([
                    core_1.Component({
                        selector: 'course-media',
                        template: "\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src={{course.imgSrc}}>\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{course.title}}</h4>\n                <div class=\"description\">\n                    {{course.description}}\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-sm-3\">\n                        {{course.author}}\n                    </div>\n\n                    <div class=\"col-lg-3 col-sm-3\">\n                        {{course.level}}\n                    </div>\n\n                    <div class=\"col-lg-3 col-sm-3\">\n                        {{course.duration}}\n                    </div>                  \n\n                    <div class=\"col-lg-3 col-sm-3\">\n                        {{course.updated_date | date: 'yyyy-MM-dd'}}\n                    </div>                  \n                </div>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .media{\n            margin-bottom:10px;\n        }\n\n        .description{\n            margin-bottom:5px;\n            margin-top:10px;\n        }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseMediaComponent);
                return CourseMediaComponent;
            }());
            exports_1("CourseMediaComponent", CourseMediaComponent);
        }
    }
});
//# sourceMappingURL=course-media.component.js.map