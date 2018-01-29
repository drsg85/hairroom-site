/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	window.initMap = function () {

	    var mapStyles = new google.maps.StyledMapType(__webpack_require__(1));

	    var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 4,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        center: new google.maps.LatLng(54.717592, 20.497258),
	        suppressInfoWindows: true
	    });

	    map.mapTypes.set('styled_map', mapStyles);
	    map.setMapTypeId('styled_map');

	    var marker = new google.maps.Marker({
	        position: LatLng,
	        map: map,
	        icon: iconFile,
	        draggable: false,
	        animation: google.maps.Animation.BOUNCE,
	        title: "HairRoom"
	    });

	    var iconFile = './img/marker.svg';
	    marker.setIcon(iconFile);
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
	}];

/***/ })
/******/ ]);