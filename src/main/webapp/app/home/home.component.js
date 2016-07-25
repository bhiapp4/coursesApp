System.register(['@angular/core', './home.service', '@angular/http', '@angular/router', './course-list.component'], function(exports_1, context_1) {
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
    var core_1, home_service_1, http_1, router_1, course_list_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_service_1_1) {
                home_service_1 = home_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_list_component_1_1) {
                course_list_component_1 = course_list_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_homeService, _activatedRoute) {
                    this._homeService = _homeService;
                    this._activatedRoute = _activatedRoute;
                    this.currentActiveTab = 'Newest';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var courseType = this._activatedRoute.params['courseType'];
                    if (courseType != null) {
                        this.currentActiveTab = courseType;
                    }
                    if (this.currentActiveTab === 'Newest') {
                        this._homeService.getNewestCourses().subscribe(function (response) {
                            _this.newestCourses = response;
                            for (var i = 0; i < _this.newestCourses.length; i++) {
                                _this.newestCourses[i].imgSrc = "http://lorempixel.com/80/80/people?random=" + i;
                            }
                        });
                    }
                    if (this.currentActiveTab === 'Popular') {
                        this._homeService.getPopularCourses().subscribe(function (response) {
                            _this.popularCourses = response;
                        });
                    }
                    if (this.currentActiveTab === 'Recommended') {
                        this._homeService.getRecommendedCourses().subscribe(function (response) {
                            _this.recommendedCourses = response;
                        });
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/home.html',
                        providers: [http_1.HTTP_PROVIDERS, home_service_1.HomeService],
                        directives: [course_list_component_1.CourseListComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [home_service_1.HomeService, router_1.ActivatedRoute])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map