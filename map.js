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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.initMap = function () {
    var mapStyles = new google.maps.StyledMapType(__webpack_require__(8));
    var LatLng = new google.maps.LatLng(54.718749, 20.505773);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        center: new google.maps.LatLng(54.722500, 20.505773)
    });
    map.mapTypes.set('styled_map', mapStyles);
    map.setMapTypeId('styled_map');

    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.BOUNCE,
        title: "HairRoom"
    });
    var content = '\n        <div class="map-label__infowindow">\n            <div class="map-label__logo"><img src="./img/hr_logo_black.svg" alt="logo map"/></div>\n            <div class="map-label__infowindow-content">\n                <p class="map-label__infowindow-title">Hair Room</p>\n                <p class="map-label__infowindow-description">\n                    \u0421\u0430\u043B\u043E\u043D \u043A\u0440\u0430\u0441\u043E\u0442\u044B\n                </p>\n                <p class="map-label__infowindow-address">\n                    \u0443\u043B. \u0418\u0432\u0430\u043D\u043D\u0438\u043A\u043E\u0432\u0430, \u0434.12\n                </p>\n            </div>\n        </div>\n        \n    ';
    var infowindow = new google.maps.InfoWindow({
        content: content
    });

    infowindow.open(map, marker);
    var icon = "./img/marker.svg";
    marker.setIcon(icon);
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
    }, {
        "color": "#333333"
    }, {
        "lightness": 40
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#000000"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "weight": 1.2
    }, {
        "color": "#333333"
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#e9dcca"
    }]
}, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "hue": "#c2557e"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#333333"
    }, {
        "lightness": 20
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 21
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#c2517d"
    }, {
        "lightness": 17
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#c2517d"
    }, {
        "lightness": 29
    }, {
        "weight": 0.2
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#c2517d"
    }, {
        "lightness": 18
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ffffff"
    }, {
        "lightness": 18
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#222222"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#c2517d"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#222222"
    }, {
        "lightness": 19
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#121212"
    }, {
        "lightness": 1
    }]
}, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ffffff"
    }, {
        "lightness": 1
    }]
}];

/***/ })

/******/ });