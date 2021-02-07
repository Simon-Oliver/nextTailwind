webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nvar builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()(_client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      imgUrl = _useState[0],\n      setImgUrl = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  var overrides = {\n    date: function date(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 24\n      }, _this);\n    },\n    h2: function h2(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading1\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 22\n      }, _this);\n    },\n    h3: function h3(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading2\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 22\n      }, _this);\n    },\n    figure: function figure(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.imgPosts\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 26\n      }, _this);\n    }\n  };\n  var serializers = {\n    listItem: function listItem(props) {\n      return props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.number\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 62\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bullet\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 108\n      }, _this);\n    },\n    types: {\n      block: function block(props) {\n        return (// Check if we have an override for the “style”\n          overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n          // the other unnecessary props\n          ? overrides[props.node.style]({\n            children: props.children\n          }) // otherwise, fallback to the provided default with all props\n          : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a.defaultSerializers.types.block(props)\n        );\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", {\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.article,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this), imgUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.mainImage,\n        src: imgUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 28\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date,\n        children: moment__WEBPACK_IMPORTED_MODULE_11___default()(props.publishedAt).format(\"MMMM DD, yyyy\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread({\n        blocks: props.body // imageOptions={{ w: 500, h: 500, fit: 'crop' }}\n        ,\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Post, \"EYRN5dWEY1Pw7d0jgdC2ct7zoaA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _ctx$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ctx$query$slug = ctx.query.slug, slug = _ctx$query$slug === void 0 ? \"\" : _ctx$query$slug;\n            _context.next = 3;\n            return _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltZ1VybCIsInNldEltZ1VybCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWdCdWlsZGVyIiwicHJvamVjdElkIiwiZGF0YXNldCIsIm1haW5JbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcnJpZGVzIiwiZGF0ZSIsInN0eWxlcyIsImgyIiwic3ViaGVhZGluZzEiLCJoMyIsInN1YmhlYWRpbmcyIiwiZmlndXJlIiwiaW1nUG9zdHMiLCJzZXJpYWxpemVycyIsImxpc3RJdGVtIiwibm9kZSIsIm51bWJlciIsImJ1bGxldCIsInR5cGVzIiwiYmxvY2siLCJzdHlsZSIsImNoaWxkcmVuIiwiQmxvY2tDb250ZW50IiwiZGVmYXVsdFNlcmlhbGl6ZXJzIiwiYmxvZ0NvbnRhaW5lciIsImFydGljbGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibW9tZW50IiwicHVibGlzaGVkQXQiLCJmb3JtYXQiLCJib2R5IiwiY29uZmlnIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyx5REFBZSxDQUFDQyxrREFBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0g7O0FBSUQsSUFB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b3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudC5qcydcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcblxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuLy8gR2V0IGEgcHJlLWNvbmZpZ3VyZWQgdXJsLWJ1aWxkZXIgZnJvbSB5b3VyIHNhbml0eSBjbGllbnRcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgICAgICAgICAgcHJvamVjdElkOiBcIjZidHphbnUxXCIsXG4gICAgICAgICAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHNldEltZ1VybChpbWdCdWlsZGVyLmltYWdlKHByb3BzLm1haW5JbWFnZSkud2lkdGgoMjAwMCkuaGVpZ2h0KDgwMCkpXG5cbiAgICB9LCBbcHJvcHMubWFpbkltYWdlXSlcblxuXG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB7XG4gICAgICAgIGRhdGU6IHByb3BzID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgyOiBwcm9wcyA9PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzF9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgzOiBwcm9wcyA9PiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzJ9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGZpZ3VyZTogcHJvcHMgPT4gPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWdQb3N0c30gey4uLnByb3BzfSAvPixcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICAgICAgbGlzdEl0ZW06IHByb3BzID0+IHByb3BzLm5vZGUubGlzdEl0ZW0gPT0gXCJudW1iZXJcIiA/IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9IHsuLi5wcm9wc30gLz4gOiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYnVsbGV0fSB7Li4ucHJvcHN9IC8+LFxuXG4gICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICBibG9jazogcHJvcHMgPT5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIG92ZXJyaWRlIGZvciB0aGUg4oCcc3R5bGXigJ1cbiAgICAgICAgICAgICAgICBvdmVycmlkZXNbcHJvcHMubm9kZS5zdHlsZV1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc28sIGNhbGwgdGhlIGZ1bmN0aW9uIGFuZCBwYXNzIGluIHRoZSBjaGlsZHJlbiwgaWdub3JpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG90aGVyIHVubmVjZXNzYXJ5IHByb3BzXG4gICAgICAgICAgICAgICAgICAgID8gb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdKHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBmYWxsYmFjayB0byB0aGUgcHJvdmlkZWQgZGVmYXVsdCB3aXRoIGFsbCBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA6IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2socHJvcHMpLFxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfSA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgIHtpbWdVcmwgJiYgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tYWluSW1hZ2V9IHNyYz17aW1nVXJsfSAvPn1cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57bW9tZW50KHByb3BzLnB1Ymxpc2hlZEF0KS5mb3JtYXQoXCJNTU1NIERELCB5eXl5XCIpfTwvcD5cbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17cHJvcHMuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogNTAwLCBmaXQ6ICdjcm9wJyB9fVxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdYFxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjdHgucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})