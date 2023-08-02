import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },

]


@NgModule({
  declarations: [],
  imports: [
    // to configure the router module angular ships with
    RouterModule.forRoot(appRoutes)
  ],
  // export the configured router 
  exports: [RouterModule]
})
export class AppRoutingModule { }
