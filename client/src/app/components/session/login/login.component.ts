import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './../../../services/session/login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
//   styleUrls: ['./app.component.css']
})
export class LoginComponent {
  private req: any;
  emailText : string = ""
  passwordText : string = ""
  constructor(private _service: LoginService){}

  loginEvent(event){
    this.req = this._service.get(this.emailText, this.passwordText).subscribe(data=>{
      console.log(data)
    })
  }
  ngOnInit(){}
  ngOnDestroy(){}
}