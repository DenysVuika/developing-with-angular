"use strict";
function LogMethod(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
exports.LogMethod = LogMethod;
