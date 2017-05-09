import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Attach directive';

  files: File[];

  onAttachFiles(e: CustomEvent) {
    this.files = e.detail.files || [];
  }
}
