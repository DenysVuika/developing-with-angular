import { Extension } from './extension';

export class PluginManager {

    getType(name) {
        return Extension.prototype.getExtensionType(name);
    }

    getProviders() {
        return Extension.prototype.getProviders();
    }
}