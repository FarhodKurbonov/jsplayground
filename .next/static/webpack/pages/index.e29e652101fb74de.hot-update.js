/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/lessons/5.10/desctructors.js":
/*!************************************************!*\
  !*** ./src/pages/lessons/5.10/desctructors.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// let arr = ['Siddiq', 'Medet', 'Farkhod']\n// let [siddiq, medet, farkhod] = arr\n// console.log('originalArray', arr[0])\n// console.log('---', siddiq, medet, farkhod)\nlet arr = [\n    \"Julius\",\n    \"Caesar\",\n    \"Consul\",\n    \"of the Roman Republic\"\n];\nlet [firtName, title] = arr;\n//destructe Set\nlet mySet = new Set([\n    \"one\",\n    \"two\",\n    \"three\"\n]);\nlet [one, two, three] = mySet;\n// console.log('----', one, two, three)\n// let user = {}\n// let userArr = (['Siddiq', 'Khasanov'][(user.name, user.surname)] = userArr)\n// console.info('----', user)\n// === Entries ====\n// let user = {\n//   name: 'John',\n//   age: 30,\n// }\n// let keyValueOfObj = Object.entries(user)\n// let [userName, age] = [\n//   ['name', 'John'],\n//   ['age', '30'],\n// ]\n// console.log('--- userName', userName)\n// console.log('--- john', age)\n// for (let [key, value] of keyValueOfObj) {\n//   console.log('--- key ---', key)\n//   console.log('--- value ----', value)\n// }\n// ==== Map ====\n// let user = new Map()\n// user.set('name', 'John')\n// user.set('age', '30')\n// // Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования\n// for (let [key, value] of user) {\n//   console.log(`${key}:${value}`) // name:John, затем age:30\n// }\n// ===  REST Operator\n// let caesar = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']\n// let [name, surname, ...rest] = caesar\n// console.log(rest)\n// === Default Value ===\nlet [firstName = \"Vasya\", surname = \"Pupkin\"] = [];\nconsole.log(firstName, surname);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGVzc29ucy81LjEwL2Rlc2N0cnVjdG9ycy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFFM0MscUNBQXFDO0FBRXJDLHVDQUF1QztBQUV2Qyw2Q0FBNkM7QUFFN0MsSUFBSUEsTUFBTTtJQUFDO0lBQVU7SUFBVTtJQUFVO0NBQXdCO0FBRWpFLElBQUksQ0FBQ0MsVUFBVUMsTUFBTSxHQUFHRjtBQUV4QixlQUFlO0FBQ2YsSUFBSUcsUUFBUSxJQUFJQyxJQUFJO0lBQUM7SUFBTztJQUFPO0NBQVE7QUFFM0MsSUFBSSxDQUFDQyxLQUFLQyxLQUFLQyxNQUFNLEdBQUdKO0FBRXhCLHVDQUF1QztBQUV2QyxnQkFBZ0I7QUFDaEIsOEVBQThFO0FBQzlFLDZCQUE2QjtBQUU3QixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsSUFBSTtBQUVKLDJDQUEyQztBQUMzQywwQkFBMEI7QUFDMUIsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixJQUFJO0FBRUosd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQiw0Q0FBNEM7QUFDNUMsb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxJQUFJO0FBRUosZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBRXhCLHVGQUF1RjtBQUN2RixtQ0FBbUM7QUFDbkMsOERBQThEO0FBQzlELElBQUk7QUFFSixxQkFBcUI7QUFDckIsdUVBQXVFO0FBRXZFLHdDQUF3QztBQUN4QyxvQkFBb0I7QUFFcEIsd0JBQXdCO0FBQ3hCLElBQUksQ0FBQ0ssWUFBWSxPQUFPLEVBQUVDLFVBQVUsUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUNsREMsUUFBUUMsR0FBRyxDQUFDSCxXQUFXQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbGVzc29ucy81LjEwL2Rlc2N0cnVjdG9ycy5qcz85NGY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxldCBhcnIgPSBbJ1NpZGRpcScsICdNZWRldCcsICdGYXJraG9kJ11cblxuLy8gbGV0IFtzaWRkaXEsIG1lZGV0LCBmYXJraG9kXSA9IGFyclxuXG4vLyBjb25zb2xlLmxvZygnb3JpZ2luYWxBcnJheScsIGFyclswXSlcblxuLy8gY29uc29sZS5sb2coJy0tLScsIHNpZGRpcSwgbWVkZXQsIGZhcmtob2QpXG5cbmxldCBhcnIgPSBbJ0p1bGl1cycsICdDYWVzYXInLCAnQ29uc3VsJywgJ29mIHRoZSBSb21hbiBSZXB1YmxpYyddXG5cbmxldCBbZmlydE5hbWUsIHRpdGxlXSA9IGFyclxuXG4vL2Rlc3RydWN0ZSBTZXRcbmxldCBteVNldCA9IG5ldyBTZXQoWydvbmUnLCAndHdvJywgJ3RocmVlJ10pXG5cbmxldCBbb25lLCB0d28sIHRocmVlXSA9IG15U2V0XG5cbi8vIGNvbnNvbGUubG9nKCctLS0tJywgb25lLCB0d28sIHRocmVlKVxuXG4vLyBsZXQgdXNlciA9IHt9XG4vLyBsZXQgdXNlckFyciA9IChbJ1NpZGRpcScsICdLaGFzYW5vdiddWyh1c2VyLm5hbWUsIHVzZXIuc3VybmFtZSldID0gdXNlckFycilcbi8vIGNvbnNvbGUuaW5mbygnLS0tLScsIHVzZXIpXG5cbi8vID09PSBFbnRyaWVzID09PT1cbi8vIGxldCB1c2VyID0ge1xuLy8gICBuYW1lOiAnSm9obicsXG4vLyAgIGFnZTogMzAsXG4vLyB9XG5cbi8vIGxldCBrZXlWYWx1ZU9mT2JqID0gT2JqZWN0LmVudHJpZXModXNlcilcbi8vIGxldCBbdXNlck5hbWUsIGFnZV0gPSBbXG4vLyAgIFsnbmFtZScsICdKb2huJ10sXG4vLyAgIFsnYWdlJywgJzMwJ10sXG4vLyBdXG5cbi8vIGNvbnNvbGUubG9nKCctLS0gdXNlck5hbWUnLCB1c2VyTmFtZSlcbi8vIGNvbnNvbGUubG9nKCctLS0gam9obicsIGFnZSlcblxuLy8gZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGtleVZhbHVlT2ZPYmopIHtcbi8vICAgY29uc29sZS5sb2coJy0tLSBrZXkgLS0tJywga2V5KVxuLy8gICBjb25zb2xlLmxvZygnLS0tIHZhbHVlIC0tLS0nLCB2YWx1ZSlcbi8vIH1cblxuLy8gPT09PSBNYXAgPT09PVxuLy8gbGV0IHVzZXIgPSBuZXcgTWFwKClcbi8vIHVzZXIuc2V0KCduYW1lJywgJ0pvaG4nKVxuLy8gdXNlci5zZXQoJ2FnZScsICczMCcpXG5cbi8vIC8vIE1hcCDQv9C10YDQtdCx0LjRgNCw0LXRgiDQutCw0Log0L/QsNGA0YsgW9C60LvRjtGHLCDQt9C90LDRh9C10L3QuNC1XSwg0YfRgtC+INC+0YfQtdC90Ywg0YPQtNC+0LHQvdC+INC00LvRjyDQtNC10YHRgtGA0YPQutGC0YPRgNC40YDQvtCy0LDQvdC40Y9cbi8vIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB1c2VyKSB7XG4vLyAgIGNvbnNvbGUubG9nKGAke2tleX06JHt2YWx1ZX1gKSAvLyBuYW1lOkpvaG4sINC30LDRgtC10LwgYWdlOjMwXG4vLyB9XG5cbi8vID09PSAgUkVTVCBPcGVyYXRvclxuLy8gbGV0IGNhZXNhciA9IFsnSnVsaXVzJywgJ0NhZXNhcicsICdDb25zdWwnLCAnb2YgdGhlIFJvbWFuIFJlcHVibGljJ11cblxuLy8gbGV0IFtuYW1lLCBzdXJuYW1lLCAuLi5yZXN0XSA9IGNhZXNhclxuLy8gY29uc29sZS5sb2cocmVzdClcblxuLy8gPT09IERlZmF1bHQgVmFsdWUgPT09XG5sZXQgW2ZpcnN0TmFtZSA9ICdWYXN5YScsIHN1cm5hbWUgPSAnUHVwa2luJ10gPSBbXVxuY29uc29sZS5sb2coZmlyc3ROYW1lLCBzdXJuYW1lKVxuIl0sIm5hbWVzIjpbImFyciIsImZpcnROYW1lIiwidGl0bGUiLCJteVNldCIsIlNldCIsIm9uZSIsInR3byIsInRocmVlIiwiZmlyc3ROYW1lIiwic3VybmFtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lessons/5.10/desctructors.js\n"));

/***/ })

});