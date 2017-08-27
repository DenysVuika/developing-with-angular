import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {
  }

  onContentClicked() {
    this.contentClick.next();

    this.elementRef.nativeElement.dispatchEvent(
      new CustomEvent('header-click', {
        detail: {
          content: this.content
        },
        bubbles: true
      })
    );
  }
}
