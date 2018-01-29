import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from '../../services/post.servcie';


@Component({
  selector: 'postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent {
    constructor(private _cookieService: CookieService, private _postService: PostService){
        this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private req : any;
    titleText : string = ""
    textText : string = ""
    pageNumber = 1;
    postCollection : any;

    ngOnInit(){
        this.req = this._postService.getByPage(this.pageNumber).subscribe(data=>{
            this.postCollection = data;
            console.log(this.postCollection);
        })
    }

    PrevPostPageEvent(event){

    }

    NextPostPageEvent(event){

    }
}