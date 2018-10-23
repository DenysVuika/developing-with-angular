import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  headerClicked = new Subject<PanelHeaderComponent>();
  footerClicked = new Subject<PanelFooterComponent>();
}
