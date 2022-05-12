import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  constructor(private navRouter: Router) { }

  emailSession:any="";

  ngOnInit(): void {
    this.CheckSession();
  }

  CheckSession()
  {
    this.emailSession = localStorage.getItem('UserEmail');

    if (this.emailSession == "" || this.emailSession == null) {
      this.navRouter.navigateByUrl('/login');
    }
    console.log("emailSession:" + this.emailSession);
  }

  SignOutClick() {
    localStorage.clear();
    this.navRouter.navigateByUrl('');
  }
}
