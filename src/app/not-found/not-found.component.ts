import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  where: string = '';
  route: string = '';

  constructor(private localstorage:LocalStorageService) { }

  ngOnInit(): void {
    if(this.isLoggedIn()) {
      this.where = 'Todo Page';
      this.route = '/todos';
    }
    else {
      if(this.isRegistered()) {
        this.where = 'Registration Page';
        this.route = '/register/create';
      }
      else {
        this.where = 'Home Page';
        this.route = '';
      }
    }
  }

  isLoggedIn() {
    let loggedin = this.localstorage.getItem('loggedin');
    return (loggedin === 'true');
  }

  isRegistered() {
    let registered = this.localstorage.getItem('register');
    return (registered !== null);
  }





}
