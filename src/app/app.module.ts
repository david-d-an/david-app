import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PizzaModule } from './pizza/pizza.module';
import { HttpTestModule } from './http-test/http-test.module';
// import { HeroesModule } from './heroes/heroes.module';
// import { MyCustomModule } from './my-custom/my-custom.module';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { SvctestComponent } from './svctest/svctest.component';
import { T2Component } from './t2/t2.component';
// import { ListingPageComponent } from './listing-page/listing-page.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpTestModule,
    PizzaModule,
    // SvctestModule
    // HeroesModule,
    // MyCustomModule,
  ],
  declarations: [
    AppComponent,
    MyCustomComponent,
    // ListingPageComponent,
    // HeroListComponent,
    // HeroesComponent
    SvctestComponent,
    T2Component
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // MyCustomComponent
  ]
})
export class AppModule { }
