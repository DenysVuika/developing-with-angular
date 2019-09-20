System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {

            exports('Extension', Extension);

            function Extension(name, deps) {
                return function (constructor) {
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
            };

            var classCallCheck = function (instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            };

            var createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor) descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }

              return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
              };
            }();

            var PluginManager = function () {
                function PluginManager() {
                    classCallCheck(this, PluginManager);
                }

                createClass(PluginManager, [{
                    key: 'getType',
                    value: function getType(name) {
                        return Extension.prototype.getExtensionType(name);
                    }
                }, {
                    key: 'getProviders',
                    value: function getProviders() {
                        return Extension.prototype.getProviders();
                    }
                }]);
                return PluginManager;
            }();

            var pluginManager = exports('pluginManager', new PluginManager());

        }
    };
});
