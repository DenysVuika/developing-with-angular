import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(logService: LogService, @Inject('DATE_NOW') now: Date) {
    logService.info('Component 1 created');
    logService.info(now.toString());
  }

  ngOnInit() {
  }

}
