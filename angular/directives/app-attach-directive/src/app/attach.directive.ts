import { Directive, Input, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttach]'
})
export class AttachDirective implements OnInit {

  private upload: HTMLInputElement;

  @Input()
  multiple: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer) {
  }

  ngOnInit(): void {
    this.upload = this.renderer.createElement(this.el.nativeElement.parentNode, 'input') as HTMLInputElement;
    this.upload.type = 'file';
    this.upload.style.display = 'none';
    this.upload.addEventListener('change', e => this.onAttachFiles(e));

    if (this.multiple) {
      this.upload.setAttribute('multiple', '');
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.upload) {
      event.preventDefault();
      this.upload.click();
    }
  }

  private onAttachFiles(e: Event): void {
    const input = (<HTMLInputElement>e.currentTarget);
    const files = this.getFiles(input.files);
    this.raiseEvent(files);
  }

  private getFiles(fileList: FileList): File[] {
    const result: File[] = [];
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++) {
        result.push(fileList[i]);
      }
    }
    return result;
  }

  private raiseEvent(files: File[]): void {
    if (files.length > 0) {
      const event = new CustomEvent('attach-files', {
        detail: {
          sender: this,
          files: files
        },
        bubbles: true
      });

      this.el.nativeElement.dispatchEvent(event);
    }
  }

}
