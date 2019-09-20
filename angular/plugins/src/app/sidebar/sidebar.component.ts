import { Component, ViewChild, ViewContainerRef, AfterViewInit, Compiler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PluginsModule } from '../plugins.module';

interface AppConfig {
  sidebar: {
    components: string[]
  };
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  @ViewChild('content', { read: ViewContainerRef, static: true })
  content: ViewContainerRef;

  private module;

  constructor(
    private http: HttpClient,
    private compiler: Compiler) {
    this.module = compiler.compileModuleAndAllComponentsSync(PluginsModule);
  }

  async ngAfterViewInit() {
    const url = '/assets/plugins.config.json';
    const config = await this.http.get<AppConfig>(url).toPromise();
    this.createSidebarComponents(config.sidebar.components);
  }

  private createSidebarComponents(selectors: string[]) {
    this.content.clear();

    for (let i = 0; i < selectors.length; i++) {
      const factory = this.module.componentFactories.find(f => f.selector === selectors[i]);
      this.content.createComponent(factory, i);
    }
  }

}
