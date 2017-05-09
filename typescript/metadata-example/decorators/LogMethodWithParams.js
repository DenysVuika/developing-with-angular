"use strict";
function LogMethodWithParams(message) {
    return function (target, propertyKey, descriptor) {
        console.log(propertyKey + ": " + message);
    };
}
exports.LogMethodWithParams = LogMethodWithParams;
