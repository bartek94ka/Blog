import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
//   styleUrls: ['./app.component.css']
})
export class LoginComponent {
  title = 'Angular';

  emailText : string = ""
  passwordText : string = ""

  loginEvent(event){
    console.log("Submit login");
  }
}