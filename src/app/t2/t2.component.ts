import { Component, OnInit } from '@angular/core';
import { T2Service } from './t2.service';

@Component({
  selector: 'app-t2',
  templateUrl: './t2.component.html',
  styles: ['']
})
export class T2Component {
  constructor(private t2Service: T2Service) { }
}
