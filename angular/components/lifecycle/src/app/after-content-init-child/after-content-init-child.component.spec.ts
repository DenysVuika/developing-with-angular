import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitChildComponent } from './after-content-init-child.component';

describe('AfterContentInitChildComponent', () => {
  let component: AfterContentInitChildComponent;
  let fixture: ComponentFixture<AfterContentInitChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterContentInitChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
