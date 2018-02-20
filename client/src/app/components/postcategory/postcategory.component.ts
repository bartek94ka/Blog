import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { PostService } from '../../services/post.servcie';
// import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'postcategory',
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})

export class PostCategoryComponent implements OnInit {
  constructor(private _postService : PostService, private _activatedRoute: ActivatedRoute, private _router: Router){
    this._activatedRoute.url.subscribe(url=>{
      this.getPostsByCattegory();
    })
  }
  
  postCollection: any;
  cattegoryId: number; 
  imgSrc: string;
  
  ngOnInit(){
    this.getPostsByCattegory();
  }

  ngOnDestroy(){

  }

  goToPostByCategoryId(categoryId){
    this._router.navigate(['postcategory/' + categoryId + '/']);
  }

  private getPostsByCattegory(){
    this._activatedRoute.params.subscribe(params => {
      this.cattegoryId = +params['id'];
    });
    this._postService.getPostsByCategoryId(this.cattegoryId).subscribe(data=>{
      this.postCollection = data;
      this.imgSrc = "assets/images/post_image.png";
    });
  }
}