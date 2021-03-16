webpackHotUpdate_N_E("pages/testcontext",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Test; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Message_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Message/Messages */ \"./components/Message/Messages.js\");\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Context */ \"./components/Context/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/test.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Test(props) {\n  _s();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_components_Context__WEBPACK_IMPORTED_MODULE_3__[\"TestContext\"]),\n      data = _useContext.data,\n      setData = _useContext.setData;\n\n  var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_components_Context__WEBPACK_IMPORTED_MODULE_3__[\"ThemeContext\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(theme);\n  });\n\n  var renderUser = function renderUser(el) {\n    console.log(el);\n    return el.map(function (e) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex flex-row items-center hover:bg-gray-100 rounded-xl p-2\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full\",\n            children: e.boxName[0]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"ml-2 text-sm font-semibold\",\n            children: e.boxName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex flex-row items-center hover:bg-gray-100 rounded-xl p-2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: theme ? _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.dark : \"\",\n    children: renderUser(data)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Test, \"jDFPAKcohrBWvj6cxdhQLOgHvss=\");\n\n_c = Test;\n\nvar _c;\n\n$RefreshReg$(_c, \"Test\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVzdC5qcz8xNDJiIl0sIm5hbWVzIjpbIlRlc3QiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJUZXN0Q29udGV4dCIsImRhdGEiLCJzZXREYXRhIiwidGhlbWUiLCJUaGVtZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVXNlciIsImVsIiwibWFwIiwiZSIsImJveE5hbWUiLCJzdHlsZXMiLCJkYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBOztBQUFBLG9CQUVSQyx3REFBVSxDQUFDQywrREFBRCxDQUZGO0FBQUEsTUFFMUJDLElBRjBCLGVBRTFCQSxJQUYwQjtBQUFBLE1BRXBCQyxPQUZvQixlQUVwQkEsT0FGb0I7O0FBR2xDLE1BQU1DLEtBQUssR0FBR0osd0RBQVUsQ0FBQ0ssZ0VBQUQsQ0FBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0QsR0FGUSxDQUFUOztBQUlBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEVBQUQsRUFBUTtBQUN6QkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEVBQVo7QUFDQSxXQUFPQSxFQUFFLENBQUNDLEdBQUgsQ0FBTyxVQUFBQyxDQUFDLEVBQUk7QUFDakIsMEJBQVE7QUFBQSxnQ0FDTjtBQUNFLG1CQUFTLEVBQUMsNkRBRFo7QUFBQSxrQ0FHRTtBQUNFLHFCQUFTLEVBQUMscUVBRFo7QUFBQSxzQkFHR0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsQ0FBVjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFRRTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQkFBNkNELENBQUMsQ0FBQ0M7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE0sZUFXTjtBQUNFLG1CQUFTLEVBQUM7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFSO0FBZUQsS0FoQk0sQ0FBUDtBQWlCRCxHQW5CRDs7QUFxQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVULEtBQUssR0FBR1UsOERBQU0sQ0FBQ0MsSUFBVixHQUFpQixFQUF0QztBQUFBLGNBQ0dOLFVBQVUsQ0FBQ1AsSUFBRDtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQW5DdUJKLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlc1wiXG5pbXBvcnQgeyBUZXN0Q29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIlxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0KHByb3BzKSB7XG5cbiAgY29uc3QgeyBkYXRhLCBzZXREYXRhIH0gPSB1c2VDb250ZXh0KFRlc3RDb250ZXh0KVxuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhlbWUpXG4gIH0pXG5cbiAgY29uc3QgcmVuZGVyVXNlciA9IChlbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVsKVxuICAgIHJldHVybiBlbC5tYXAoZSA9PiB7XG4gICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLXhsIHAtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTggdy04IGJnLWluZGlnby0yMDAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZS5ib3hOYW1lWzBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj57ZS5ib3hOYW1lfTwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQteGwgcC0yXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt0aGVtZSA/IHN0eWxlcy5kYXJrIDogXCJcIn0+XG4gICAgICB7cmVuZGVyVXNlcihkYXRhKX1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ })

})