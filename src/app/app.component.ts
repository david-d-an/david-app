import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'david-app';
  textcolor: string;

  changeColor() {
    this.textcolor = 'red';
  }

  returnColor() {
    this.textcolor = 'black';
  }
}
