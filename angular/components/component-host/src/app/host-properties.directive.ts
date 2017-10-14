import { Directive } from '@angular/core';

@Directive({
  selector: '[appHostProperties]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[innerHTML]': 'value',
    '[attr.custom1]': 'attrValue'
  }
})
export class HostPropertiesDirective {

  value = 'Custom Value';
  attrValue = 'some attribute value';
}
