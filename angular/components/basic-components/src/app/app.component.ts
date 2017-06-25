import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerClicks = 0;

  onTitleClicked() {
    this.headerClicks += 1;
  }
}
