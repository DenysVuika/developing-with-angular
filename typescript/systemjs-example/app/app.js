System.register(["./logger"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var logger_1, logger;
    return {
        setters: [
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            logger = new logger_1.Logger('content');
            logger.info('hello world');
        }
    };
});
