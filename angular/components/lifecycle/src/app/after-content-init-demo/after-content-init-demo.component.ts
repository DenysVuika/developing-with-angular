import { Component, OnInit, AfterContentInit, ContentChild, AfterContentChecked } from '@angular/core';
import { AfterContentInitChildComponent } from '../after-content-init-child/after-content-init-child.component';

@Component({
  selector: 'app-after-content-init-demo',
  templateUrl: './after-content-init-demo.component.html',
  styleUrls: ['./after-content-init-demo.component.css']
})
export class AfterContentInitDemoComponent implements AfterContentInit, AfterContentChecked {

  checked = 0;

  @ContentChild(AfterContentInitChildComponent)
  child: AfterContentInitChildComponent;

  ngAfterContentInit() {
    console.log('AfterContentInit:', this.child);
  }

  ngAfterContentChecked() {
    this.checked ++;
  }

}
