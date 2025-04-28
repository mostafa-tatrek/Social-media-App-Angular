import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { DateComponent } from './components/posts/date/date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IPost } from './models/post.model';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetRequestComponent } from './auth/reset-request/reset-request.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NavbarComponent, PostsComponent, DateComponent, FormComponent, LoginComponent, RegisterComponent, ResetRequestComponent, ResetPasswordComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
