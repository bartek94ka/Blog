import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
    constructor(private _cookieService: CookieService){
        // this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private req: any;

    // addPostEvent(event){
    //     // this.req = this.
    // }
}