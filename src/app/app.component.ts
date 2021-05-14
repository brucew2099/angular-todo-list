import { Component, OnInit, OnDestroy} from '@angular/core';
import { LoginService } from './login.service';
import { LocalStorageService } from './local-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-todo-list';

  message:string = '';
  subscription: Subscription = new Subscription();

  constructor(private ls: LoginService, private localstorage:LocalStorageService){}

  ngOnInit() {
    this.subscription = this.ls.currentMessage.subscribe(message => {
      this.message = message;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.localstorage.clear();
  }

  isLoggedIn() {
    let loggedin = this.localstorage.getItem('loggedin');
    return (loggedin === 'true');
  }
}
