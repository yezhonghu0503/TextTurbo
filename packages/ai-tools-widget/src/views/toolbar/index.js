"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyElement = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = _super.call(this) || this;
        _this.version = "STARTING";
        _this.attachShadow({ mode: "open" });
        return _this;
    }
    MyElement.prototype.render = function () {
        return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <div class=\"tt_main\">\n                <div class=\"tt_menu\"></div>\n            </div>\n        "], ["\n            <div class=\"tt_main\">\n                <div class=\"tt_menu\"></div>\n            </div>\n        "])));
    };
    MyElement.styles = (0, lit_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        .tt_main {\n            width: 100px;\n            height: 600px;\n            background-color: white;\n            position: fixed;\n            top: 30%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .tt_menu {\n            width: 80px;\n            height: 500px;\n            background-color: black;\n        }\n    "], ["\n        .tt_main {\n            width: 100px;\n            height: 600px;\n            background-color: white;\n            position: fixed;\n            top: 30%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .tt_menu {\n            width: 80px;\n            height: 500px;\n            background-color: black;\n        }\n    "])));
    __decorate([
        (0, decorators_js_1.property)()
    ], MyElement.prototype, "version");
    MyElement = __decorate([
        (0, decorators_js_1.customElement)("my-element")
    ], MyElement);
    return MyElement;
}(lit_1.LitElement));
exports.MyElement = MyElement;
var templateObject_1, templateObject_2;
