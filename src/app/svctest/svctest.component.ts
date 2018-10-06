import { Component } from '@angular/core';
import { SvctestService } from './../svctest/svctest.service';

@Component({
  selector: 'app-svctest',
  template: '',
  styles: ['']
})
export class SvctestComponent {
  constructor(private s: SvctestService) { }
}
