import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<div>{{ title }}</div>'
})
export class HeaderComponent {

  title: string = 'Header';

}
