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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/inventory.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/inventory.js":
/*!********************************!*\
  !*** ./pages/api/inventory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst jsonData = __webpack_require__(/*! ./inventoryData.json */ \"./pages/api/inventoryData.json\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  //const { count } = JSON.parse(req.body);\n  console.log(req.body, req.method);\n\n  try {\n    if (req.method == \"GET\") {\n      const data = {\n        res: `Server response inventory`,\n        jsonData\n      };\n      console.log(\"--------->\", data);\n      res.json(data);\n    } else if (req.method == \"POST\") {\n      console.log(\"-------> POST request\"); //const data = { res: `Server response inventory ${jsonData}` }\n\n      const newData = [...jsonData, {\n        name: \"test\"\n      }];\n      fs.writeFile(\"./inventoryData.json\", JSON.stringify(newData), err => {\n        if (err) {\n          console.log(err);\n        }\n\n        console.log(newData);\n      });\n      res.json(newData);\n    }\n  } catch (e) {\n    console.log(\"Whoooooop Server error\");\n    res.status(e.status).json(e);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW52ZW50b3J5LmpzPzBlOWUiXSwibmFtZXMiOlsianNvbkRhdGEiLCJyZXF1aXJlIiwiZnMiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwibmV3RGF0YSIsIm5hbWUiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsNERBQUQsQ0FBeEI7O0FBQ0EsTUFBTUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBRWUsc0VBQU9FLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxJQUFoQixFQUFzQkosR0FBRyxDQUFDSyxNQUExQjs7QUFDQSxNQUFJO0FBQ0EsUUFBSUwsR0FBRyxDQUFDSyxNQUFKLElBQWMsS0FBbEIsRUFBeUI7QUFDckIsWUFBTUMsSUFBSSxHQUFHO0FBQUVMLFdBQUcsRUFBRywyQkFBUjtBQUFvQ0o7QUFBcEMsT0FBYjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRyxJQUExQjtBQUNBTCxTQUFHLENBQUNNLElBQUosQ0FBU0QsSUFBVDtBQUNILEtBSkQsTUFJTyxJQUFJTixHQUFHLENBQUNLLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUM3QkgsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFENkIsQ0FFN0I7O0FBQ0EsWUFBTUssT0FBTyxHQUFHLENBQUMsR0FBR1gsUUFBSixFQUFjO0FBQUVZLFlBQUksRUFBRTtBQUFSLE9BQWQsQ0FBaEI7QUFHQVYsUUFBRSxDQUFDVyxTQUFILENBQWEsc0JBQWIsRUFBcUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixPQUFmLENBQXJDLEVBQStESyxHQUFELElBQVM7QUFDbkUsWUFBSUEsR0FBSixFQUFTO0FBQ0xYLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNIOztBQUNEWCxlQUFPLENBQUNDLEdBQVIsQ0FBWUssT0FBWjtBQUNILE9BTEQ7QUFNQVAsU0FBRyxDQUFDTSxJQUFKLENBQVNDLE9BQVQ7QUFDSDtBQUVKLEdBcEJELENBb0JFLE9BQU9NLENBQVAsRUFBVTtBQUNSWixXQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBRixPQUFHLENBQUNjLE1BQUosQ0FBV0QsQ0FBQyxDQUFDQyxNQUFiLEVBQXFCUixJQUFyQixDQUEwQk8sQ0FBMUI7QUFDSDtBQUNKLENBM0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ludmVudG9yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGpzb25EYXRhID0gcmVxdWlyZShcIi4vaW52ZW50b3J5RGF0YS5qc29uXCIpXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAvL2NvbnN0IHsgY291bnQgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LCByZXEubWV0aG9kKVxuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXEubWV0aG9kID09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IHJlczogYFNlcnZlciByZXNwb25zZSBpbnZlbnRvcnlgLCBqc29uRGF0YSB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLT5cIiwgZGF0YSlcbiAgICAgICAgICAgIHJlcy5qc29uKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLT4gUE9TVCByZXF1ZXN0XCIpXG4gICAgICAgICAgICAvL2NvbnN0IGRhdGEgPSB7IHJlczogYFNlcnZlciByZXNwb25zZSBpbnZlbnRvcnkgJHtqc29uRGF0YX1gIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uanNvbkRhdGEsIHsgbmFtZTogXCJ0ZXN0XCIgfV1cblxuXG4gICAgICAgICAgICBmcy53cml0ZUZpbGUoXCIuL2ludmVudG9yeURhdGEuanNvblwiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5qc29uKG5ld0RhdGEpO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2hvb29vb29wIFNlcnZlciBlcnJvclwiKVxuICAgICAgICByZXMuc3RhdHVzKGUuc3RhdHVzKS5qc29uKGUpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/inventory.js\n");

/***/ }),

/***/ "./pages/api/inventoryData.json":
/*!**************************************!*\
  !*** ./pages/api/inventoryData.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"boxID\\\":1,\\\"boxName\\\":\\\"Box 1\\\",\\\"items\\\":[]},{\\\"boxID\\\":2,\\\"boxName\\\":\\\"Box 2\\\",\\\"items\\\":[]},{\\\"boxID\\\":3,\\\"boxName\\\":\\\"Box 3\\\",\\\"items\\\":[]}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9pbnZlbnRvcnlEYXRhLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/inventoryData.json\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ })

/******/ });