import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from './../../services/post.servcie'
import { CategoryService } from './../../services/category.service'
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent {
    constructor(private _cookieService: CookieService, private _postService: PostService, 
        private _categoryService: CategoryService, private _userService: UserService){
        this.cookieValue = this._cookieService.get('BlogToken');
    };
    private cookieValue = "";
    titleText : string = ""
    textText : string = ""
    categoriesCollection : any;
    selectedCategories: any;
    private user: any;

    ngOnInit(){
        this._categoryService.getAll().subscribe(data=>{
            this.categoriesCollection = data;
        });
        this.getCurrentLoggedUser();
    }

    addPostEvent(event){
        var categories = [];
        for (let selectedCategoryIndex in this.selectedCategories){
            categories.push(Number(this.selectedCategories[selectedCategoryIndex].id));
        }
        // category must be choosen
        let today = this.getCurrentDate();
        let author = this.user.first_name + ' ' + this.user.last_name;
        console.log(author);
        let body = {
            "title":  this.titleText,
            "text": this.textText,
            "categories": categories,
            "posted_date": String(today),
            "author": author
        }
        console.log(body);
        this._postService.create(body).subscribe(data=>{
            this.titleText = "";
            this.textText = "";
            categories = null;
        });
    }

    private getCurrentDate(){
        var date = new Date();
        let today = new Date().toISOString().slice(0, 10) + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z";
        return today;
    }

    private getCurrentLoggedUser(){
        this._userService.getLoggedUserData(this.cookieValue).subscribe(data=>{
            console.log(data);
            this.user =  data;
        });
    }
}