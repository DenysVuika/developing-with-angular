import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  displayBody = true;

  @Input()
  header = 'My panel header';

  @Input()
  footer = 'My panel footer';

  @Output()
  headerClick = new EventEmitter();

  @Output()
  footerClick = new EventEmitter();

  onHeaderClicked() {
    this.displayBody = !this.displayBody;
    this.headerClick.next();
  }

  onFooterClicked() {
    this.footerClick.next();
  }

}
