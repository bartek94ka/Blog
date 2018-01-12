import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GlobalEventsManager } from "./../../GlobalEventsManager";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
//   styleUrls: ['./app.component.css']
})
export class NavbarComponent {
  constructor(private _cookieService: CookieService, private _globalEventsManager: GlobalEventsManager){
        this._globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
        this.cookieValue = this._cookieService.get('BlogToken');
        if(mode == true && this.cookieValue != "" ){
          this.isAuthenticated = mode;
        }
        else{
          this.isAuthenticated = false;
        }
      });
  }
  
  cookieValue = ""
  isAuthenticated: boolean = false;

  logoutEvent(event){
    this._cookieService.delete( 'BlogToken');
    this._globalEventsManager.showNavBar(false);
  }
}
