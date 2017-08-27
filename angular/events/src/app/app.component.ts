import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onHeaderClicked() {
    console.log('App component: Panel header clicked');
  }

  onFooterClicked() {
    console.log('App component: Panel footer clicked');
  }

  onDomHeaderClick(event) {
    console.log(event);
  }

}
