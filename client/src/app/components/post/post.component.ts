import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './../../services/post.servcie'
import { CategoryService } from '../../services/category.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  constructor(private _postService: PostService, private _categoryService: CategoryService, private _router : Router){}

  categoriesCollection: any;
  postCollection: any;
  imgSrc : string;

  ngOnInit(){
    this._postService.getAllPosts().subscribe(data=>{
      this.postCollection = data;
      this.imgSrc = "assets/images/post_image.png";
    });
  }

  goToPostByCategoryId(categoryId){
    this._router.navigate(['postcategory/' + categoryId + '/']);
  }
}