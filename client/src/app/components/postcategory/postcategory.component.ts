import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { PostService } from '../../services/post.servcie';
// import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})

export class PostCategoryComponent {
  constructor(private _postService : PostService, private route: ActivatedRoute){}
  
  // public static updateUserStatus: Subject<boolean> = new Subject();
  postCollection : any;
  cattegoryId : number; 
  imgSrc : string;
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.cattegoryId = +params['id'];
      console.log(this.cattegoryId);
    });
    this._postService.getPostsByCategoryId(this.cattegoryId).subscribe(data=>{
      this.postCollection = data;
      this.imgSrc = "assets/images/post_image.png";
    });
  }
}