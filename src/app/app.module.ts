import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HeroesModule } from './heroes/heroes.module';
// import { MyCustomModule } from './my-custom/my-custom.module';

import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
// import { ListingPageComponent } from './listing-page/listing-page.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // ListingPageComponent,
    MyCustomComponent,
    HeroListComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // MyCustomModule,
    // HeroesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // MyCustomComponent
  ]
})
export class AppModule { }
