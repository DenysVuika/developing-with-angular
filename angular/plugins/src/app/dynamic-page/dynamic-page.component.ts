import {
  Component, OnInit, OnDestroy,
  Injector, ViewChild, ViewContainerRef, Compiler, NgModule, ComponentRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.css']
})
export class DynamicPageComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef, static: true })
  content: ViewContainerRef;

  component: ComponentRef<any>;

  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private compiler: Compiler) {
  }

  ngOnInit() {
    const componentType = this.route.snapshot.data['factory'];

    if (componentType) {
      this.compiler.clearCacheFor(componentType);

      const RuntimeModule = NgModule({
        declarations: [componentType]
      })(class {});

      const module = this.compiler.compileModuleAndAllComponentsSync(RuntimeModule);
      const factory = module.componentFactories.find(f => f.componentType === componentType);
      this.content.clear();
      this.component = this.content.createComponent(factory, 0, this.injector);
    }
  }

  ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }

}
