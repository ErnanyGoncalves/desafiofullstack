import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GraphqlReqService } from '../graphql-req.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {

  stackForm: FormGroup;

  constructor(private graphqlReq: GraphqlReqService) { }

  ngOnInit() {
    this.stackForm = new FormGroup({
      "score": new FormControl(20),
      "sort": new FormControl("activity"),
      "limit": new FormControl(12),
      "tag": new FormControl(null, Validators.required)
    });
  }

  stacksSearch() {
    // const graphqlQuery = {
    //   query: `mutation{searchStacks(stkSearch: {score: ${this.stackForm.value.score},sort: "${this.stackForm.value.sort}",limit: ${this.stackForm.value.limit},tag: "${this.stackForm.value.tag}"}){has_more}}`
    // };
    const graphqlQuery = {
      query: `mutation{searchStacks(stkSearch: {score: ${this.stackForm.value.score},sort: "${this.stackForm.value.sort}",limit: ${this.stackForm.value.limit},tag: "${this.stackForm.value.tag}"}){items{score title} has_more}}`
    };
    console.log(JSON.stringify(graphqlQuery));
    this.graphqlReq.getStacks(JSON.stringify(graphqlQuery));

    this.stackForm.reset({ "score": 20, "sort": "activity", "limit": 10 });
  }

}
