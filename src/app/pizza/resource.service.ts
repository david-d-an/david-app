import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QueryOptions } from './query-options';
import { Resource } from './resource';
import { Serializer } from './serializer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
export abstract class ResourceService<T extends Resource> {
  constructor(
      private httpClient: HttpClient,
      private url: string,
      private endpoint: string,
      private serializer: Serializer
    ) {
    }

    public create(item: T): Observable<T> {
      return this.httpClient
        .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
        .pipe(map(data => this.serializer.fromJson(data) as T));
    }

    public update(item: T): Observable<T> {
      return this.httpClient
        .put<T>(
          `${this.url}/${this.endpoint}/${item.id}`,
          this.serializer.toJson(item)
        )
        .pipe(map(data => this.serializer.fromJson(data) as T));
    }

    public read(id: number): Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}/${id}`)
        .pipe(map((data: any) => this.serializer.fromJson(data) as T));
    }

    public list(queryOptions: QueryOptions): Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
        // .pipe(map((data: any) => this.convertData(data)));
        .pipe(
          map(
            (data: any) => data.map(
              (item: any) => this.serializer.fromJson(item)
            )
          )
        );
    }

    public delete(id: number) {
      return this.httpClient
        .delete(`${this.url}/${this.endpoint}/${id}`);
    }

    // private convertData(data: any): T[] {
    //   return data.pipe(map(item => this.serializer.fromJson(item)));
    // }
  }
