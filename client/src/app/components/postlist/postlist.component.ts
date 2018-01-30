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
    private postPerPage = 2;
    titleText : string = ""
    textText : string = ""
    pageNumber = 1;
    private postCount = 0;
    postCollection : any;

    ngOnInit(){
        this._postService.getPostCount().subscribe(data=>{
            this.postCount = data;
        });
        this.GetPostList();
    }

    PrevPostPageEvent(event){
        if(this.pageNumber > 1){
            this.pageNumber -= 1;
            console.log("Prev - page Nr: " + this.pageNumber);
            this.GetPostList();
        }
    }

    NextPostPageEvent(event){
        var maxPage = this.postCount / this.postPerPage;
        if(this.pageNumber < maxPage){
            this.pageNumber += 1;
            console.log("Next - page Nr: " + this.pageNumber);
            this.GetPostList();
        }
    }

    EditPostEvent(event, postId){
        console.log("PostEdit: " + postId);
        
    }

    RemovePostEvent(event, postId){
        console.log("Remove Post: " + postId);
        this._postService.deletePostById(postId).subscribe(data=>{
            this.GetPostList();
        })
    }

    private GetPostList(){
        this._postService.getByPage(this.pageNumber).subscribe(data=>{
            this.postCollection = data;
            // console.log(data);
        });
    }
}