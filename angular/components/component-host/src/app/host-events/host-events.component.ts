import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-host-events',
  templateUrl: './host-events.component.html',
  styleUrls: ['./host-events.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'host-events',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(window:resize)': 'onWindowResize()',
    'role': 'button',
    'aria-label': 'Demo button'
  }
})
export class HostEventsComponent {

  @Input()
  color = 'black';

  onMouseEnter() {
    this.color = 'red';
  }

  onMouseLeave() {
    this.color = 'black';
  }

  onWindowResize() {
    console.log('Window resized');
  }

}
