import { Component, OnInit } from '@angular/core';
import { Extension } from '../extension';

@Extension('page2')
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
