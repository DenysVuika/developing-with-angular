import { Component } from '@angular/core';
import { FooterClickedEvent } from './components/footer/footer-clicked.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerClicks = 0;
  footerClicks = 0;

  onTitleClicked() {
    this.headerClicks += 1;
  }

  onHeaderClicked(event: FooterClickedEvent) {
    this.footerClicks = event.totalClicks;
  }
}
