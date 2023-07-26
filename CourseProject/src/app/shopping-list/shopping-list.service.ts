import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
getIngredient(){
  return this.ingredients.slice();

}

// to change the array directly and not the copy we can just remove .slice()

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  // this is another approch to change the copy of the array
  this.ingredientChange.emit(this.ingredients.slice())
  }

}
