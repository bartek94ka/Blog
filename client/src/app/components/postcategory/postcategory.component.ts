import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'postcategory',
  templateUrl: './postcategory.component.html'
//   styleUrls: ['./app.component.css']
})
export class PostCategoryComponent {
  constructor(private _categoryService: CategoryService){}
  categoriesCollection : any;

  ngOnInit(){
    // this._categoryService.getAll().subscribe(data=>{
    //   this.categoriesCollection = data;
    // })
  }
}