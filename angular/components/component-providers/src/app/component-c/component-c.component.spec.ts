import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentCComponent } from './component-c.component';

describe('ComponentCComponent', () => {
  let component: ComponentCComponent;
  let fixture: ComponentFixture<ComponentCComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
