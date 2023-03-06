import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OnDestroyDemoComponent } from './on-destroy-demo.component';

describe('OnDestroyDemoComponent', () => {
  let component: OnDestroyDemoComponent;
  let fixture: ComponentFixture<OnDestroyDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDestroyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDestroyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
