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
exports.id = "pages/api/products-add";
exports.ids = ["pages/api/products-add"];
exports.modules = {

/***/ "./pages/api/products-add.js":
/*!***********************************!*\
  !*** ./pages/api/products-add.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productsAdd)\n/* harmony export */ });\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm-web */ \"realm-web\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm_web__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function productsAdd(req, res) {\n  if (req.method === 'POST') {\n    let product = req.body;\n    const REALM_APP_ID = \"cardsrank-drrkt\";\n    const app = new realm_web__WEBPACK_IMPORTED_MODULE_0__.App({\n      id: REALM_APP_ID\n    });\n    const credentials = realm_web__WEBPACK_IMPORTED_MODULE_0__.Credentials.anonymous();\n\n    try {\n      const user = await app.logIn(credentials);\n      const products = await user.functions.ProductAdd(product);\n      res.status(200).json(products);\n    } catch (error) {\n      console.error(error);\n    }\n\n    return;\n  }\n\n  res.status(500).json({\n    error: 'errr'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMtYWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR2UsZUFBZUMsV0FBZixDQUEyQkMsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBRWxELE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDSSxJQUFsQjtBQUVBLFVBQU1DLFlBQVksR0FBR0MsaUJBQXJCO0FBQ0EsVUFBTUcsR0FBRyxHQUFHLElBQUlYLDBDQUFKLENBQWM7QUFBRWEsTUFBQUEsRUFBRSxFQUFFTjtBQUFOLEtBQWQsQ0FBWjtBQUNBLFVBQU1PLFdBQVcsR0FBR2QsNERBQUEsRUFBcEI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1pQixJQUFJLEdBQUcsTUFBTU4sR0FBRyxDQUFDTyxLQUFKLENBQVVKLFdBQVYsQ0FBbkI7QUFDQSxZQUFNSyxRQUFRLEdBQUcsTUFBTUYsSUFBSSxDQUFDRyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJoQixPQUExQixDQUF2QjtBQUNBRixNQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLFFBQXJCO0FBQ0QsS0FKRCxDQUlFLE9BQU9LLEtBQVAsRUFBYztBQUNkQyxNQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNEOztBQUVEO0FBQ0Q7O0FBR0RyQixFQUFBQSxHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy1hZGQuanM/Y2QxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFsbSBmcm9tIFwicmVhbG0td2ViXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHJvZHVjdHNBZGQocmVxLCByZXMpIHtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgbGV0IHByb2R1Y3QgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IFJFQUxNX0FQUF9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFQUxNX0lEO1xuICAgIGNvbnN0IGFwcCA9IG5ldyBSZWFsbS5BcHAoeyBpZDogUkVBTE1fQVBQX0lEIH0pO1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gUmVhbG0uQ3JlZGVudGlhbHMuYW5vbnltb3VzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhcHAubG9nSW4oY3JlZGVudGlhbHMpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB1c2VyLmZ1bmN0aW9ucy5Qcm9kdWN0QWRkKHByb2R1Y3QpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdlcnJyJyB9KVxufVxuIl0sIm5hbWVzIjpbIlJlYWxtIiwicHJvZHVjdHNBZGQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcm9kdWN0IiwiYm9keSIsIlJFQUxNX0FQUF9JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19SRUFMTV9JRCIsImFwcCIsIkFwcCIsImlkIiwiY3JlZGVudGlhbHMiLCJDcmVkZW50aWFscyIsImFub255bW91cyIsInVzZXIiLCJsb2dJbiIsInByb2R1Y3RzIiwiZnVuY3Rpb25zIiwiUHJvZHVjdEFkZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products-add.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/products-add.js"));
module.exports = __webpack_exports__;

})();