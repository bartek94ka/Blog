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

    ngOnInit(){
        this.cookieValue = this._cookieService.get('BlogToken');
        this.req = this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
            console.log(data)
        })
    }

    registerEvent(event){
        // this.req = this._service.get(this.emailText, this.passwordText).subscribe(data=>{
        //   console.log(data.token)
        //   this._cookieService.set( 'BlogToken', data.token );
        //   this.cookieValue = this._cookieService.get('BlogToken');
        //   if( this.cookieValue != ""){
        //     this._globalEventsManager.showNavBar(true);
        //     this._router.navigate([''])
        //   }
      }

    ngOnDestroy(){}
}