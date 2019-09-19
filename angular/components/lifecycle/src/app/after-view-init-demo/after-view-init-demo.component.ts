import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-after-view-init-demo',
  templateUrl: './after-view-init-demo.component.html',
  styleUrls: ['./after-view-init-demo.component.css']
})
export class AfterViewInitDemoComponent
  implements AfterViewInit, AfterViewChecked {
  checked = 0;

  @ViewChild('prevPageButton', { static: false })
  prevButton: ElementRef;

  @ViewChild('nextPageButton', { static: false })
  nextButton: ElementRef;

  ngAfterViewInit() {
    this.prevButton.nativeElement.innerText = 'Left Page';
    this.nextButton.nativeElement.innerText = 'Right Page';
  }

  ngAfterViewChecked() {
    this.checked++;
  }
}
