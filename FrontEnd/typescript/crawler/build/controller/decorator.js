"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
})(Methods || (Methods = {}));
function methodsDecoratorFactory(methodName) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', methodName, target, key);
        };
    };
}
exports.get = methodsDecoratorFactory(Methods.get);
exports.post = methodsDecoratorFactory(Methods.post);
