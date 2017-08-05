import { Component, OnInit } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(logService: LogService) {
    logService.info('Component 1 created');
  }

  ngOnInit() {
  }

}
