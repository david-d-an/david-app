import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';

import { HttpTestComponent } from './http-test.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    HttpTestComponent,
  ],
  declarations: [
    HttpTestComponent
  ],
  providers: [
  ]
})
export class HttpTestModule { }
