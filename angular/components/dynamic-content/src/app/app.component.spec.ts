import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TemplatedListComponent } from './templated-list/templated-list.component';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';
import { RuntimeContentComponent } from './runtime-content/runtime-content.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [
        AppComponent,
        TemplatedListComponent,
        DynamicContentComponent,
        RuntimeContentComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
