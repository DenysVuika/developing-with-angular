import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeContentComponent } from './runtime-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('RuntimeContentComponent', () => {
  let component: RuntimeContentComponent;
  let fixture: ComponentFixture<RuntimeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [RuntimeContentComponent]
    }).compileComponents();
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
