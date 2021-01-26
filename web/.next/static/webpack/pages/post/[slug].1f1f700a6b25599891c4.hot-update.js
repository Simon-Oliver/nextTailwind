webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n    title,\\n    \\\"name\\\": author->name,\\n    \\\"categories\\\": categories[]->title,\\n    body\\n  }\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Post = function Post(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_9__[\"useEffect\"])(function () {\n    console.log(props);\n  }, []);\n  var overrides = {\n    h2: function h2(props) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h2\", _objectSpread({\n        className: \"title\"\n      }, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 22\n      }, _this);\n    }\n  };\n  var serializers = {\n    types: {\n      block: function block(props) {\n        return (// Check if we have an override for the “style”\n          overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n          // the other unnecessary props\n          ? overrides[props.node.style]({\n            children: props.children\n          }) // otherwise, fallback to the provided default with all props\n          : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a.defaultSerializers.types.block(props)\n        );\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread({\n      blocks: props.body,\n      imageOptions: {\n        w: 320,\n        h: 240,\n        fit: 'max'\n      },\n      serializers: serializers\n    }, _client_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].config()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Post, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var _ctx$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _ctx$query$slug = ctx.query.slug, slug = _ctx$query$slug === void 0 ? \"\" : _ctx$query$slug;\n            _context.next = 3;\n            return _client_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJQb3N0IiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib3ZlcnJpZGVzIiwiaDIiLCJzZXJpYWxpemVycyIsInR5cGVzIiwiYmxvY2siLCJub2RlIiwic3R5bGUiLCJjaGlsZHJlbiIsIkJsb2NrQ29udGVudCIsImRlZmF1bHRTZXJpYWxpemVycyIsInRpdGxlIiwiYm9keSIsInciLCJoIiwiZml0IiwiY2xpZW50IiwiY29uZmlnIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1NLFNBQVMsR0FBRztBQUNkQyxNQUFFLEVBQUUsWUFBQVAsS0FBSztBQUFBLDBCQUFJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQTBCQSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQTtBQURLLEdBQWxCO0FBSUEsTUFBTVEsV0FBVyxHQUFHO0FBQ2hCQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFLGVBQUFWLEtBQUs7QUFBQSxlQUNSO0FBQ0FNLG1CQUFTLENBQUNOLEtBQUssQ0FBQ1csSUFBTixDQUFXQyxLQUFaLENBQVQsQ0FDSTtBQUNBO0FBRkosWUFHTU4sU0FBUyxDQUFDTixLQUFLLENBQUNXLElBQU4sQ0FBV0MsS0FBWixDQUFULENBQTRCO0FBQUVDLG9CQUFRLEVBQUViLEtBQUssQ0FBQ2E7QUFBbEIsV0FBNUIsQ0FITixDQUtJO0FBTEosWUFNTUMscUVBQVksQ0FBQ0Msa0JBQWIsQ0FBZ0NOLEtBQWhDLENBQXNDQyxLQUF0QyxDQUE0Q1YsS0FBNUM7QUFSRTtBQUFBO0FBRFQ7QUFEUyxHQUFwQjtBQWNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0EsS0FBSyxDQUFDZ0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyxxRUFBRDtBQUNJLFlBQU0sRUFBRWhCLEtBQUssQ0FBQ2lCLElBRGxCO0FBRUksa0JBQVksRUFBRTtBQUFFQyxTQUFDLEVBQUUsR0FBTDtBQUFVQyxTQUFDLEVBQUUsR0FBYjtBQUFrQkMsV0FBRyxFQUFFO0FBQXZCLE9BRmxCO0FBR0ksaUJBQVcsRUFBRVo7QUFIakIsT0FJUWEsa0RBQU0sQ0FBQ0MsTUFBUCxFQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdILENBbkNEOztHQUFNdkIsSTtVQUNhRyxxRDs7O0tBRGJILEk7QUFxQ04sSUFBTXdCLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBT0F6QixJQUFJLENBQUMwQixlQUFMO0FBQUEsOExBQXVCLGlCQUFPQyxHQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDR0EsR0FBRyxDQUFDSCxLQURQLENBQ1hJLElBRFcsRUFDWEEsSUFEVyxnQ0FDSixFQURJO0FBQUE7QUFBQSxtQkFFTk4sa0RBQU0sQ0FBQ08sS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJLGtCQUFJLEVBQUpBO0FBQUYsYUFBcEIsQ0FGTTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlNUIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3Qgb3ZlcnJpZGVzID0ge1xuICAgICAgICBoMjogcHJvcHMgPT4gPGgyIGNsYXNzTmFtZT1cInRpdGxlXCIgey4uLnByb3BzfSAvPixcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICAgICAgdHlwZXM6IHtcbiAgICAgICAgICAgIGJsb2NrOiBwcm9wcyA9PlxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gb3ZlcnJpZGUgZm9yIHRoZSDigJxzdHlsZeKAnVxuICAgICAgICAgICAgICAgIG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzbywgY2FsbCB0aGUgZnVuY3Rpb24gYW5kIHBhc3MgaW4gdGhlIGNoaWxkcmVuLCBpZ25vcmluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgb3RoZXIgdW5uZWNlc3NhcnkgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgPyBvdmVycmlkZXNbcHJvcHMubm9kZS5zdHlsZV0oeyBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGZhbGxiYWNrIHRvIHRoZSBwcm92aWRlZCBkZWZhdWx0IHdpdGggYWxsIHByb3BzXG4gICAgICAgICAgICAgICAgICAgIDogQmxvY2tDb250ZW50LmRlZmF1bHRTZXJpYWxpemVycy50eXBlcy5ibG9jayhwcm9wcyksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgICAgICBibG9ja3M9e3Byb3BzLmJvZHl9XG4gICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICAgIHRpdGxlLFxuICAgIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gICAgYm9keVxuICB9YFxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjdHgucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})