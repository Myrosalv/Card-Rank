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
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchProducts)\n/* harmony export */ });\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm-web */ \"realm-web\");\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(realm_web__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function searchProducts(req, res) {\n  let {\n    term\n  } = req.query;\n\n  if (term) {\n    const REALM_APP_ID = \"cardsrank-drrkt\";\n    const app = new realm_web__WEBPACK_IMPORTED_MODULE_0__.App({\n      id: REALM_APP_ID\n    });\n    const credentials = realm_web__WEBPACK_IMPORTED_MODULE_0__.Credentials.anonymous();\n\n    try {\n      const user = await app.logIn(credentials);\n      const searchCards = await user.functions.searchCards(term);\n      res.status(200).json(searchCards);\n    } catch (error) {\n      console.error(error);\n    }\n\n    return;\n  }\n\n  res.status(500).json({\n    error: 'errr'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VhcmNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR2UsZUFBZUMsY0FBZixDQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DLEVBQXdDO0FBRXJELE1BQUk7QUFBRUMsSUFBQUE7QUFBRixNQUFXRixHQUFHLENBQUNHLEtBQW5COztBQUVBLE1BQUlELElBQUosRUFBVTtBQUNSLFVBQU1FLFlBQVksR0FBR0MsaUJBQXJCO0FBQ0EsVUFBTUcsR0FBRyxHQUFHLElBQUlWLDBDQUFKLENBQWM7QUFBRVksTUFBQUEsRUFBRSxFQUFFTjtBQUFOLEtBQWQsQ0FBWjtBQUNBLFVBQU1PLFdBQVcsR0FBR2IsNERBQUEsRUFBcEI7O0FBQ0EsUUFBSTtBQUNGLFlBQU1nQixJQUFJLEdBQUcsTUFBTU4sR0FBRyxDQUFDTyxLQUFKLENBQVVKLFdBQVYsQ0FBbkI7QUFDQSxZQUFNSyxXQUFXLEdBQUcsTUFBTUYsSUFBSSxDQUFDRyxTQUFMLENBQWVELFdBQWYsQ0FBMkJkLElBQTNCLENBQTFCO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsV0FBckI7QUFDRCxLQUpELENBSUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2RDLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFHRG5CLEVBQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NlYXJjaC5qcz84ZjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWxtIGZyb20gXCJyZWFsbS13ZWJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0cyhyZXEsIHJlcykge1xuXG4gIGxldCB7IHRlcm0gfSA9IHJlcS5xdWVyeVxuXG4gIGlmICh0ZXJtKSB7XG4gICAgY29uc3QgUkVBTE1fQVBQX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBTE1fSUQ7XG4gICAgY29uc3QgYXBwID0gbmV3IFJlYWxtLkFwcCh7IGlkOiBSRUFMTV9BUFBfSUQgfSk7XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBSZWFsbS5DcmVkZW50aWFscy5hbm9ueW1vdXMoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGFwcC5sb2dJbihjcmVkZW50aWFscyk7XG4gICAgICBjb25zdCBzZWFyY2hDYXJkcyA9IGF3YWl0IHVzZXIuZnVuY3Rpb25zLnNlYXJjaENhcmRzKHRlcm0pO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2VhcmNoQ2FyZHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuXG4gIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdlcnJyJyB9KVxufVxuIl0sIm5hbWVzIjpbIlJlYWxtIiwic2VhcmNoUHJvZHVjdHMiLCJyZXEiLCJyZXMiLCJ0ZXJtIiwicXVlcnkiLCJSRUFMTV9BUFBfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUkVBTE1fSUQiLCJhcHAiLCJBcHAiLCJpZCIsImNyZWRlbnRpYWxzIiwiQ3JlZGVudGlhbHMiLCJhbm9ueW1vdXMiLCJ1c2VyIiwibG9nSW4iLCJzZWFyY2hDYXJkcyIsImZ1bmN0aW9ucyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/search.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/search.js"));
module.exports = __webpack_exports__;

})();