import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpTestComponent } from './http-test.component';
import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';

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
