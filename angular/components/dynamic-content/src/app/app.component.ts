import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  listItems: Array<{title: string}> = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' }
  ]
}
