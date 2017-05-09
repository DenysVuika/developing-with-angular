import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  @HostBinding('class.app-upload__dragover')
  isDragOver: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('dragenter')
  onDragEnter() {
    this.isDragOver = true;
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isDragOver = true;
  }

  @HostListener('dragleave')
  onDragLeave() {
    this.isDragOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const files = this.collectFiles(event.dataTransfer);
    console.log(files);
    this.onFilesDropped(files);
  }

  private collectFiles(dataTransfer: DataTransfer): File[] {
    const result: File[] = [];

    if (dataTransfer) {
      const items: FileList = dataTransfer.files;

      if (items && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          result.push(items[i]);
        }
      }
    }

    return result;
  }

  private onFilesDropped(files: File[]) {
    if (files && files.length > 0) {
      this.el.nativeElement.dispatchEvent(
        new CustomEvent('upload-files', {
          detail: {
            sender: this,
            files: files
          },
          bubbles: true
        })
      );
    }
  }

}
