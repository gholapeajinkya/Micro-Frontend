"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote_app"] = self["webpackChunkremote_app"] || []).push([["src_MyComponent_tsx"],{

/***/ "./src/MyComponent.tsx":
/*!*****************************!*\
  !*** ./src/MyComponent.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../common/temp/node_modules/.pnpm/axios@1.7.9/node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\nconst MyComponent = () => {\n  const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const getProducts = async () => {\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://fakestoreapi.com/products\").then(response => {\n      setProducts(response.data);\n    });\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    getProducts();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Products\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"products-container\"\n  }, products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-image\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: product.image,\n    alt: product.title\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"product-details\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, product.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"product-details-description\"\n  }, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$\", product.price))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);\n\n//# sourceURL=webpack://remote-app/./src/MyComponent.tsx?");

/***/ }),

/***/ "../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!*******************************************************************************************************************************!*\
  !*** ../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/runtime/api.js */ \"../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.App {\n  font-family: sans-serif;\n  text-align: center;\n  background-color:#AAA59D;\n  padding: 0;\n  margin: 0;\n}\n\n.products-container{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  height: 85vh;\n  overflow-y: auto;\n}\n\n.product-card{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 10px;\n  padding: 10px;\n  overflow: hidden;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.product-image img{\n  height: 200px;\n  object-fit: cover;\n  border-radius: 5px;\n  aspect-ratio: 3/4;\n  mix-blend-mode: multiply;\n  filter: contrast(1);\n}\n\n\n.product-details-description{\n  font-size: 0.8rem;\n  margin: 10px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 150px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://remote-app/./src/styles.css?../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../common/temp/node_modules/.pnpm/style-loader@4.0.0_webpack@5.97.1/node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/cjs.js!./styles.css */ \"../common/temp/node_modules/.pnpm/css-loader@6.11.0_webpack@5.97.1/node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _common_temp_node_modules_pnpm_style_loader_4_0_0_webpack_5_97_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _common_temp_node_modules_pnpm_css_loader_6_11_0_webpack_5_97_1_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://remote-app/./src/styles.css?");

/***/ })

}]);