/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./lib/index.ts\");\n\n_lib__WEBPACK_IMPORTED_MODULE_0__[\"dropdownManager\"].add({\n    name: 'liang'\n});\n_lib__WEBPACK_IMPORTED_MODULE_0__[\"dropdownManager\"].add({\n    name: 'hoang'\n});\nconsole.log(_lib__WEBPACK_IMPORTED_MODULE_0__[\"dropdownManager\"].list());\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./lib/components/dropdown/Dropdown.ts":
/*!*********************************************!*\
  !*** ./lib/components/dropdown/Dropdown.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Dropdown = /** @class */ (function () {\n    function Dropdown(opts) {\n        this.opts = opts;\n        console.log('initialize Dropdown');\n    }\n    Dropdown.prototype.update = function () {\n        console.log('call update');\n    };\n    return Dropdown;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\n\n//# sourceURL=webpack:///./lib/components/dropdown/Dropdown.ts?");

/***/ }),

/***/ "./lib/components/dropdown/DropdownManager.ts":
/*!****************************************************!*\
  !*** ./lib/components/dropdown/DropdownManager.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/observer */ \"./lib/utils/observer/index.ts\");\n/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown */ \"./lib/components/dropdown/Dropdown.ts\");\n\n\nvar DropdownManager = /** @class */ (function () {\n    function DropdownManager() {\n        this._dropdowns = new _utils_observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n        console.log('initialize DropdownManager');\n        // only register the global event once\n        this._bindEvents();\n    }\n    DropdownManager.prototype.add = function (opts) {\n        var dropdown = new _Dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"](opts);\n        this._dropdowns.add(dropdown);\n    };\n    DropdownManager.prototype.list = function () {\n        return this._dropdowns.list();\n    };\n    DropdownManager.prototype._bindEvents = function () {\n        console.log('bind events');\n    };\n    return DropdownManager;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (new DropdownManager());\n\n\n//# sourceURL=webpack:///./lib/components/dropdown/DropdownManager.ts?");

/***/ }),

/***/ "./lib/components/dropdown/index.ts":
/*!******************************************!*\
  !*** ./lib/components/dropdown/index.ts ***!
  \******************************************/
/*! exports provided: dropdownManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DropdownManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownManager */ \"./lib/components/dropdown/DropdownManager.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropdownManager\", function() { return _DropdownManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./lib/components/dropdown/index.ts?");

/***/ }),

/***/ "./lib/index.ts":
/*!**********************!*\
  !*** ./lib/index.ts ***!
  \**********************/
/*! exports provided: dropdownManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dropdown___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dropdown/ */ \"./lib/components/dropdown/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"dropdownManager\", function() { return _components_dropdown___WEBPACK_IMPORTED_MODULE_0__[\"dropdownManager\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./lib/index.ts?");

/***/ }),

/***/ "./lib/utils/observer/Observable.ts":
/*!******************************************!*\
  !*** ./lib/utils/observer/Observable.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Observable = /** @class */ (function () {\n    function Observable() {\n        this.observers = [];\n    }\n    Observable.prototype.add = function (observer) {\n        this.observers.push(observer);\n    };\n    Observable.prototype.remove = function (observer) {\n        this.observers.splice(this.observers.indexOf(observer), 1);\n    };\n    Observable.prototype.list = function () {\n        return this.observers;\n    };\n    Observable.prototype.notify = function () {\n        for (var observer in this.observers) {\n            this.observers[observer].update();\n        }\n    };\n    return Observable;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observable);\n\n\n//# sourceURL=webpack:///./lib/utils/observer/Observable.ts?");

/***/ }),

/***/ "./lib/utils/observer/index.ts":
/*!*************************************!*\
  !*** ./lib/utils/observer/index.ts ***!
  \*************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ \"./lib/utils/observer/Observable.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./lib/utils/observer/index.ts?");

/***/ })

/******/ });