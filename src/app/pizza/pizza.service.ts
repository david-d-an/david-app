import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';

import { Pizza } from '../model/pizza';
import { PizzaSerializer } from './pizza-serializer';
import { ResourceService } from './resource.service';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// export class PizzaService {
//   private url = 'http://localhost:3000';
//   private endpoint = 'pizzas';
//   private serializer = new PizzaSerializer();

//   constructor(protected httpClient: HttpClient) { }

//   public create(pizza: Pizza): Observable<Pizza> {
//     return this.httpClient
//       .post<Pizza>(`${this.url}/${this.endpoint}`, pizza)
//       .pipe(map(data => this.serializer.fromJson(data)));
//   }

//   public update(pizza: Pizza): Observable<Pizza> {
//     return this.httpClient
//       .put<Pizza>(`${this.url}/${this.endpoint}/${pizza.id}`, pizza)
//       .pipe(map(data => this.serializer.fromJson(data)));
//   }

//   public read(id: number): Observable<Pizza> {
//     return this.httpClient
//       .get<Pizza>(`${this.url}/${this.endpoint}/${id}`)
//       .catch(error => {
//         return Observable.throw(error);
//       })
//       .pipe(map(data => this.serializer.fromJson(data)));
//   }

//   public list(): Observable<Pizza[]> {
//     return this.httpClient
//       .get<Pizza[]>(`${this.url}/${this.endpoint}`)
//       .pipe(map(data => data.map((item) => this.serializer.fromJson(item))));
//   }

//   public delete(id: number) {
//     return this.httpClient
//       .delete(`${this.url}/${this.endpoint}/${id}`);
//   }
// }


export class PizzaService extends ResourceService<Pizza> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://localhost:3000',
      'pizzas',
      new PizzaSerializer()
    );
  }
}
