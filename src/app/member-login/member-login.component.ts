import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { LocalStorageService } from '../local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import Member from '../member';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  message:string = '';
  errorMessage:string = '';
  hide:boolean = true;
  loginForm:FormGroup;
  members:Member[] = [new Member(0, '', '', '', '')];
  title:string = 'Password Help';
  header:string = 'Password should follow these rules:';
  content:string = `  (a) Contains at least 8 characters and at most 25 characters

  (b) Contains at least one digit

  (c) Contains at least one upper case alphabet

  (d) Contains at least one lower case alphabet

  (e) Contains at least one special character which includes !@#$%&*()-+=^

  (f) Does NOT contain any white space`;


  constructor(private fb:FormBuilder, private ls:LoginService, private router:Router,
      private route:ActivatedRoute, public dialog:MatDialog, private localstorage:LocalStorageService) {
    this.loginForm = this.fb.group({
      Email: ['',[Validators.required, Validators.email]],
      Password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(25),
            Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$')]]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.localstorage.clear();
    }, 500);
    this.ls.currentMessage.subscribe(msg => {
      this.message = msg;
    });
  }

  get Email() {
    return this.loginForm.value.Email;
  }

  get Password() {
    return this.loginForm.value.Password;
  }

  getAllMembers() {
    this.ls.getAllMembers().subscribe(res => {
       this.members = res;
    })
  }

  login() {
    this.getAllMembers();

    setTimeout(() => {
      let success = false;

      for(let item in this.members) {
        if(this.members[item].Email === this.Email && this.members[item].Password === this.Password) {
          this.router.navigate(['todos']);
          success = true;
          this.localstorage.setItem('loggedin', 'true');
          this.localstorage.setItem('firstname', this.members[item].FirstName);
          this.ls.changeMessage('Welcome, ' + this.localstorage.getItem('firstname'));
          break;
        }
      }
      if(!success) {
        this.message = 'Login Unsuccessful';
        this.localstorage.setItem('loggedin', 'false');
      }
    }, 1000);
  }

  openDialog():void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '550px',
      data: {title: this.title, header: this.header, content: this.content}
    });
  }

  getEmailErrorMessage() {
    if(this.Email.hasError('required')) {
      return 'Email is required';
    }
    return this.Email.hasError('Email') ? 'Email is not valid' : '';
  }

  getPasswordErrorMessage() {
    if(this.Password.hasError('required')) {
      return 'Password is required';
    }
    return this.Password.hasError('Password') ? 'Password is not valid' : '';
  }
}
