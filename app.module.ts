import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PasswardComponent } from './passward/passward.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { TestComponent } from './test/test.component';

import { ReactiveFormsModule } from '@angular/forms';


import { Password2Component } from './password2/password2.component';
import { Register2Component } from './register2/register2.component';
import { Studentlogin1Component } from './studentlogin1/studentlogin1.component';
import { Adminlogin2Component } from './adminlogin2/adminlogin2.component';
import { StutestwelcomeComponent } from './stutestwelcome/stutestwelcome.component';
import { Stutestwelcome2Component } from './stutestwelcome2/stutestwelcome2.component';
import { Stutestwelcome3Component } from './stutestwelcome3/stutestwelcome3.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';




import { HttpClientModule } from '@angular/common/http';
import { UpdateangComponent } from './updateang/updateang.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswardComponent,
    UserDetailsComponent,
    RegisterComponent,
    WelcomeComponent,
    AdminComponent,
    TestComponent,
    Password2Component,
    Register2Component,
    Studentlogin1Component,
    Adminlogin2Component,
    StutestwelcomeComponent,
    Stutestwelcome2Component,
    Stutestwelcome3Component,
    Test1Component,
    Test2Component,
    Test3Component,
    UpdateangComponent,
    


    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
