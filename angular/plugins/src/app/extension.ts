export function Extension(name: string, deps?: any[]) {
  return (constructor: Function) => {
    Extension.prototype.registry[name] = {
      ctor: constructor,
      deps: deps || []
    };
  };
}

Extension.prototype.registry = {};
