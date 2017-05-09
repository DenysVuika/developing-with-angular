"use strict";
function LogAccessorWithParams(message) {
    return function (target, propertyKey, descriptor) {
        console.log("Message from decorator: " + message);
    };
}
exports.LogAccessorWithParams = LogAccessorWithParams;
