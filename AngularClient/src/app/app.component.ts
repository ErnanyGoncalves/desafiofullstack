import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stacks: [] = [];
  notFoundMessage: boolean = false;

  manageStacks(stackList) {
    this.stacks = stackList;
    if (stackList == null) {
      this.notFoundMessage = true;
    } else if (this.stacks.length === 0) {
      this.notFoundMessage = true;
    } else {
      this.notFoundMessage = false;
    }
  }
}


