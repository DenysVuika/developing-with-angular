import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { DoCheckDemoComponent } from './do-check-demo/do-check-demo.component';
import { OnInitDemoComponent } from './on-init-demo/on-init-demo.component';
import { AfterContentInitChildComponent } from './after-content-init-child/after-content-init-child.component';
import { AfterContentInitDemoComponent } from './after-content-init-demo/after-content-init-demo.component';
import { OnDestroyDemoComponent } from './on-destroy-demo/on-destroy-demo.component';
import { AfterViewInitDemoComponent } from './after-view-init-demo/after-view-init-demo.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [
        AppComponent,
        OnInitDemoComponent,
        OnChangesDemoComponent,
        DoCheckDemoComponent,
        OnInitDemoComponent,
        AfterContentInitChildComponent,
        AfterContentInitDemoComponent,
        OnDestroyDemoComponent,
        AfterViewInitDemoComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
