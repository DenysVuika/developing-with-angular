import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnInitDemoComponent } from './on-init-demo.component';

describe('OnInitDemoComponent', () => {
  let component: OnInitDemoComponent;
  let fixture: ComponentFixture<OnInitDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnInitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnInitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
