import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from './../../services/post.servcie'
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent {
  constructor(private _postService: PostService, private _commentService: CommentService, private _activatedRoute: ActivatedRoute,
  private _userService : UserService, private _cookieService : CookieService, private _router: Router){
    this.cookieValue = this._cookieService.get('BlogToken');
    this._activatedRoute.url.subscribe(url=>{
      this.getPostDetails();
    })
    if(this.cookieValue != "" ){
      this.isAuthenticated = true;
    }
    else{
      this.isAuthenticated = false;
    }
  }

  private cookieValue: string;
  private user: any;
  post: any;
  postId: number
  commentCollection: any;
  imgSrc: string;
  avatarSrc: string;
  descriptionText: string;
  isAuthenticated: boolean = false;

  ngOnInit(){
    this.getPostDetails();
  }

  addCommentEvent(event){
    let today = this.getCurrentDate();
    let author = this.user.first_name + ' ' + this.user.last_name;
    let body = {
      "description":  this.descriptionText,
      "post": this.postId,
      "posted_date": String(today),
      "author": author
    }
    this._commentService.create(body).subscribe(data=>{
      this.descriptionText = "";
      this.getCommentList(this.postId);
    });
  }

  goToPostByCategoryId(categoryId){
    this._router.navigate(['postcategory/' + categoryId + '/']);
  }

  private getPostDetails(){
    this._activatedRoute.params.subscribe(params => {
      this.postId = +params['id'];
    });
    this._postService.getById(this.postId).subscribe(data=>{
      this.post = data;
      this.post.posted_date = data.posted_date;
      
    });
    this.getCommentList(this.postId);
    this.getCurrentLoggedUser();
    this.imgSrc = "assets/images/post_image.png";
    this.avatarSrc = "assets/images/avatar.png";
  }

  private getCommentList(postId){
    this._commentService.getCommentByPostId(this.postId).subscribe(data=>{
      this.commentCollection = data;
    });
  }

  private getCurrentDate(){
    var date = new Date();
    let today = new Date().toISOString().slice(0, 10) + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z";
    return today; 
  }

  private getCurrentLoggedUser(){
    this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
        this.user =  data;
    });
  }

}