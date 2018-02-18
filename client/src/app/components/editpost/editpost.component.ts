import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from './../../services/post.servcie'
import { CategoryService } from './../../services/category.service'
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'editpost',
  templateUrl: './editpost.component.html'
})
export class EditPostComponent {
    constructor(private _cookieService: CookieService, private _postService: PostService, 
        private _categoryService: CategoryService, private _userService: UserService,
        private _router: Router, private _activatedRoute: ActivatedRoute){
        this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    private user: any;
    private post: any;
    private postId: number
    titleText: string = ""
    textText: string = ""
    categoriesCollection: any;
    selectedCategories: any;

    ngOnInit(){
        this._categoryService.getAll().subscribe(data=>{
            this.categoriesCollection = data;
        });
        this.getCurrentLoggedUser();
        this._activatedRoute.params.subscribe(params => {
        this.postId =+ params['id'];
        this.getPostById(this.postId);
    })}

    updatePostEvent(event){
        var categories = [];
        for (let selectedCategoryIndex in this.selectedCategories){
            categories.push(Number(this.selectedCategories[selectedCategoryIndex].id));
        }

        this.post.title = this.titleText;
        this.post.text = this.textText;

        this._postService.updatePostById(this.post.id, this.post).subscribe(data=>{
            this._router.navigate(['postdetails/' + this.post.id + '/']);
        });
    }

    
    private getPostById(postId){
        this._postService.getById(postId).subscribe(data=>{
            this.post = data;
            this.titleText = data.title;
            this.textText = data.text;
            this.categoriesCollection = data.categories;
            this.selectedCategories = data.categories;
        })
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