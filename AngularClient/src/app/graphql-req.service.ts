import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphqlReqService {

  constructor(private httpClient: HttpClient) { }

  graphqlApiStacks = [];

  url :string = "http://localhost:3000/graphql";


  getStacks(query:string){
    console.log(typeof query);
    this.httpClient.post(this.url,query).subscribe((algo=>{
      console.log(algo);
    }))
    return this.graphqlApiStacks;
  }
}
