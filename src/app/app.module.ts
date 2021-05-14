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
import { MemberRegisterAddComponent } from './member-register-add/member-register-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from './local-storage.service';
import { MemberLogoutComponent } from './member-logout/member-logout.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberLoginComponent,
    NotFoundComponent,
    MemberRegisterAddComponent,
    TodoListComponent,
    HelpDialogComponent,
    MemberLogoutComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [LoginService, TodoService, RegisterService, MatDialog, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
