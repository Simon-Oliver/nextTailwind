webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nvar builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default()(_client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      imgUrl = _useState[0],\n      setImgUrl = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_11___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  var overrides = {\n    date: function date(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 24\n      }, _this);\n    },\n    h2: function h2(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading1\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 22\n      }, _this);\n    },\n    h3: function h3(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading2\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 22\n      }, _this);\n    }\n  };\n  var serializers = {\n    listItem: function listItem(props) {\n      return props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.number\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 62\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bullet\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 108\n      }, _this);\n    },\n    types: {\n      block: function block(props) {\n        return (// Check if we have an override for the “style”\n          overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n          // the other unnecessary props\n          ? overrides[props.node.style]({\n            children: props.children\n          }) // otherwise, fallback to the provided default with all props\n          : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a.defaultSerializers.types.block(props)\n        );\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", {\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.article,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this), imgUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.mainImage,\n        src: imgUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 28\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread({\n        blocks: props.body,\n        imageOptions: {\n          w: 500,\n          h: 500,\n          fit: 'crop'\n        },\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Post, \"EYRN5dWEY1Pw7d0jgdC2ct7zoaA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _ctx$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ctx$query$slug = ctx.query.slug, slug = _ctx$query$slug === void 0 ? \"\" : _ctx$query$slug;\n            _context.next = 3;\n            return _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltZ1VybCIsInNldEltZ1VybCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWdCdWlsZGVyIiwicHJvamVjdElkIiwiZGF0YXNldCIsIm1haW5JbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcnJpZGVzIiwiZGF0ZSIsInN0eWxlcyIsImgyIiwic3ViaGVhZGluZzEiLCJoMyIsInN1YmhlYWRpbmcyIiwic2VyaWFsaXplcnMiLCJsaXN0SXRlbSIsIm5vZGUiLCJudW1iZXIiLCJidWxsZXQiLCJ0eXBlcyIsImJsb2NrIiwic3R5bGUiLCJjaGlsZHJlbiIsIkJsb2NrQ29udGVudCIsImRlZmF1bHRTZXJpYWxpemVycyIsImJsb2dDb250YWluZXIiLCJhcnRpY2xlIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImJvZHkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNsdWciLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyx5REFBZSxDQUFDQyxrREFBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0g7O0FBSUQsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7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QUNJLGNBQU0sRUFBRUYsS0FBSyxDQUFDcUMsSUFEbEI7QUFFSSxvQkFBWSxFQUFFO0FBQUVDLFdBQUMsRUFBRSxHQUFMO0FBQVVDLFdBQUMsRUFBRSxHQUFiO0FBQWtCQyxhQUFHLEVBQUU7QUFBdkIsU0FGbEI7QUFHSSxtQkFBVyxFQUFFbEI7QUFIakIsU0FJUTNCLGtEQUFNLENBQUM4QyxNQUFQLEVBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBekREOztHQUFNMUMsSTtVQUdhTSxxRDs7O0tBSGJOLEk7QUEyRE4sSUFBTTJDLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBRUE1QyxJQUFJLENBQUM2QyxlQUFMO0FBQUEsOExBQXVCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDR0EsR0FBRyxDQUFDSCxLQURQLENBQ1hJLElBRFcsRUFDWEEsSUFEVyxnQ0FDSixFQURJO0FBQUE7QUFBQSxtQkFFTm5ELGtEQUFNLENBQUNvRCxLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBRUksa0JBQUksRUFBSkE7QUFBRixhQUFwQixDQUZNOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2UvQyxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MubW9kdWxlLmNzcyc7XG5cblxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuLy8gR2V0IGEgcHJlLWNvbmZpZ3VyZWQgdXJsLWJ1aWxkZXIgZnJvbSB5b3VyIHNhbml0eSBjbGllbnRcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgICAgICAgICAgcHJvamVjdElkOiBcIjZidHphbnUxXCIsXG4gICAgICAgICAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHNldEltZ1VybChpbWdCdWlsZGVyLmltYWdlKHByb3BzLm1haW5JbWFnZSkud2lkdGgoMjAwMCkuaGVpZ2h0KDgwMCkpXG5cbiAgICB9LCBbcHJvcHMubWFpbkltYWdlXSlcblxuXG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB7XG4gICAgICAgIGRhdGU6IHByb3BzID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgyOiBwcm9wcyA9PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzF9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgzOiBwcm9wcyA9PiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzJ9IHsuLi5wcm9wc30gLz4sXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gICAgICAgIGxpc3RJdGVtOiBwcm9wcyA9PiBwcm9wcy5ub2RlLmxpc3RJdGVtID09IFwibnVtYmVyXCIgPyA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfSB7Li4ucHJvcHN9IC8+IDogPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1bGxldH0gey4uLnByb3BzfSAvPixcblxuICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgYmxvY2s6IHByb3BzID0+XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBvdmVycmlkZSBmb3IgdGhlIOKAnHN0eWxl4oCdXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNvLCBjYWxsIHRoZSBmdW5jdGlvbiBhbmQgcGFzcyBpbiB0aGUgY2hpbGRyZW4sIGlnbm9yaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvdGhlciB1bm5lY2Vzc2FyeSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA/IG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXSh7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgZmFsbGJhY2sgdG8gdGhlIHByb3ZpZGVkIGRlZmF1bHQgd2l0aCBhbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgOiBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrKHByb3BzKSxcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLnRpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICB7aW1nVXJsICYmIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkltYWdlfSBzcmM9e2ltZ1VybH0gLz59XG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3Byb3BzLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDUwMCwgZml0OiAnY3JvcCcgfX1cbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})