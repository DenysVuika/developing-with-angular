import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-after-view-init-demo',
  templateUrl: './after-view-init-demo.component.html',
  styleUrls: ['./after-view-init-demo.component.css']
})
export class AfterViewInitDemoComponent implements AfterViewInit {

  @ViewChild('prevPageButton')
  prevButton: ElementRef;

  @ViewChild('nextPageButton')
  nextButton: ElementRef;

  ngAfterViewInit() {
    this.prevButton.nativeElement.innerText = 'Left Page';
    this.nextButton.nativeElement.innerText = 'Right Page';
  }

}
