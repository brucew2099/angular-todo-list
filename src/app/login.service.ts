import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import Member from './member';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _uri:string = 'https://6089a8de8c8043001757f37d.mockapi.io/api/v1/login';

  public editDataDetails:string = '';

  private messageSource = new BehaviorSubject<string>(this.editDataDetails);
  currentMessage = this.messageSource.asObservable();

  constructor(private http:HttpClient) { }

  getAllMembers() {
    return this.http.get<Member[]>(`${this._uri}`);
  }

  changeMessage(message:string) {
    this.messageSource.next(message);
  }
}
