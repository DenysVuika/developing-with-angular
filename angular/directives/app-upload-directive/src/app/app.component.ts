import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  uploadedFiles: string[] = [];

  onUploadFiles(event: CustomEvent) {
    console.log(event);
    const files: File[] = event.detail.files;
    if (files) {
      for (const file of files) {
        this.uploadedFiles.push(file.name);
      }
    }
  }
}
