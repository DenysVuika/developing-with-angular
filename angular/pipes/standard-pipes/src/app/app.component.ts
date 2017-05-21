import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Standard pipes';
  currentDate: number = Date.now();
  birthday = new Date(1879, 3, 14);
  complexObject = {
    name: {
      firstName: 'Joan',
      lastName: 'Doe'
    },
    email: 'joan.doe@mail.com'
  };
}
