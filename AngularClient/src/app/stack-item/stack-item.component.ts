import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss']
})
export class StackItemComponent implements OnInit {

  constructor() { }

  @Input() listOfStacks;

  ngOnInit() {
  }

}
