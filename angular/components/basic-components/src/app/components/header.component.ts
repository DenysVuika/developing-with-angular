import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input()
  title = 'Header';

  @Output()
  titleClick = new EventEmitter<void>();

  handleTitleClick() {
    this.titleClick.next();
  }
}
