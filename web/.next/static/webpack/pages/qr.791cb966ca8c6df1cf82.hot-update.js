webpackHotUpdate_N_E("pages/qr",{

/***/ "./pages/qr.js":
/*!*********************!*\
  !*** ./pages/qr.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return qr; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simon_stauffer_Desktop_Code_nextjs_test_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/qr.js\",\n    _s = $RefreshSig$();\n\n\n\nvar QrReader = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n});\n_c2 = QrReader;\nfunction qr() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      result = _useState[0],\n      setResult = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(result);\n  }, [result]);\n\n  var handleScan = function handleScan(data) {\n    if (data) {\n      setResult([].concat(Object(_Users_simon_stauffer_Desktop_Code_nextjs_test_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(result), [{\n        result: data\n      }]));\n    }\n  };\n\n  var handleError = function handleError(err) {\n    console.error(err);\n  };\n\n  var renderResult = function renderResult() {\n    return result.map(function (e) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: e.result\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 33\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(QrReader, {\n      delay: 300,\n      onError: handleError,\n      onScan: handleScan,\n      style: {\n        width: '20%'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: renderResult()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n_s(qr, \"HaEOteC6yG5HMVXXpmZ2rXfh/XA=\");\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QrReader$dynamic\");\n$RefreshReg$(_c2, \"QrReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXIuanM/NmY5OCJdLCJuYW1lcyI6WyJRclJlYWRlciIsImR5bmFtaWMiLCJzc3IiLCJxciIsInVzZVN0YXRlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNjYW4iLCJkYXRhIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJlcnJvciIsInJlbmRlclJlc3VsdCIsIm1hcCIsImUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQU1BLFFBQVEsR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQWtDO0FBQ3REQyxLQUFHLEVBQUUsS0FEaUQ7QUFBQTtBQUFBO0FBQUEsa0NBQXBCLG9FQUFvQjtBQUFBO0FBQUEsY0FBcEIsaUJBQW9CO0FBQUE7QUFBQSxDQUFsQyxDQUF4QjtNQUFNRixRO0FBSVMsU0FBU0csRUFBVCxHQUFjO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDbEJDLE1BRGtCO0FBQUEsTUFDVkMsU0FEVTs7QUFHekJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNILEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxJQUFJLEVBQUk7QUFDdkIsUUFBSUEsSUFBSixFQUFVO0FBQ05MLGVBQVMsdUtBQUtELE1BQUwsSUFBYTtBQUNsQkEsY0FBTSxFQUFFTTtBQURVLE9BQWIsR0FBVDtBQUdIO0FBQ0osR0FORDs7QUFPQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxHQUFHLEVBQUk7QUFDdkJMLFdBQU8sQ0FBQ00sS0FBUixDQUFjRCxHQUFkO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFdBQU9WLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSwwQkFBSztBQUFBLGtCQUFNQSxDQUFDLENBQUNaO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFMO0FBQUEsS0FBWixDQUFQO0FBQ0gsR0FGRDs7QUFLQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLFFBQUQ7QUFDSSxXQUFLLEVBQUUsR0FEWDtBQUVJLGFBQU8sRUFBRU8sV0FGYjtBQUdJLFlBQU0sRUFBRUYsVUFIWjtBQUlJLFdBQUssRUFBRTtBQUFFUSxhQUFLLEVBQUU7QUFBVDtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU9JO0FBQUEsZ0JBQUlILFlBQVk7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBbEN1QlosRSIsImZpbGUiOiIuL3BhZ2VzL3FyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuY29uc3QgUXJSZWFkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXItcmVhZGVyJyksIHtcbiAgICBzc3I6IGZhbHNlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxcigpIHtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgfSwgW3Jlc3VsdF0pXG5cbiAgICBjb25zdCBoYW5kbGVTY2FuID0gZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBzZXRSZXN1bHQoWy4uLnJlc3VsdCwge1xuICAgICAgICAgICAgICAgIHJlc3VsdDogZGF0YVxuICAgICAgICAgICAgfV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJSZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQubWFwKGUgPT4gKDxkaXY+e2UucmVzdWx0fTwvZGl2PikpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFFyUmVhZGVyXG4gICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgICAgICAgICBvblNjYW49e2hhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+e3JlbmRlclJlc3VsdCgpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/qr.js\n");

/***/ })

})