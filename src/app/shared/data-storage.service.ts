import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://fullangularcourse.firebaseio.com/recipes.json',
      recipes
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
          'https://fullangularcourse.firebaseio.com/recipes.json'
        ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        this.recipeService.overrideRecipes(recipes);
      })
    );
  }

}
