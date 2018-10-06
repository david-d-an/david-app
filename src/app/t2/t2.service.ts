import { Injectable } from '@angular/core';
import { T2baseService } from './t2base.service';

@Injectable({
  providedIn: 'root'
})
export class T2Service extends T2baseService {
  constructor() {
    super('I am a child');
  }
}
