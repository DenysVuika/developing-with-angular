import {
  Component,
  Compiler,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  NgModule,
  Injector
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PluginsModule } from './plugins.module';
import { SettingsComponent } from './settings/settings.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page.component';

import { System } from 'systemjs';
declare var SystemJS: System;

interface PluginsConfig {
  system: any;
  plugins: {
    modules: any;
    routes: Array<{
      name: string;
      path: string;
      component: {
        module: string;
        componentType: string;
      };
    }>;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef, static: true })
  content: ViewContainerRef;

  private module;

  links: { text: string; path: string }[] = [];

  constructor(
    private compiler: Compiler,
    private router: Router,
    private http: HttpClient,
    private injector: Injector
  ) {
    this.module = this.compiler.compileModuleAndAllComponentsSync(
      PluginsModule
    );
    this.createRoute('Settings', 'settings', SettingsComponent);
  }

  async ngAfterViewInit() {
    const url = '/assets/plugins.config.json';
    const config = <PluginsConfig>await this.http.get(url).toPromise();
    console.log(config);

    SystemJS.config(config.system);

    this.loadExternalRoutes(config);

    const core = await SystemJS.import('plugins-core');
    const pluginExample = await SystemJS.import('plugins-example');
    console.log(core, pluginExample);

    const componentType = core.pluginManager.getType('my-label');
    const RuntimeModule = NgModule({ declarations: [componentType] })(class {});
    const module = this.compiler.compileModuleAndAllComponentsSync(
      RuntimeModule
    );
    const factory = module.componentFactories.find(
      f => f.componentType === componentType
    );

    const pluginInjector = Injector.create(
      [...core.pluginManager.getProviders()],
      this.injector
    );

    this.content.clear();
    this.content.createComponent(factory, 0, pluginInjector);
  }

  createView(name: string) {
    const factory = this.module.componentFactories.find(
      f => f.selector === name
    );

    this.content.clear();
    this.content.createComponent(factory);
  }

  private async loadExternalRoutes(config: PluginsConfig) {
    const core = await SystemJS.import('plugins-core');

    for (const route of config.plugins.routes) {
      const module = await SystemJS.import(route.component.module);
      const componentType = core.pluginManager.getType(
        route.component.componentType
      );
      this.createRoute(
        route.name,
        route.path,
        DynamicPageComponent,
        componentType
      );
    }
  }

  createRoute(
    text: string,
    path: string,
    componentType: any,
    factoryType?: any
  ) {
    this.router.config.unshift({
      path: path,
      component: componentType,
      data: {
        factory: factoryType
      }
    });

    this.links.push({ text, path });
  }
}
