import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedListComponent } from './templated-list.component';

describe('TemplatedListComponent', () => {
  let component: TemplatedListComponent;
  let fixture: ComponentFixture<TemplatedListComponent>;

  beforeEach(async(() => {
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
