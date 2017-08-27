import { Component } from '@angular/core';

import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(panelService: PanelService) {
    panelService.headerClicked.subscribe(
      (header: PanelHeaderComponent) => {
        console.log(`Header clicked: ${header.content}`);
      }
    );
  }

  onHeaderClicked() {
    console.log('App component: Panel header clicked');
  }

  onFooterClicked() {
    console.log('App component: Panel footer clicked');
  }

  onDomHeaderClick(event) {
    console.log(event);
  }

}
