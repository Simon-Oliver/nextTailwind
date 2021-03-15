webpackHotUpdate_N_E("pages/testcontext",{

/***/ "./pages/testcontext.js":
/*!******************************!*\
  !*** ./pages/testcontext.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return testcontext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_simon_stauffer_Desktop_Code_nextjs_test_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Context___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context/ */ \"./components/Context/index.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test */ \"./pages/test.js\");\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/testcontext.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ThemeProvider = _components_Context___WEBPACK_IMPORTED_MODULE_3__[\"ThemeContext\"].Provider;\nvar TestProvider = _components_Context___WEBPACK_IMPORTED_MODULE_3__[\"TestContext\"].Provider;\nfunction testcontext() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([{\n    uid: 123,\n    name: \"Urs\",\n    status: \"online\"\n  }, {\n    uid: 345,\n    name: \"Tom\",\n    status: \"offline\"\n  }, {\n    uid: 908,\n    name: \"James\",\n    status: \"online\"\n  }]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      darkMode = _useState2[0],\n      setDarkMode = _useState2[1];\n\n  var theme = {\n    background: \"green\",\n    color: \"red\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"Test Context ------\", data);\n  }, [data]);\n\n  var clickHandler = function clickHandler() {\n    var uid = Number(data[data.length - 1].uid + 1);\n    var name = \"Name \".concat(uid);\n    var status = \"online\";\n    setData([].concat(Object(_Users_simon_stauffer_Desktop_Code_nextjs_test_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data), [{\n      uid: uid,\n      name: name,\n      length: length\n    }]));\n  };\n\n  var toggleDarkMode = function toggleDarkMode() {\n    setDarkMode(!darkMode);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ThemeProvider, {\n      value: theme,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TestProvider, {\n        value: data,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_test__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: clickHandler,\n          children: \"Button\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n_s(testcontext, \"549l0cojnTTMO0juwB6NVpSgL34=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdGNvbnRleHQuanM/YWIyZiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiVGhlbWVDb250ZXh0IiwiUHJvdmlkZXIiLCJUZXN0UHJvdmlkZXIiLCJUZXN0Q29udGV4dCIsInRlc3Rjb250ZXh0IiwidXNlU3RhdGUiLCJ1aWQiLCJuYW1lIiwic3RhdHVzIiwiZGF0YSIsInNldERhdGEiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwidGhlbWUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tIYW5kbGVyIiwiTnVtYmVyIiwibGVuZ3RoIiwidG9nZ2xlRGFya01vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxpRUFBWSxDQUFDQyxRQUFuQztBQUNBLElBQU1DLFlBQVksR0FBR0MsZ0VBQVcsQ0FBQ0YsUUFBakM7QUFFZSxTQUFTRyxXQUFULEdBQXVCO0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsQ0FDN0I7QUFBRUMsT0FBRyxFQUFFLEdBQVA7QUFBWUMsUUFBSSxFQUFFLEtBQWxCO0FBQXlCQyxVQUFNLEVBQUU7QUFBakMsR0FENkIsRUFFN0I7QUFBRUYsT0FBRyxFQUFFLEdBQVA7QUFBWUMsUUFBSSxFQUFFLEtBQWxCO0FBQXlCQyxVQUFNLEVBQUU7QUFBakMsR0FGNkIsRUFHN0I7QUFBRUYsT0FBRyxFQUFFLEdBQVA7QUFBWUMsUUFBSSxFQUFFLE9BQWxCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FINkIsQ0FBRCxDQURFO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCOztBQUFBLG1CQU1GTCxzREFBUSxDQUFDLEtBQUQsQ0FOTjtBQUFBLE1BTTNCTSxRQU4yQjtBQUFBLE1BTWpCQyxXQU5pQjs7QUFRbEMsTUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLGNBQVUsRUFBRSxPQURGO0FBRVZDLFNBQUssRUFBRTtBQUZHLEdBQWQ7QUFLQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DVCxJQUFuQztBQUNILEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQU1iLEdBQUcsR0FBR2MsTUFBTSxDQUFDWCxJQUFJLENBQUNBLElBQUksQ0FBQ1ksTUFBTCxHQUFjLENBQWYsQ0FBSixDQUFzQmYsR0FBdEIsR0FBNEIsQ0FBN0IsQ0FBbEI7QUFDQSxRQUFNQyxJQUFJLGtCQUFXRCxHQUFYLENBQVY7QUFDQSxRQUFNRSxNQUFNLEdBQUcsUUFBZjtBQUVBRSxXQUFPLHVLQUFLRCxJQUFMLElBQVc7QUFBRUgsU0FBRyxFQUFIQSxHQUFGO0FBQU9DLFVBQUksRUFBSkEsSUFBUDtBQUFhYyxZQUFNLEVBQU5BO0FBQWIsS0FBWCxHQUFQO0FBQ0gsR0FORDs7QUFRQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekJWLGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDSCxHQUZEOztBQUtBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsYUFBRDtBQUFlLFdBQUssRUFBRUUsS0FBdEI7QUFBQSw2QkFDSSxxRUFBQyxZQUFEO0FBQWMsYUFBSyxFQUFFSixJQUFyQjtBQUFBLGdDQUNJLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGlCQUFPLEVBQUVVLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7R0F6Q3VCZixXIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdGNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGVzdENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQvJ1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0LydcbmltcG9ydCBUZXN0IGZyb20gXCIuL3Rlc3RcIlxuXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gVGhlbWVDb250ZXh0LlByb3ZpZGVyXG5jb25zdCBUZXN0UHJvdmlkZXIgPSBUZXN0Q29udGV4dC5Qcm92aWRlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0Y29udGV4dCgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgdWlkOiAxMjMsIG5hbWU6IFwiVXJzXCIsIHN0YXR1czogXCJvbmxpbmVcIiB9LFxuICAgICAgICB7IHVpZDogMzQ1LCBuYW1lOiBcIlRvbVwiLCBzdGF0dXM6IFwib2ZmbGluZVwiIH0sXG4gICAgICAgIHsgdWlkOiA5MDgsIG5hbWU6IFwiSmFtZXNcIiwgc3RhdHVzOiBcIm9ubGluZVwiIH1cbiAgICBdKVxuICAgIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB0aGVtZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJncmVlblwiLFxuICAgICAgICBjb2xvcjogXCJyZWRcIlxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBDb250ZXh0IC0tLS0tLVwiLCBkYXRhKVxuICAgIH0sIFtkYXRhXSlcblxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdWlkID0gTnVtYmVyKGRhdGFbZGF0YS5sZW5ndGggLSAxXS51aWQgKyAxKVxuICAgICAgICBjb25zdCBuYW1lID0gYE5hbWUgJHt1aWR9YFxuICAgICAgICBjb25zdCBzdGF0dXMgPSBcIm9ubGluZVwiXG5cbiAgICAgICAgc2V0RGF0YShbLi4uZGF0YSwgeyB1aWQsIG5hbWUsIGxlbmd0aCB9XSlcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RGFya01vZGUoIWRhcmtNb2RlKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHZhbHVlPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPFRlc3RQcm92aWRlciB2YWx1ZT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXN0ID48L1Rlc3Q+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5CdXR0b248L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1Rlc3RQcm92aWRlcj5cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cblxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testcontext.js\n");

/***/ })

})