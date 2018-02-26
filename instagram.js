!function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=9)}({10:function(e,t,r){var i,o;(function(){"use strict";function n(e){if(this.uuid="instafeed".concat(a().replace(/-/g,"")),!e)throw new Error("InstafeedOptionsError: Missing options.");switch(this.url="https://api.instagram.com/v1/",e.get){case"tag":if("string"!=typeof e.tagName)throw new Error('InstafeedOptionsError: Missing or invalid option "tagName".');this.url=this.url.concat("tags/",encodeURIComponent(e.tagName));break;case"location":if("string"!=typeof e.locationId||!/^\d+$/.test(e.locationId))throw new Error('InstafeedOptionsError: Missing or invalid option "locationId".');this.url=this.url.concat("locations/",e.locationId);break;default:if(void 0!==e.get&&"user"!==e.get)throw new Error('InstafeedOptionsError: Invalid option "get".');if(this.url=this.url.concat("users/"),void 0===e.userId)this.url=this.url.concat("self");else{if("string"!=typeof e.userId||!/^\d+$/.test(e.userId))throw new Error('InstafeedOptionsError: Invalid option "userId".');this.url=this.url.concat(e.userId)}}if("string"!=typeof e.accessToken)throw new Error('InstafeedOptionsError: Missing or invalid option "accessToken".');if(this.url=this.url.concat("/media/recent?access_token=",encodeURIComponent(e.accessToken),"&callback=",this.uuid,".parse"),this.nextUrl="",void 0!==e.limit){if("number"!=typeof e.limit)throw new Error('InstafeedOptionsError: Invalid option "limit".');e.limit&&(this.url=this.url.concat("&count=",e.limit.toString()))}if(void 0===e.sort)this.sort="none";else{if(!/^(?:none|(?:most|least)-(?:recent|liked|commented)|random)$/.test(e.sort))throw new Error('InstafeedOptionsError: Invalid option "sort".');this.sort=e.sort}if(void 0===e.imageTemplate)this.imageTemplate='<img src="{{image}}" width="{{width}}" height="{{height}}">';else{if("string"!=typeof e.imageTemplate)throw new Error('InstafeedOptionsError: Invalid option "imageTemplate".');this.imageTemplate=e.imageTemplate}if(void 0===e.videoTemplate)this.videoTemplate='<img src="{{previewImage}}" width="{{previewWidth}}" height="{{previewHeight}}">';else{if("string"!=typeof e.videoTemplate)throw new Error('InstafeedOptionsError: Invalid option "videoTemplate".');this.videoTemplate=e.videoTemplate}if(void 0===e.carouselFrameTemplate)this.carouselFrameTemplate='<img src="{{previewImage}}" width="{{previewWidth}}" height="{{previewHeight}}">';else{if("string"!=typeof e.carouselFrameTemplate)throw new Error('InstafeedOptionsError: Invalid option "carouselFrameTemplate".');this.carouselFrameTemplate=e.carouselFrameTemplate}if(void 0===e.carouselImageTemplate)this.carouselImageTemplate="";else{if("string"!=typeof e.carouselImageTemplate)throw new Error('InstafeedOptionsError: Invalid option "carouselImageTemplate".');this.carouselImageTemplate=e.carouselImageTemplate}if(void 0===e.carouselVideoTemplate)this.carouselVideoTemplate="";else{if("string"!=typeof e.carouselVideoTemplate)throw new Error('InstafeedOptionsError: Invalid option "carouselVideoTemplate".');this.carouselVideoTemplate=e.carouselVideoTemplate}switch(e.imageResolution){case"low-resolution":this.imageResolution="low_resolution";break;case"standard-resolution":this.imageResolution="standard_resolution";break;default:if(void 0===e.imageResolution)this.imageResolution="standard_resolution";else if("standard_resolution"!==e.get)throw new Error('InstafeedOptionsError: Invalid option "imageResolution".')}switch(e.videoResolution){case"low-bandwidth":this.videoResolution="low_bandwidth";break;case"low-resolution":this.videoResolution="low_resolution";break;default:if(void 0===e.videoResolution)this.videoResolution="standard_resolution";else if("standard-resolution"!==e.get)throw new Error('InstafeedOptionsError: Invalid option "videoResolution".')}if(void 0===e.relativeScheme)this.relativeScheme=!1;else{if("boolean"!=typeof e.relativeScheme)throw new Error('InstafeedOptionsError: Invalid option "relativeScheme".');this.relativeScheme=e.relativeScheme}if(void 0===e.target)this.target="instafeed";else{if("string"!=typeof e.target)throw new Error('InstafeedOptionsError: Invalid option "target".');this.target=e.target}if(void 0===e.mock)this.mock=!1;else{if("boolean"!=typeof e.mock)throw new Error('InstafeedOptionsError: Invalid option "mock".');this.mock=e.mock}this.filter="function"==typeof e.filter?e.filter:null,this.onBefore="function"==typeof e.onBefore?e.onBefore:null,this.onAfter="function"==typeof e.onAfter?e.onAfter:null,this.onSuccess="function"==typeof e.onSuccess?e.onSuccess:null,this.onError="function"==typeof e.onError?e.onError:null}function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/x/g,function(){return(16*Math.random()|0).toString(16)}).replace("y",(3&(16*Math.random()|0)|8).toString(16))}function s(e){document.head.removeChild(document.getElementById(this.uuid)),delete window[this.uuid];try{if(!e||!e.meta||"number"!=typeof e.meta.code)throw new Error;if(200!==e.meta.code)throw new Error("string"==typeof e.meta.error_type&&"string"==typeof e.meta.error_message?'InstafeedInstagramAPIError: "'.concat(e.meta.error_type,": ",e.meta.error_message,'".'):"InstafeedConnectionError: Connection to Instagram failed.");if(!this.mock){if(!e.data)throw new Error;if("random"===this.sort)for(var t=e.data.length-1;t;t--){var r=Math.floor(Math.random()*(t+1)),i=e.data[t];e.data[t]=e.data[r],e.data[r]=i}else if("none"!==this.sort){var o,n=this.sort.split("-"),a="least"===n[0];switch(n[1]){case"recent":o="created_time";break;case"liked":o="likes.count";break;case"commented":o="comments.count"}e.data.sort(function(e,t){var r=l(e,o),i=l(t,o);if(null===r||null===i)throw new Error;return r<i^a?1:-1})}this.filter&&e.data.forEach(function(t,r){this.filter(t)||delete e.data[r]},this);var s=document.createElement("div");e.data.forEach(function(e){if(!("string"==typeof e.id&&"string"==typeof e.type&&e.user&&"string"==typeof e.user.id&&"string"==typeof e.user.username&&"string"==typeof e.user.full_name&&"string"==typeof e.user.profile_picture&&e.images&&"string"==typeof e.filter&&e.likes&&"number"==typeof e.likes.count&&"boolean"==typeof e.user_has_liked&&e.comments&&"number"==typeof e.comments.count&&e.tags&&"string"==typeof e.created_time&&"string"==typeof e.link))throw new Error;var t={id:e.id,type:e.type,userId:e.user.id,username:e.user.username,fullName:e.user.full_name,profilePicture:e.user.profile_picture,filter:e.filter,likes:e.likes.count,userHasLiked:e.user_has_liked?"true":"false",comments:e.comments.count,tags:JSON.stringify(e.tags),createdTime:e.created_time,link:e.link,model:e};if(e.caption){if("string"!=typeof e.caption.text)throw new Error;t.caption=e.caption.text}else t.caption="";if(e.location){if("string"!=typeof e.location.name||"number"!=typeof e.location.latitude||"number"!=typeof e.location.longitude)throw new Error;t.location=e.location.name,t.latitude=e.location.latitude.toString(),t.longitude=e.location.longitude.toString()}else t.location="",t.latitude="",t.longitude="";var r=e.images[this.imageResolution];if(!r||"string"!=typeof r.url||"number"!=typeof r.width||"number"!=typeof r.height)throw new Error;if(this.relativeScheme&&(r.url=r.url.replace(/^https?:/,"")),r.orientation=r.width===r.height?"square":r.width>r.height?"landscape":"portrait","image"===e.type){if(t.image=r.url,t.width=r.width.toString(),t.height=r.height.toString(),t.orientation=r.orientation,!e.users_in_photo)throw new Error;t.usersInPhoto=JSON.stringify(e.users_in_photo),s.innerHTML=s.innerHTML.concat(d(this.imageTemplate,t))}else if(t.previewImage=r.url,t.previewWidth=r.width.toString(),t.previewHeight=r.height.toString(),t.previewOrientation=r.orientation,"video"===e.type){if(!e.videos)throw new Error;var i=e.videos[this.videoResolution];if(!i||"string"!=typeof i.url||"number"!=typeof i.width||"number"!=typeof i.height)throw new Error;t.video=this.relativeScheme?i.url.replace(/^https?:/,""):i.url,t.width=i.width.toString(),t.height=i.height.toString(),t.orientation=i.width===i.height?"square":i.width>i.height?"landscape":"portrait",s.innerHTML=s.innerHTML.concat(d(this.videoTemplate,t))}else if("carousel"===e.type){if(!e.carousel_media)throw new Error;t.media="",e.carousel_media.forEach(function(e){if("string"!=typeof e.type)throw new Error;var r={type:e.type};switch(e.type){case"image":if(!e.images)throw new Error;var i=e.images[this.imageResolution];if(!i||"string"!=typeof i.url||"number"!=typeof i.width||"number"!=typeof i.height)throw new Error;if(r.image=this.relativeScheme?i.url.replace(/^https?:/,""):i.url,r.width=i.width.toString(),r.height=i.height.toString(),r.orientation=i.width===i.height?"square":i.width>i.height?"landscape":"portrait",!e.users_in_photo)throw new Error;r.usersInPhoto=JSON.stringify(e.users_in_photo),t.media=t.media.concat(d(this.carouselImageTemplate,r));break;case"video":if(!e.videos)throw new Error;var o=e.videos[this.videoResolution];if(!o||"string"!=typeof o.url||"number"!=typeof o.width||"number"!=typeof o.height)throw new Error;r.video=this.relativeScheme?o.url.replace(/^https?:/,""):o.url,r.width=o.width.toString(),r.height=o.height.toString(),r.orientation=o.width===o.height?"square":o.width>o.height?"landscape":"portrait",t.media=t.media.concat(d(this.carouselVideoTemplate,r))}},this),s.innerHTML=s.innerHTML.concat(d(this.carouselFrameTemplate,t))}},this),this.onBefore&&this.onBefore();var h=document.getElementById(this.target);if(!h)throw new Error("InstafeedParseError: No target element found.");for(var t=s.childNodes.length;t;t--)h.appendChild(s.childNodes[0]);this.onAfter&&this.onAfter()}e.pagination&&"string"==typeof e.pagination.next_url&&(this.nextUrl=e.pagination.next_url),this.onSuccess&&this.onSuccess(e)}catch(e){this.onError&&this.onError(e.message.length?e.message:"InstafeedParseError: Invalid response from Instagram.")}}function l(e,t){for(var r=t.replace(/\[(\w+)\]/g,".$1").split(".");r.length;){var i=r.shift();if(null==e||!(i in e))return null;e=e[i]}return e}function d(e,t){for(var r=/(?:\{{2})(\w+(?:\.\w+|\[\w+\])*)(?:\}{2})/;r.test(e);){var i=e.match(r)[1],o=l(t,i);null===o&&(o=""),e=e.replace(r,function(){return o})}return e}n.prototype.run=function(e){if("undefined"==typeof window||!window)throw new Error("InstafeedRunError: No window object available.");if(window[this.uuid]={},window[this.uuid].parse=s.bind(this),"undefined"==typeof document||!document)throw new Error("InstafeedRunError: No document object available.");var t=document.createElement("script");t.id=this.uuid,t.src=e||this.url,t.onerror=function(){document.head.removeChild(document.getElementById(this.uuid)),this.onError("InstafeedConnectionError: Connection to Instagram failed.")}.bind(this),document.head.appendChild(t)},n.prototype.hasNext=function(){return this.nextUrl.length>0},n.prototype.next=function(){this.hasNext()&&(this.run(this.nextUrl),this.nextUrl="")},function(n,a){i=a,void 0!==(o="function"==typeof i?i.call(t,r,t,e):i)&&(e.exports=o)}(0,function(){return n})}).call(this)},9:function(e,t,r){"use strict";new(r(10))({get:"user",userId:"6312841675",clientID:"c4dc1832e4ea4f4a9f2fe01b7a88dcbe",accessToken:"6312841675.1677ed0.4fe2a42c6bf7405bbc04c953f7ecd7dd",resolution:"standard_resolution",limit:10,template:'<a href="{{link}}"><img src="{{image}}" /></a>'}).run()}});