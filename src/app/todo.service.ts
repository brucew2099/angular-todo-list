import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _uri = 'https://6089a8978c8043001757f370.mockapi.io/api/v1/todos';

  constructor(private http:HttpClient) { }

  addTodo(item:string, category:string, importance:number, date:Date, who:string) {
    const obj = {
      item, category, importance, date, who, done: false
    }

    console.log(obj);

    this.http.post(`${this._uri}`, obj).subscribe(res => {
      console.log('Item added successfully');
    })
  }

  getTodos() {
    return this.http.get(`${this._uri}`);
  }

  editTodo(id:number) {
    return this.http.get(`${this._uri}/${id}`);
  }

  updateTodo(id:number, item:string, category:string, importance:number, date:Date, who:string, done:boolean) {
    const obj = {
      id, item, category, importance, date, who, done: false
    }
    console.log(obj);
    this.http.put(`${this._uri}/${id}`, obj).subscribe(res => {
      console.log('Update is successful');
    })
  }

  deleteTodo(id:number) {
    this.http.delete(`${this._uri}/${id}`).subscribe(res => {
      console.log('Delete is successful');
    })
  }
}
