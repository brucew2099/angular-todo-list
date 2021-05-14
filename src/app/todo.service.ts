import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _uri = 'https://6089a8978c8043001757f370.mockapi.io/api/v1/todos';

  constructor(private http:HttpClient) { }

  addTodo(data: Todo) {
    this.http.post(`${this._uri}`, data).subscribe(res => {
      console.log('Item added successfully');
    })
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this._uri}`);
  }

  deleteTodo(id:number) {
    this.http.delete(`${this._uri}/${id}`).subscribe(res => {
      console.log('Delete is successful');
    })
  }
}
