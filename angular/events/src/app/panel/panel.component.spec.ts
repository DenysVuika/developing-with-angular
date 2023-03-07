import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';
import { PanelHeaderComponent } from '../panel-header/panel-header.component';
import { PanelFooterComponent } from '../panel-footer/panel-footer.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PanelComponent, PanelHeaderComponent, PanelFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
