webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/posts.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\"]\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nvar builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()(_client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      imgUrl = _useState[0],\n      setImgUrl = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  var overrides = {\n    date: function date(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 24\n      }, _this);\n    },\n    h2: function h2(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading1\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 22\n      }, _this);\n    },\n    h3: function h3(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading2\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 22\n      }, _this);\n    }\n  };\n  var serializers = {\n    listItem: function listItem(props) {\n      return props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.number\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 62\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bullet\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 108\n      }, _this);\n    },\n    types: {\n      block: function block(props) {\n        return (// Check if we have an override for the “style”\n          overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n          // the other unnecessary props\n          ? overrides[props.node.style]({\n            children: props.children\n          }) // otherwise, fallback to the provided default with all props\n          : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a.defaultSerializers.types.block(props)\n        );\n      }\n    }\n  };\n\n  var renderPosts = function renderPosts(posts) {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    return Object.keys(posts).map(function (k, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n          className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.imgPosts,\n          src: imgBuilder.image(posts[k][\"mainImage\"]).width(800).height(300)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n          href: \"/post/\".concat(posts[k][\"slug\"].current),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"a\", {\n            children: posts[k][\"title\"]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 70\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.blogContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n      children: \"Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, _this), renderPosts(props)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Post, \"EYRN5dWEY1Pw7d0jgdC2ct7zoaA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _ctx$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ctx$query$slug = ctx.query.slug, slug = _ctx$query$slug === void 0 ? \"\" : _ctx$query$slug;\n            _context.next = 3;\n            return _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query);\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanM/NmFkOSJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltZ1VybCIsInNldEltZ1VybCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWdCdWlsZGVyIiwicHJvamVjdElkIiwiZGF0YXNldCIsIm1haW5JbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcnJpZGVzIiwiZGF0ZSIsInN0eWxlcyIsImgyIiwic3ViaGVhZGluZzEiLCJoMyIsInN1YmhlYWRpbmcyIiwic2VyaWFsaXplcnMiLCJsaXN0SXRlbSIsIm5vZGUiLCJudW1iZXIiLCJidWxsZXQiLCJ0eXBlcyIsImJsb2NrIiwic3R5bGUiLCJjaGlsZHJlbiIsIkJsb2NrQ29udGVudCIsImRlZmF1bHRTZXJpYWxpemVycyIsInJlbmRlclBvc3RzIiwicG9zdHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiayIsImkiLCJpbWdQb3N0cyIsImN1cnJlbnQiLCJibG9nQ29udGFpbmVyIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyx5REFBZSxDQUFDQyxrREFBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0g7O0FBR0QsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FB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L3Bvc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Nzcy5tb2R1bGUuY3NzJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5cbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbi8vIEdldCBhIHByZS1jb25maWd1cmVkIHVybC1idWlsZGVyIGZyb20geW91ciBzYW5pdHkgY2xpZW50XG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudClcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcbn1cblxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwiNmJ0emFudTFcIixcbiAgICAgICAgICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0SW1nVXJsKGltZ0J1aWxkZXIuaW1hZ2UocHJvcHMubWFpbkltYWdlKS53aWR0aCgyMDAwKS5oZWlnaHQoODAwKSlcblxuICAgIH0sIFtwcm9wcy5tYWluSW1hZ2VdKVxuXG5cblxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHtcbiAgICAgICAgZGF0ZTogcHJvcHMgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgaDI6IHByb3BzID0+IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nMX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgaDM6IHByb3BzID0+IDxoMyBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nMn0gey4uLnByb3BzfSAvPixcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICAgICAgbGlzdEl0ZW06IHByb3BzID0+IHByb3BzLm5vZGUubGlzdEl0ZW0gPT0gXCJudW1iZXJcIiA/IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9IHsuLi5wcm9wc30gLz4gOiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYnVsbGV0fSB7Li4ucHJvcHN9IC8+LFxuXG4gICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICBibG9jazogcHJvcHMgPT5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIG92ZXJyaWRlIGZvciB0aGUg4oCcc3R5bGXigJ1cbiAgICAgICAgICAgICAgICBvdmVycmlkZXNbcHJvcHMubm9kZS5zdHlsZV1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc28sIGNhbGwgdGhlIGZ1bmN0aW9uIGFuZCBwYXNzIGluIHRoZSBjaGlsZHJlbiwgaWdub3JpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG90aGVyIHVubmVjZXNzYXJ5IHByb3BzXG4gICAgICAgICAgICAgICAgICAgID8gb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdKHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBmYWxsYmFjayB0byB0aGUgcHJvdmlkZWQgZGVmYXVsdCB3aXRoIGFsbCBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA6IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2socHJvcHMpLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCByZW5kZXJQb3N0cyA9IChwb3N0cykgPT4ge1xuICAgICAgICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICAgICAgICAgIHByb2plY3RJZDogXCI2YnR6YW51MVwiLFxuICAgICAgICAgICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocG9zdHMpLm1hcCgoaywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ1Bvc3RzfSBzcmM9e2ltZ0J1aWxkZXIuaW1hZ2UocG9zdHNba11bXCJtYWluSW1hZ2VcIl0pLndpZHRoKDgwMCkuaGVpZ2h0KDMwMCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3RzW2tdW1wic2x1Z1wiXS5jdXJyZW50fWB9PjxhPntwb3N0c1trXVtcInRpdGxlXCJdfTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuICAgICAgICAgICAgPHA+UG9zdHM8L3A+XG4gICAgICAgICAgICB7cmVuZGVyUG9zdHMocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ })

})