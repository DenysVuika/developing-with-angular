import { Component, Compiler, ViewChild, ViewContainerRef, AfterViewInit, NgModule, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PluginsModule } from './plugins.module';
import { SettingsComponent } from './settings/settings.component';

import { System } from 'systemjs';
declare var SystemJS: System;

interface PluginsConfig {
  system: any;
  plugins: {
    modules: any,
    routes: Array<{
      name: string,
      path: string,
      component: {
        module: string,
        componentType: string
      }
    }>
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  private module;

  links: { text: string, path: string }[] = [];

  constructor(private compiler: Compiler,
              private router: Router,
              private http: HttpClient,
              private injector: Injector) {
    this.module = this.compiler.compileModuleAndAllComponentsSync(PluginsModule);
    this.createRoute('Settings', 'settings', SettingsComponent);
  }

  async ngAfterViewInit() {
    const url = '/assets/plugins.config.json';
    const config = <PluginsConfig> await this.http.get(url).toPromise();
    console.log(config);

    SystemJS.config(config.system);

    const core = await SystemJS.import('plugins-core');
    const pluginExample = await SystemJS.import('plugins-example');
    console.log(core);

    const componentType = core.pluginManager.getType('my-label');
    const RuntimeModule = NgModule({ declarations: [componentType]})(class {});
    const module = this.compiler.compileModuleAndAllComponentsSync(RuntimeModule);
    const factory = module.componentFactories.find(f => f.componentType === componentType);

    const pluginInjector = Injector.create([
      ...core.pluginManager.getProviders()
    ], this.injector);

    this.content.clear();
    this.content.createComponent(factory, 0, pluginInjector);
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
