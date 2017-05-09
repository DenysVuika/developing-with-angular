"use strict";
function LogClass(constructor) {
    console.log('LogClass decorator called for constructor:');
    console.log(constructor);
}
exports.LogClass = LogClass;
