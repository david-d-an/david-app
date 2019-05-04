import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'http-test', component: HttpTestComponent },
  { path: 'listing-page', component: ListingPageComponent },
  { path: 'my-custom', component: MyCustomComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
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
