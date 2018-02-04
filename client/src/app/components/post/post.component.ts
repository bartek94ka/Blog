import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './../../services/post.servcie'

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  constructor(private _postService: PostService){}

  postCollection: any;
  imgSrc : string;
  ngOnInit(){
    this._postService.getAllPosts().subscribe(data=>{
      this.postCollection = data;
      this.imgSrc = "assets/images/post_image.png";
    })
    // console.log(this.posts)
  }
}