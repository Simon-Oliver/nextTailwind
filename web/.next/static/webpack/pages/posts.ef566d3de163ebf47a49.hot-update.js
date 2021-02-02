webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/posts.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\"]\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nvar builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()(_client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      imgUrl = _useState[0],\n      setImgUrl = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  var overrides = {\n    date: function date(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.date\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 24\n      }, _this);\n    },\n    h2: function h2(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading1\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 22\n      }, _this);\n    },\n    h3: function h3(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h3\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subheading2\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 22\n      }, _this);\n    }\n  };\n  var serializers = {\n    listItem: function listItem(props) {\n      return props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.number\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 62\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", _objectSpread({\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bullet\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 108\n      }, _this);\n    },\n    types: {\n      block: function block(props) {\n        return (// Check if we have an override for the “style”\n          overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n          // the other unnecessary props\n          ? overrides[props.node.style]({\n            children: props.children\n          }) // otherwise, fallback to the provided default with all props\n          : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_8___default.a.defaultSerializers.types.block(props)\n        );\n      }\n    }\n  };\n\n  var renderPosts = function renderPosts(posts) {\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_12___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    return Object.keys(posts).map(function (k, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        href: \"/post/\".concat(posts[k][\"slug\"].current),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n            className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.postCard,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n              className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.imgPosts,\n              src: imgBuilder.image(posts[k][\"mainImage\"]).width(300).height(300)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"p\", {\n              children: posts[k][\"title\"]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 66\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.blogContainer,\n    children: renderPosts(props)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Post, \"EYRN5dWEY1Pw7d0jgdC2ct7zoaA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _ctx$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ctx$query$slug = ctx.query.slug, slug = _ctx$query$slug === void 0 ? \"\" : _ctx$query$slug;\n            _context.next = 3;\n            return _client_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(query);\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanM/NmFkOSJdLCJuYW1lcyI6WyJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltZ1VybCIsInNldEltZ1VybCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbWdCdWlsZGVyIiwicHJvamVjdElkIiwiZGF0YXNldCIsIm1haW5JbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcnJpZGVzIiwiZGF0ZSIsInN0eWxlcyIsImgyIiwic3ViaGVhZGluZzEiLCJoMyIsInN1YmhlYWRpbmcyIiwic2VyaWFsaXplcnMiLCJsaXN0SXRlbSIsIm5vZGUiLCJudW1iZXIiLCJidWxsZXQiLCJ0eXBlcyIsImJsb2NrIiwic3R5bGUiLCJjaGlsZHJlbiIsIkJsb2NrQ29udGVudCIsImRlZmF1bHRTZXJpYWxpemVycyIsInJlbmRlclBvc3RzIiwicG9zdHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiayIsImkiLCJjdXJyZW50IiwicG9zdENhcmQiLCJpbWdQb3N0cyIsImJsb2dDb250YWluZXIiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FLQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFlLENBQUNDLGtEQUFELENBQS9COztBQUVBLFNBQVNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3BCLFNBQU9KLE9BQU8sQ0FBQ0ssS0FBUixDQUFjRCxNQUFkLENBQVA7QUFDSDs7QUFHRCxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFB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O0FBQUE7QUFBQTs7QUFLZTdDLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi9jbGllbnQuanMnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY3NzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cblxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuLy8gR2V0IGEgcHJlLWNvbmZpZ3VyZWQgdXJsLWJ1aWxkZXIgZnJvbSB5b3VyIHNhbml0eSBjbGllbnRcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICAgICAgICAgIHByb2plY3RJZDogXCI2YnR6YW51MVwiLFxuICAgICAgICAgICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICB9KVxuICAgICAgICBzZXRJbWdVcmwoaW1nQnVpbGRlci5pbWFnZShwcm9wcy5tYWluSW1hZ2UpLndpZHRoKDIwMDApLmhlaWdodCg4MDApKVxuXG4gICAgfSwgW3Byb3BzLm1haW5JbWFnZV0pXG5cblxuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0ge1xuICAgICAgICBkYXRlOiBwcm9wcyA9PiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICBoMjogcHJvcHMgPT4gPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRpbmcxfSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICBoMzogcHJvcHMgPT4gPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YmhlYWRpbmcyfSB7Li4ucHJvcHN9IC8+LFxuICAgIH1cblxuICAgIGNvbnN0IHNlcmlhbGl6ZXJzID0ge1xuICAgICAgICBsaXN0SXRlbTogcHJvcHMgPT4gcHJvcHMubm9kZS5saXN0SXRlbSA9PSBcIm51bWJlclwiID8gPGxpIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0gey4uLnByb3BzfSAvPiA6IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5idWxsZXR9IHsuLi5wcm9wc30gLz4sXG5cbiAgICAgICAgdHlwZXM6IHtcbiAgICAgICAgICAgIGJsb2NrOiBwcm9wcyA9PlxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gb3ZlcnJpZGUgZm9yIHRoZSDigJxzdHlsZeKAnVxuICAgICAgICAgICAgICAgIG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzbywgY2FsbCB0aGUgZnVuY3Rpb24gYW5kIHBhc3MgaW4gdGhlIGNoaWxkcmVuLCBpZ25vcmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3RoZXIgdW5uZWNlc3NhcnkgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgPyBvdmVycmlkZXNbcHJvcHMubm9kZS5zdHlsZV0oeyBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGZhbGxiYWNrIHRvIHRoZSBwcm92aWRlZCBkZWZhdWx0IHdpdGggYWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICAgIDogQmxvY2tDb250ZW50LmRlZmF1bHRTZXJpYWxpemVycy50eXBlcy5ibG9jayhwcm9wcyksXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHJlbmRlclBvc3RzID0gKHBvc3RzKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgICAgICAgICAgcHJvamVjdElkOiBcIjZidHphbnUxXCIsXG4gICAgICAgICAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwb3N0cykubWFwKChrLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3RzW2tdW1wic2x1Z1wiXS5jdXJyZW50fWB9PjxhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RDYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nUG9zdHN9IHNyYz17aW1nQnVpbGRlci5pbWFnZShwb3N0c1trXVtcIm1haW5JbWFnZVwiXSkud2lkdGgoMzAwKS5oZWlnaHQoMzAwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0c1trXVtcInRpdGxlXCJdfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPjwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7cmVuZGVyUG9zdHMocHJvcHMpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.js\n");

/***/ })

})