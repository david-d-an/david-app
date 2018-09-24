import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports: [
    CommonModule,
    // HeroListComponent
  ],
  exports: [
    HeroesComponent,
    HeroListComponent
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent
  ]
})
export class HeroesModule { }
