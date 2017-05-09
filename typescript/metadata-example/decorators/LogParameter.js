"use strict";
function LogParameter(target, parameterName, parameterIndex) {
    console.log('LogParameter decorator called');
    console.log(target);
    console.log(parameterName);
    console.log(parameterIndex);
}
exports.LogParameter = LogParameter;
