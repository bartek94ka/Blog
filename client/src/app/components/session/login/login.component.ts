import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/session/login.service'
import { GlobalEventsManager } from "./../../../GlobalEventsManager";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private _service: LoginService, private _cookieService: CookieService, private _router: Router, private _globalEventsManager: GlobalEventsManager){}

  cookieValue = "";
  private req: any;
  userNameText : string = "";
  emailText : string = "";
  passwordText : string = "";

  loginEvent(event){
    this.req = this._service.login(this.userNameText, this.passwordText).subscribe(data=>{
      console.log(data.token)
      this._cookieService.set( 'BlogToken', data.token );
      this.cookieValue = this._cookieService.get('BlogToken');
      if( this.cookieValue != ""){
        this._globalEventsManager.showNavBar(true);
        this._router.navigate(['home'])
      }
  });
  }
  ngOnInit(){}
  ngOnDestroy(){}
}