import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shpping-edit',
  templateUrl: './shpping-edit.component.html',
  styleUrls: ['./shpping-edit.component.css']
})
export class ShppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInput', {static: true}) ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput', {static: true}) ingredientAmountInput: ElementRef;

  // @Output() eventEmit = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    const newingredient = new Ingredient(this.ingredientNameInput.nativeElement.value, this.ingredientAmountInput.nativeElement.value);
    this.shoppingListService.addIngredient(newingredient);
    // this.shoppingListService.eventEmit.emit(newingredient);
    // this.eventEmit.emit(newingredient);
  }

}
