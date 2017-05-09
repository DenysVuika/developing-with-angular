import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClickme]'
})
export class ClickmeDirective {

  @HostBinding('attr.value')
  value = 'input value';

  @HostBinding('style.background-color')
  background = 'lightblue';

  @HostBinding('class.is-selected')
  isSelected = false;

  @HostBinding('class.is-hovered')
  isHovered = false;

  constructor() { }

  @HostListener('click', ['$event'])
  onClicked(e: Event) {
    console.log(e);
    alert('Clicked');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
    // other code
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
    // other code
  }

}
