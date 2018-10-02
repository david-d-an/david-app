import { async } from '@angular/core/testing';
import { HttpModule, Http, Headers, Response } from '@angular/http';

import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Response as StaticResponse } from '@angular/http/src/static_response';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  // title = 'app-http-test';
  apiRoot = 'http://httpbin.org';
  data: string;
  jsonArticles: any;
  public staticresponse$: Observable<StaticResponse>;

  constructor(private http: Http) {
    // const simpleObservable = new Observable((observer) => {
    //   observer.next('bla bla bla');
    //   observer.complete();
    // });

  }

  public ngOnInit() {
    const node = document.querySelector('input[type=text]');
    const input$ = fromEvent(node, 'input');

    input$.subscribe({
      next: event => {
        console.log(`Event triggered: ${ (<HTMLInputElement>event.target).value } `);
      },
      error: err => console.log(`Error rasied: ${ err }`),
      complete: () => console.log(`Task completed `)
    });

    // apiUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50f8cfce6ce0405cba5e9ea7626b23a5';
    const sources = 'bbc-news';
    const apiKey = '50f8cfce6ce0405cba5e9ea7626b23a5';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + sources + '&apiKey=' + apiKey;

    this.staticresponse$ = this.http.get(apiUrl);
    this.staticresponse$
    .pipe(
        map((res$: Response) => {
          return res$.json().articles;
        })
    )
    .subscribe((articles: any) => {
      this.jsonArticles = articles;
    });
  }

  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}/get`;

    // this.http.get(url).subscribe(res => console.log(res.text()));

    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, { search: search }).subscribe(res => console.log(res.text()));
  }

  doPOST() {
    console.log('POST');
    const url = `${this.apiRoot}/post`;

    this.http.post(url, { moo: 'foo', goo: 'loo' }).subscribe(res => console.log(res.text()));

    // const search = new URLSearchParams();
    // search.set('foo', 'moo');
    // search.set('limit', '25');
    // this.http.post(url, { moo: 'foo', goo: 'loo' }, { search }).subscribe(res => console.log(res.text()));
  }

  doPUT() {
    console.log('PUT');
    const url = `${this.apiRoot}/put`;

    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http
      .put(url, { moo: 'foo', goo: 'loo'}, { search })
      .subscribe(res => console.log(res.text()));
  }

  doDELETE() {
    console.log('DELETE');
    const url = `${this.apiRoot}/delete`;

    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, {search}).subscribe(res => console.log(res.text()));
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    const url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res.text()));
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        res => console.log(res.text()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .subscribe(
        res => console.log(res.text()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');

    const httpOptions = {
      headers: new Headers({
        Authorization: btoa('username:password')
      })
    };

    const url = `${this.apiRoot}/get`;

    this.http
      .get(url, httpOptions)
      .subscribe(
        res => console.log(res.text()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }}
