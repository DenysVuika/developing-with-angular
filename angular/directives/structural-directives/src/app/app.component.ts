import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Structural Directives';
  extraContent = false;

  users = [
    {
      id: 10,
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      id: 20,
      firstName: 'Joan',
      lastName: 'Doe'
    }
  ];

  roles = [
    { id: 0, name: 'empty' },
    { id: 1, name: 'unknown' },
    { id: 2, name: 'user' },
    { id: 3, name: 'guest' },
    { id: 4, name: 'administrator' }
  ];

  selectedRole = 'empty';

  trackByUserId(index: number, user: any) {
    return user.id;
  }
}
