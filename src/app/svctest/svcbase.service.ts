import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class SvcbaseService {
  constructor(private url: string) { }
}
