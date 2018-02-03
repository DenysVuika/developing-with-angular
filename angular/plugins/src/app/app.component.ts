import { Component } from '@angular/core';
import { PluginManager } from './plugin-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  plugins: string[];

  constructor() {
    const pluginManager = new PluginManager();
    this.plugins = pluginManager.getPlugins();
  }
}
