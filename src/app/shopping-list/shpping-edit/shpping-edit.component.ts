import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shpping-edit',
  templateUrl: './shpping-edit.component.html',
  styleUrls: ['./shpping-edit.component.css']
})
export class ShppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInput', {static: true}) ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput', {static: true}) ingredientAmountInput: ElementRef;

  @Output() eventEmit = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    const newingredient = new Ingredient(this.ingredientNameInput.nativeElement.value, this.ingredientAmountInput.nativeElement.value);
    this.eventEmit.emit(newingredient);
  }

}
