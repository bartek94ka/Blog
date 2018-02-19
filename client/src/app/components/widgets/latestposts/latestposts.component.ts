import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.servcie';
import {Router} from '@angular/router';

@Component({
  selector: 'latestposts',
  templateUrl: './latestposts.component.html'
})
export class LatestPostsComponent {
  
  constructor(private _postService: PostService, private _router : Router){
    this.GetPostList();
  }

  postCollection : any;


  private GetPostList(){
    this._postService.getByPage(1).subscribe(data=>{
        this.postCollection = data;
    });
  }

  goToPostDetails(postId){
    this._router.navigate(['postdetails/' + postId + '/']);
  }
}