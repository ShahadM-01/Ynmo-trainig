import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test', 'This is simply a test', 'https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2023/05/Soy_Milk_Hot_Pot_with_chicken_9128.jpg'),
    new Recipe('A test', 'This is simply a test', 'https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2023/05/Soy_Milk_Hot_Pot_with_chicken_9128.jpg')
  ];

  ngOnInit() { }
}
