import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterClickedEvent } from './footer-clicked.event';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private totalClicks = 0;

  @Input()
  title = 'Footer';

  @Output()
  titleClick = new EventEmitter<FooterClickedEvent>();

  handleTitleClick() {
    const event = new FooterClickedEvent(++this.totalClicks)
    this.titleClick.next(event);
  }
}
