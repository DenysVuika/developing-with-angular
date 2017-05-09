import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  @Input()
  set appRepeat(times: number) {
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: i,
        first: i === 0,
        last: i === times - 1
      });
    }
  }

}
