import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from './../../services/post.servcie'
import { CategoryService } from './../../services/category.service'


@Component({
  selector: 'newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent {
    constructor(private _cookieService: CookieService, private _postService: PostService, private _categoryService: CategoryService){
        this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private req: any;
    titleText : string = ""
    textText : string = ""
    categoriesCollection : any;

    ngOnInit(){
        this._categoryService.getAll().subscribe(data=>{
            // console.log(data);
            this.categoriesCollection = data;
        })
        console.log(this.categoriesCollection);
    }

    addPostEvent(event){
        // this.req = this.
    }

}