import { Component, OnInit, Input } from '@angular/core';
import { QueryOptions } from './../pizza/query-options';
import { PizzaService } from './../pizza/pizza.service';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// import * as moment from 'moment';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  public jsonPizzas: any;
  private queryOptions: QueryOptions;
  @Input() pizzaName: string;
  @Input() pizzaCookedOn: Date;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    // this.pizzaService.read(1)
    //   .pipe(
    //     map((res$: Response) => res$)
    //   )
    //   .subscribe((data: any) => {
    //       console.log(data.id);
    //       console.log(data.name);
    //       console.log(data.cookedOn.format('MM-DD-YYYY'));
    //     }
    //   );

    this.queryOptions = new QueryOptions();
    this.pizzaService
    .list(this.queryOptions)
    .pipe(
      map((res$: Response) => res$)
    )
    .subscribe(
      (data: any) => {
        this.jsonPizzas = data;
        console.log(data);
      }
    );

    const input$ = fromEvent(document.querySelector('#tbPizzaId'), 'input');
    input$
    .pipe(
      map(event => (<HTMLInputElement>event.target).value)
    )
    .subscribe({
      next: val => {
        console.log(`Pizza Id entered: ${ val }`);
        const v = Number(val);
        console.log(v);

        if (isNaN(v)) {
          this.pizzaName = null;
          this.pizzaCookedOn = null;
          console.log('NaN detected');
        } else {
          this.pizzaService.read(v)
          .pipe(
            map((res$: Response) => res$)
          )
          .subscribe(
            (data: any) => {
              console.log(data.id);
              console.log(this.pizzaName = data.name);
              console.log(this.pizzaCookedOn = data.cookedOn.format('MM-DD-YYYY'));
            },
            error => {
              console.log(null);
              console.log(this.pizzaName = null);
              console.log(this.pizzaCookedOn = null);
            }
          );
        }

        // this.pizzaCookedOn = moment('12-25-1995', 'MM-DD-YYYY').toDate();
      },
      error: err => console.log(`Error rasied: ${ err }`),
      complete: () => console.log(`Task completed`)
    });
  }
}
