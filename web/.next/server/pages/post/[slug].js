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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client.js */ \"./client.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css.module.css */ \"./pages/css.module.css\");\n/* harmony import */ var _css_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _jsxFileName = \"/Users/simon.stauffer/Desktop/Code/nextjs-test/web/pages/post/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n // Get a pre-configured url-builder from your sanity client\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default()(_client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\nfunction urlFor(source) {\n  return builder.image(source);\n}\n\nconst Post = props => {\n  const {\n    0: imgUrl,\n    1: setImgUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    console.log(props);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_8___default()({\n      projectId: \"6btzanu1\",\n      dataset: 'production'\n    });\n    setImgUrl(imgBuilder.image(props.mainImage).width(2000).height(800));\n  }, [props.mainImage]);\n  const overrides = {\n    date: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.date\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 24\n    }, undefined),\n    h2: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subheading1\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 22\n    }, undefined),\n    h3: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subheading2\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 22\n    }, undefined)\n  };\n  const serializers = {\n    listItem: props => props.node.listItem == \"number\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.number\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 62\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", _objectSpread({\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bullet\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 108\n    }, undefined),\n    types: {\n      block: props => // Check if we have an override for the “style”\n      overrides[props.node.style] // if so, call the function and pass in the children, ignoring\n      // the other unnecessary props\n      ? overrides[props.node.style]({\n        children: props.children\n      }) // otherwise, fallback to the provided default with all props\n      : _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a.defaultSerializers.types.block(props)\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.blogContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.article,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n        children: props.title.toUpperCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, undefined), imgUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainImage,\n        src: imgUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 28\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _css_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.date,\n        children: moment__WEBPACK_IMPORTED_MODULE_7___default()(props.publishedAt).format(\"MMMM DD, yyyy\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({\n        blocks: props.body // imageOptions={{ w: 500, h: 500, fit: 'crop' }}\n        ,\n        serializers: serializers\n      }, _client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].config()), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst query = groq__WEBPACK_IMPORTED_MODULE_5___default.a`*[_type == \"post\" && slug.current == $slug][0]`;\n\nPost.getInitialProps = async ctx => {\n  const {\n    slug = \"\"\n  } = ctx.query;\n  return await _client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(query, {\n    slug\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz81MzU0Il0sIm5hbWVzIjpbImJ1aWxkZXIiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsImltZ1VybCIsInNldEltZ1VybCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImltZ0J1aWxkZXIiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwibWFpbkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVycmlkZXMiLCJkYXRlIiwic3R5bGVzIiwiaDIiLCJzdWJoZWFkaW5nMSIsImgzIiwic3ViaGVhZGluZzIiLCJzZXJpYWxpemVycyIsImxpc3RJdGVtIiwibm9kZSIsIm51bWJlciIsImJ1bGxldCIsInR5cGVzIiwiYmxvY2siLCJzdHlsZSIsImNoaWxkcmVuIiwiQmxvY2tDb250ZW50IiwiZGVmYXVsdFNlcmlhbGl6ZXJzIiwiYmxvZ0NvbnRhaW5lciIsImFydGljbGUiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibW9tZW50IiwicHVibGlzaGVkQXQiLCJmb3JtYXQiLCJib2R5IiwiY29uZmlnIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLE1BQU1BLE9BQU8sR0FBR0Msd0RBQWUsQ0FBQ0Msa0RBQUQsQ0FBL0I7O0FBRUEsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDcEIsU0FBT0osT0FBTyxDQUFDSyxLQUFSLENBQWNELE1BQWQsQ0FBUDtBQUNIOztBQUlELE1BQU1FLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3BCLFFBQU07QUFBQSxPQUFD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O0FBQUEsbUJBSEosZUFJSSxxRUFBQyxxRUFBRDtBQUNJLGNBQU0sRUFBRXZDLEtBQUssQ0FBQ3dDLElBRGxCLENBRUk7QUFGSjtBQUdJLG1CQUFXLEVBQUVsQjtBQUhqQixTQUlRM0Isa0RBQU0sQ0FBQzhDLE1BQVAsRUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWVILENBMUREOztBQTREQSxNQUFNQyxLQUFLLEdBQUdDLDJDQUFLLGdEQUFuQjs7QUFFQTVDLElBQUksQ0FBQzZDLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ2xDLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZ0JELEdBQUcsQ0FBQ0gsS0FBMUI7QUFDQSxTQUFPLE1BQU0vQyxrREFBTSxDQUFDb0QsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJO0FBQUYsR0FBcEIsQ0FBYjtBQUNILENBSEQ7O0FBS2UvQyxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50LmpzJ1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5pbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MubW9kdWxlLmNzcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuXG4vLyBHZXQgYSBwcmUtY29uZmlndXJlZCB1cmwtYnVpbGRlciBmcm9tIHlvdXIgc2FuaXR5IGNsaWVudFxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpXG5cbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpXG59XG5cblxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW1nQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcih7XG4gICAgICAgICAgICBwcm9qZWN0SWQ6IFwiNmJ0emFudTFcIixcbiAgICAgICAgICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgfSlcbiAgICAgICAgc2V0SW1nVXJsKGltZ0J1aWxkZXIuaW1hZ2UocHJvcHMubWFpbkltYWdlKS53aWR0aCgyMDAwKS5oZWlnaHQoODAwKSlcblxuICAgIH0sIFtwcm9wcy5tYWluSW1hZ2VdKVxuXG5cblxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHtcbiAgICAgICAgZGF0ZTogcHJvcHMgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgaDI6IHByb3BzID0+IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nMX0gey4uLnByb3BzfSAvPixcbiAgICAgICAgaDM6IHByb3BzID0+IDxoMyBjbGFzc05hbWU9e3N0eWxlcy5zdWJoZWFkaW5nMn0gey4uLnByb3BzfSAvPixcbiAgICB9XG5cbiAgICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICAgICAgbGlzdEl0ZW06IHByb3BzID0+IHByb3BzLm5vZGUubGlzdEl0ZW0gPT0gXCJudW1iZXJcIiA/IDxsaSBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9IHsuLi5wcm9wc30gLz4gOiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuYnVsbGV0fSB7Li4ucHJvcHN9IC8+LFxuXG4gICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICBibG9jazogcHJvcHMgPT5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIG92ZXJyaWRlIGZvciB0aGUg4oCcc3R5bGXigJ1cbiAgICAgICAgICAgICAgICBvdmVycmlkZXNbcHJvcHMubm9kZS5zdHlsZV1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc28sIGNhbGwgdGhlIGZ1bmN0aW9uIGFuZCBwYXNzIGluIHRoZSBjaGlsZHJlbiwgaWdub3JpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG90aGVyIHVubmVjZXNzYXJ5IHByb3BzXG4gICAgICAgICAgICAgICAgICAgID8gb3ZlcnJpZGVzW3Byb3BzLm5vZGUuc3R5bGVdKHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBmYWxsYmFjayB0byB0aGUgcHJvdmlkZWQgZGVmYXVsdCB3aXRoIGFsbCBwcm9wc1xuICAgICAgICAgICAgICAgICAgICA6IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2socHJvcHMpLFxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfSA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L2gxPlxuICAgICAgICAgICAgICAgIHtpbWdVcmwgJiYgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tYWluSW1hZ2V9IHNyYz17aW1nVXJsfSAvPn1cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57bW9tZW50KHByb3BzLnB1Ymxpc2hlZEF0KS5mb3JtYXQoXCJNTU1NIERELCB5eXl5XCIpfTwvcD5cbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGJsb2Nrcz17cHJvcHMuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogNTAwLCBmaXQ6ICdjcm9wJyB9fVxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdYFxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjdHgucXVlcnlcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

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