import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templated-list',
  templateUrl: './templated-list.component.html',
  styleUrls: ['./templated-list.component.css']
})
export class TemplatedListComponent {
  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  @Input()
  items: Array<{ title: string }> = [];
}
