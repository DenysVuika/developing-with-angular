import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDemoComponent } from './do-check-demo.component';

describe('DoCheckDemoComponent', () => {
  let component: DoCheckDemoComponent;
  let fixture: ComponentFixture<DoCheckDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
