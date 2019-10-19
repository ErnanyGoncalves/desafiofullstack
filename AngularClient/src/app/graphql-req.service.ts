import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphqlReqService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://localhost:3000/graphql";

  getStacks(query: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.httpClient.post(this.url, query, { headers: headers, observe: 'response' });
  }
}
