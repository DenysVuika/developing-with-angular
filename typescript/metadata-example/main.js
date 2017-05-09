"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LogClass_1 = require("./decorators/LogClass");
var LogClassWithParams_1 = require("./decorators/LogClassWithParams");
var LogMethod_1 = require("./decorators/LogMethod");
var LogMethodWithParams_1 = require("./decorators/LogMethodWithParams");
var LogAccessor_1 = require("./decorators/LogAccessor");
var LogAccessorWithParams_1 = require("./decorators/LogAccessorWithParams");
var LogProperty_1 = require("./decorators/LogProperty");
/*
class TextWidget {

    render(@LogParameter positionX: number, @LogParameter positionY: number) {
        console.log('rendering');
    }

}
*/
var TextWidget = (function () {
    function TextWidget(text) {
        if (text === void 0) { text = 'default text'; }
        this._text = text;
    }
    Object.defineProperty(TextWidget.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    TextWidget.prototype.render = function () {
        console.log("Rendering text: " + this.text);
    };
    return TextWidget;
}());
__decorate([
    LogProperty_1.LogProperty,
    __metadata("design:type", String)
], TextWidget.prototype, "id", void 0);
__decorate([
    LogAccessor_1.LogAccessor,
    LogAccessorWithParams_1.LogAccessorWithParams('hello'),
    LogAccessorWithParams_1.LogAccessorWithParams('world'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], TextWidget.prototype, "text", null);
__decorate([
    LogMethod_1.LogMethod,
    LogMethodWithParams_1.LogMethodWithParams('hello'),
    LogMethodWithParams_1.LogMethodWithParams('world'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextWidget.prototype, "render", null);
TextWidget = __decorate([
    LogClass_1.LogClass,
    LogClassWithParams_1.LogClassWithParams('BEGIN:', ':END'),
    LogClassWithParams_1.LogClassWithParams('[', ']'),
    __metadata("design:paramtypes", [String])
], TextWidget);
var widget = new TextWidget();
widget.render();
