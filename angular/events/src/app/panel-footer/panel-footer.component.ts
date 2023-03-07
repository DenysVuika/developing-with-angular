import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-footer',
  templateUrl: './panel-footer.component.html',
  styleUrls: ['./panel-footer.component.css'],
})
export class PanelFooterComponent {
  @Input()
  content = 'Panel footer';

  @Output()
  contentClick = new EventEmitter<void>();

  onContentClicked() {
    console.log('panel footer clicked');
    this.contentClick.next();
  }
}
