import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Standard pipes';
  currentDate: number = Date.now();
  birthday = new Date(1879, 3, 14);
  complexObject = {
    name: {
      firstName: 'Joan',
      lastName: 'Doe'
    },
    email: 'joan.doe@mail.com'
  };
  numberCollection = [0, 1, 2, 3, 4, 5, 6];

  // I18nSelect
  titleMode = 'primary';
  titleValues = {
    primary: 'This is a primary title',
    secondary: 'This is a secondary title',
    other: 'This is an alternative title'
  };

  // I18nSelect
  currentLanguage = 'en-GB';
  buttonLabels = {
    'en-US': 'Pick color',
    'en-GB': 'Pick colour',
    uk: 'Вибрати колiр',
    other: 'Pick colour'
  };

  // I18nPluralPipe
  posts = [
    {
      content: 'Post 1 content',
      commentsCount: 0
    },
    {
      content: 'Post 2 content',
      commentsCount: 1
    },
    {
      content: 'Post 3 content',
      commentsCount: 10
    }
  ];
  commentLabels: { [key: string]: string } = {
    '=0': 'There are no comments for this post.',
    '=1': 'There is one comment for this post.',
    other: 'There are # comments for this post.'
  };

  // Async
  comments: Observable<string[]>;

  // Async (date/time)
  currentTime: Observable<Date>;

  checkComments() {
    this.comments = of(['Comment 1', 'Comment 2', 'Comment 3']).pipe(
      delay(1000)
    );
  }

  resetComments() {
    this.comments = null;
  }

  ngOnInit() {
    this.currentTime = new Observable<Date>(observer => {
      setInterval(_ => observer.next(new Date()), 1000);
    });
  }
}
