import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCustomComponent } from './my-custom.component';

@NgModule({
  imports: [CommonModule],
  exports: [MyCustomComponent],
  declarations: [MyCustomComponent]
})
export class MyCustomModule { }
