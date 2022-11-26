import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { Adminlogin2Component } from './adminlogin2/adminlogin2.component';
import { LoginComponent } from './login/login.component';
import { PasswardComponent } from './passward/passward.component';
import { Password2Component } from './password2/password2.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Studentlogin1Component } from './studentlogin1/studentlogin1.component';
import { StutestwelcomeComponent } from './stutestwelcome/stutestwelcome.component';
import { Stutestwelcome2Component } from './stutestwelcome2/stutestwelcome2.component';
import { Stutestwelcome3Component } from './stutestwelcome3/stutestwelcome3.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { UpdateangComponent } from './updateang/updateang.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path:"",
    component:WelcomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"admin/adminlogin2",
    component:Adminlogin2Component
  },
  {
    path:"admin/adminlogin2/admin",
    component:AdminComponent
  },
  {
    path:"login/studentlogin1",
    component:Studentlogin1Component
  },
  {
    path:"login/studentlogin1/login",
    component:LoginComponent
  },
  // {
  //   path:"/login/studentlogin1/stutestwelcome",
  //   component:""
  // },
  {
    path:"login/studentlogin1/stutestwelcome",
    component:StutestwelcomeComponent
  },
  {
    path:"login/studentlogin1/stutestwelcome2",
    component:Stutestwelcome2Component
  },
  {
    path:"login/studentlogin1/stutestwelcome3",
    component:Stutestwelcome3Component
  },
  {
    path:"login/studentlogin1/stutestwelcome/studentlogin1",
    component:Studentlogin1Component
  },
  {
    path:"login/studentlogin1/stutestwelcome1/studentlogin1",
    component:Studentlogin1Component
  },
  {
    path:"login/studentlogin1/stutestwelcome2/studentlogin1",
    component:Studentlogin1Component
  },
  {
    path:"login/studentlogin1/stutestwelcome/test1",
    component:Test1Component
  },
  {
    path:"login/studentlogin1/stutestwelcome2/test2",
    component:Test2Component
  },
  {
    path:"login/studentlogin1/stutestwelcome3/test3",
    component:Test3Component
  },
  {
    path:"admin/adminlogin2/updateang",
    component:UpdateangComponent
  },
  // {
  //   path:"login/studentlogin1/stutestwelcome/studentlogin1/stutestwelcome2",
  //   component:Stutestwelcome2Component
  // },
  
  {
    path:'login/passward',
    component:PasswardComponent
  },
  {
    path:'login/register',
    component:RegisterComponent
  },
  {
    path:'admin/password2',
    component:Password2Component
  },
  {
    path:'admin/register2',
    component:Register2Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
