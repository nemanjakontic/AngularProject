import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShppingEditComponent} from './shpping-edit/shpping-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShppingEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: 'shopping-list', component: ShoppingListComponent}]),
    SharedModule
  ]
  // exports: [
  //   ReactiveFormsModule,
  //   FormsModule
  // ]
})
export class ShoppingListModule {

}
