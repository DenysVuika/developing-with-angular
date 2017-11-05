import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check-demo',
  templateUrl: './do-check-demo.component.html',
  styleUrls: ['./do-check-demo.component.css']
})
export class DoCheckDemoComponent implements DoCheck {

  currentUser = {
    firstName: 'John',
    lastName: 'Doe'
  };

  previousUser = {
    firstName: '',
    lastName: ''
  };

  checks = 0;
  updates = 0;

  updateUser() {
    this.currentUser = {
      firstName: 'James',
      lastName: 'Bond'
    };
  }

  ngDoCheck() {
    this.checks ++;
    if (this.previousUser.firstName !== this.currentUser.firstName
      || this.previousUser.lastName !== this.currentUser.lastName) {
      this.updates ++;
      this.previousUser = Object.assign({}, this.currentUser);
    }
  }

}
