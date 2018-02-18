import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html'
})
export class UserDetailsComponent {
    
    constructor(private _userService: UserService, private _cookieService: CookieService, private _router : Router){}
    
    private cookieValue : string = ""
    private req: any;
    emailText : string = ""
    nickText : string = ""
    firstNameText : string = ""
    lastNameText : string = ""
    user;

    ngOnInit(){
        this.cookieValue = this._cookieService.get('BlogToken');
        this.req = this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
            this.user = data;
            console.log(this.user)
            this.emailText = data.email;
            this.nickText = data.username;
            this.firstNameText = data.first_name;
            this.lastNameText = data.last_name;
        })
    }

    updateEvent(event){
        this.user.first_name = this.firstNameText;
        this.user.last_name = this.lastNameText;
        this.req = this._userService.updateUserData(this.cookieValue, this.user).
        subscribe(data=>{
            this._router.navigate(['home']);
          })
      }

    ngOnDestroy(){}
}