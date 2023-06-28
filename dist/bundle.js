/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./tv-room.jpg */ \"./src/tv-room.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./eye-outline.svg */ \"./src/eye-outline.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n\nbody {\n  background-color: #3695b1;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: 100%;\n  display: grid;\n  justify-content: center\n}\n\n.title {\n  justify-self: center;\n  color: white;\n  font-size: 2rem;\n  font-weight: 900;\n  text-shadow: 0rem 0rem 1rem black;\n  margin-top: 1rem;\n}\n\n.container {\n  backdrop-filter: blur(3px);\n  display: grid;\n  width: fit-content;\n  grid-template-rows: auto;\n  color: white;\n  box-shadow: 0rem 0rem 1rem black;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-top: 2rem;\n}\n  \nlabel {\n  margin-bottom: .2rem;\n  text-shadow: 0px 0px 10px black;\n}\n\n.input-container {\n  width: 15rem;\n  margin-bottom: .3rem;\n  align-content: center;\n}\n\n.password-show-input-container {\n  display: flex;\n  width: fit-content;\n  margin-bottom: .3rem;\n  align-content: center;\n}\n\ninput, select {\n  width: 100%;\n  text-indent: 1rem;\n  background-color: white;\n  border:.2rem solid rgb(255, 255, 255);\n  border-radius: 5px;\n  box-shadow: 0rem 0rem .2rem black;\n  outline: none;\n  box-sizing: border-box;\n}\n\ninput:focus:invalid, \nselect:focus:invalid {\n  border-color: rgb(228, 85, 85);\n  box-shadow: 0rem 0rem .2rem rgb(228, 85, 85);\n  border-radius: 5px 5px 0 0;\n}\n\ninput:valid, \nselect:valid {\n  border-color: rgb(85, 228, 104);\n  box-shadow: 0rem 0rem .2rem rgb(85, 228, 104);\n}\n\n.password-error-container {\n  margin-bottom: .1rem;\n  border-radius: 0 0 5px 5px;\n}\n\n.input-error {\n  width: 100%;\n  text-align: center;\n  font-size: 1rem;\n  color: white;\n  background-color: rgb(228, 85, 85);\n  padding: .2rem;\n  box-sizing: border-box;\n}\n\n.password-input-error {\n  text-align: start;\n  border-top: .1rem solid black;\n}\n\nbutton[type='submit'] {\n  width: 10rem;\n  justify-self: center;\n  align-self: center;\n  color: white;\n  border: .1rem solid #029bf4;\n  border-radius: 5px;\n  background-color: #2fa7ed;\n}\n\nbutton[type='submit']:hover {\n  border: .1rem solid #0378bb;\n  background-color: #0378bb;\n}\n\n.show-password {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-repeat: no-repeat;\n  box-shadow: 0rem 0rem .2rem black;\n  border: none;\n  border-radius: 5px;\n  margin-left: .1rem;\n}\n\na {\n  justify-self: center;\n  font-size: .9rem;\n  margin-top: 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://browser-form/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://browser-form/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://browser-form/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://browser-form/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://browser-form/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://browser-form/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/country-list.js":
/*!*****************************!*\
  !*** ./src/country-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countryArray = [\n  'Afghanistan',\n  'Åland Islands',\n  'Albania',\n  'Algeria',\n  'American Samoa',\n  'Andorra',\n  'Angola',\n  'Anguilla',\n  'Antarctica',\n  'Antigua and Barbuda',\n  'Argentina',\n  'Armenia',\n  'Aruba',\n  'Australia',\n  'Austria',\n  'Azerbaijan',\n  'Bahamas',\n  'Bahrain',\n  'Bangladesh',\n  'Barbados',\n  'Belarus',\n  'Belgium',\n  'Belize',\n  'Benin',\n  'Bermuda',\n  'Bhutan',\n  'Bolivia',\n  'Bosnia and Herzegovina',\n  'Botswana',\n  'Bouvet Island',\n  'Brazil',\n  'British Indian Ocean Territory',\n  'Brunei Darussalam',\n  'Bulgaria',\n  'Burkina Faso',\n  'Burundi',\n  'Cambodia',\n  'Cameroon',\n  'Canada',\n  'Cape Verde',\n  'Cayman Islands',\n  'Central African Republic',\n  'Chad',\n  'Chile',\n  'China',\n  'Christmas Island',\n  'Cocos (Keeling) Islands',\n  'Colombia',\n  'Comoros',\n  'Congo',\n  'Congo, The Democratic Republic of The',\n  'Cook Islands',\n  'Costa Rica',\n  \"Cote D'ivoire\",\n  'Croatia',\n  'Cuba',\n  'Curaçao',\n  'Cyprus',\n  'Czech Republic',\n  'Denmark',\n  'Djibouti',\n  'Dominica',\n  'Dominican Republic',\n  'Ecuador',\n  'Egypt',\n  'El Salvador',\n  'Equatorial Guinea',\n  'Eritrea',\n  'Estonia',\n  'Ethiopia',\n  'Falkland Islands (Malvinas)',\n  'Faroe Islands',\n  'Fiji',\n  'Finland',\n  'France',\n  'French Guiana',\n  'French Polynesia',\n  'French Southern Territories',\n  'Gabon',\n  'Gambia',\n  'Georgia',\n  'Germany',\n  'Ghana',\n  'Gibraltar',\n  'Greece',\n  'Greenland',\n  'Grenada',\n  'Guadeloupe',\n  'Guam',\n  'Guatemala',\n  'Guernsey',\n  'Guinea',\n  'Guinea-bissau',\n  'Guyana',\n  'Haiti',\n  'Heard Island and Mcdonald Islands',\n  'Holy See (Vatican City State)',\n  'Honduras',\n  'Hong Kong',\n  'Hungary',\n  'Iceland',\n  'India',\n  'Indonesia',\n  'Iran, Islamic Republic of',\n  'Iraq',\n  'Ireland',\n  'Isle of Man',\n  'Israel',\n  'Italy',\n  'Jamaica',\n  'Japan',\n  'Jersey',\n  'Jordan',\n  'Kazakhstan',\n  'Kenya',\n  'Kiribati',\n  \"Korea, Democratic People's Republic of\",\n  'Korea, Republic of',\n  'Kuwait',\n  'Kyrgyzstan',\n  \"Lao People's Democratic Republic\",\n  'Latvia',\n  'Lebanon',\n  'Lesotho',\n  'Liberia',\n  'Libyan Arab Jamahiriya',\n  'Liechtenstein',\n  'Lithuania',\n  'Luxembourg',\n  'Macao',\n  'Macedonia, The Former Yugoslav Republic of',\n  'Madagascar',\n  'Malawi',\n  'Malaysia',\n  'Maldives',\n  'Mali',\n  'Malta',\n  'Marshall Islands',\n  'Martinique',\n  'Mauritania',\n  'Mauritius',\n  'Mayotte',\n  'Mexico',\n  'Micronesia, Federated States of',\n  'Moldova, Republic of',\n  'Monaco',\n  'Mongolia',\n  'Montenegro',\n  'Montserrat',\n  'Morocco',\n  'Mozambique',\n  'Myanmar',\n  'Namibia',\n  'Nauru',\n  'Nepal',\n  'Netherlands',\n  'New Caledonia',\n  'New Zealand',\n  'Nicaragua',\n  'Niger',\n  'Nigeria',\n  'Niue',\n  'Norfolk Island',\n  'Northern Mariana Islands',\n  'Norway',\n  'Oman',\n  'Pakistan',\n  'Palau',\n  'Palestinian Territory, Occupied',\n  'Panama',\n  'Papua New Guinea',\n  'Paraguay',\n  'Peru',\n  'Philippines',\n  'Pitcairn',\n  'Poland',\n  'Portugal',\n  'Puerto Rico',\n  'Qatar',\n  'Reunion',\n  'Romania',\n  'Russia',\n  'Rwanda',\n  'Saint Helena',\n  'Saint Kitts and Nevis',\n  'Saint Lucia',\n  'Saint Pierre and Miquelon',\n  'Saint Vincent and The Grenadines',\n  'Samoa',\n  'San Marino',\n  'Sao Tome and Principe',\n  'Saudi Arabia',\n  'Senegal',\n  'Serbia',\n  'Seychelles',\n  'Sierra Leone',\n  'Singapore',\n  'Slovakia',\n  'Slovenia',\n  'Solomon Islands',\n  'Somalia',\n  'South Africa',\n  'South Georgia and The South Sandwich Islands',\n  'Spain',\n  'Sri Lanka',\n  'Sudan',\n  'Suriname',\n  'Svalbard and Jan Mayen',\n  'Eswatini',\n  'Sweden',\n  'Switzerland',\n  'Syrian Arab Republic',\n  'Taiwan (ROC)',\n  'Tajikistan',\n  'Tanzania, United Republic of',\n  'Thailand',\n  'Timor-leste',\n  'Togo',\n  'Tokelau',\n  'Tonga',\n  'Trinidad and Tobago',\n  'Tunisia',\n  'Turkey',\n  'Turkmenistan',\n  'Turks and Caicos Islands',\n  'Tuvalu',\n  'Uganda',\n  'Ukraine',\n  'United Arab Emirates',\n  'United Kingdom',\n  'United States',\n  'United States Minor Outlying Islands',\n  'Uruguay',\n  'Uzbekistan',\n  'Vanuatu',\n  'Venezuela',\n  'Vietnam',\n  'Virgin Islands, British',\n  'Virgin Islands, U.S.',\n  'Wallis and Futuna',\n  'Western Sahara',\n  'Yemen',\n  'Zambia',\n  'Zimbabwe',\n];\n\nfunction countryOptions() {\n  const selectCountry = document.getElementById('country');\n  const startOption = document.createElement('option');\n  startOption.setAttribute('disabled', '');\n  startOption.setAttribute('selected', '');\n  startOption.setAttribute('value', '');\n  startOption.innerText = '-- Select an option --';\n  selectCountry.appendChild(startOption);\n  for (let i = 0; i < countryArray.length; i += 1) {\n    const option = document.createElement('option');\n    option.setAttribute('value', `${countryArray[i]}`);\n    option.innerText = countryArray[i];\n    selectCountry.appendChild(option);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countryOptions);\n\n\n//# sourceURL=webpack://browser-form/./src/country-list.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addShowPasswordBtn: () => (/* binding */ addShowPasswordBtn),\n/* harmony export */   confirmPassword: () => (/* binding */ confirmPassword),\n/* harmony export */   inputEvent: () => (/* binding */ inputEvent),\n/* harmony export */   passwordError: () => (/* binding */ passwordError)\n/* harmony export */ });\nfunction emailError(input, inputError) {\n  const error = inputError;\n  if (input.validity.valueMissing) {\n    error.innerText = 'You need to enter an Email.';\n  } else if (input.validity.typeMismatch) {\n    error.innerText = 'Enter @ followed by the provider name.';\n  }\n}\n\nfunction countryError(input, inputError) {\n  const error = inputError;\n  if (input.validity.valueMissing) {\n    error.innerText = 'Choose a country.';\n  }\n}\n\nfunction zipCodeError(input, inputError) {\n  const error = inputError;\n  if (input.validity.valueMissing) {\n    error.innerText = 'You need to enter a Zip Code.';\n  } else if (input.validity.tooShort) {\n    error.innerText = 'Must contain at least 5 characters.';\n  }\n}\n\nfunction passwordError(input) {\n  const lowercase = /[a-z]/g;\n  const uppercase = /[A-Z]/g;\n  const numbers = /[0-9]/g;\n  const alphanumeric = /[a-zA-Z0-9]+/;\n\n  const enterPasswordError = document.getElementById('enter-password-error');\n  if (input.validity.valueMissing) {\n    enterPasswordError.style.display = 'block';\n  } else {\n    enterPasswordError.style.display = 'none';\n  }\n\n  const lowercaseError = document.getElementById('lowercase-error');\n  if (!input.value.match(lowercase)) {\n    lowercaseError.style.display = 'block';\n  } else {\n    lowercaseError.style.display = 'none';\n  }\n\n  const uppercaseError = document.getElementById('uppercase-error');\n  if (!input.value.match(uppercase)) {\n    uppercaseError.style.display = 'block';\n  } else {\n    uppercaseError.style.display = 'none';\n  }\n\n  const numberError = document.getElementById('numbers-error');\n  if (!input.value.match(numbers)) {\n    numberError.style.display = 'block';\n  } else {\n    numberError.style.display = 'none';\n  }\n\n  const specialCharacterError = document.getElementById('special-characters-error');\n  if (!input.value.match(alphanumeric)) {\n    specialCharacterError.style.display = 'block';\n  } else {\n    specialCharacterError.style.display = 'none';\n  }\n\n  const tooShortError = document.getElementById('too-short-error');\n  if (input.validity.tooShort) {\n    tooShortError.style.display = 'block';\n  } else {\n    tooShortError.style.display = 'none';\n  }\n}\n\nfunction confirmPassword(inputPassword, inputConfirm) {\n  const differentPasswordError = document.getElementById('different-password-error');\n  const passwordPattern = inputPassword.value;\n  inputConfirm.setAttribute('pattern', passwordPattern);\n  if (inputConfirm.validity.patternMismatch || inputConfirm.value.length === 0) {\n    differentPasswordError.style.display = 'block';\n  } else {\n    differentPasswordError.style.display = 'none';\n  }\n}\n\nfunction addShowPasswordBtn(parent, input) {\n  const button = document.createElement('button');\n  button.setAttribute('type', 'button');\n  button.setAttribute('alt', 'button to show the written password');\n  button.classList.add('show-password');\n  parent.appendChild(button);\n  const inputTarget = input;\n  button.addEventListener('click', () => {\n    if (inputTarget.type === 'password') {\n      inputTarget.type = 'text';\n      button.style.backgroundImage = 'url(./eye-off-outline.svg)';\n    } else {\n      inputTarget.type = 'password';\n      button.style.backgroundImage = 'url(./eye-outline.svg)';\n    }\n  });\n}\n\nfunction inputEvent(input, inputError) {\n  const error = inputError;\n  if (input.validity.valid) {\n    error.innerText = '';\n    error.classList.remove('input-error');\n  } else {\n    error.classList.add('input-error');\n    if (input.name === 'email') {\n      emailError(input, inputError);\n    }\n    if (input.name === 'country') {\n      countryError(input, inputError);\n    }\n    if (input.name === 'zip') {\n      zipCodeError(input, inputError);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://browser-form/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _country_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-list */ \"./src/country-list.js\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n\n\n\n\nconst body = document.getElementsByTagName('body')[0];\n\nconst title = document.createElement('div');\ntitle.classList.add('title');\nbody.appendChild(title);\ntitle.innerText = 'Form Validation';\n\nconst form = document.createElement('form');\nform.setAttribute('novalidate', '');\nbody.appendChild(form);\n\nconst container = document.createElement('div');\ncontainer.classList.add('container');\nform.appendChild(container);\n\n// Email\nconst emailLabel = document.createElement('label');\nemailLabel.setAttribute('for', 'email');\ncontainer.appendChild(emailLabel);\nemailLabel.innerText = 'Email :';\n\nconst emailContainer = document.createElement('div');\nemailContainer.classList.add('input-container');\ncontainer.appendChild(emailContainer);\n\nconst emailInput = document.createElement('input');\nemailInput.setAttribute('type', 'email');\nemailInput.setAttribute('id', 'email');\nemailInput.setAttribute('name', 'email');\nemailInput.setAttribute('autocomplete', 'email');\nemailInput.setAttribute('required', '');\nemailContainer.appendChild(emailInput);\n\nconst emailError = document.createElement('div');\nemailError.setAttribute('id', 'email-error');\nemailError.setAttribute('aria-live', 'polite');\nemailContainer.appendChild(emailError);\n\n['click', 'input', 'keydown'].forEach((event) => emailInput.addEventListener(event, () => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(emailInput, emailError);\n}));\n\n// Country\nconst countryLabel = document.createElement('label');\ncountryLabel.setAttribute('for', 'country');\ncontainer.appendChild(countryLabel);\ncountryLabel.innerText = 'Country :';\n\nconst countryContainer = document.createElement('div');\ncountryContainer.classList.add('input-container');\ncontainer.appendChild(countryContainer);\n\nconst countrySelect = document.createElement('select');\ncountrySelect.setAttribute('id', 'country');\ncountrySelect.setAttribute('name', 'country');\ncountrySelect.setAttribute('autocomplete', 'country-name');\ncountrySelect.setAttribute('required', '');\ncountryContainer.appendChild(countrySelect);\n(0,_country_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst countryError = document.createElement('div');\ncountryError.setAttribute('id', 'country-error');\ncountryError.setAttribute('aria-live', 'polite');\ncountryContainer.appendChild(countryError);\n\n['click', 'change', 'keydown'].forEach((event) => countrySelect.addEventListener(event, () => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(countrySelect, countryError);\n}));\n\n// Zip code\nconst zipCodeLabel = document.createElement('label');\nzipCodeLabel.setAttribute('for', 'zip');\ncontainer.appendChild(zipCodeLabel);\nzipCodeLabel.innerText = 'Zip code :';\n\nconst zipCodeContainer = document.createElement('div');\nzipCodeContainer.classList.add('input-container');\ncontainer.appendChild(zipCodeContainer);\n\nconst zipCodeInput = document.createElement('input');\nzipCodeInput.setAttribute('type', 'text');\nzipCodeInput.setAttribute('id', 'zip');\nzipCodeInput.setAttribute('name', 'zip');\nzipCodeInput.setAttribute('autocomplete', 'postal-code');\nzipCodeInput.setAttribute('minlength', '5');\nzipCodeInput.setAttribute('maxlength', '9');\nzipCodeInput.setAttribute('required', '');\nzipCodeContainer.appendChild(zipCodeInput);\n\nconst zipCodeError = document.createElement('div');\nzipCodeError.setAttribute('id', 'zip-error');\nzipCodeError.setAttribute('aria-live', 'polite');\nzipCodeContainer.appendChild(zipCodeError);\n\n['click', 'input', 'keydown'].forEach((event) => zipCodeInput.addEventListener(event, () => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(zipCodeInput, zipCodeError);\n}));\n\n// Password\nconst passwordLabel = document.createElement('label');\npasswordLabel.setAttribute('for', 'password');\ncontainer.appendChild(passwordLabel);\npasswordLabel.innerText = 'Password :';\n\nconst passwordShowBtnContainer = document.createElement('div');\npasswordShowBtnContainer.classList.add('password-show-input-container');\ncontainer.appendChild(passwordShowBtnContainer);\n\nconst passwordContainer = document.createElement('div');\npasswordContainer.classList.add('input-container');\npasswordShowBtnContainer.appendChild(passwordContainer);\n\nconst regExPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Z0-9]+$';\n\nconst passwordInput = document.createElement('input');\npasswordInput.setAttribute('type', 'password');\npasswordInput.setAttribute('id', 'password');\npasswordInput.setAttribute('name', 'password');\npasswordInput.setAttribute('autocomplete', 'new-password');\npasswordInput.setAttribute('minlength', '8');\npasswordInput.setAttribute('maxlength', '16');\npasswordInput.setAttribute('pattern', regExPattern);\npasswordInput.setAttribute('required', '');\npasswordContainer.appendChild(passwordInput);\n\n// Error container\nconst passwordErrorContainer = document.createElement('div');\npasswordErrorContainer.classList.add('password-error-container');\npasswordContainer.appendChild(passwordErrorContainer);\n// All type of error\nconst enterPasswordError = document.createElement('div');\nenterPasswordError.setAttribute('id', 'enter-password-error');\nenterPasswordError.classList.add('input-error', 'password-input-error');\nenterPasswordError.setAttribute('aria-live', 'polite');\nenterPasswordError.style.display = 'none';\nenterPasswordError.innerText = 'You need to enter a Password.';\npasswordErrorContainer.appendChild(enterPasswordError);\n\nconst lowercaseError = document.createElement('div');\nlowercaseError.setAttribute('id', 'lowercase-error');\nlowercaseError.classList.add('input-error', 'password-input-error');\nlowercaseError.setAttribute('aria-live', 'polite');\nlowercaseError.style.display = 'none';\nlowercaseError.innerText = 'It must have at least one lowercase.';\npasswordErrorContainer.appendChild(lowercaseError);\n\nconst uppercaseError = document.createElement('div');\nuppercaseError.setAttribute('id', 'uppercase-error');\nuppercaseError.classList.add('input-error', 'password-input-error');\nuppercaseError.setAttribute('aria-live', 'polite');\nuppercaseError.style.display = 'none';\nuppercaseError.innerText = 'It must have at least one uppercase.';\npasswordErrorContainer.appendChild(uppercaseError);\n\nconst numberError = document.createElement('div');\nnumberError.setAttribute('id', 'numbers-error');\nnumberError.classList.add('input-error', 'password-input-error');\nnumberError.setAttribute('aria-live', 'polite');\nnumberError.style.display = 'none';\nnumberError.innerText = 'It must have at least one numbers.';\npasswordErrorContainer.appendChild(numberError);\n\nconst specialCharactersError = document.createElement('div');\nspecialCharactersError.setAttribute('id', 'special-characters-error');\nspecialCharactersError.classList.add('input-error', 'password-input-error');\nspecialCharactersError.setAttribute('aria-live', 'polite');\nspecialCharactersError.style.display = 'none';\nspecialCharactersError.innerText = 'Must contain only alphanumeric characters.';\npasswordErrorContainer.appendChild(specialCharactersError);\n\nconst tooShortError = document.createElement('div');\ntooShortError.setAttribute('id', 'too-short-error');\ntooShortError.classList.add('input-error', 'password-input-error');\ntooShortError.setAttribute('aria-live', 'polite');\ntooShortError.style.display = 'none';\ntooShortError.innerText = 'Must have at least 8 characters.';\npasswordErrorContainer.appendChild(tooShortError);\n\n(0,_function__WEBPACK_IMPORTED_MODULE_2__.addShowPasswordBtn)(passwordShowBtnContainer, passwordInput);\n\n['click', 'input', 'keydown'].forEach((event) => passwordInput.addEventListener(event, () => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.passwordError)(passwordInput);\n}));\n\n// Confirm Password\nconst confirmPasswordLabel = document.createElement('label');\nconfirmPasswordLabel.setAttribute('for', 'confirm-password');\ncontainer.appendChild(confirmPasswordLabel);\nconfirmPasswordLabel.innerText = 'Confirm Password :';\n\nconst passConfShowBtnContainer = document.createElement('div');\npassConfShowBtnContainer.classList.add('password-show-input-container');\ncontainer.appendChild(passConfShowBtnContainer);\n\nconst passConContainer = document.createElement('div');\npassConContainer.classList.add('input-container');\npassConfShowBtnContainer.appendChild(passConContainer);\n\nconst confirmPasswordInput = document.createElement('input');\nconfirmPasswordInput.setAttribute('type', 'password');\nconfirmPasswordInput.setAttribute('id', 'confirm-password');\nconfirmPasswordInput.setAttribute('name', 'confirm-password');\nconfirmPasswordInput.setAttribute('autocomplete', 'new-password');\nconfirmPasswordInput.setAttribute('minlength', '8');\nconfirmPasswordInput.setAttribute('maxlength', '16');\nconfirmPasswordInput.setAttribute('required', '');\npassConContainer.appendChild(confirmPasswordInput);\n\nconst differentPasswordError = document.createElement('div');\ndifferentPasswordError.setAttribute('id', 'different-password-error');\ndifferentPasswordError.classList.add('input-error', 'password-input-error');\ndifferentPasswordError.setAttribute('aria-live', 'polite');\ndifferentPasswordError.style.display = 'none';\ndifferentPasswordError.innerText = 'The password must be the same.';\npassConContainer.appendChild(differentPasswordError);\n\n(0,_function__WEBPACK_IMPORTED_MODULE_2__.addShowPasswordBtn)(passConfShowBtnContainer, confirmPasswordInput);\n\n['click', 'input', 'keydown'].forEach((event) => confirmPasswordInput.addEventListener(event, () => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.confirmPassword)(passwordInput, confirmPasswordInput);\n}));\n\n// Submit button\nconst submitBtn = document.createElement('button');\nsubmitBtn.setAttribute('type', 'submit');\ncontainer.appendChild(submitBtn);\nsubmitBtn.innerText = 'Confirm';\n\nform.addEventListener('submit', (e) => {\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(emailInput, emailError);\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(countrySelect, countryError);\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.inputEvent)(zipCodeInput, zipCodeError);\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.passwordError)(passwordInput);\n  (0,_function__WEBPACK_IMPORTED_MODULE_2__.confirmPassword)(passwordInput, confirmPasswordInput);\n  e.preventDefault();\n});\n\n// Background credit\nconst backgroundCredit = document.createElement('a');\nbackgroundCredit.setAttribute('href', 'https://www.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_9668869.htm#from_view=detail_author');\nbackgroundCredit.setAttribute('target', '_blank');\nbody.appendChild(backgroundCredit);\nbackgroundCredit.innerText = 'Background Image by upklyak on Freepik';\n\n\n//# sourceURL=webpack://browser-form/./src/index.js?");

/***/ }),

/***/ "./src/eye-outline.svg":
/*!*****************************!*\
  !*** ./src/eye-outline.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eye-outline.svg\";\n\n//# sourceURL=webpack://browser-form/./src/eye-outline.svg?");

/***/ }),

/***/ "./src/tv-room.jpg":
/*!*************************!*\
  !*** ./src/tv-room.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"tv-room.jpg\";\n\n//# sourceURL=webpack://browser-form/./src/tv-room.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;