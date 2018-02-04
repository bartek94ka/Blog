import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  constructor(private _categoryServie: CategoryService){}
  categoriesCollection : any;

  ngOnInit(){
    this._categoryServie.getAll().subscribe(data=>{
      this.categoriesCollection = data;
    })
  }
}