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

eval(__webpack_require__.ts("// let arr = ['Siddiq', 'Medet', 'Farkhod']\n// let [siddiq, medet, farkhod] = arr\n// console.log('originalArray', arr[0])\n// console.log('---', siddiq, medet, farkhod)\nlet arr = [\n    \"Julius\",\n    \"Caesar\",\n    \"Consul\",\n    \"of the Roman Republic\"\n];\nlet [firtName, title] = arr;\n//destructe Set\nlet mySet = new Set([\n    \"one\",\n    \"two\",\n    \"three\"\n]);\nlet [one, two, three] = mySet;\n// console.log('----', one, two, three)\n// let user = {}\n// let userArr = (['Siddiq', 'Khasanov'][(user.name, user.surname)] = userArr)\n// console.info('----', user)\nlet user = {\n    name: \"John\",\n    age: 30\n};\nlet keyValueOfObj = Object.entries(user);\nlet [userName, john] = [\n    [\n        \"name\",\n        \"John\"\n    ],\n    [\n        \"age\",\n        \"30\"\n    ]\n];\nconsole.log(\"--- userName\", userName);\nconsole.log(\"--- john\", john) // for (let [key, value] of keyValueOfObj) {\n //   console.log('--- key ---', key)\n //   console.log('--- value ----', value)\n // }\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbGVzc29ucy81LjEwL2Rlc2N0cnVjdG9ycy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFFM0MscUNBQXFDO0FBRXJDLHVDQUF1QztBQUV2Qyw2Q0FBNkM7QUFFN0MsSUFBSUEsTUFBTTtJQUFDO0lBQVU7SUFBVTtJQUFVO0NBQXdCO0FBRWpFLElBQUksQ0FBQ0MsVUFBVUMsTUFBTSxHQUFHRjtBQUV4QixlQUFlO0FBQ2YsSUFBSUcsUUFBUSxJQUFJQyxJQUFJO0lBQUM7SUFBTztJQUFPO0NBQVE7QUFFM0MsSUFBSSxDQUFDQyxLQUFLQyxLQUFLQyxNQUFNLEdBQUdKO0FBRXhCLHVDQUF1QztBQUV2QyxnQkFBZ0I7QUFDaEIsOEVBQThFO0FBQzlFLDZCQUE2QjtBQUU3QixJQUFJSyxPQUFPO0lBQ1RDLE1BQU07SUFDTkMsS0FBSztBQUNQO0FBRUEsSUFBSUMsZ0JBQWdCQyxPQUFPQyxPQUFPLENBQUNMO0FBQ25DLElBQUksQ0FBQ00sVUFBVUMsS0FBSyxHQUFHO0lBQ3JCO1FBQUM7UUFBUTtLQUFPO0lBQ2hCO1FBQUM7UUFBTztLQUFLO0NBQ2Q7QUFDREMsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkg7QUFDNUJFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRixNQUV4Qiw0Q0FBNEM7Q0FDNUMsb0NBQW9DO0NBQ3BDLHlDQUF5QztDQUN6QyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sZXNzb25zLzUuMTAvZGVzY3RydWN0b3JzLmpzPzk0ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IGFyciA9IFsnU2lkZGlxJywgJ01lZGV0JywgJ0Zhcmtob2QnXVxuXG4vLyBsZXQgW3NpZGRpcSwgbWVkZXQsIGZhcmtob2RdID0gYXJyXG5cbi8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbEFycmF5JywgYXJyWzBdKVxuXG4vLyBjb25zb2xlLmxvZygnLS0tJywgc2lkZGlxLCBtZWRldCwgZmFya2hvZClcblxubGV0IGFyciA9IFsnSnVsaXVzJywgJ0NhZXNhcicsICdDb25zdWwnLCAnb2YgdGhlIFJvbWFuIFJlcHVibGljJ11cblxubGV0IFtmaXJ0TmFtZSwgdGl0bGVdID0gYXJyXG5cbi8vZGVzdHJ1Y3RlIFNldFxubGV0IG15U2V0ID0gbmV3IFNldChbJ29uZScsICd0d28nLCAndGhyZWUnXSlcblxubGV0IFtvbmUsIHR3bywgdGhyZWVdID0gbXlTZXRcblxuLy8gY29uc29sZS5sb2coJy0tLS0nLCBvbmUsIHR3bywgdGhyZWUpXG5cbi8vIGxldCB1c2VyID0ge31cbi8vIGxldCB1c2VyQXJyID0gKFsnU2lkZGlxJywgJ0toYXNhbm92J11bKHVzZXIubmFtZSwgdXNlci5zdXJuYW1lKV0gPSB1c2VyQXJyKVxuLy8gY29uc29sZS5pbmZvKCctLS0tJywgdXNlcilcblxubGV0IHVzZXIgPSB7XG4gIG5hbWU6ICdKb2huJyxcbiAgYWdlOiAzMCxcbn1cblxubGV0IGtleVZhbHVlT2ZPYmogPSBPYmplY3QuZW50cmllcyh1c2VyKVxubGV0IFt1c2VyTmFtZSwgam9obl0gPSBbXG4gIFsnbmFtZScsICdKb2huJ10sXG4gIFsnYWdlJywgJzMwJ10sXG5dXG5jb25zb2xlLmxvZygnLS0tIHVzZXJOYW1lJywgdXNlck5hbWUpXG5jb25zb2xlLmxvZygnLS0tIGpvaG4nLCBqb2huKVxuXG4vLyBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2Yga2V5VmFsdWVPZk9iaikge1xuLy8gICBjb25zb2xlLmxvZygnLS0tIGtleSAtLS0nLCBrZXkpXG4vLyAgIGNvbnNvbGUubG9nKCctLS0gdmFsdWUgLS0tLScsIHZhbHVlKVxuLy8gfVxuIl0sIm5hbWVzIjpbImFyciIsImZpcnROYW1lIiwidGl0bGUiLCJteVNldCIsIlNldCIsIm9uZSIsInR3byIsInRocmVlIiwidXNlciIsIm5hbWUiLCJhZ2UiLCJrZXlWYWx1ZU9mT2JqIiwiT2JqZWN0IiwiZW50cmllcyIsInVzZXJOYW1lIiwiam9obiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lessons/5.10/desctructors.js\n"));

/***/ })

});