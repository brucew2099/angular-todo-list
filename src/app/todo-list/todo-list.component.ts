import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { LoginService } from '../login.service';
import { LocalStorageService } from '../local-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Todo from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoForm: FormGroup;
  displayedColumns: string[] = ['Id', 'Item', 'Importance', 'delete'];

  todos = new MatTableDataSource<Todo>([]);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private fb:FormBuilder, private tds:TodoService, private route:ActivatedRoute,
      private ls:LoginService, private localstorage:LocalStorageService) {
    this.todoForm = this.fb.group({
      NewItem: ['', [Validators.required]],
      NewImportance: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[1-9]?[0]?$'),
          Validators.max(10), Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.getAllTodos();
    setTimeout(() => {
      this.ls.changeMessage('Welcome, ' + this.localstorage.getItem('firstname'));
    }, 1000);
    this.todos.paginator = this.paginator;
  }

  get NewItem() {
    return this.todoForm.value.NewItem;
  }

  get NewImportance() {
    return this.todoForm.value.NewImportance;
  }

  get f() {
    return this.todoForm.controls;
  }

  addTodo(data: Todo) {
    data.Item = this.NewItem;
    data.Importance = this.NewImportance;
    this.tds.addTodo(data);
    setTimeout(() => {
      this.getAllTodos();
    }, 1000);
  }

  removeTodo(todo: Todo) {
    this.tds.deleteTodo(todo.Id);
    setTimeout(() => {
      this.getAllTodos();
    }, 1000);
  }

  getAllTodos() {
    this.tds.getAllTodos().subscribe(res => {
      this.todos.data = res;
   });
  }
}
