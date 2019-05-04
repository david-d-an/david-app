import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    PizzaComponent
  ],
  declarations: [
    PizzaComponent
  ]
})
export class PizzaModule { }
