import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoGetComponent } from './todo-get/todo-get.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { MemberRegisterAddComponent } from './member-register-add/member-register-add.component';
import { MemberRegisterGetComponent } from './member-register-get/member-register-get.component';
import { MemberRegisterEditComponent } from './member-register-edit/member-register-edit.component';

const routes: Routes = [
  {
    path: '',
    component:MemberLoginComponent,
  },
  {
    path: 'todos',
    component: TodoGetComponent,
  },
  {
    path: 'todo/create',
    component: TodoAddComponent,
  },
  {
    path: 'todo/delete/:id',
    component: TodoDeleteComponent,
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent,
  },
  {
    path: 'register/create',
    component: MemberRegisterAddComponent
  },
  {
    path: 'register/:id',
    component: MemberRegisterEditComponent
  },
  {
    path: '404',
    component:NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
