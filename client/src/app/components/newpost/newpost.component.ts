import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'newpost',
  templateUrl: './newpost.component.html'
})
export class NewPostComponent {
    constructor(private _cookieService: CookieService){
        // this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private req: any;
    titleText : string = ""
    textText : string = ""

    addPostEvent(event){
        // this.req = this.
    }
}