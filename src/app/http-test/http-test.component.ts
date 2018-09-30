import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-test',
  // template: `<span>{{ data }}</span>`,
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  // title = 'app-http-test';
  apiRoot: string;
  data: string;
  jsonArticles: any;
  response$: Observable<Response>;

  constructor(private http: Http) {
    this.apiRoot = 'http://httpbin.org';
  }

  ngOnInit() {
    // apiUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50f8cfce6ce0405cba5e9ea7626b23a5';
    const sources = 'bbc-news';
    const apiKey = '50f8cfce6ce0405cba5e9ea7626b23a5';
    const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=' + sources + '&apiKey=' + apiKey;

    const response$ = this.http.get(apiUrl);
    // response$.subscribe(res => {
    //   // console.log(res.json());
    //   // const jsonData = res.json();
    //   // this.jsonArticles = jsonData.articles;
    //   this.jsonArticles = res.json().articles;
    // });

    response$
    .pipe(
        map((res$: Response) => {
          return res$;
        })
    )
    .subscribe((res$: any) => {
      this.jsonArticles = res$.json().articles;
    });
  }

  doGET() {
    console.log('GET');
  }

  doPOST() {
    console.log('POST');
  }

  doPUT() {
    console.log('PUT');
  }

  doDELETE() {
    console.log('DELETE');
  }

  // doGETAsPromise() {
  //   console.log('GET AS PROMISE');
  // }

  // doGETAsPromiseError() {
  //   console.log('GET AS PROMISE ERROR');
  // }

  // doGETAsObservableError() {
  //   console.log('GET AS OBSERVABLE ERROR');
  // }

  // doGETWithHeaders() {
  //   console.log('GET WITH HEADERS');
  // }
}
