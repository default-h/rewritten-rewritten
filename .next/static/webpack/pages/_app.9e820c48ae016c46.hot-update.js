"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/_app/Header/Header.jsx":
/*!*******************************************!*\
  !*** ./components/_app/Header/Header.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header/Header.module.scss */ \"./components/_app/Header/Header.module.scss\");\n/* harmony import */ var _Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_assets_img_logo_eyes_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/img/logo_eyes.webp */ \"./public/assets/img/logo_eyes.webp\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_icons_bars_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/assets/icons/bars-solid.svg */ \"./public/assets/icons/bars-solid.svg\");\n/* harmony import */ var _public_assets_img_buttons_play_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/assets/img/buttons_play.webp */ \"./public/assets/img/buttons_play.webp\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Login */ \"./components/_app/Header/Login.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), nav = ref[0], setNav = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menu = ref1[0], setMenu = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loginToggled = ref2[0], setLoginToggled = ref2[1];\n    var showLogin = function() {\n        setLoginToggled(!loginToggled);\n        console.log(loginToggled);\n    };\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), registerToggled = ref3[0], setRegisterToggled = ref3[1];\n    var showRegister = function() {\n        setRegisterToggled(!registerToggled);\n        console.log(registerToggled);\n    };\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), modalToggled = ref4[0], setModalToggled = ref4[1];\n    var showModal = function() {\n        setModalToggled(!modalToggled);\n    };\n    var forceRegister = function() {\n        setLoginToggled(loginToggled = true);\n        setModalToggled(modalToggled = false);\n        setRegisterToggled(registerToggled = true);\n    };\n    var forceLogin = function() {\n        setLoginToggled(loginToggled = true);\n        setModalToggled(modalToggled = true);\n        setRegisterToggled(registerToggled = false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: _public_assets_img_logo_eyes_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"Toontown eyes icon\"\n                }, void 0, false, {\n                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"\".concat(nav ? [\n                            (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menu),\n                            (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().active)\n                        ].join(\" \") : [\n                            (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().menu)\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().news),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://toontownrewritten.com/news\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: \"news\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sellbot),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.toontownrewritten.com/taskforce/fieldoffices\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: \"sellbot task force\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().signup),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: function() {\n                                        forceRegister();\n                                    },\n                                    children: \"sign up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().help),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://toontownrewritten.com/help\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: \"help\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"play-container\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().left),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().paragraph),\n                                        children: [\n                                            \"Returning Toon?\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: forceLogin,\n                                                children: \"CLICK TO LOGIN\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        showLogin: showLogin,\n                                        loginToggled: loginToggled,\n                                        showRegister: showRegister,\n                                        registerToggled: registerToggled,\n                                        showModal: showModal,\n                                        modalToggled: modalToggled\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().right),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.toontownrewritten.com/play\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: _public_assets_img_buttons_play_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"Play button\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(menu ? [\n                    (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"menu-btn\"]),\n                    (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().open)\n                ].join(\" \") : [\n                    (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"menu-btn\"])\n                ]),\n                onClick: function() {\n                    setMenu(!menu);\n                    setNav(!nav);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Header_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"menu-btn__burger\"])\n                }, void 0, false, {\n                    fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stealth/Desktop/rewritten-rewritten/components/_app/Header/Header.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"qFaNb0FgmUAlixM3GIYtVTwVrQA=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLEVBQUVBLGVBQWU7d0NBQ2hDSyxTQUFTLEVBQUVBLFNBQVM7d0NBQ3BCRixZQUFZLEVBQUVBLFlBQVk7Ozs7OzZDQUMxQjs7Ozs7O3FDQUNFOzBDQUNOLDhEQUFDUSxLQUFHO2dDQUFDRixTQUFTLEVBQUUxQix5RUFBWTswQ0FDMUIsNEVBQUNxQyxHQUFDO29DQUNBQyxJQUFJLEVBQUMsd0NBQXdDO29DQUM3Q0MsTUFBTSxFQUFDLFFBQVE7b0NBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7OENBRXpCLDRFQUFDdEMsbURBQUs7d0NBQUM0QixHQUFHLEVBQUV6Qiw0RUFBSTt3Q0FBRTBCLEdBQUcsRUFBQyxhQUFhOzs7Ozs2Q0FBRzs7Ozs7eUNBQ3BDOzs7OztxQ0FDQTs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7MEJBRU4sOERBQUNZLFFBQU07Z0JBQ0xqQixTQUFTLEVBQUUsRUFBQyxDQUlYLE9BSENoQixJQUFJLEdBQ0E7b0JBQUNWLCtFQUFrQjtvQkFBRUEsd0VBQVc7aUJBQUMsQ0FBQ2tDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FDM0M7b0JBQUNsQywrRUFBa0I7aUJBQUMsQ0FDeEI7Z0JBQ0Y0QyxPQUFPLEVBQUUsV0FBTTtvQkFDYmpDLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztvQkFDZkQsTUFBTSxDQUFDLENBQUNELEdBQUcsQ0FBQyxDQUFDO2lCQUNkOzBCQUVELDRFQUFDb0IsS0FBRztvQkFBQ0YsU0FBUyxFQUFFMUIsdUZBQTBCOzs7Ozt5QkFBUTs7Ozs7cUJBQzNDOzs7Ozs7YUFDRixDQUNUO0NBQ0g7R0E5SEtPLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWdJWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvX2FwcC9IZWFkZXIvSGVhZGVyLmpzeD9mNGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgZXllcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9sb2dvX2V5ZXMud2VicCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgaGFtYnVyZ2VyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaWNvbnMvYmFycy1zb2xpZC5zdmcnO1xuXG5pbXBvcnQgcGxheSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ltZy9idXR0b25zX3BsYXkud2VicCc7XG5cbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbbmF2LCBzZXROYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2xvZ2luVG9nZ2xlZCwgc2V0TG9naW5Ub2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93TG9naW4gPSAoKSA9PiB7XG4gICAgc2V0TG9naW5Ub2dnbGVkKCFsb2dpblRvZ2dsZWQpO1xuICAgIGNvbnNvbGUubG9nKGxvZ2luVG9nZ2xlZCk7XG4gIH07XG5cbiAgY29uc3QgW3JlZ2lzdGVyVG9nZ2xlZCwgc2V0UmVnaXN0ZXJUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzaG93UmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgc2V0UmVnaXN0ZXJUb2dnbGVkKCFyZWdpc3RlclRvZ2dsZWQpO1xuICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVG9nZ2xlZCk7XG4gIH07XG5cbiAgY29uc3QgW21vZGFsVG9nZ2xlZCwgc2V0TW9kYWxUb2dnbGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbFRvZ2dsZWQoIW1vZGFsVG9nZ2xlZCk7XG4gIH07XG4gIGNvbnN0IGZvcmNlUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgc2V0TG9naW5Ub2dnbGVkKChsb2dpblRvZ2dsZWQgPSB0cnVlKSk7XG4gICAgc2V0TW9kYWxUb2dnbGVkKChtb2RhbFRvZ2dsZWQgPSBmYWxzZSkpO1xuICAgIHNldFJlZ2lzdGVyVG9nZ2xlZCgocmVnaXN0ZXJUb2dnbGVkID0gdHJ1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGZvcmNlTG9naW4gPSAoKSA9PiB7XG4gICAgc2V0TG9naW5Ub2dnbGVkKChsb2dpblRvZ2dsZWQgPSB0cnVlKSk7XG4gICAgc2V0TW9kYWxUb2dnbGVkKChtb2RhbFRvZ2dsZWQgPSB0cnVlKSk7XG4gICAgc2V0UmVnaXN0ZXJUb2dnbGVkKChyZWdpc3RlclRvZ2dsZWQgPSBmYWxzZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgPEltYWdlIHNyYz17ZXllc30gYWx0PSdUb29udG93biBleWVzIGljb24nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBuYXYgPyBbc3R5bGVzLm1lbnUsIHN0eWxlcy5hY3RpdmVdLmpvaW4oJyAnKSA6IFtzdHlsZXMubWVudV1cbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uZXdzfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdG9vbnRvd25yZXdyaXR0ZW4uY29tL25ld3MnXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIG5ld3NcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zZWxsYm90fT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LnRvb250b3ducmV3cml0dGVuLmNvbS90YXNrZm9yY2UvZmllbGRvZmZpY2VzJ1xuICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBzZWxsYm90IHRhc2sgZm9yY2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXB9PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yY2VSZWdpc3RlcigpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBzaWduIHVwXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5oZWxwfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdG9vbnRvd25yZXdyaXR0ZW4uY29tL2hlbHAnXG4gICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGhlbHBcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwbGF5LWNvbnRhaW5lciddfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgUmV0dXJuaW5nIFRvb24/XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZvcmNlTG9naW59PkNMSUNLIFRPIExPR0lOPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TG9naW5cbiAgICAgICAgICAgICAgc2hvd0xvZ2luPXtzaG93TG9naW59XG4gICAgICAgICAgICAgIGxvZ2luVG9nZ2xlZD17bG9naW5Ub2dnbGVkfVxuICAgICAgICAgICAgICBzaG93UmVnaXN0ZXI9e3Nob3dSZWdpc3Rlcn1cbiAgICAgICAgICAgICAgcmVnaXN0ZXJUb2dnbGVkPXtyZWdpc3RlclRvZ2dsZWR9XG4gICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgICAgICBtb2RhbFRvZ2dsZWQ9e21vZGFsVG9nZ2xlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy50b29udG93bnJld3JpdHRlbi5jb20vcGxheSdcbiAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cGxheX0gYWx0PSdQbGF5IGJ1dHRvbicgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIG1lbnVcbiAgICAgICAgICAgID8gW3N0eWxlc1snbWVudS1idG4nXSwgc3R5bGVzLm9wZW5dLmpvaW4oJyAnKVxuICAgICAgICAgICAgOiBbc3R5bGVzWydtZW51LWJ0biddXVxuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldE1lbnUoIW1lbnUpO1xuICAgICAgICAgIHNldE5hdighbmF2KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbWVudS1idG5fX2J1cmdlciddfT48L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJleWVzIiwiSW1hZ2UiLCJMaW5rIiwiaGFtYnVyZ2VyIiwicGxheSIsIkxvZ2luIiwiSGVhZGVyIiwibmF2Iiwic2V0TmF2IiwibWVudSIsInNldE1lbnUiLCJsb2dpblRvZ2dsZWQiLCJzZXRMb2dpblRvZ2dsZWQiLCJzaG93TG9naW4iLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJUb2dnbGVkIiwic2V0UmVnaXN0ZXJUb2dnbGVkIiwic2hvd1JlZ2lzdGVyIiwibW9kYWxUb2dnbGVkIiwic2V0TW9kYWxUb2dnbGVkIiwic2hvd01vZGFsIiwiZm9yY2VSZWdpc3RlciIsImZvcmNlTG9naW4iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJkaXYiLCJsb2dvIiwic3JjIiwiYWx0IiwidWwiLCJhY3RpdmUiLCJqb2luIiwibGkiLCJuZXdzIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzZWxsYm90Iiwic2lnbnVwIiwiYnV0dG9uIiwib25DbGljayIsImhlbHAiLCJsZWZ0IiwicCIsInBhcmFncmFwaCIsImJyIiwicmlnaHQiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/_app/Header/Header.jsx\n");

/***/ })

});