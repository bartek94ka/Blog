import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
//   styleUrls: ['./app.component.css']
})
export class RegisterComponent {
  title = 'Angular';

  emailText : string = ""
  nickText : string = ""
  passwordText : string = ""
  confirmPasswordText : string = ""

  registerEvent(event){
    console.log("Submit register");
  }
}