System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Logger;
    return {
        setters: [],
        execute: function () {
            Logger = (function () {
                function Logger(outputId) {
                    this.output = document.getElementById(outputId);
                }
                Logger.prototype.info = function (message) {
                    this.output.innerText = message;
                };
                return Logger;
            }());
            exports_1("Logger", Logger);
        }
    };
});
