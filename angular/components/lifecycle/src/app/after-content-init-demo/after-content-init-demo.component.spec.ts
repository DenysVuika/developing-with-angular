import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AfterContentInitDemoComponent } from './after-content-init-demo.component';

describe('AfterContentInitDemoComponent', () => {
  let component: AfterContentInitDemoComponent;
  let fixture: ComponentFixture<AfterContentInitDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterContentInitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentInitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
