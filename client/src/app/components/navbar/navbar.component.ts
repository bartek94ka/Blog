import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalEventsManager } from "./../../GlobalEventsManager";
import { UserService } from "./../../services/user.service";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
//   styleUrls: ['./app.component.css']
})
export class NavbarComponent {
  constructor(private _cookieService: CookieService, private _globalEventsManager: GlobalEventsManager, private _userService: UserService){
        this._globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
        this.cookieValue = this._cookieService.get('BlogToken');
        if(mode == true && this.cookieValue != "" ){
          this.isAuthenticated = true;
        }
        else{
          this.isAuthenticated = false;
        }
      });
  }

  private req: any;
  cookieValue = ""
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(){
    this.req = this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
      if(data.is_superuser == true){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
      console.log("IsAdmin: " + this.isAdmin)
    })
  }

  logoutEvent(event){
    this._cookieService.delete( 'BlogToken');
    this.isAdmin = false;
    this._globalEventsManager.showNavBar(false);
  }
}
