import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  login!: string;
  password!: string;


  constructor(){

  }
  submit() {
    console.log(this.login);
    console.log(this.password);

  }
}
