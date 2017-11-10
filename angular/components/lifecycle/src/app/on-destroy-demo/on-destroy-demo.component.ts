import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy-demo',
  templateUrl: './on-destroy-demo.component.html',
  styleUrls: ['./on-destroy-demo.component.css']
})
export class OnDestroyDemoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
