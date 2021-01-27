module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sanityClient = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n\nconst client = sanityClient({\n  projectId: \"6btzanu1\",\n  dataset: 'production',\n  useCdn: true // `false` if you want to ensure fresh data\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQuanM/Y2MyNSJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJyZXF1aXJlIiwiY2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMsc0NBQUQsQ0FBNUI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixZQUFZLENBQUM7QUFDeEJHLFdBQVMsRUFBRSxVQURhO0FBRXhCQyxTQUFPLEVBQUUsWUFGZTtBQUd4QkMsUUFBTSxFQUFFLElBSGdCLENBR1g7O0FBSFcsQ0FBRCxDQUEzQjtBQU1lSCxxRUFBZiIsImZpbGUiOiIuL2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNhbml0eUNsaWVudCA9IHJlcXVpcmUoJ0BzYW5pdHkvY2xpZW50JylcbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XG4gICAgcHJvamVjdElkOiBcIjZidHphbnUxXCIsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICAgIHVzZUNkbjogdHJ1ZSAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/css.module.css":
/*!******************************!*\
  !*** ./pages/css.module.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"css_container__2WiOt\",\n\t\"blogContainer\": \"css_blogContainer__2EbNH\",\n\t\"date\": \"css_date__1j8t9\",\n\t\"subheading1\": \"css_subheading1__2gqTR\",\n\t\"subheading2\": \"css_subheading2__11fpv\",\n\t\"title\": \"css_title__wBKBD\",\n\t\"number\": \"css_number__2IYLH\",\n\t\"bullet\": \"css_bullet__sYwET\",\n\t\"italic\": \"css_italic__15Vj3\",\n\t\"typo\": \"css_typo__3ynfX\",\n\t\"heading1\": \"css_heading1__34Qx6\",\n\t\"grid\": \"css_grid__UgSL0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jc3MubW9kdWxlLmNzcz83Njk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2Nzcy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiY3NzX2NvbnRhaW5lcl9fMldpT3RcIixcblx0XCJibG9nQ29udGFpbmVyXCI6IFwiY3NzX2Jsb2dDb250YWluZXJfXzJFYk5IXCIsXG5cdFwiZGF0ZVwiOiBcImNzc19kYXRlX18xajh0OVwiLFxuXHRcInN1YmhlYWRpbmcxXCI6IFwiY3NzX3N1YmhlYWRpbmcxX18yZ3FUUlwiLFxuXHRcInN1YmhlYWRpbmcyXCI6IFwiY3NzX3N1YmhlYWRpbmcyX18xMWZwdlwiLFxuXHRcInRpdGxlXCI6IFwiY3NzX3RpdGxlX193QktCRFwiLFxuXHRcIm51bWJlclwiOiBcImNzc19udW1iZXJfXzJJWUxIXCIsXG5cdFwiYnVsbGV0XCI6IFwiY3NzX2J1bGxldF9fc1l3RVRcIixcblx0XCJpdGFsaWNcIjogXCJjc3NfaXRhbGljX18xNVZqM1wiLFxuXHRcInR5cG9cIjogXCJjc3NfdHlwb19fM3luZlhcIixcblx0XCJoZWFkaW5nMVwiOiBcImNzc19oZWFkaW5nMV9fMzRReDZcIixcblx0XCJncmlkXCI6IFwiY3NzX2dyaWRfX1VnU0wwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/css.module.css\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Post = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    console.log(props);\n  }, []);\n  const overrides = {\n    date: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 24\n    }, undefined),\n    h2: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subheading1\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 22\n    }, undefined),\n    h3: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subheading2\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 22\n    }, undefined)\n  };\n  const serializers = {\n    listItem: props => props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.number\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 62\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bullet\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 108\n    }, undefined),\n    types: {\n      block: props => // Check if we have an override for the “style”\n      overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n      // the other unnecessary props\n      ? overrides[props.node.style]({\n        children: props.children\n      }) // otherwise, fallback to the provided default with all props\n      : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default.a.defaultSerializers.types.block(props)\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({\n        blocks: props.body,\n        imageOptions: {\n          w: 320,\n          h: 240,\n          fit: 'max'\n        },\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_4___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n    title,\n    \"name\": author->name,\n    \"categories\": categories[]->title,\n    body\n  }`;\n\nPost.getInitialProps = async ctx => {\n  const {\n    slug = \"\"\n  } = ctx.query;\n  return await _client_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvdmVycmlkZXMiLCJkYXRlIiwic3R5bGVzIiwiaDIiLCJzdWJoZWFkaW5nMSIsImgzIiwic3ViaGVhZGluZzIiLCJzZXJpYWxpemVycyIsImxpc3RJdGVtIiwibm9kZSIsIm51bWJlciIsImJ1bGxldCIsInR5cGVzIiwiYmxvY2siLCJzdHlsZSIsImNoaWxkcmVuIiwiQmxvY2tDb250ZW50IiwiZGVmYXVsdFNlcmlhbGl6ZXJzIiwiYmxvZ0NvbnRhaW5lciIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJib2R5IiwidyIsImgiLCJmaXQiLCJjbGllbnQiLCJjb25maWciLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3BCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFFBQU1NLFNBQVMsR0FBRztBQUNkQyxRQUFJLEVBQUVQLEtBQUssaUJBQUk7QUFBRyxlQUFTLEVBQUVRLHNEQUFNLENBQUNEO0FBQXJCLE9BQStCUCxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBRWRTLE1BQUUsRUFBRVQsS0FBSyxpQkFBSTtBQUFJLGVBQVMsRUFBRVEsc0RBQU0sQ0FBQ0U7QUFBdEIsT0FBdUNWLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkM7QUFHZFcsTUFBRSxFQUFFWCxLQUFLLGlCQUFJO0FBQUksZUFBUyxFQUFFUSxzREFBTSxDQUFDSTtBQUF0QixPQUF1Q1osS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhDLEdBQWxCO0FBTUEsUUFBTWEsV0FBVyxHQUFHO0FBQ2hCQyxZQUFRLEVBQUVkLEtBQUssSUFBSUEsS0FBSyxDQUFDZSxJQUFOLENBQVdELFFBQVgsSUFBdUIsUUFBdkIsZ0JBQWtDO0FBQUksZUFBUyxFQUFFTixzREFBTSxDQUFDUTtBQUF0QixPQUFrQ2hCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWxDLGdCQUFnRjtBQUFJLGVBQVMsRUFBRVEsc0RBQU0sQ0FBQ1M7QUFBdEIsT0FBa0NqQixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURuRjtBQUdoQmtCLFNBQUssRUFBRTtBQUNIQyxXQUFLLEVBQUVuQixLQUFLLElBQ1I7QUFDQU0sZUFBUyxDQUFDTixLQUFLLENBQUNlLElBQU4sQ0FBV0ssS0FBWixDQUFULENBQ0k7QUFDQTtBQUZKLFFBR01kLFNBQVMsQ0FBQ04sS0FBSyxDQUFDZSxJQUFOLENBQVdLLEtBQVosQ0FBVCxDQUE0QjtBQUFFQyxnQkFBUSxFQUFFckIsS0FBSyxDQUFDcUI7QUFBbEIsT0FBNUIsQ0FITixDQUtJO0FBTEosUUFNTUMscUVBQVksQ0FBQ0Msa0JBQWIsQ0FBZ0NMLEtBQWhDLENBQXNDQyxLQUF0QyxDQUE0Q25CLEtBQTVDO0FBVFA7QUFIUyxHQUFwQjtBQWdCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVEsc0RBQU0sQ0FBQ2dCLGFBQXZCO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUVoQixzREFBTSxDQUFDaUIsS0FBdEI7QUFBQSxrQkFBOEJ6QixLQUFLLENBQUN5QixLQUFOLENBQVlDLFdBQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLHFFQUFDLHFFQUFEO0FBQ0ksY0FBTSxFQUFFMUIsS0FBSyxDQUFDMkIsSUFEbEI7QUFFSSxvQkFBWSxFQUFFO0FBQUVDLFdBQUMsRUFBRSxHQUFMO0FBQVVDLFdBQUMsRUFBRSxHQUFiO0FBQWtCQyxhQUFHLEVBQUU7QUFBdkIsU0FGbEI7QUFHSSxtQkFBVyxFQUFFakI7QUFIakIsU0FJUWtCLGtEQUFNLENBQUNDLE1BQVAsRUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBekNEOztBQTJDQSxNQUFNQyxLQUFLLEdBQUdDLDJDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFMQTs7QUFPQW5DLElBQUksQ0FBQ29DLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ2xDLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZ0JELEdBQUcsQ0FBQ0gsS0FBMUI7QUFDQSxTQUFPLE1BQU1GLGtEQUFNLENBQUNPLEtBQVAsQ0FBYUwsS0FBYixFQUFvQjtBQUFFSTtBQUFGLEdBQXBCLENBQWI7QUFDSCxDQUhEOztBQUtldEMsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MubW9kdWxlLmNzcyc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB7XG4gICAgICAgIGRhdGU6IHByb3BzID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgyOiBwcm9wcyA9PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzF9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgzOiBwcm9wcyA9PiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzJ9IHsuLi5wcm9wc30gLz4sXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gICAgICAgIGxpc3RJdGVtOiBwcm9wcyA9PiBwcm9wcy5ub2RlLmxpc3RJdGVtID09IFwibnVtYmVyXCIgPyA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfSB7Li4ucHJvcHN9IC8+IDogPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1bGxldH0gey4uLnByb3BzfSAvPixcblxuICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgYmxvY2s6IHByb3BzID0+XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBvdmVycmlkZSBmb3IgdGhlIOKAnHN0eWxl4oCdXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNvLCBjYWxsIHRoZSBmdW5jdGlvbiBhbmQgcGFzcyBpbiB0aGUgY2hpbGRyZW4sIGlnbm9yaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvdGhlciB1bm5lY2Vzc2FyeSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA/IG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXSh7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgZmFsbGJhY2sgdG8gdGhlIHByb3ZpZGVkIGRlZmF1bHQgd2l0aCBhbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgOiBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrKHByb3BzKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YXJ0aWNsZSA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tzPXtwcm9wcy5ib2R5fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgICB0aXRsZSxcbiAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICAgIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICAgIGJvZHlcbiAgfWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"groq\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncm9xXCI/ZTYzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncm9xLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///groq\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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