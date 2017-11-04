import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-demo',
  templateUrl: './on-init-demo.component.html',
  styleUrls: ['./on-init-demo.component.css']
})
export class OnInitDemoComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit() {
    this.currentDate = new Date();
  }

}
