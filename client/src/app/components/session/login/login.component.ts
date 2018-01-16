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
  cookieValue = ""
  private req: any;
  emailText : string = ""
  passwordText : string = ""
  constructor(private _service: LoginService, private _cookieService: CookieService, private _router: Router, private _globalEventsManager: GlobalEventsManager){}

  loginEvent(event){
    this.req = this._service.get(this.emailText, this.passwordText).subscribe(data=>{
      console.log(data.token)
      this._cookieService.set( 'BlogToken', data.token );
      this.cookieValue = this._cookieService.get('BlogToken');
      if( this.cookieValue != ""){
        this._globalEventsManager.showNavBar(true);
        this._router.navigate([''])
      }
  });
  }
  ngOnInit(){}
  ngOnDestroy(){}
}