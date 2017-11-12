import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-demo',
  templateUrl: './on-changes-demo.component.html',
  styleUrls: ['./on-changes-demo.component.css']
})
export class OnChangesDemoComponent implements OnChanges {

  @Input()
  text = 'hello world';

  previous: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.text) {
      this.previous = changes.text.previousValue;
    }
  }

}
