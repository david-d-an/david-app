import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'pizza', component: PizzaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
