export function Extension(name, deps) {
    return (constructor) => {
        Extension.prototype.registry[name] = {
            ctor: constructor,
            deps: deps || []
        };
    };
}

Extension.prototype.registry = {};

Extension.prototype.getProviders = function () {
    var registry = this.registry;
    return Object.keys(registry).map(function (key) {
        return {
            provide: key,
            useClass: registry[key].ctor,
            deps: registry[key].deps
        };
    });
};

Extension.prototype.getExtensionType = function (name) {
    return this.registry[name].ctor;
}