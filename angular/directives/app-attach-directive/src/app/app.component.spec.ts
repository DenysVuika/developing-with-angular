import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AttachDirective } from './attach.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AppComponent, AttachDirective]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
