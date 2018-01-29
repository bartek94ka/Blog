import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent {
    constructor(private _cookieService: CookieService){
        // this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private req: any;
    titleText : string = ""
    textText : string = ""

    // addPostEvent(event){
    //     // this.req = this.
    // }
}