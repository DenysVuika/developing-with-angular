import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component1Component } from './component1.component';

export function dateFactory() {
  return new Date();
}

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Component1Component],
      providers: [{ provide: 'DATE_NOW', useFactory: dateFactory }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
