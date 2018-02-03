import { Component, Compiler, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginsModule } from './plugins.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  private module;

  constructor(private compiler: Compiler) {
    this.module = this.compiler.compileModuleAndAllComponentsSync(PluginsModule);
  }

  createView(name: string) {
    const factory = this.module.componentFactories.find(f => f.selector === name);

    this.content.clear();
    this.content.createComponent(factory);
  }
}
