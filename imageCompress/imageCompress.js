!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.imageCompress=t():e.imageCompress=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t),n.d(t,"default",function(){return i});var i=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._img=null,this._compressedImg=null,this._canvas=null,this._blob=null,this.options={mimeType:"image/png",quality:1},function(e,t,n){for(var o in t)!t.hasOwnProperty(o)||e.hasOwnProperty(o)&&!n||(e[o]=t[o])}(this.options,t,!0),!t.file)throw new Error("图片未传入");var n,r,i,s=this;if("string"==typeof t.file){var a=this._img=new Image;return a.setAttribute("crossOrigin","anonymous"),a.src=t.file,new Promise(function(e,t){a.onload=function(){e(s)},a.onerror=function(){t(new Error("图片加载失败"))}})}if("object"===o(t.file)&&t.file.name){if(n=t.file.name,r=n.lastIndexOf("."),i=n.substr(r+1),-1===["png","jpg","jpeg","bmp","gif","webp","psd","svg","tiff"].indexOf(i.toLowerCase()))throw new Error("该文件不是图片");var c=this._img=new Image;return new Promise(function(e,n){if(window.URL)c.src=window.URL.createObjectURL(t.file);else{var o=new FileReader;o.onload=function(e){c.src=e.target.result},o.onabort=function(){n(new Error("Aborted to load the image with FileReader."))},o.onerror=function(){n(new Error("Failed to load the image with FileReader."))},o.readAsDataURL(t.file)}c.onload=function(){e(s)},c.onerror=function(){n(new Error("图片加载失败"))}})}}var t,n,i;return t=e,(n=[{key:"getImageBase64",value:function(){return this.getCanvas().toDataURL(this.options.mimeType,this.options.quality)}},{key:"getCanvas",value:function(){return this._canvas||this._imagetoCanvas(),this._canvas}},{key:"replaceCanvasNode",value:function(e){var t=this.getCanvas();t.style.cssText=e.style.cssText,t.id=e.id,t.className=e.className,e.parentNode.replaceChild(this.getCanvas(),e)}},{key:"getCompressImageNode",value:function(){if(this._compressedImg&&this._compressedImg.src)return Promise.resolve(this._compressedImg);var e=this._compressedImg=new Image;return this.getCompressFile().then(function(t){if(window.URL)e.src=window.URL.createObjectURL(t);else{var n=new FileReader;n.onload=function(t){e.src=t.target.result},n.onabort=function(){return Promise.reject(new Error("Aborted to load the image with FileReader."))},n.onerror=function(){return Promise.reject(new Error("Failed to load the image with FileReader."))},n.readAsDataURL(t)}return Promise.resolve(e)})}},{key:"replaceImageNode",value:function(e){this.getCompressImageNode().then(function(t){t.style.cssText=e.style.cssText,t.id=e.id,t.className=e.className,e.parentNode.replaceChild(t,e)})}},{key:"getCompressFile",value:function(){this._canvas||this._imagetoCanvas();var e=this;return new Promise(function(t,n){e._canvas.toBlob(function(n){e._blob=n,t(n)},e.options.mimeType,e.options.quality)})}},{key:"downloadCompressFile",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"compress-file";if(this.blob&&this._compressedImg){var t=this._compressedImg.src,n=document.createElement("a");n.download=e,n.href=t,n.dispatchEvent(new MouseEvent("click"))}else this.getCompressImageNode().then(function(t){var n=t.src,o=document.createElement("a");o.download=e,o.href=n,o.dispatchEvent(new MouseEvent("click"))})}},{key:"_imagetoCanvas",value:function(){var e=this._img,t=this._canvas=document.createElement("canvas"),n=t.getContext("2d");t.width=this.options.width||e.width,t.height=this.options.width?this.options.width*e.height/e.width:e.height,n.drawImage(e,0,0,t.width,t.height)}}])&&r(t.prototype,n),i&&r(t,i),e}()}]).default});