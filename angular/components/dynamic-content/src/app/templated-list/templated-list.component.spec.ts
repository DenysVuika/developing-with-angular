import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplatedListComponent } from './templated-list.component';

describe('TemplatedListComponent', () => {
  let component: TemplatedListComponent;
  let fixture: ComponentFixture<TemplatedListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
