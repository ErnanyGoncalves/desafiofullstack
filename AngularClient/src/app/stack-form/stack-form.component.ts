import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GraphqlReqService } from '../graphql-req.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {

  stackForm: FormGroup;
  graphqlApiStacks:[] = [];
  
  @Output() stackList = new EventEmitter<any>();

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
      query: `mutation{searchStacks(stkSearch: {score: ${this.stackForm.value.score},sort: "${this.stackForm.value.sort}",limit: ${this.stackForm.value.limit},tag: "${this.stackForm.value.tag}"}){items{title tags link is_answered answer_count score view_count owner{display_name link}}}}`
    };

    this.graphqlReq.getStacks(JSON.stringify(graphqlQuery)).subscribe((resp: any) => {
      this.graphqlApiStacks = resp.body.data.searchStacks.items;
      this.stackList.emit(this.graphqlApiStacks);
    });

    this.stackForm.reset({ "score": 100, "sort": "activity", "limit": 10 });
  }

}
