module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/qr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/qr.js":
/*!*********************!*\
  !*** ./pages/qr.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/qr.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import React, { useState } from 'react'\n// import dynamic from 'next/dynamic'\n// const QrReader = dynamic(() => import('react-qr-reader'), {\n//     ssr: false\n// })\n// export default function qr() {\n//     const [result, setResult] = useState([])\n//     const handleScan = data => {\n//         if (data) {\n//             setResult([...result, {\n//                 result: data\n//             }])\n//         }\n//     }\n//     const handleError = err => {\n//         console.error(err)\n//     }\n//     const renderResult = () => {\n//         return result.map(e => (<div>{e.result}</div>))\n//     }\n//     return (\n//         <div>\n//             <QrReader\n//                 delay={300}\n//                 onError={handleError}\n//                 onScan={handleScan}\n//                 style={{ width: '100%' }}\n//             />\n//             <p>{renderResult}</p>\n//         </div>\n//     )\n// }\n\nconst isBrowser = false;\n\nif (isBrowser) {\n  var QrReader = __webpack_require__(/*! react-qr-reader */ \"react-qr-reader\");\n}\n\nclass QRReader extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      result: 'No result'\n    });\n\n    _defineProperty(this, \"handleScan\", data => {\n      if (data) {\n        this.setState({\n          result: data\n        });\n      }\n    });\n\n    _defineProperty(this, \"handleError\", err => {\n      console.error(err);\n    });\n  }\n\n  render() {\n    return isBrowser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(QrReader, {\n        delay: 300,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: '100%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: this.state.result\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QRReader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9xci5qcz82Zjk4Il0sIm5hbWVzIjpbImlzQnJvd3NlciIsIlFyUmVhZGVyIiwicmVxdWlyZSIsIlFSUmVhZGVyIiwiQ29tcG9uZW50IiwicmVzdWx0IiwiZGF0YSIsInNldFN0YXRlIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmVuZGVyIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVTY2FuIiwid2lkdGgiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLE1BQU1BLFNBQVMsUUFBZjs7QUFFQSxJQUFJQSxTQUFKLEVBQWU7QUFDWCxNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMsd0NBQUQsQ0FBdEI7QUFDSDs7QUFHRCxNQUFNQyxRQUFOLFNBQXVCQywrQ0FBdkIsQ0FBaUM7QUFBQTtBQUFBOztBQUFBLG1DQUNyQjtBQUNKQyxZQUFNLEVBQUU7QUFESixLQURxQjs7QUFBQSx3Q0FLaEJDLElBQUksSUFBSTtBQUNqQixVQUFJQSxJQUFKLEVBQVU7QUFDTixhQUFLQyxRQUFMLENBQWM7QUFDVkYsZ0JBQU0sRUFBRUM7QUFERSxTQUFkO0FBR0g7QUFDSixLQVg0Qjs7QUFBQSx5Q0FZZkUsR0FBRyxJQUFJO0FBQ2pCQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBZDRCO0FBQUE7O0FBZTdCRyxRQUFNLEdBQUc7QUFDTCxXQUFPWCxTQUFTLGlCQUNaO0FBQUEsOEJBQ0kscUVBQUMsUUFBRDtBQUNJLGFBQUssRUFBRSxHQURYO0FBRUksZUFBTyxFQUFFLEtBQUtZLFdBRmxCO0FBR0ksY0FBTSxFQUFFLEtBQUtDLFVBSGpCO0FBSUksYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFUO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBT0k7QUFBQSxrQkFBSSxLQUFLQyxLQUFMLENBQVdWO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBV0g7O0FBM0I0Qjs7QUE4QmxCRix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3FyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbi8vIGNvbnN0IFFyUmVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXFyLXJlYWRlcicpLCB7XG4vLyAgICAgc3NyOiBmYWxzZVxuLy8gfSlcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXIoKSB7XG4vLyAgICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKVxuXG5cbi8vICAgICBjb25zdCBoYW5kbGVTY2FuID0gZGF0YSA9PiB7XG4vLyAgICAgICAgIGlmIChkYXRhKSB7XG4vLyAgICAgICAgICAgICBzZXRSZXN1bHQoWy4uLnJlc3VsdCwge1xuLy8gICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YVxuLy8gICAgICAgICAgICAgfV0pXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCByZW5kZXJSZXN1bHQgPSAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiByZXN1bHQubWFwKGUgPT4gKDxkaXY+e2UucmVzdWx0fTwvZGl2PikpXG4vLyAgICAgfVxuXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPFFyUmVhZGVyXG4vLyAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbi8vICAgICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbi8vICAgICAgICAgICAgICAgICBvblNjYW49e2hhbmRsZVNjYW59XG4vLyAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgIDxwPntyZW5kZXJSZXN1bHR9PC9wPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCc7XG5cbmlmIChpc0Jyb3dzZXIpIHtcbiAgICB2YXIgUXJSZWFkZXIgPSByZXF1aXJlKCdyZWFjdC1xci1yZWFkZXInKTtcbn1cblxuXG5jbGFzcyBRUlJlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHJlc3VsdDogJ05vIHJlc3VsdCdcbiAgICB9XG5cbiAgICBoYW5kbGVTY2FuID0gZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaXNCcm93c2VyICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFFyUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXN1bHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFFSUmVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/qr.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-qr-reader":
/*!**********************************!*\
  !*** external "react-qr-reader" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-qr-reader\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xci1yZWFkZXJcIj8xYmZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXFyLXJlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXFyLXJlYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-qr-reader\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });