import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  hide:boolean = true;
  loginForm:FormGroup;

  constructor(private fb:FormBuilder, private ls:LoginService, private router:Router, private route:ActivatedRoute) {
    this.loginForm = this.fb.group({
      Email: ['',[Validators.required, Validators.email]],
      Password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(25),
            Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')]],
      Firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      Lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      Active: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.loginForm.get('Email');
  }

  get Password() {
    return this.loginForm.get('Password');
  }

  login(data:any) {
    this.route.params.subscribe(params => {
      this.ls.login(data.Email, data.Password);
      this.router.navigate(['todos']);
    })
  }

}
