import { Extension } from './extension';

export class PluginManager {

  getPlugins(): string[] {
    const registry = Extension.prototype.registry;
    return Object.keys(registry);
  }

  getType(name) {
    return Extension.prototype.getExtensionType(name);
  }
}
