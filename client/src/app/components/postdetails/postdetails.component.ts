import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from './../../services/post.servcie'
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent {
  constructor(private _postService: PostService, private _commentService: CommentService, private route: ActivatedRoute){}

  post: any;
  postId: number
  commentCollection: any;
  imgSrc: string;
  avatarSrc: string;
  ngOnInit(){
    this.route.params.subscribe(params => {
        this.postId = +params['id'];
    });
    this._postService.getById(this.postId).subscribe(data=>{
      this.post = data;
      this.post.posted_date = data.posted_date;
      
    });
    this._commentService.getCommentByPostId(this.postId).subscribe(data=>{
        this.commentCollection = data;
        console.log(this.commentCollection);
    })

    this.imgSrc = "assets/images/post_image.png";
    this.avatarSrc = "assets/images/avatar.png";
  }
}