import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AuthgGuard } from './authg.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'forgetpassword', component: ForgetPasswordComponent},
  { path: 'homepage', component: HomePageComponent, canActivate: [AuthgGuard]},
  { path: 'student', component: StudentRegistrationComponent},
  { path: 'update/:id', component: UpdatestudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
