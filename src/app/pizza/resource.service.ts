import { QueryOptions } from './query-options';
import { Injectable } from '@angular/core';
import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';
import { Serializer } from './serializer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourceService<T extends Resource> {
  // private httpClient: HttpClient;
  // private url = 'http://localhost:3000';
  // private endpoint = 'pizzas';
  // private serializer: Serializer;

  constructor(
      private httpClient: HttpClient,
      private url: string,
      private endpoint: string,
      private serializer: Serializer
    ) {
      // this.httpClient = httpClient;
      // this.url = url;
      // this.endpoint = endpoint;
      // this.serializer = serializer;
    }

    public create(item: T): Observable<T> {
      // return this.httpClient
      //   .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      //   .pipe(map(data => this.serializer.fromJson(data) as T));
      return null;
    }

    public update(item: T): Observable<T> {
      // return this.httpClient
      //   .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
      //     this.serializer.toJson(item))
      //   .pipe(map(data => this.serializer.fromJson(data) as T));
      return null;
    }

    public read(id: number): Observable<T> {
      // return this.httpClient
      //   .get(`${this.url}/${this.endpoint}/${id}`)
      //   .pipe(map((data: any) => this.serializer.fromJson(data) as T));
      return null;
    }

    public list(queryOptions: QueryOptions): Observable<T[]> {
      // return this.httpClient
      //   .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      //   .pipe(map((data: any) => this.convertData(data.items)));
      return null;
    }

    public delete(id: number) {
      // return this.httpClient
      //   .delete(`${this.url}/${this.endpoint}/${id}`);
      return null;
    }

    private convertData(data: any): T[] {
      // return data.pipe(map(item => this.serializer.fromJson(item)));
      return null;
    }
  }
