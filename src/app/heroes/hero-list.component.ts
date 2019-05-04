import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
// import { HEROES } from './mock-heroes';
// import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  // heroes = HEROES;
  heroes: Hero[];

  defualtColor = 'green';

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}

