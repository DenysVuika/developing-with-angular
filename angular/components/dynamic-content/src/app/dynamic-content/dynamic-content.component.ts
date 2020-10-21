import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  ComponentRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css'],
})
export class DynamicContentComponent implements OnInit, OnDestroy {
  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @Input()
  type: string;

  @Input()
  context: any;

  private mappings = {
    sample1: DynamicSample1Component,
    sample2: DynamicSample2Component,
  };

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);

      // note: componentType must be declared within module.entryComponents
      const factory = this.resolver.resolveComponentFactory(componentType);
      this.componentRef = this.container.createComponent(factory);

      // set component context
      const instance = <DynamicComponent>this.componentRef.instance;
      instance.context = this.context;
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}

export abstract class DynamicComponent {
  context: any;
}

@Component({
  selector: 'app-dynamic-sample-1',
  template: ` <div>Dynamic sample 1 ({{ context?.text }})</div> `,
})
export class DynamicSample1Component extends DynamicComponent {}

@Component({
  selector: 'app-dynamic-sample-2',
  template: ` <div>Dynamic sample 2 ({{ context?.text }})</div> `,
})
export class DynamicSample2Component extends DynamicComponent {}

@Component({
  selector: 'app-unknown-component',
  template: ` <div>Unknown component ({{ context?.text }})</div> `,
})
export class UnknownDynamicComponent extends DynamicComponent {}
