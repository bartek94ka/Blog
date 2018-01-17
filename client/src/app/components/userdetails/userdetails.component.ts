import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './../../services/user.service' 
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html'
//   styleUrls: ['./app.component.css']
})
export class UserDetailsComponent {
    constructor(private _userService: UserService, private _cookieService: CookieService){}
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
        console.log(this.user)
        this.req = this._userService.updateUserData(this.cookieValue, this.user).
        subscribe(data=>{
            console.log(data)
        //   this._cookieService.set( 'BlogToken', data.token );
        //   this.cookieValue = this._cookieService.get('BlogToken');
        //   if( this.cookieValue != ""){
        //     this._globalEventsManager.showNavBar(true);
        //     this._router.navigate([''])
          })
      }

    ngOnDestroy(){}
}