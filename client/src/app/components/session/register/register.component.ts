import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/session/login.service'
import { RegisterService } from './../../../services/session/register.service'
import { GlobalEventsManager } from "./../../../GlobalEventsManager";
import { error } from 'util';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  private req: any;
  cookieValue = ""
  emailText : string = ""
  nickText : string = ""
  passwordText : string = ""
  confirmPasswordText : string = ""
 
  constructor(private _registerservice: RegisterService, private _loginservice: LoginService, 
    private _cookieService: CookieService, private _router: Router, private _globalEventsManager: GlobalEventsManager){}


  registerEvent(event){
    console.log(this.nickText);
    console.log(this.emailText);
    console.log(this.passwordText);
    //validation of passwords
    if(this.passwordText == this.confirmPasswordText){
      this.req = this._registerservice.registerUser(this.nickText, this.emailText, this.passwordText)
      .subscribe(data =>{
        if(data.status == 200){
          this._loginservice.login(this.nickText, this.passwordText).subscribe(loggedData=>{
            //if(loggedData.status == 200){
              console.log(loggedData.token)
              this._cookieService.set( 'BlogToken', loggedData.token );
              this.cookieValue = this._cookieService.get('BlogToken');
              if( this.cookieValue != ""){
                this._globalEventsManager.showNavBar(true);
              }
              this._router.navigate(['userdetails']);
            //}
          })
        }
      });
    }
    
    // .map(profile => {
    //   console.log("cos robi")
    // });
    // .subscribe(data=>{

      // this.req = this._loginservice.get(this.emailText, this.passwordText).subscribe(data=>{
      //   console.log(data.token)
      //   this._cookieService.set( 'BlogToken', data.token );
      //   this.cookieValue = this._cookieService.get('BlogToken');
      //   if( this.cookieValue != ""){
      //     this._globalEventsManager.showNavBar(true);
      //     this._router.navigate([''])
      //   }
      // },error => {

      // }, 
      // () => {});
    // });
  }
}