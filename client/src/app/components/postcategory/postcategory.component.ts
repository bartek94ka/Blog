import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { PostService } from '../../services/post.servcie';

@Component({
  selector: 'postcategory',
  templateUrl: './postcategory.component.html'
//   styleUrls: ['./app.component.css']
})
export class PostCategoryComponent {
  constructor(private _postService : PostService, private route: ActivatedRoute){}
  postsCollection : any;
  cattegoryId : number; 
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.cattegoryId = +params['id'];
      console.log(this.cattegoryId);
    });
    this._postService.getPostsByCategoryId(this.cattegoryId).subscribe(data=>{
      this.postsCollection = data;
    })
  }
}