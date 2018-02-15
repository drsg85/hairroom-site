/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var InstaFeed = __webpack_require__(9);

var feed = new InstaFeed({
    get: "user",
    userId: "344919110",
    clientID: "87b69683000a43009903ef1751723ec6",
    accessToken: "344919110.87b6968.1690446024e2403ea56bc212c5b18b68",
    resolution: "standard_resolution",
    limit: 10,
    template: "<a href=\"{{link}}\" class=\"instafeed__image\"><img src=\"{{image}}\" class=\"insta\"></a>"
});
feed.run();

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2017 blackCICADA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

;(function() {
    "use strict";

    function Instafeed(options) {
        this.uuid = "instafeed".concat(uuidv4().replace(/-/g, ""));
        if(!options) throw new Error("InstafeedOptionsError: Missing options.");
        this.url = "https://api.instagram.com/v1/";

        switch(options.get) {
            case "tag":
                if(typeof options.tagName !== "string") throw new Error("InstafeedOptionsError: Missing or invalid option \"tagName\".");
                this.url = this.url.concat("tags/", encodeURIComponent(options.tagName));
                break;

            case "location":
                if(typeof options.locationId !== "string" || !/^\d+$/.test(options.locationId)) throw new Error("InstafeedOptionsError: Missing or invalid option \"locationId\".");
                this.url = this.url.concat("locations/", options.locationId);
                break;

            default:
                if(typeof options.get !== "undefined" && options.get !== "user") throw new Error("InstafeedOptionsError: Invalid option \"get\".");
                this.url = this.url.concat("users/");

                if(typeof options.userId === "undefined") {
                    this.url = this.url.concat("self");
                } else {
                    if(typeof options.userId !== "string" || !/^\d+$/.test(options.userId)) throw new Error("InstafeedOptionsError: Invalid option \"userId\".");
                    this.url = this.url.concat(options.userId);
                }
        }

        if(typeof options.accessToken !== "string") throw new Error("InstafeedOptionsError: Missing or invalid option \"accessToken\".");
        this.url = this.url.concat("/media/recent?access_token=", encodeURIComponent(options.accessToken), "&callback=", this.uuid, ".parse");
        this.nextUrl = "";

        if(typeof options.limit !== "undefined") {
            if(typeof options.limit !== "number") throw new Error("InstafeedOptionsError: Invalid option \"limit\".");
            if(options.limit) this.url = this.url.concat("&count=", options.limit.toString());
        }

        if(typeof options.sort === "undefined") {
            this.sort = "none";
        } else {
            if(!/^(?:none|(?:most|least)-(?:recent|liked|commented)|random)$/.test(options.sort)) throw new Error("InstafeedOptionsError: Invalid option \"sort\".");
            this.sort = options.sort;
        }

        if(typeof options.imageTemplate === "undefined") {
            this.imageTemplate = "<img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\">";
        } else {
            if(typeof options.imageTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"imageTemplate\".");
            this.imageTemplate = options.imageTemplate;
        }

        if(typeof options.videoTemplate === "undefined") {
            this.videoTemplate = "<img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\">";
        } else {
            if(typeof options.videoTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"videoTemplate\".");
            this.videoTemplate = options.videoTemplate;
        }

        if(typeof options.carouselFrameTemplate === "undefined") {
            this.carouselFrameTemplate = "<img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\">";
        } else {
            if(typeof options.carouselFrameTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselFrameTemplate\".");
            this.carouselFrameTemplate = options.carouselFrameTemplate;
        }

        if(typeof options.carouselImageTemplate === "undefined") {
            this.carouselImageTemplate = "";
        } else {
            if(typeof options.carouselImageTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselImageTemplate\".");
            this.carouselImageTemplate = options.carouselImageTemplate;
        }

        if(typeof options.carouselVideoTemplate === "undefined") {
            this.carouselVideoTemplate = "";
        } else {
            if(typeof options.carouselVideoTemplate !== "string") throw new Error("InstafeedOptionsError: Invalid option \"carouselVideoTemplate\".");
            this.carouselVideoTemplate = options.carouselVideoTemplate;
        }

        switch(options.imageResolution) {
            case "low-resolution":
                this.imageResolution = "low_resolution";
                break;

            case "standard-resolution":
                this.imageResolution = "standard_resolution";
                break;

            default:
                if(typeof options.imageResolution === "undefined") {
                    this.imageResolution = "standard_resolution";
                } else if(options.get !== "standard_resolution") {
                    throw new Error("InstafeedOptionsError: Invalid option \"imageResolution\".");
                }
        }

        switch(options.videoResolution) {
            case "low-bandwidth":
                this.videoResolution = "low_bandwidth";
                break;

            case "low-resolution":
                this.videoResolution = "low_resolution";
                break;

            default:
                if(typeof options.videoResolution === "undefined") {
                    this.videoResolution = "standard_resolution";
                } else if(options.get !== "standard-resolution") {
                    throw new Error("InstafeedOptionsError: Invalid option \"videoResolution\".");
                }
        }

        if(typeof options.relativeScheme === "undefined") {
            this.relativeScheme = false;
        } else {
            if(typeof options.relativeScheme !== "boolean") throw new Error("InstafeedOptionsError: Invalid option \"relativeScheme\".");
            this.relativeScheme = options.relativeScheme;
        }

        if(typeof options.target === "undefined") {
            this.target = "instafeed";
        } else {
            if(typeof options.target !== "string") throw new Error("InstafeedOptionsError: Invalid option \"target\".");
            this.target = options.target;
        }

        if(typeof options.mock === "undefined") {
            this.mock = false;
        } else {
            if(typeof options.mock !== "boolean") throw new Error("InstafeedOptionsError: Invalid option \"mock\".");
            this.mock = options.mock;
        }

        this.filter = typeof options.filter === "function" ? options.filter : null;
        this.onBefore = typeof options.onBefore === "function" ? options.onBefore : null;
        this.onAfter = typeof options.onAfter === "function" ? options.onAfter : null;
        this.onSuccess = typeof options.onSuccess === "function" ? options.onSuccess : null;
        this.onError = typeof options.onError === "function" ? options.onError : null;
    }

    Instafeed.prototype.run = function(nextUrl) {
        if(typeof window === "undefined" || !window) throw new Error("InstafeedRunError: No window object available.");
        window[this.uuid] = {};
        window[this.uuid].parse = parse.bind(this);
        if(typeof document === "undefined" || !document) throw new Error("InstafeedRunError: No document object available.");
        var script = document.createElement("script");
        script.id = this.uuid;
        script.src = nextUrl || this.url;

        script.onerror = function() {
            document.head.removeChild(document.getElementById(this.uuid));
            this.onError("InstafeedConnectionError: Connection to Instagram failed.");
        }.bind(this);

        document.head.appendChild(script);
    };

    Instafeed.prototype.hasNext = function() {
        return this.nextUrl.length > 0;
    };

    Instafeed.prototype.next = function() {
        if(this.hasNext()) {
            this.run(this.nextUrl);
            this.nextUrl = "";
        }
    };

    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/x/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).replace("y", ((Math.random() * 16 | 0) & 0x3 | 0x8).toString(16));
    }

    function parse(response) {
        document.head.removeChild(document.getElementById(this.uuid));
        delete window[this.uuid];

        try {
            if(!response || !response.meta || typeof response.meta.code !== "number") throw new Error();
            if(response.meta.code !== 200) throw new Error(typeof response.meta.error_type === "string" && typeof response.meta.error_message === "string" ? "InstafeedInstagramAPIError: \"".concat(response.meta.error_type, ": ", response.meta.error_message, "\".") : "InstafeedConnectionError: Connection to Instagram failed.");

            if(!this.mock) {
                if(!response.data) throw new Error();

                if(this.sort === "random") {
                    for(var i = response.data.length - 1; i; i--) {
                        var randomIndex = Math.floor(Math.random() * (i + 1));
                        var randomValue = response.data[i];
                        response.data[i] = response.data[randomIndex];
                        response.data[randomIndex] = randomValue;
                    }
                } else if(this.sort !== "none") {
                    var sortArray = this.sort.split("-");
                    var reverse = sortArray[0] === "least";
                    var property;

                    switch(sortArray[1]) {
                        case "recent":
                            property = "created_time";
                            break;

                        case "liked":
                            property = "likes.count";
                            break;

                        case "commented":
                            property = "comments.count";
                            break;
                    }

                    response.data.sort(function(a, b) {
                        var valueA = getObjectProperty(a, property);
                        var valueB = getObjectProperty(b, property);
                        if(valueA === null || valueB === null) throw new Error();
                        return valueA < valueB ^ reverse ? 1 : -1;
                    });
                }

                if(this.filter) {
                    response.data.forEach(function(data, i) {
                        if(!this.filter(data)) delete response.data[i];
                    }, this);
                }

                var div = document.createElement("div");

                response.data.forEach(function(data) {
                    if(typeof data.id !== "string" || typeof data.type !== "string" || !data.user || typeof data.user.id !== "string" || typeof data.user.username !== "string" || typeof data.user.full_name !== "string" || typeof data.user.profile_picture !== "string" || !data.images || typeof data.filter !== "string" || !data.likes || typeof data.likes.count !== "number" || typeof data.user_has_liked !== "boolean" || !data.comments || typeof data.comments.count !== "number" || !data.tags || typeof data.created_time !== "string" || typeof data.link !== "string") throw new Error();

                    var templateValues = {
                        id: data.id,
                        type: data.type,
                        userId: data.user.id,
                        username: data.user.username,
                        fullName: data.user.full_name,
                        profilePicture: data.user.profile_picture,
                        filter: data.filter,
                        likes: data.likes.count,
                        userHasLiked: data.user_has_liked ? "true" : "false",
                        comments: data.comments.count,
                        tags: JSON.stringify(data.tags),
                        createdTime: data.created_time,
                        link: data.link,
                        model: data
                    };

                    if(data.caption) {
                        if(typeof data.caption.text !== "string") throw new Error();
                        templateValues.caption = data.caption.text;
                    } else {
                        templateValues.caption = "";
                    }

                    if(data.location) {
                        if(typeof data.location.name !== "string" || typeof data.location.latitude !== "number" || typeof data.location.longitude !== "number") throw new Error();
                        templateValues.location = data.location.name;
                        templateValues.latitude = data.location.latitude.toString();
                        templateValues.longitude = data.location.longitude.toString();
                    } else {
                        templateValues.location = "";
                        templateValues.latitude = "";
                        templateValues.longitude = "";
                    }

                    var previewImage = data.images[this.imageResolution];
                    if(!previewImage || typeof previewImage.url !== "string" || typeof previewImage.width !== "number" || typeof previewImage.height !== "number") throw new Error();
                    if(this.relativeScheme) previewImage.url = previewImage.url.replace(/^https?:/, "");
                    previewImage.orientation = previewImage.width === previewImage.height ? "square" : (previewImage.width > previewImage.height ? "landscape" : "portrait");

                    if(data.type === "image") {
                        templateValues.image = previewImage.url;
                        templateValues.width = previewImage.width.toString();
                        templateValues.height = previewImage.height.toString();
                        templateValues.orientation = previewImage.orientation;
                        if(!data.users_in_photo) throw new Error();
                        templateValues.usersInPhoto = JSON.stringify(data.users_in_photo);
                        div.innerHTML = div.innerHTML.concat(parseTemplate(this.imageTemplate, templateValues));
                    } else {
                        templateValues.previewImage = previewImage.url;
                        templateValues.previewWidth = previewImage.width.toString();
                        templateValues.previewHeight = previewImage.height.toString();
                        templateValues.previewOrientation = previewImage.orientation;

                        if(data.type === "video") {
                            if(!data.videos) throw new Error();
                            var video = data.videos[this.videoResolution];
                            if(!video || typeof video.url !== "string" || typeof video.width !== "number" || typeof video.height !== "number") throw new Error();
                            templateValues.video = this.relativeScheme ? video.url.replace(/^https?:/, "") : video.url;
                            templateValues.width = video.width.toString();
                            templateValues.height = video.height.toString();
                            templateValues.orientation = video.width === video.height ? "square" : (video.width > video.height ? "landscape" : "portrait");
                            div.innerHTML = div.innerHTML.concat(parseTemplate(this.videoTemplate, templateValues));
                        } else if(data.type === "carousel") {
                            if(!data.carousel_media) throw new Error();
                            templateValues.media = "";

                            data.carousel_media.forEach(function(carouselMedia) {
                                if(typeof carouselMedia.type !== "string") throw new Error();

                                var templateCarouselMedialValues = {
                                    type: carouselMedia.type
                                };

                                switch(carouselMedia.type) {
                                    case "image":
                                        if(!carouselMedia.images) throw new Error();
                                        var image = carouselMedia.images[this.imageResolution];
                                        if(!image || typeof image.url !== "string" || typeof image.width !== "number" || typeof image.height !== "number") throw new Error();
                                        templateCarouselMedialValues.image = this.relativeScheme ? image.url.replace(/^https?:/, "") : image.url;
                                        templateCarouselMedialValues.width = image.width.toString();
                                        templateCarouselMedialValues.height = image.height.toString();
                                        templateCarouselMedialValues.orientation = image.width === image.height ? "square" : (image.width > image.height ? "landscape" : "portrait");
                                        if(!carouselMedia.users_in_photo) throw new Error();
                                        templateCarouselMedialValues.usersInPhoto = JSON.stringify(carouselMedia.users_in_photo);
                                        templateValues.media = templateValues.media.concat(parseTemplate(this.carouselImageTemplate, templateCarouselMedialValues));
                                        break;

                                    case "video":
                                        if(!carouselMedia.videos) throw new Error();
                                        var video = carouselMedia.videos[this.videoResolution];
                                        if(!video || typeof video.url !== "string" || typeof video.width !== "number" || typeof video.height !== "number") throw new Error();
                                        templateCarouselMedialValues.video = this.relativeScheme ? video.url.replace(/^https?:/, "") : video.url;
                                        templateCarouselMedialValues.width = video.width.toString();
                                        templateCarouselMedialValues.height = video.height.toString();
                                        templateCarouselMedialValues.orientation = video.width === video.height ? "square" : (video.width > video.height ? "landscape" : "portrait");
                                        templateValues.media = templateValues.media.concat(parseTemplate(this.carouselVideoTemplate, templateCarouselMedialValues));
                                        break;
                                }
                            }, this);

                            div.innerHTML = div.innerHTML.concat(parseTemplate(this.carouselFrameTemplate, templateValues));
                        }
                    }
                }, this);

                if(this.onBefore) this.onBefore();
                var targetElement = document.getElementById(this.target);
                if(!targetElement) throw new Error("InstafeedParseError: No target element found.");
                for(var i = div.childNodes.length; i; i--) targetElement.appendChild(div.childNodes[0]);
                if(this.onAfter) this.onAfter();
            }

            if(response.pagination && typeof response.pagination.next_url === "string") this.nextUrl = response.pagination.next_url;
            if(this.onSuccess) this.onSuccess(response);
        } catch(e) {
            if(this.onError) this.onError(e.message.length ? e.message : "InstafeedParseError: Invalid response from Instagram.");
        }
    }

    function getObjectProperty(object, property) {
        var pieces = property.replace(/\[(\w+)\]/g, ".$1").split(".");

        while(pieces.length) {
            var piece = pieces.shift();
            if(object == null || !(piece in object)) return null;
            object = object[piece];
        }

        return object;
    }

    function parseTemplate(template, values) {
        var pattern = /(?:\{{2})(\w+(?:\.\w+|\[\w+\])*)(?:\}{2})/;

        while(pattern.test(template)) {
            var key = template.match(pattern)[1];
            var value = getObjectProperty(values, key);
            if(value === null) value = "";

            template = template.replace(pattern, function() {
                return value;
            });
        }

        return template;
    }

    (function(root, factory) {
        if(true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if(typeof module === "object" && module.exports) {
            module.exports = factory();
        } else {
            root.Instafeed = factory();
        }
    })(this, function() {
        return Instafeed;
    });
}.call(this));


/***/ })

/******/ });