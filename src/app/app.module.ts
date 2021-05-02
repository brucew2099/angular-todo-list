import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberLoginComponent } from './member-login/member-login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { TodoService } from './todo.service';
import { RegisterService } from './register.service';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoGetComponent } from './todo-get/todo-get.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { MemberRegisterAddComponent } from './member-register-add/member-register-add.component';
import { MemberRegisterEditComponent } from './member-register-edit/member-register-edit.component';
import { MemberRegisterGetComponent } from './member-register-get/member-register-get.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberLoginComponent,
    NotFoundComponent,
    TodoAddComponent,
    TodoDeleteComponent,
    TodoGetComponent,
    TodoEditComponent,
    MemberRegisterAddComponent,
    MemberRegisterEditComponent,
    MemberRegisterGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, TodoService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
