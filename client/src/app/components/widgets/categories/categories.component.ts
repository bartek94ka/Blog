import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {

  constructor(private _categoryServie: CategoryService, private _router : Router){}
  
  categoriesCollection : any;

  ngOnInit(){
    this._categoryServie.getAll().subscribe(data=>{
      this.categoriesCollection = data;
    })
  }

  goToPostByCategoryId(categoryId){
    this._router.navigate(['postcategory/' + categoryId + '/']);
  }
}