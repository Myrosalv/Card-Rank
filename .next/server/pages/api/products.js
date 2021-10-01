"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getAllProducts)\n/* harmony export */ });\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm-web */ \"realm-web\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm_web__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getAllProducts(req, res) {\n  const REALM_APP_ID = \"cardsrank-drrkt\";\n  const app = new realm_web__WEBPACK_IMPORTED_MODULE_0__.App({\n    id: REALM_APP_ID\n  });\n  const credentials = realm_web__WEBPACK_IMPORTED_MODULE_0__.Credentials.anonymous();\n\n  try {\n    const user = await app.logIn(credentials);\n    const products = await user.functions.getAllProducts();\n    res.status(200).json(products);\n  } catch (error) {\n    console.error(error);\n  }\n\n  res.status(500).json({\n    error: 'errr'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHZSxlQUFlQyxjQUFmLENBQThCQyxHQUE5QixFQUFtQ0MsR0FBbkMsRUFBd0M7QUFFckQsUUFBTUMsWUFBWSxHQUFHQyxpQkFBckI7QUFDQSxRQUFNRyxHQUFHLEdBQUcsSUFBSVIsMENBQUosQ0FBYztBQUFFVSxJQUFBQSxFQUFFLEVBQUVOO0FBQU4sR0FBZCxDQUFaO0FBQ0EsUUFBTU8sV0FBVyxHQUFHWCw0REFBQSxFQUFwQjs7QUFDQSxNQUFJO0FBQ0YsVUFBTWMsSUFBSSxHQUFHLE1BQU1OLEdBQUcsQ0FBQ08sS0FBSixDQUFVSixXQUFWLENBQW5CO0FBQ0EsVUFBTUssUUFBUSxHQUFHLE1BQU1GLElBQUksQ0FBQ0csU0FBTCxDQUFlaEIsY0FBZixFQUF2QjtBQUNBRSxJQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsUUFBckI7QUFDRCxHQUpELENBSUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBR0RqQixFQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzP2Y2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhbG0gZnJvbSBcInJlYWxtLXdlYlwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzKHJlcSwgcmVzKSB7XG5cbiAgY29uc3QgUkVBTE1fQVBQX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBTE1fSUQ7XG4gIGNvbnN0IGFwcCA9IG5ldyBSZWFsbS5BcHAoeyBpZDogUkVBTE1fQVBQX0lEIH0pO1xuICBjb25zdCBjcmVkZW50aWFscyA9IFJlYWxtLkNyZWRlbnRpYWxzLmFub255bW91cygpO1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcHAubG9nSW4oY3JlZGVudGlhbHMpO1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgdXNlci5mdW5jdGlvbnMuZ2V0QWxsUHJvZHVjdHMoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cblxuXG4gIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdlcnJyJyB9KVxufVxuIl0sIm5hbWVzIjpbIlJlYWxtIiwiZ2V0QWxsUHJvZHVjdHMiLCJyZXEiLCJyZXMiLCJSRUFMTV9BUFBfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUkVBTE1fSUQiLCJhcHAiLCJBcHAiLCJpZCIsImNyZWRlbnRpYWxzIiwiQ3JlZGVudGlhbHMiLCJhbm9ueW1vdXMiLCJ1c2VyIiwibG9nSW4iLCJwcm9kdWN0cyIsImZ1bmN0aW9ucyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products.js\n");

/***/ }),

/***/ "realm-web":
/*!****************************!*\
  !*** external "realm-web" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("realm-web");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products.js"));
module.exports = __webpack_exports__;

})();