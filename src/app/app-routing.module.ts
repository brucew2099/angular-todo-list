import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { MemberRegisterAddComponent } from './member-register-add/member-register-add.component';
import { MemberLogoutComponent } from './member-logout/member-logout.component';

const routes: Routes = [
  {
    path: '',
    component:MemberLoginComponent,
  },
  {
    path: 'todos',
    component: TodoListComponent,
  },
  {
    path: 'todo/edit',
    component: TodoEditComponent,
  },
  {
    path: 'register/create',
    component: MemberRegisterAddComponent,
  },
  {
    path: 'logout',
    component: MemberLogoutComponent
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
