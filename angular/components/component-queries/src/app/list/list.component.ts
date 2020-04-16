import {
  Component,
  Input,
  ContentChild,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterContentInit {
  @Input()
  title = 'List Title';

  @ContentChild(ListItemComponent)
  firstListItem: ListItemComponent;

  @ContentChildren(ListItemComponent)
  listItems: QueryList<ListItemComponent>;

  ngAfterContentInit() {
    this.listItems.forEach(item => {
      item.title = item.title + ' (' + new Date().toLocaleDateString() + ')';
    });
  }
}
