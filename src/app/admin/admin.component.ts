import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  emailSession: any = "";
  constructor(private navRouter: Router) { }

  ngOnInit(): void {
    this.CheckSession();
  }

  CheckSession()
  {
    this.emailSession = localStorage.getItem('AdminEmail');

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
