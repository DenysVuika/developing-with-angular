import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css']
})
export class PanelHeaderComponent {

  @Input()
  content = 'Panel header';

  @Output()
  contentClick = new EventEmitter();

  onContentClicked() {
    console.log('panel header clicked');
    this.contentClick.next();
  }
}
