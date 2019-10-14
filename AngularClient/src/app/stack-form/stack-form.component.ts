import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnInit {

  stackForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.stackForm = new FormGroup({
      "score": new FormControl(50),
      "sort": new FormControl("votes"),
      "limit": new FormControl(10),
      "tag": new FormControl(null, Validators.required)
    });
  }

  stacksSearch() {
    console.log(this.stackForm);
    this.stackForm.reset({ "score": 50, "sort": "votes", "limit": 10 });
  }

}
