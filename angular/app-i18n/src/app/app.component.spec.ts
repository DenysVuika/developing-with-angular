import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';

describe('AppComponent', () => {
  let translateService: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TranslatePipe
      ]
    }).compileComponents();

    translateService = TestBed.get(TranslateService);
    translateService.data = { 'TITLE': 'test app' };
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to test app!');
  }));
});
