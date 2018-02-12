import { Component, OnInit, NgModule } from '@angular/core';
import { Extension } from 'plugins-core';

@Extension('my-label', [])
@Component({
    selector: 'my-label',
    template: `<h1>My Label</h1>`
})
export class MyLabelComponent implements OnInit {

    ngOnInit() {
        console.log('My Label Init');
    }

}