"use strict";
function LogProperty(target, propertyKey) {
    console.log('LogProperty decorator called');
    console.log(target);
    console.log(propertyKey);
}
exports.LogProperty = LogProperty;
