import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[] = []
  dataLoaded = false;
  currentCategory:Category = {categoryId: 0, categoryName: ''};
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
      this.dataLoaded = true;
    })
  }
  setCurrentCategory(category:Category){

  }
}
