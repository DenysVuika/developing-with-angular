import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitDemoComponent } from './after-content-init-demo.component';

describe('AfterContentInitDemoComponent', () => {
  let component: AfterContentInitDemoComponent;
  let fixture: ComponentFixture<AfterContentInitDemoComponent>;

  beforeEach(async(() => {
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
