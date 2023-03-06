import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AfterViewInitDemoComponent } from './after-view-init-demo.component';

describe('AfterViewInitDemoComponent', () => {
  let component: AfterViewInitDemoComponent;
  let fixture: ComponentFixture<AfterViewInitDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AfterViewInitDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewInitDemoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
