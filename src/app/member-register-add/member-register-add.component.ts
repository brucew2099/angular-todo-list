import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { LoginService } from '../login.service';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Member from '../member';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-member-register-add',
  templateUrl: './member-register-add.component.html',
  styleUrls: ['./member-register-add.component.css']
})
export class MemberRegisterAddComponent implements OnInit {

  registerForm:FormGroup
  message:string = '';
  hide:boolean = true;
  hidec:boolean = true;
  existed:boolean = false;
  title:string = 'Password Help';
  header:string = 'Password should follow these rules:';
  content:string = `  (a) Contains at least 8 characters and at most 25 characters

  (b) Contains at least one digit

  (c) Contains at least one upper case alphabet

  (d) Contains at least one lower case alphabet

  (e) Contains at least one special character which includes !@#$%&*()-+=^

  (f) Does NOT contain any white space`;


  constructor(private fb:FormBuilder, private rs:RegisterService, private router:Router,
      private dialog:MatDialog, private localstorage:LocalStorageService, private ls:LoginService,
      private vs:ValidationService) {
    this.registerForm = this.fb.group({
      Email: ['',[Validators.required, Validators.email]],
      Password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(25),
            Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$')]],
      Confirmed: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(25),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,}$'),
        ValidationService.ConfirmedValidator]],
      FirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      LastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    },
    {
      validator: ValidationService.ConfirmedValidator('Password', 'Confirmed')
    }
  )};

  ngOnInit(): void {
    if(this.localstorage.length() > 0 && this.localstorage.getItem('firstname') !== null) {
      this.ls.changeMessage('Welcome, ' + this.localstorage.getItem('firstname'));
    }
    else {
      if(this.localstorage.getItem('register') === null) {
        this.router.navigate(['']);
      }
    }
  }

  get Email() {
    return this.registerForm.value.Email;
  }

  get Password() {
    return this.registerForm.value.Password;
  }

  get Confirmed() {
    return this.registerForm.value.Confirmed;
  }

  get FirstName() {
    return this.registerForm.value.FirstName;
  }

  get LastName() {
    return this.registerForm.value.LastName;
  }

  get f() {
    return this.registerForm.controls;
  }

  register(): void {
    const registerObj = {
      Email: this.Email,
      Password: this.Password,
      FirstName: this.FirstName,
      LastName: this.LastName
    };

    this.rs.getAllRegisteredMembers().subscribe(members => {
      for(let item in members) {
        if(members[item].Email === this.Email) {
          this.message = 'Registration Failed. Member already registered';
          this.router.navigate(['/register/create']);
          this.existed = true;
          break;
        }
      }
    });

    setTimeout(() => {
      if(!this.existed) {
        this.rs.registerMember(registerObj).subscribe(data => {
          this.message = 'Member registered successfully. Redirecting to Login...';
          setTimeout(() => {
            this.router.navigate(['']);
          }, 3000);
        });
      }
    },1000);
  }

  openDialog():void {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '550px',
      data: {title: this.title, header: this.header, content: this.content}
    });
  }

}
