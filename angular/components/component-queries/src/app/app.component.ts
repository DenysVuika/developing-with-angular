import {
  Component,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ListComponent, { static: false })
  list: ListComponent;

  @ViewChildren(ListComponent)
  lists: QueryList<ListComponent>;

  ngAfterViewInit() {
    let i = 0;
    this.lists.forEach(l => {
      l.title = 'Custom title #' + i++;
    });
  }
}
