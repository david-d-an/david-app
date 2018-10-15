import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'http-test', component: HttpTestComponent },
  { path: 'listing-page', component: ListingPageComponent },
  { path: 'my-custom', component: MyCustomComponent },
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
