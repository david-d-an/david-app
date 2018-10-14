import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpTestModule } from './http-test/http-test.module';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';

import { PizzaModule } from './pizza/pizza.module';
import { HeroesModule } from './heroes/heroes.module';
// import { MyCustomModule } from './my-custom/my-custom.module';

// import { ListingPageComponent } from './listing-page/listing-page.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroListComponent } from './heroes/hero-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    HeroesModule,
    PizzaModule,
    // HttpTestModule,
    // SvctestModule
    // MyCustomModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
