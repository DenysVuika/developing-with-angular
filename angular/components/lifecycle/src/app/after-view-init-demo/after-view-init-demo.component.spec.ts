import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewInitDemoComponent } from './after-view-init-demo.component';

describe('AfterViewInitDemoComponent', () => {
  let component: AfterViewInitDemoComponent;
  let fixture: ComponentFixture<AfterViewInitDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterViewInitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewInitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
