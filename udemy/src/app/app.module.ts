import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features-modules/header/header.component';
import { RecipesComponent } from './features-modules/recipes/recipes.component';
import { RecipeListComponent } from './features-modules/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './features-modules/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features-modules/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './features-modules/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features-modules/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }