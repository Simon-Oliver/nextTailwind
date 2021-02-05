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

eval("// Exports\nmodule.exports = {\n\t\"container\": \"css_container__2WiOt\",\n\t\"article\": \"css_article__1QRB6\",\n\t\"imgPosts\": \"css_imgPosts__2m_TP\",\n\t\"textPost\": \"css_textPost__3R9KG\",\n\t\"postBody\": \"css_postBody__1AfHP\",\n\t\"navBar\": \"css_navBar__2szMB\",\n\t\"tagBtn\": \"css_tagBtn__2FOk0\",\n\t\"tagActive\": \"css_tagActive__68tNj\",\n\t\"postCard\": \"css_postCard__6eJlh\",\n\t\"postTitle\": \"css_postTitle__3wrdO\",\n\t\"postDate\": \"css_postDate__3T8Se\",\n\t\"blogContainer\": \"css_blogContainer__2EbNH\",\n\t\"date\": \"css_date__1j8t9\",\n\t\"subheading1\": \"css_subheading1__2gqTR\",\n\t\"subheading2\": \"css_subheading2__11fpv\",\n\t\"title\": \"css_title__wBKBD\",\n\t\"mainImage\": \"css_mainImage__1V_yQ\",\n\t\"number\": \"css_number__2IYLH\",\n\t\"bullet\": \"css_bullet__sYwET\",\n\t\"italic\": \"css_italic__15Vj3\",\n\t\"typo\": \"css_typo__3ynfX\",\n\t\"heading1\": \"css_heading1__34Qx6\",\n\t\"grid\": \"css_grid__UgSL0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jc3MubW9kdWxlLmNzcz83Njk0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9jc3MubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImNzc19jb250YWluZXJfXzJXaU90XCIsXG5cdFwiYXJ0aWNsZVwiOiBcImNzc19hcnRpY2xlX18xUVJCNlwiLFxuXHRcImltZ1Bvc3RzXCI6IFwiY3NzX2ltZ1Bvc3RzX18ybV9UUFwiLFxuXHRcInRleHRQb3N0XCI6IFwiY3NzX3RleHRQb3N0X18zUjlLR1wiLFxuXHRcInBvc3RCb2R5XCI6IFwiY3NzX3Bvc3RCb2R5X18xQWZIUFwiLFxuXHRcIm5hdkJhclwiOiBcImNzc19uYXZCYXJfXzJzek1CXCIsXG5cdFwidGFnQnRuXCI6IFwiY3NzX3RhZ0J0bl9fMkZPazBcIixcblx0XCJ0YWdBY3RpdmVcIjogXCJjc3NfdGFnQWN0aXZlX182OHROalwiLFxuXHRcInBvc3RDYXJkXCI6IFwiY3NzX3Bvc3RDYXJkX182ZUpsaFwiLFxuXHRcInBvc3RUaXRsZVwiOiBcImNzc19wb3N0VGl0bGVfXzN3cmRPXCIsXG5cdFwicG9zdERhdGVcIjogXCJjc3NfcG9zdERhdGVfXzNUOFNlXCIsXG5cdFwiYmxvZ0NvbnRhaW5lclwiOiBcImNzc19ibG9nQ29udGFpbmVyX18yRWJOSFwiLFxuXHRcImRhdGVcIjogXCJjc3NfZGF0ZV9fMWo4dDlcIixcblx0XCJzdWJoZWFkaW5nMVwiOiBcImNzc19zdWJoZWFkaW5nMV9fMmdxVFJcIixcblx0XCJzdWJoZWFkaW5nMlwiOiBcImNzc19zdWJoZWFkaW5nMl9fMTFmcHZcIixcblx0XCJ0aXRsZVwiOiBcImNzc190aXRsZV9fd0JLQkRcIixcblx0XCJtYWluSW1hZ2VcIjogXCJjc3NfbWFpbkltYWdlX18xVl95UVwiLFxuXHRcIm51bWJlclwiOiBcImNzc19udW1iZXJfXzJJWUxIXCIsXG5cdFwiYnVsbGV0XCI6IFwiY3NzX2J1bGxldF9fc1l3RVRcIixcblx0XCJpdGFsaWNcIjogXCJjc3NfaXRhbGljX18xNVZqM1wiLFxuXHRcInR5cG9cIjogXCJjc3NfdHlwb19fM3luZlhcIixcblx0XCJoZWFkaW5nMVwiOiBcImNzc19oZWFkaW5nMV9fMzRReDZcIixcblx0XCJncmlkXCI6IFwiY3NzX2dyaWRfX1VnU0wwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/css.module.css\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nconst Post = props => {\n  const {\n    0: imgUrl,\n    1: setImgUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  const overrides = {\n    date: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.date\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 24\n    }, undefined),\n    h2: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subheading1\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 22\n    }, undefined),\n    h3: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subheading2\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 22\n    }, undefined)\n  };\n  const serializers = {\n    listItem: props => props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 62\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bullet\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 108\n    }, undefined),\n    types: {\n      block: props => // Check if we have an override for the “style”\n      overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n      // the other unnecessary props\n      ? overrides[props.node.style]({\n        children: props.children\n      }) // otherwise, fallback to the provided default with all props\n      : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a.defaultSerializers.types.block(props)\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.article,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, undefined), imgUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainImage,\n        src: imgUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 28\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({\n        blocks: props.body,\n        imageOptions: {\n          w: 500,\n          h: 500,\n          fit: 'crop'\n        },\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_5___default.a`*[_type == \"post\" && slug.current == $slug][0]`;\n\nPost.getInitialProps = async ctx => {\n  const {\n    slug = \"\"\n  } = ctx.query;\n  return await _client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbImJ1aWxkZXIiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImltZ1VybCIsInNldEltZ1VybCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImltZ0J1aWxkZXIiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwibWFpbkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVycmlkZXMiLCJkYXRlIiwic3R5bGVzIiwiaDIiLCJzdWJoZWFkaW5nMSIsImgzIiwic3ViaGVhZGluZzIiLCJzZXJpYWxpemVycyIsImxpc3RJdGVtIiwibm9kZSIsIm51bWJlciIsImJ1bGxldCIsInR5cGVzIiwiYmxvY2siLCJzdHlsZSIsImNoaWxkcmVuIiwiQmxvY2tDb250ZW50IiwiZGVmYXVsdFNlcmlhbGl6ZXJzIiwiYmxvZ0NvbnRhaW5lciIsImFydGljbGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiYm9keSIsInciLCJoIiwiZml0IiwiY29uZmlnIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBS0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyx3REFBZSxDQUFDQyxrREFBRCxDQUEvQjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNwQixTQUFPSixPQUFPLENBQUNLLEtBQVIsQ0FBY0QsTUFBZCxDQUFQO0FBQ0g7O0FBSUQsTUFBTUUsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1B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QixTQUlRM0Isa0RBQU0sQ0FBQzhDLE1BQVAsRUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWNILENBekREOztBQTJEQSxNQUFNQyxLQUFLLEdBQUdDLDJDQUFLLGdEQUFuQjs7QUFFQTVDLElBQUksQ0FBQzZDLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ2xDLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZ0JELEdBQUcsQ0FBQ0gsS0FBMUI7QUFDQSxTQUFPLE1BQU0vQyxrREFBTSxDQUFDb0QsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJO0FBQUYsR0FBcEIsQ0FBYjtBQUNILENBSEQ7O0FBS2UvQyxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MubW9kdWxlLmNzcyc7XG5cblxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuLy8gR2V0IGEgcHJlLWNvbmZpZ3VyZWQgdXJsLWJ1aWxkZXIgZnJvbSB5b3VyIHNhbml0eSBjbGllbnRcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KVxuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKVxufVxuXG5cblxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgICAgICAgICAgcHJvamVjdElkOiBcIjZidHphbnUxXCIsXG4gICAgICAgICAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gICAgICAgIH0pXG4gICAgICAgIHNldEltZ1VybChpbWdCdWlsZGVyLmltYWdlKHByb3BzLm1haW5JbWFnZSkud2lkdGgoMjAwMCkuaGVpZ2h0KDgwMCkpXG5cbiAgICB9LCBbcHJvcHMubWFpbkltYWdlXSlcblxuXG5cbiAgICBjb25zdCBvdmVycmlkZXMgPSB7XG4gICAgICAgIGRhdGU6IHByb3BzID0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgyOiBwcm9wcyA9PiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzF9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGgzOiBwcm9wcyA9PiA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViaGVhZGluZzJ9IHsuLi5wcm9wc30gLz4sXG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gICAgICAgIGxpc3RJdGVtOiBwcm9wcyA9PiBwcm9wcy5ub2RlLmxpc3RJdGVtID09IFwibnVtYmVyXCIgPyA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubnVtYmVyfSB7Li4ucHJvcHN9IC8+IDogPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1bGxldH0gey4uLnByb3BzfSAvPixcblxuICAgICAgICB0eXBlczoge1xuICAgICAgICAgICAgYmxvY2s6IHByb3BzID0+XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbiBvdmVycmlkZSBmb3IgdGhlIOKAnHN0eWxl4oCdXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNvLCBjYWxsIHRoZSBmdW5jdGlvbiBhbmQgcGFzcyBpbiB0aGUgY2hpbGRyZW4sIGlnbm9yaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvdGhlciB1bm5lY2Vzc2FyeSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA/IG92ZXJyaWRlc1twcm9wcy5ub2RlLnN0eWxlXSh7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgZmFsbGJhY2sgdG8gdGhlIHByb3ZpZGVkIGRlZmF1bHQgd2l0aCBhbGwgcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgOiBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrKHByb3BzKSxcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLnRpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgICAgICAgICB7aW1nVXJsICYmIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkltYWdlfSBzcmM9e2ltZ1VybH0gLz59XG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgICAgICAgICBibG9ja3M9e3Byb3BzLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDUwMCwgZml0OiAnY3JvcCcgfX1cbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXWBcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY3R4LnF1ZXJ5XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

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