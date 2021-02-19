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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/pdf.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/pdf.js":
/*!**************************!*\
  !*** ./pages/api/pdf.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar pdf = __webpack_require__(/*! html-pdf */ \"html-pdf\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  let options = {\n    format: 'A4'\n  }; // Example of options with args //\n  // let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };\n\n  let file = {\n    content: `\n<!doctype html>\n<html>\n   <head>\n      <meta charset=\"utf-8\">\n      <title>PDF Result Template</title>\n      <style>\n      .page { page-break-before: always }\n         .invoice-box {\n         max-width: 800px;\n         height: 100%;\n         margin: auto;\n         padding: 30px;\n         border: 1px solid #eee;\n         box-shadow: 0 0 10px rgba(0, 0, 0, .15);\n         font-size: 16px;\n         line-height: 24px;\n         font-family: 'Helvetica Neue', 'Helvetica',\n         color: #555;\n         }\n         .margin-top {\n         margin-top: 50px;\n         }\n         .justify-center {\n         text-align: center;\n         }\n         .invoice-box table {\n         width: 100%;\n         line-height: inherit;\n         text-align: left;\n         }\n         .invoice-box table td {\n         padding: 5px;\n         vertical-align: top;\n         }\n         .invoice-box table tr td:nth-child(2) {\n         text-align: right;\n         }\n         .invoice-box table tr.top table td {\n         padding-bottom: 20px;\n         }\n         .invoice-box table tr.top table td.title {\n         font-size: 45px;\n         line-height: 45px;\n         color: #333;\n         }\n         .invoice-box table tr.information table td {\n         padding-bottom: 40px;\n         }\n         .invoice-box table tr.heading td {\n         background: #eee;\n         border-bottom: 1px solid #ddd;\n         font-weight: bold;\n         }\n         .invoice-box table tr.details td {\n         padding-bottom: 20px;\n         }\n         .invoice-box table tr.item td {\n         border-bottom: 1px solid #eee;\n         }\n         .invoice-box table tr.item.last td {\n         border-bottom: none;\n         }\n         .invoice-box table tr.total td:nth-child(2) {\n         border-top: 2px solid #eee;\n         font-weight: bold;\n         }\n         @media only screen and (max-width: 600px) {\n         .invoice-box table tr.top table td {\n         width: 100%;\n         display: block;\n         text-align: center;\n         }\n         .invoice-box table tr.information table td {\n         width: 100%;\n         display: block;\n         text-align: center;\n         }\n         }\n      </style>\n   </head>\n   <body>\n      <div class=\"invoice-box\">\n         <table cellpadding=\"0\" cellspacing=\"0\">\n            <tr class=\"top\">\n               <td colspan=\"2\">\n                  <table>\n                     <tr>\n                        <td class=\"title\"><img  src=\"https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1\"\n                           style=\"width:100%; max-width:156px;\"></td>\n                        <td>\n                           Datum: Test 1234}\n                        </td>\n                     </tr>\n                  </table>\n               </td>\n            </tr>\n            <tr class=\"information\">\n               <td colspan=\"2\">\n                  <table>\n                     <tr>\n                        <td>\n                           Customer name: Max Muster\n                        </td>\n                        <td>\n                           Receipt number: 445566543\n                        </td>\n                     </tr>\n                  </table>\n               </td>\n            </tr>\n            <tr class=\"heading\">\n               <td>Bought items:</td>\n               <td>Price</td>\n            </tr>\n            <tr class=\"item\">\n               <td>First item:</td>\n               <td>CHF 55$</td>\n            </tr>\n            <tr class=\"item\">\n               <td>Second item:</td>\n               <td>CHF 77$</td>\n            </tr>\n         </table>\n         <br />\n         <h1 class=\"justify-center\">Total price: 10234</h1>\n      </div>\n      <div class=\"invoice-box page\">\n         <table cellpadding=\"0\" cellspacing=\"0\">\n            <tr class=\"top\">\n               <td colspan=\"2\">\n                  <table>\n                     <tr>\n                        <td class=\"title\"><img  src=\"https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1\"\n                           style=\"width:100%; max-width:156px;\"></td>\n                        <td>\n                           Datum: Test 1234}\n                        </td>\n                     </tr>\n                  </table>\n               </td>\n            </tr>\n            <tr class=\"information\">\n               <td colspan=\"2\">\n                  <table>\n                     <tr>\n                        <td>\n                           Customer name: Max Muster\n                        </td>\n                        <td>\n                           Receipt number: 445566543\n                        </td>\n                     </tr>\n                  </table>\n               </td>\n            </tr>\n            <tr class=\"heading\">\n               <td>Bought items:</td>\n               <td>Price</td>\n            </tr>\n            <tr class=\"item\">\n               <td>First item:</td>\n               <td>CHF 55$</td>\n            </tr>\n            <tr class=\"item\">\n               <td>Second item:</td>\n               <td>CHF 77$</td>\n            </tr>\n         </table>\n         <br />\n         <h1 class=\"justify-center\">Total price: 10234</h1>\n      </div>\n   </body>\n</html>\n`\n  };\n  pdf.create(file.content, options).toFile('./test.pdf', function (err, response) {\n    if (err) return console.log(err);\n    console.log(response);\n    const file = `/Users/simon.stauffer/Desktop/Code/nextjs-test/web/test.pdf`;\n    const imageBuffer = fs.readFileSync(file);\n    res.setHeader('Content-Type', \"application/pdf\");\n    res.send(imageBuffer);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGRmLmpzPzE1MTIiXSwibmFtZXMiOlsicGRmIiwicmVxdWlyZSIsImZzIiwicmVxIiwicmVzIiwib3B0aW9ucyIsImZvcm1hdCIsImZpbGUiLCJjb250ZW50IiwiY3JlYXRlIiwidG9GaWxlIiwiZXJyIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VCdWZmZXIiLCJyZWFkRmlsZVN5bmMiLCJzZXRIZWFkZXIiLCJzZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUFqQjs7QUFDQSxNQUFNQyxFQUFFLEdBQUdELG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFFZSxzRUFBT0UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUlDLE9BQU8sR0FBRztBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFkLENBRCtCLENBRS9CO0FBQ0E7O0FBRUEsTUFBSUMsSUFBSSxHQUFHO0FBQ1BDLFdBQU8sRUFBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvS2UsR0FBWDtBQWlMQVIsS0FBRyxDQUFDUyxNQUFKLENBQVdGLElBQUksQ0FBQ0MsT0FBaEIsRUFBeUJILE9BQXpCLEVBQWtDSyxNQUFsQyxDQUF5QyxZQUF6QyxFQUF1RCxVQUFVQyxHQUFWLEVBQWVDLFFBQWYsRUFBeUI7QUFDNUUsUUFBSUQsR0FBSixFQUFTLE9BQU9FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaLENBQVA7QUFDVEUsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFFQSxVQUFNTCxJQUFJLEdBQUksNkRBQWQ7QUFDQSxVQUFNUSxXQUFXLEdBQUdiLEVBQUUsQ0FBQ2MsWUFBSCxDQUFnQlQsSUFBaEIsQ0FBcEI7QUFDQUgsT0FBRyxDQUFDYSxTQUFKLENBQWMsY0FBZCxFQUE4QixpQkFBOUI7QUFDQWIsT0FBRyxDQUFDYyxJQUFKLENBQVNILFdBQVQ7QUFHSCxHQVZEO0FBZUgsQ0FyTUQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGRmLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBkZiA9IHJlcXVpcmUoJ2h0bWwtcGRmJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBsZXQgb3B0aW9ucyA9IHsgZm9ybWF0OiAnQTQnIH07XG4gICAgLy8gRXhhbXBsZSBvZiBvcHRpb25zIHdpdGggYXJncyAvL1xuICAgIC8vIGxldCBvcHRpb25zID0geyBmb3JtYXQ6ICdBNCcsIGFyZ3M6IFsnLS1uby1zYW5kYm94JywgJy0tZGlzYWJsZS1zZXR1aWQtc2FuZGJveCddIH07XG5cbiAgICBsZXQgZmlsZSA9IHtcbiAgICAgICAgY29udGVudDogYFxuPCFkb2N0eXBlIGh0bWw+XG48aHRtbD5cbiAgIDxoZWFkPlxuICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCI+XG4gICAgICA8dGl0bGU+UERGIFJlc3VsdCBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAucGFnZSB7IHBhZ2UtYnJlYWstYmVmb3JlOiBhbHdheXMgfVxuICAgICAgICAgLmludm9pY2UtYm94IHtcbiAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLFxuICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICB9XG4gICAgICAgICAubWFyZ2luLXRvcCB7XG4gICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgfVxuICAgICAgICAgLmp1c3RpZnktY2VudGVyIHtcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgIH1cbiAgICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgIH1cbiAgICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ZCB7XG4gICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgfVxuICAgICAgICAgLmludm9pY2UtYm94IHRhYmxlIHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgIH1cbiAgICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci50b3AgdGFibGUgdGQge1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkLnRpdGxlIHtcbiAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaGVhZGluZyB0ZCB7XG4gICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgIH1cbiAgICAgICAgIC5pbnZvaWNlLWJveCB0YWJsZSB0ci5kZXRhaWxzIHRkIHtcbiAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgfVxuICAgICAgICAgLmludm9pY2UtYm94IHRhYmxlIHRyLml0ZW0gdGQge1xuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaXRlbS5sYXN0IHRkIHtcbiAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG90YWwgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICB9XG4gICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIudG9wIHRhYmxlIHRkIHtcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICB9XG4gICAgICAgICAuaW52b2ljZS1ib3ggdGFibGUgdHIuaW5mb3JtYXRpb24gdGFibGUgdGQge1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICA8L2hlYWQ+XG4gICA8Ym9keT5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnZvaWNlLWJveFwiPlxuICAgICAgICAgPHRhYmxlIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwidG9wXCI+XG4gICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRpdGxlXCI+PGltZyAgc3JjPVwiaHR0cHM6Ly9pMi53cC5jb20vY2xldmVybG9nb3MuY28vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDUvcmVjaWVwdGhvdW5kXzEuanBnP2ZpdD04MDAlMkM2MDAmc3NsPTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBtYXgtd2lkdGg6MTU2cHg7XCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdHVtOiBUZXN0IDEyMzR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImluZm9ybWF0aW9uXCI+XG4gICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyIG5hbWU6IE1heCBNdXN0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNlaXB0IG51bWJlcjogNDQ1NTY2NTQzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgIDx0ZD5Cb3VnaHQgaXRlbXM6PC90ZD5cbiAgICAgICAgICAgICAgIDx0ZD5QcmljZTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgPHRkPkZpcnN0IGl0ZW06PC90ZD5cbiAgICAgICAgICAgICAgIDx0ZD5DSEYgNTUkPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICA8dGQ+U2Vjb25kIGl0ZW06PC90ZD5cbiAgICAgICAgICAgICAgIDx0ZD5DSEYgNzckPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgPGJyIC8+XG4gICAgICAgICA8aDEgY2xhc3M9XCJqdXN0aWZ5LWNlbnRlclwiPlRvdGFsIHByaWNlOiAxMDIzNDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnZvaWNlLWJveCBwYWdlXCI+XG4gICAgICAgICA8dGFibGUgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGl0bGVcIj48aW1nICBzcmM9XCJodHRwczovL2kyLndwLmNvbS9jbGV2ZXJsb2dvcy5jby93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9yZWNpZXB0aG91bmRfMS5qcGc/Zml0PTgwMCUyQzYwMCZzc2w9MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjEwMCU7IG1heC13aWR0aDoxNTZweDtcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0dW06IFRlc3QgMTIzNH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cbiAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXIgbmFtZTogTWF4IE11c3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY2VpcHQgbnVtYmVyOiA0NDU1NjY1NDNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgPHRkPkJvdWdodCBpdGVtczo8L3RkPlxuICAgICAgICAgICAgICAgPHRkPlByaWNlPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICA8dGQ+Rmlyc3QgaXRlbTo8L3RkPlxuICAgICAgICAgICAgICAgPHRkPkNIRiA1NSQ8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgIDx0ZD5TZWNvbmQgaXRlbTo8L3RkPlxuICAgICAgICAgICAgICAgPHRkPkNIRiA3NyQ8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICA8YnIgLz5cbiAgICAgICAgIDxoMSBjbGFzcz1cImp1c3RpZnktY2VudGVyXCI+VG90YWwgcHJpY2U6IDEwMjM0PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgPC9ib2R5PlxuPC9odG1sPlxuYCB9O1xuXG4gICAgcGRmLmNyZWF0ZShmaWxlLmNvbnRlbnQsIG9wdGlvbnMpLnRvRmlsZSgnLi90ZXN0LnBkZicsIGZ1bmN0aW9uIChlcnIsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IGAvVXNlcnMvc2ltb24uc3RhdWZmZXIvRGVza3RvcC9Db2RlL25leHRqcy10ZXN0L3dlYi90ZXN0LnBkZmBcbiAgICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSlcbiAgICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgXCJhcHBsaWNhdGlvbi9wZGZcIilcbiAgICAgICAgcmVzLnNlbmQoaW1hZ2VCdWZmZXIpXG5cblxuICAgIH1cbiAgICApXG5cblxuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/pdf.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "html-pdf":
/*!***************************!*\
  !*** external "html-pdf" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-pdf\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodG1sLXBkZlwiP2I0NzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaHRtbC1wZGYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodG1sLXBkZlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///html-pdf\n");

/***/ })

/******/ });