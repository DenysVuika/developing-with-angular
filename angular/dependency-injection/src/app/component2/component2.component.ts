import { Component, OnInit } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(logService: LogService) {
    logService.info('Component 2 created');
  }

  ngOnInit() {
  }

}
