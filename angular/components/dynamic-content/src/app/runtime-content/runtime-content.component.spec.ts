import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeContentComponent } from './runtime-content.component';

describe('RuntimeContentComponent', () => {
  let component: RuntimeContentComponent;
  let fixture: ComponentFixture<RuntimeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
