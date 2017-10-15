import { Component, OnInit } from '@angular/core';
import { ClickCounterService } from '../click-counter.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {

  totalClicks = 0;

  constructor(private clickService: ClickCounterService) { }

  ngOnInit() {
    this.clickService.clicked.subscribe((clicks) => {
      this.totalClicks = clicks;
    });
  }

  onClick() {
    this.clickService.click();
  }

}
