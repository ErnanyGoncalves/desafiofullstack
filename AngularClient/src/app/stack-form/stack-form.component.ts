import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GraphqlReqService } from '../graphql-req.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {

  stackForm: FormGroup;
  verdade = true;
  constructor(private graphqlReq: GraphqlReqService) { }

  ngOnInit() {
    this.stackForm = new FormGroup({
      "score": new FormControl(100),
      "sort": new FormControl("activity"),
      "limit": new FormControl(10),
      "tag": new FormControl(null, Validators.required)
    });
  }

  stacksSearch() {
    const graphqlQuery = {
      query: `mutation{searchStacks(stkSearch: {score: ${this.stackForm.value.score},sort: "${this.stackForm.value.sort}",limit: ${this.stackForm.value.limit},tag: "${this.stackForm.value.tag}"}){items{score title link} has_more}}`
    };
    console.log(JSON.stringify(graphqlQuery));
    this.graphqlReq.getStacks(JSON.stringify(graphqlQuery));

    this.stackForm.reset({ "score": 20, "sort": "activity", "limit": 10 });
  }

}
