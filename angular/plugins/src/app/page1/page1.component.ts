import { Component, OnInit } from '@angular/core';
import { Extension } from '../extension';

@Extension('page1')
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
