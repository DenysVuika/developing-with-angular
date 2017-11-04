import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitDemoComponent } from './on-init-demo.component';

describe('OnInitDemoComponent', () => {
  let component: OnInitDemoComponent;
  let fixture: ComponentFixture<OnInitDemoComponent>;

  beforeEach(async(() => {
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
