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

eval("// Exports\nmodule.exports = {\n\t\"container\": \"css_container__2WiOt\",\n\t\"article\": \"css_article__1QRB6\",\n\t\"blogContainer\": \"css_blogContainer__2EbNH\",\n\t\"date\": \"css_date__1j8t9\",\n\t\"subheading1\": \"css_subheading1__2gqTR\",\n\t\"subheading2\": \"css_subheading2__11fpv\",\n\t\"title\": \"css_title__wBKBD\",\n\t\"img\": \"css_img__MXOvm\",\n\t\"number\": \"css_number__2IYLH\",\n\t\"bullet\": \"css_bullet__sYwET\",\n\t\"italic\": \"css_italic__15Vj3\",\n\t\"typo\": \"css_typo__3ynfX\",\n\t\"heading1\": \"css_heading1__34Qx6\",\n\t\"grid\": \"css_grid__UgSL0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jc3MubW9kdWxlLmNzcz83Njk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9jc3MubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNzc19jb250YWluZXJfXzJXaU90XCIsXG5cdFwiYXJ0aWNsZVwiOiBcImNzc19hcnRpY2xlX18xUVJCNlwiLFxuXHRcImJsb2dDb250YWluZXJcIjogXCJjc3NfYmxvZ0NvbnRhaW5lcl9fMkViTkhcIixcblx0XCJkYXRlXCI6IFwiY3NzX2RhdGVfXzFqOHQ5XCIsXG5cdFwic3ViaGVhZGluZzFcIjogXCJjc3Nfc3ViaGVhZGluZzFfXzJncVRSXCIsXG5cdFwic3ViaGVhZGluZzJcIjogXCJjc3Nfc3ViaGVhZGluZzJfXzExZnB2XCIsXG5cdFwidGl0bGVcIjogXCJjc3NfdGl0bGVfX3dCS0JEXCIsXG5cdFwiaW1nXCI6IFwiY3NzX2ltZ19fTVhPdm1cIixcblx0XCJudW1iZXJcIjogXCJjc3NfbnVtYmVyX18ySVlMSFwiLFxuXHRcImJ1bGxldFwiOiBcImNzc19idWxsZXRfX3NZd0VUXCIsXG5cdFwiaXRhbGljXCI6IFwiY3NzX2l0YWxpY19fMTVWajNcIixcblx0XCJ0eXBvXCI6IFwiY3NzX3R5cG9fXzN5bmZYXCIsXG5cdFwiaGVhZGluZzFcIjogXCJjc3NfaGVhZGluZzFfXzM0UXg2XCIsXG5cdFwiZ3JpZFwiOiBcImNzc19ncmlkX19VZ1NMMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/css.module.css\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Post = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    console.log(props);\n  }, []);\n  const overrides = {\n    date: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 24\n    }, undefined),\n    h2: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subheading1\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 22\n    }, undefined),\n    h3: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subheading2\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 22\n    }, undefined)\n  };\n  const serializers = {\n    listItem: props => props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.number\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 62\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bullet\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 108\n    }, undefined),\n    types: {\n      block: props => // Check if we have an override for the “style”\n      overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n      // the other unnecessary props\n      ? overrides[props.node.style]({\n        children: props.children\n      }) // otherwise, fallback to the provided default with all props\n      : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default.a.defaultSerializers.types.block(props)\n    }\n  };\n\n  const image = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    width: 2000,\n    height: 1000,\n    alt: `Cover Image for ${title}`,\n    className: cn('shadow-small', {\n      'hover:shadow-medium transition-shadow duration-200': slug\n    }),\n    src: imageBuilder.image(url).height(1000).width(2000).url()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, undefined);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.article,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({\n        blocks: props.body,\n        imageOptions: {\n          w: 2000,\n          h: 850,\n          fit: 'crop'\n        },\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_4___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n    title,\n    \"name\": author->name,\n    \"categories\": categories[]->title,\n    body\n  }`;\n\nPost.getInitialProps = async ctx => {\n  const {\n    slug = \"\"\n  } = ctx.query;\n  return await _client_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbIlBvc3QiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvdmVycmlkZXMiLCJkYXRlIiwic3R5bGVzIiwiaDIiLCJzdWJoZWFkaW5nMSIsImgzIiwic3ViaGVhZGluZzIiLCJzZXJpYWxpemVycyIsImxpc3RJdGVtIiwibm9kZSIsIm51bWJlciIsImJ1bGxldCIsInR5cGVzIiwiYmxvY2siLCJzdHlsZSIsImNoaWxkcmVuIiwiQmxvY2tDb250ZW50IiwiZGVmYXVsdFNlcmlhbGl6ZXJzIiwiaW1hZ2UiLCJ0aXRsZSIsImNuIiwic2x1ZyIsImltYWdlQnVpbGRlciIsInVybCIsImhlaWdodCIsIndpZHRoIiwiYmxvZ0NvbnRhaW5lciIsImFydGljbGUiLCJ0b1VwcGVyQ2FzZSIsImJvZHkiLCJ3IiwiaCIsImZpdCIsImNsaWVudCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUNwQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxRQUFNTSxTQUFTLEdBQUc7QUFDZEMsUUFBSSxFQUFFUCxLQUFLLGlCQUFJO0FBQUcsZUFBUyxFQUFFUSxzREFBTSxDQUFDRDtBQUFyQixPQUErQlAsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUVkUyxNQUFFLEVBQUVULEtBQUssaUJBQUk7QUFBSSxlQUFTLEVBQUVRLHNE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ZXMvcG9zdC9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudC5qcydcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSAnQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0J1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzLm1vZHVsZS5jc3MnO1xuXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB7XG4gICAgICAgIGRhdGU6IHByb3BzID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgyOiBwcm9wcyA9PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzF9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgzOiBwcm9wcyA9PiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzJ9IHsuLi5wcm9wc30gLz4sXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gICAgICAgIGxpc3RJdGVtOiBwcm9wcyA9PiBwcm9wcy5ub2RlLmxpc3RJdGVtID09IFwibnVtYmVyXCIgPyA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfSB7Li4ucHJvcHN9IC8+IDogPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1bGxldH0gey4uLnByb3BzfSAvPixcblxuICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgYmxvY2s6IHByb3BzID0+XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBvdmVycmlkZSBmb3IgdGhlIOKAnHN0eWxl4oCdXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNvLCBjYWxsIHRoZSBmdW5jdGlvbiBhbmQgcGFzcyBpbiB0aGUgY2hpbGRyZW4sIGlnbm9yaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvdGhlciB1bm5lY2Vzc2FyeSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA/IG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXSh7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgZmFsbGJhY2sgdG8gdGhlIHByb3ZpZGVkIGRlZmF1bHQgd2l0aCBhbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgOiBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrKHByb3BzKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltYWdlID0gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgICB3aWR0aD17MjAwMH1cbiAgICAgICAgICAgIGhlaWdodD17MTAwMH1cbiAgICAgICAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdzaGFkb3ctc21hbGwnLCB7XG4gICAgICAgICAgICAgICAgJ2hvdmVyOnNoYWRvdy1tZWRpdW0gdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMjAwJzogc2x1ZyxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtpbWFnZUJ1aWxkZXIuaW1hZ2UodXJsKS5oZWlnaHQoMTAwMCkud2lkdGgoMjAwMCkudXJsKCl9XG4gICAgICAgIC8+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9ID5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9wcy50aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDE+XG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3Byb3BzLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAyMDAwLCBoOiA4NTAsIGZpdDogJ2Nyb3AnIH19XG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cbiAgICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gICAgdGl0bGUsXG4gICAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgICBib2R5XG4gIH1gXG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGN0eC5xdWVyeVxuICAgIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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