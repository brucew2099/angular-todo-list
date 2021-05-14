import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-logout',
  templateUrl: './member-logout.component.html',
  styleUrls: ['./member-logout.component.css']
})
export class MemberLogoutComponent implements OnInit {

  constructor(private localstorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.localstorage.clear();
    },1000);
    this.router.navigate(['']);
  }
}
