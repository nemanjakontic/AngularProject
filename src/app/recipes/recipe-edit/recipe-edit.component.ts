import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        console.log(this.editMode);
        if(this.editMode) {
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      }
    );
  }

}
