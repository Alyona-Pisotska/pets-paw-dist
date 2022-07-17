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

/***/ "./src/js/catapi/config.js":
/*!*********************************!*\
  !*** ./src/js/catapi/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"subId\": () => (/* binding */ subId)\n/* harmony export */ });\nconst subId = 'i8FhYm37ZEXFAIB';\n\n//# sourceURL=webpack://pets-paw/./src/js/catapi/config.js?");

/***/ }),

/***/ "./src/js/catapi/image.js":
/*!********************************!*\
  !*** ./src/js/catapi/image.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomImage\": () => (/* binding */ getRandomImage)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * @returns {Promise}\n */\nasync function getRandomImage() {\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/images/search');\n    return response.data[0];\n  } catch (error) {\n    console.error('getRandomImage error: ', error);\n  }\n}\n\n//# sourceURL=webpack://pets-paw/./src/js/catapi/image.js?");

/***/ }),

/***/ "./src/js/catapi/reaction.js":
/*!***********************************!*\
  !*** ./src/js/catapi/reaction.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DISLIKE_TYPE\": () => (/* binding */ DISLIKE_TYPE),\n/* harmony export */   \"FAVOURITE_TYPE\": () => (/* binding */ FAVOURITE_TYPE),\n/* harmony export */   \"LIKE_TYPE\": () => (/* binding */ LIKE_TYPE),\n/* harmony export */   \"getVotes\": () => (/* binding */ getVotes),\n/* harmony export */   \"voteForImage\": () => (/* binding */ voteForImage)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/catapi/config.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_icons_fav_20_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/icons/fav-20.svg */ \"./src/images/icons/fav-20.svg\");\n/* harmony import */ var _images_icons_like_color_20_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/icons/like-color-20.svg */ \"./src/images/icons/like-color-20.svg\");\n/* harmony import */ var _images_icons_dislike_color_20_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/icons/dislike-color-20.svg */ \"./src/images/icons/dislike-color-20.svg\");\n\n\n\n\n\n\n/**\n * @returns {Promise}\n */\nasync function getVotes() {\n  try {\n    const reactions = [];\n    const votes = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/votes', { sub_id: _config__WEBPACK_IMPORTED_MODULE_0__.subId });\n    for (const item of votes.data) {\n      reactions.push(new Reaction(item.image_id, item.value, item.created_at));\n    }\n\n    const favourites = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/favourites', { sub_id: _config__WEBPACK_IMPORTED_MODULE_0__.subId });\n    for (const item of favourites.data) {\n      reactions.push(new Reaction(item.image.id, FAVOURITE_TYPE, item.created_at));\n    }\n\n    return reactions.sort((a, b) => b.createdAt - a.createdAt);\n  } catch (error) {\n    console.error('getVotes error: ', error);\n  }\n}\n\n/**\n * @param {string} imageId\n * @param {number} type\n * @returns {Promise}\n */\nasync function voteForImage(imageId, type) {\n  try {\n    switch (type) {\n      case LIKE_TYPE:\n      case DISLIKE_TYPE:\n        const responseVotes = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/votes', {\n          \"image_id\": imageId,\n          \"sub_id\": _config__WEBPACK_IMPORTED_MODULE_0__.subId,\n          \"value\": type\n        });\n        return responseVotes.data;\n      case FAVOURITE_TYPE:\n        const responseFavourites = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/favourites', {\n          \"image_id\": imageId,\n          \"sub_id\": _config__WEBPACK_IMPORTED_MODULE_0__.subId,\n        });\n        return responseFavourites.data;\n    }\n  } catch (error) {\n    console.error('getRandomImage error: ', error);\n  }\n}\n\nconst LIKE_TYPE = 1;\nconst DISLIKE_TYPE = 0;\nconst FAVOURITE_TYPE = 2;\n\nconst LIKE_TITLE = 'Likes';\nconst DISLIKE_TITLE = 'Dislikes';\nconst FAVOURITE_TITLE = 'Favourites';\n\nclass Reaction {\n  /**\n   * @param {string} imageId\n   * @param {number} type\n   * @param {Date} createdAt\n   * @param {string} src\n   * @param {string} title\n   */\n  constructor(imageId, type, createdAt) {\n    this.imageId = imageId;\n    this.type = type;\n    this.createdAt = new Date(createdAt);\n    this.src = this.getIconByType(type);\n    this.title = this.getTitleByType(type);\n  }\n\n  /**\n   * @param {number} type\n   * @returns {string}\n   */\n  getIconByType(type) {\n    switch (type) {\n      case LIKE_TYPE:\n        return _images_icons_like_color_20_svg__WEBPACK_IMPORTED_MODULE_3__;\n      case DISLIKE_TYPE:\n        return _images_icons_dislike_color_20_svg__WEBPACK_IMPORTED_MODULE_4__;\n      case FAVOURITE_TYPE:\n        return _images_icons_fav_20_svg__WEBPACK_IMPORTED_MODULE_2__;\n    }\n  }\n\n  /**\n   * @param {number} type\n   * @returns {string}\n   */\n  getTitleByType(type) {\n    switch (type) {\n      case LIKE_TYPE:\n        return LIKE_TITLE;\n      case DISLIKE_TYPE:\n        return DISLIKE_TITLE;\n      case FAVOURITE_TYPE:\n        return FAVOURITE_TITLE;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://pets-paw/./src/js/catapi/reaction.js?");

/***/ }),

/***/ "./src/js/voting.js":
/*!**************************!*\
  !*** ./src/js/voting.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosConfig */ \"./src/js/axiosConfig.js\");\n/* harmony import */ var _catapi_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catapi/image */ \"./src/js/catapi/image.js\");\n/* harmony import */ var _catapi_reaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catapi/reaction */ \"./src/js/catapi/reaction.js\");\n\n\n\n\n\nwindow.onload = function () {\n  (0,_catapi_image__WEBPACK_IMPORTED_MODULE_2__.getRandomImage)().then(res => {\n    const imageElement = document.createElement('img');\n    imageElement.src = res.url;\n    imageElement.alt = 'cat';\n    imageElement.className = 'image';\n    const containerImage = document.getElementsByClassName('content-container__image')[0];\n    containerImage.appendChild(imageElement);\n\n    const votingLike = document.getElementsByClassName('voting-panel__like')[0];\n    const votingDislike = document.getElementsByClassName('voting-panel__dislike')[0];\n    const votingFavourite = document.getElementsByClassName('voting-panel__fav')[0];\n\n    votingLike.addEventListener(\"click\", function () {\n      (0,_catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.voteForImage)(res.id, _catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.LIKE_TYPE).then(() => {\n        document.location.reload();\n      });\n    });\n    votingDislike.addEventListener(\"click\", function () {\n      (0,_catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.voteForImage)(res.id, _catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.DISLIKE_TYPE).then(() => {\n        document.location.reload();\n      });\n    });\n    votingFavourite.addEventListener(\"click\", function () {\n      (0,_catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.voteForImage)(res.id, _catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.FAVOURITE_TYPE).then(() => {\n        document.location.reload();\n      });\n    });\n  });\n  (0,_catapi_reaction__WEBPACK_IMPORTED_MODULE_3__.getVotes)().then(reactions => {\n    const containerElement = document.getElementsByClassName('content-container')[0];\n    for (const reaction of reactions) {\n      const reactionElement = document.createElement('div');\n      reactionElement.classList.add('content-container__user-actions');\n\n      const reactionTime = reaction.createdAt.toLocaleTimeString('default', {\n        hour: '2-digit',\n        minute: '2-digit'\n      });\n      const reactionText = `Image ID:&nbsp;<span class=\"image-id\">${reaction.imageId}</span>&nbsp;was added to ${reaction.title}`;\n      const reactionSrc = reaction.src;\n      const reactionAlt = `${reaction.title} ${reaction.imageId}`\n\n      reactionElement.innerHTML = getReactionHtml(reactionTime, reactionText, reactionSrc, reactionAlt);\n\n      containerElement.appendChild(reactionElement);\n    }\n  });\n};\n\n/**\n * @param {string} reactionTime\n * @param {string} reactionText\n * @param {string} reactionSrc\n * @param {string} reactionAlt\n * @returns {string}\n */\nfunction getReactionHtml(reactionTime, reactionText, reactionSrc, reactionAlt) {\n  return `<div class=\"logs-information\">\n    <div class=\"logs-information__time\">${reactionTime}</div>\n    \n      <div class=\"logs-information__user-action\">${reactionText}</div>\n    </div>\n\n    <div class=\"logs-information__reaction\">\n      <img src=\"${reactionSrc}\" alt=\"${reactionAlt}\">\n    </div>\n  </div>`.trim();\n}\n\n\n//# sourceURL=webpack://pets-paw/./src/js/voting.js?");

/***/ }),

/***/ "./src/images/icons/dislike-color-20.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/dislike-color-20.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0b569aff7aa7e98ba74.svg\";\n\n//# sourceURL=webpack://pets-paw/./src/images/icons/dislike-color-20.svg?");

/***/ }),

/***/ "./src/images/icons/fav-20.svg":
/*!*************************************!*\
  !*** ./src/images/icons/fav-20.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f30ae98c031a9e7f33c8.svg\";\n\n//# sourceURL=webpack://pets-paw/./src/images/icons/fav-20.svg?");

/***/ }),

/***/ "./src/images/icons/like-color-20.svg":
/*!********************************************!*\
  !*** ./src/images/icons/like-color-20.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46dd82e42e10fe2adbd0.svg\";\n\n//# sourceURL=webpack://pets-paw/./src/images/icons/like-color-20.svg?");

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"voting": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpets_paw"] = self["webpackChunkpets_paw"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_axios_index_js-node_modules_css-loader_dist_runtime_api_js-node_modules_-11790e","src_styles_style_scss-src_js_axiosConfig_js"], () => (__webpack_require__("./src/js/voting.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;