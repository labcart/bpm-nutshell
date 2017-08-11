"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6/symbol");
require("core-js/es6/object");
require("core-js/es6/function");
require("core-js/es6/parse-int");
require("core-js/es6/parse-float");
require("core-js/es6/number");
require("core-js/es6/math");
require("core-js/es6/string");
require("core-js/es6/date");
require("core-js/es6/array");
require("core-js/es6/regexp");
require("core-js/es6/map");
require("core-js/es6/weak-map");
require("core-js/es6/set");
require("core-js/es6/reflect");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var demo_module_1 = require("./demo.module");
if (ENV === 'production') {
    var install = require('offline-plugin/runtime').install; // tslint:disable-line
    install();
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_module_1.DemoModule);
//# sourceMappingURL=entry.js.map