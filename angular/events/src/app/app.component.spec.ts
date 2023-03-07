import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelComponent } from './panel/panel.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [
        AppComponent,
        PanelHeaderComponent,
        PanelComponent,
        PanelFooterComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
