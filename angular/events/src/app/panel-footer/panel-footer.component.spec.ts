import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanelFooterComponent } from './panel-footer.component';

describe('PanelFooterComponent', () => {
  let component: PanelFooterComponent;
  let fixture: ComponentFixture<PanelFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
