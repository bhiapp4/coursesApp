import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

export const routes: RouterConfig = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:courseType', component: HomeComponent},
  { path: 'addCourse', component: CourseComponent}
  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];