"use strict";
function LogAccessor(target, propertyKey, descriptor) {
    console.log('LogAccessor decorator called');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
exports.LogAccessor = LogAccessor;
