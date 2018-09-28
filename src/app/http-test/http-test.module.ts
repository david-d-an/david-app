import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpTestComponent } from './http-test.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    HttpTestComponent
  ],
  declarations: [
    HttpTestComponent
  ]
})
export class HttpTestModule { }
