import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _uri:string = 'https://6089a8978c8043001757f370.mockapi.io/api/v1/login';

  constructor(private http:HttpClient) { }

  register(Email:string, Password:string, FirstName:string, LastName:string) {
    const obj = {
      Email, Password, FirstName, LastName, Active:true, Created:new Date()
    }

    console.log(obj);

    this.http.post(`${this._uri}`, obj).subscribe(res => {
      console.log('Member registered successfully');
    })
  }
}
