import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { HeroesModule } from './heroes/heroes.module';
import { HttpTestModule } from './http-test/http-test.module';
import { ListingPageModule } from './listing-page/listing-page.module';
import { MyCustomModule } from './my-custom/my-custom.module';
import { PizzaModule } from './pizza/pizza.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    NgbModule.forRoot(),
    HomeModule,
    HeroesModule,
    HttpTestModule,
    ListingPageModule,
    MyCustomModule,
    PizzaModule,
    PageNotFoundModule,
    AboutModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
      // useClass: HashLocationStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
