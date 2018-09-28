import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: Http) {
    this.apiRoot = 'http://httpbin.org';
  }

  ngOnInit() {
    // this.data = '{"Name":"David"}';
    let apiUrl: string;
    apiUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50f8cfce6ce0405cba5e9ea7626b23a5';
    this.http.get(apiUrl).subscribe(res => {
        // console.log(res.text());
        this.data = res.text();
        const jsonData = JSON.parse(this.data);
        this.jsonArticles = jsonData.articles;
      }
    );

    // console.log(this.data);
    // const jsonData = JSON.parse(this.data);
    // this.jsonArticles = jsonData.articles;
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
