import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Member from './member';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _uri:string = 'https://6089a8de8c8043001757f37d.mockapi.io/api/v1/login';

  members: Member[] = [];

  constructor(private http:HttpClient) { }

  getAllRegisteredMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this._uri}`);
  }

  registerMember(data:any) {
    return this.http.post(`${this._uri}`, data);
  }
}
