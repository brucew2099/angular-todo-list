import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Todo from '../todo';
import { TodoService } from '../todo.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoEditForm: FormGroup;
  id: number = 0;
  item: string = '';
  importance: number = 0;

  constructor(private fb:FormBuilder, private tds:TodoService, private router:Router, private route:ActivatedRoute,
      private localstorage:LocalStorageService) {
    this.todoEditForm = this.fb.group({
      Id: [''],
      Item: ['', [Validators.required]],
      Importance: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('^[1-9]?[0]?$'),
          Validators.max(10), Validators.min(1)]]
    })
  }

  ngOnInit(): void {
    if(this.localstorage.length() > 0 && this.localstorage.getItem('firstname') !== null) {
      this.route.queryParams.subscribe(params => {
        this.id = params.id;
      });

      setTimeout(() => {
        this.tds.getTodo(this.id).subscribe(res => {
          this.id = res.Id;
          this.item = res.Item;
          this.importance = res.Importance;
        });
      }, 800);
    }
    else {
      if(this.localstorage.getItem('register') === null) {
        this.router.navigate(['']);
      }
    }
  }

  get Id() {
    return this.todoEditForm.value.Id;
  }

  get Item() {
    return this.todoEditForm.value.Item;
  }

  get Importance() {
    return this.todoEditForm.value.Importance;
  }

  get f() {
    return this.todoEditForm.controls;
  }

  editTodo(data:Todo) {
    this.tds.editTodo(data);
    setTimeout(() => {
      this.router.navigate(['todos']);
    }, 1000);
  }
}
