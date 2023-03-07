import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css'],
})
export class PanelHeaderComponent {
  @Input()
  content = 'Panel header';

  @Output()
  contentClick = new EventEmitter<void>();

  constructor(
    private panelService: PanelService,
    private elementRef: ElementRef
  ) {}

  onContentClicked() {
    // raise native event
    this.contentClick.next();

    // raise DOM event
    this.elementRef.nativeElement.dispatchEvent(
      new CustomEvent('header-click', {
        detail: {
          content: this.content,
        },
        bubbles: true,
      })
    );

    // raise service event
    this.panelService.headerClicked.next(this);
  }
}
