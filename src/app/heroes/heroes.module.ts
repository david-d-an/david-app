import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';

import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeroesComponent,
    HeroListComponent,
    HighlightDirective
  ],
  exports: [
    HeroesComponent,
    HeroListComponent,
    HighlightDirective
  ]
})
export class HeroesModule { }
