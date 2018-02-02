import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html'
//   styleUrls: ['./app.component.css']
})
export class CategoriesComponent {
  constructor(){}
  categoriesCollection : any;
}