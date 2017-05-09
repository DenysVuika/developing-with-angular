"use strict";
function LogClassWithParams(prefix, suffix) {
    return function (constructor) {
        console.log("\n            " + prefix + " \n            LogClassWithParams decorator called for: \n            " + constructor + "\n            " + suffix + "\n        ");
    };
}
exports.LogClassWithParams = LogClassWithParams;
