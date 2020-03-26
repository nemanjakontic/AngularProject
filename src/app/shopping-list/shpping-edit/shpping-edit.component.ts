import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shpping-edit',
  templateUrl: './shpping-edit.component.html',
  styleUrls: ['./shpping-edit.component.css']
})
export class ShppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) form: NgForm;
  defaultAmount = 1;
  subscription: Subscription;
  editedItem: Ingredient;
  editMode = false;
  editedItemIndex: number;

  // @Output() eventEmit = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  resetForm() {
    this.form.resetForm();
    this.editMode = false;
  }

  addToShoppingList() {
    const value = this.form.value;
    const newingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newingredient);
    } else {
      this.shoppingListService.addIngredient(newingredient);
    }
    this.resetForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppingListService.deleteIngr(this.editedItemIndex);
    this.resetForm();
  }

}
