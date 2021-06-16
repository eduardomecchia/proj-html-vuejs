/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    navigationLinks: ["home", "about us", "facilities", "membership", "testimonials", "blog"],
    thirdSectionFeatures: [{
      name: "Strength & Conditioning",
      iconClass: "fa-unlink",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us."
    }, {
      name: "Fitness & Cardio",
      iconClass: "fa-bicycle",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us."
    }, {
      name: "Flexibility & Rest",
      iconClass: "fa-cloud",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us."
    }, {
      name: "Health & Diet",
      iconClass: "fa-heartbeat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, ornare es volutpat etra us."
    }],
    fourthSectionFeedbacks: [{
      author: "Tara Smith",
      feedback: "The trainers at Avada Gym have helped me reach my fitness goals beyond anything I could of hoped for. I love it!",
      image: "review_1-compressor.jpg"
    }, {
      author: "Simon Chel",
      feedback: "The atmosphere at Avada Gym is amazing, the people are even better. All in all, it is a great place to work out.",
      image: "review_3-compressor-2.jpg"
    }, {
      author: "Jen Wirth",
      feedback: "The facilities at Avada Gym stood out to me the most. They are well maintained and have high quality equipment.",
      image: "review_2-compressor.jpg"
    }, {
      author: "Jeff Glum",
      feedback: "No bad things to say about Avada Gym, they are top notch at every corner and truly take care of their customers.",
      image: "review_4-compressor-2.jpg"
    }],
    fourthSectionImages: ["home-image1.jpg", "home-image2.jpg", "home-image3.jpg", "home-image4.jpg", "home-image5.jpg", "home-image6.jpg"],
    personalTrainers: [{
      name: "Ann Baker",
      title: "Personal Trainer",
      photo: "trainer1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
      facebook: "https://www.facebook.com/",
      // Placeholder for profile link
      twitter: "https://twitter.com/home",
      // Placeholder for profile link
      instagram: "https://www.instagram.com/" // Placeholder for profile link

    }, {
      name: "Anne Warren",
      title: "Personal Trainer",
      photo: "trainer3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
      facebook: "https://www.facebook.com/",
      // Placeholder for profile link
      twitter: "https://twitter.com/home",
      // Placeholder for profile link
      instagram: "https://www.instagram.com/" // Placeholder for profile link

    }, {
      name: "Peter Rice",
      title: "Personal Trainer",
      photo: "trainer4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nisl, onare volutpat.",
      facebook: "https://www.facebook.com/",
      // Placeholder for profile link
      twitter: "https://twitter.com/home",
      // Placeholder for profile link
      instagram: "https://www.instagram.com/" // Placeholder for profile link

    }],
    performanceCards: [{
      image: "blog1.jpg",
      title: "Train with free weights or your body weight?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }, {
      image: "blog6.jpg",
      title: "Nutritional advice that will keep you training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }, {
      image: "trainer4.jpg",
      title: "Simple principles for your next workout",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }, {
      image: "blog4.jpg",
      title: "To be number one, train like you’re number two",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }, {
      image: "trainer3.jpg",
      title: "Top 5 mistakes every gym member makes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }, {
      image: "trainer1.jpg",
      title: "The myths of shedding body fat explored",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium, tortor vitae porttitor suscipit, sapien purus aliquet risus, eu finibus arcu ante nec risus. [...]"
    }]
  },
  methods: {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;