import { Component, Compiler, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PluginsModule } from './plugins.module';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  private module;

  links: { text: string, path: string }[] = [];

  constructor(private compiler: Compiler, private router: Router) {
    this.module = this.compiler.compileModuleAndAllComponentsSync(PluginsModule);
    this.createRoute('Settings', 'settings', SettingsComponent);
  }

  createView(name: string) {
    const factory = this.module.componentFactories.find(f => f.selector === name);

    this.content.clear();
    this.content.createComponent(factory);
  }

  createRoute(text: string, path: string, componentType: any) {
    this.router.config.unshift({
      path: path,
      component: componentType
    });

    this.links.push({ text, path });
  }
}
