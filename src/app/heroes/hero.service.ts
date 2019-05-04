import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';

import { Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // constructor() {
  //   return HEROES;
  // }

  // constructor(private logger: Logger) {
  // }

  constructor(@Optional() private logger: Logger) {
    if (this.logger) {
      // this.logger.log(some_message);
    }
  }

  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}



