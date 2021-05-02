import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _uri:string = 'https://6089a8978c8043001757f370.mockapi.io/api/v1/login';

  constructor(private http:HttpClient) { }

  getLogin() {
    return this.http.get(`${this._uri}`);
  }

  login(username:string, password:string) {
    // I wouldn't use this mechanism to check credentials in a
    // real production setting since this is not the most
    // resource friendly and secure way to handle a login
    // process; but since I'm using a mocked API, I didn't have
    // the freedom to look up anything other than using the id.
    // Therefore, I have to retrieve all the data I have
    // mocked up and do the lookup on the client machine.

    let allResults = this.getLogin();


  }
}
