import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalEventsManager } from "./../../GlobalEventsManager";
import { UserService } from "./../../services/user.service";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private _cookieService: CookieService, private _globalEventsManager: GlobalEventsManager, private _userService: UserService){
    this.SetNavOptions();
  }

  private req: any;
  cookieValue = ""
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(){
    this.SetNavOptions();
  }

  logoutEvent(event){
    this._cookieService.delete( 'BlogToken');
    this.isAdmin = false;
    this._globalEventsManager.showNavBar(false);
  }

  private SetNavOptions(){

    this._globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
      this.cookieValue = this._cookieService.get('BlogToken');
      if(mode == true && this.cookieValue != "" ){
        this.isAuthenticated = true;
        this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
          if(data.is_superuser == true){
            this.isAdmin = true;
          }else{
            this.isAdmin = false;
          }
          console.log("IsAdmin: " + this.isAdmin)
        });
      }
      else{
        this.isAuthenticated = false;
      }
    });
  }
}
