import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  loginMsg: any;
  userType = 0;

  constructor(private service: SharedService, private navRouter: Router) { }

  ngOnInit(): void {
  }

  LoginClick() {
    var val = {
      email: this.email,
      password: this.password,
      userType: this.userType
    };

    this.service.Login(val).subscribe(data => {
      console.log("direct data is:" + data);
      this.loginMsg = data;
      
      if (this.loginMsg == "Login succesfull" && this.userType.toString() == "Admin") {
        localStorage.setItem('AdminEmail', this.email);
        localStorage.setItem('UserEmail', "");
        alert("Admin Login successfull!!");
        this.navRouter.navigateByUrl('/admin');
      }
      else if (this.loginMsg == "Login succesfull" && this.userType.toString() == "User") {
        localStorage.setItem('UserEmail', this.email);
        localStorage.setItem('AdminEmail', "");
        alert("User Login successfull!!");
        this.navRouter.navigateByUrl('/user');
      }
      else//(this.loginMsg=="Bad Credentials")
      {
        localStorage.setItem('AdminEmail', "");
        localStorage.setItem('UserEmail', "");
      }
      //console.log("msg:"+this.loginMsg);
      console.log("type:" + this.userType);
    });


  }
}
