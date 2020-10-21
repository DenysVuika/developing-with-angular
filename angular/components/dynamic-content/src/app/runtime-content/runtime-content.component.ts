import {
  Component,
  ViewChild,
  ViewContainerRef,
  Compiler,
  ComponentFactory,
  NgModule,
  ComponentRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-runtime-content',
  templateUrl: './runtime-content.component.html',
  styleUrls: ['./runtime-content.component.css'],
})
export class RuntimeContentComponent {
  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  template = '<div>\nHello, {{name}}\n</div>';

  constructor(private compiler: Compiler) {}

  compileTemplate() {
    const metadata = {
      selector: `runtime-component-sample`,
      template: this.template,
    };

    const factory = this.createComponentFactorySync(
      this.compiler,
      metadata,
      null
    );

    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  private createComponentFactorySync(
    compiler: Compiler,
    metadata: Component,
    componentClass: any
  ): ComponentFactory<any> {
    const cmpClass =
      componentClass ||
      class RuntimeComponent {
        name = 'Denys';
        onClick() {
          alert('Clicked');
        }
      };
    const decoratedCmp = Component(metadata)(cmpClass);
    const moduleClass = class RuntimeComponentModule {};
    const decoratedNgModule = NgModule({
      imports: [],
      declarations: [decoratedCmp],
    })(moduleClass);
    const module = compiler.compileModuleAndAllComponentsSync(
      decoratedNgModule
    );

    return module.componentFactories.find(
      (f) => f.componentType === decoratedCmp
    );
  }
}
