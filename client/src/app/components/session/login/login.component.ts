import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './../../../services/session/login.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
//   styleUrls: ['./app.component.css']
})
export class LoginComponent {
  cookieValue = "Unknow"
  private req: any;
  emailText : string = ""
  passwordText : string = ""
  constructor(private _service: LoginService, private _cookieService: CookieService){}

  loginEvent(event){
    this.req = this._service.get(this.emailText, this.passwordText).subscribe(data=>{
      console.log(data.token)
      this._cookieService.set( 'BlogToken', data.token );
      this.cookieValue = this._cookieService.get('BlogToken');
    })
  }
  ngOnInit(){}
  ngOnDestroy(){}
}