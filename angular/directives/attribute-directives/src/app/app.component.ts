import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  inputStyle = {
    'border': '1px green solid',
    'background-color': 'white',
    'color': 'blue'
  };
}
