import { Injectable } from '@angular/core';
import { SvcbaseService } from './svcbase.service';

@Injectable({
  providedIn: 'root'
})
export class SvctestService extends SvcbaseService  {
  constructor() {
    super('');
  }
}
