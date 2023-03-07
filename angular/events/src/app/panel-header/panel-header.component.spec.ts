import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanelHeaderComponent } from './panel-header.component';
import { CommonModule } from '@angular/common';

describe('PanelHeaderComponent', () => {
  let component: PanelHeaderComponent;
  let fixture: ComponentFixture<PanelHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PanelHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
