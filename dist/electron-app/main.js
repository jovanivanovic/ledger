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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/electron-app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/electron-app/blockchain/block.mjs":
/*!***********************************************!*\
  !*** ./src/electron-app/blockchain/block.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-sha256 */ \"js-sha256\");\n\r\n\r\nclass Block {\r\n    constructor(index, timestamp, data, previousHash) {\r\n        this.index = index;\r\n        this.timestamp = timestamp;\r\n        this.data = data;\r\n        this.previousHash = previousHash;\r\n        this.hash = js_sha256__WEBPACK_IMPORTED_MODULE_0__(this.index + this.timestamp + this.data + this.previousHash);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n//# sourceURL=webpack:///./src/electron-app/blockchain/block.mjs?");

/***/ }),

/***/ "./src/electron-app/blockchain/blockchain.mjs":
/*!****************************************************!*\
  !*** ./src/electron-app/blockchain/blockchain.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.mjs */ \"./src/electron-app/blockchain/block.mjs\");\n/* harmony import */ var msgpack5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msgpack5 */ \"msgpack5\");\n\r\n\r\n\r\nclass Blockchain {\r\n    constructor() {\r\n        this.chain = [];\r\n    }\r\n\r\n    genesis() {\r\n        // let block = new Block(1, Date.now(), msgpack().encode({ genesis: true }), \"0000000000000000000000000000000000000000000000000000000000000000\");\r\n        let block = new _block_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, Date.now(), { genesis: true }, \"0000000000000000000000000000000000000000000000000000000000000000\");\r\n        this.chain.push(block);\r\n        \r\n        return block;\r\n    }\r\n\r\n    push(data) {\r\n        let index = this.chain[this.chain.length - 1].index + 1;\r\n        let timestamp = Date.now();\r\n        let previousHash = this.chain[this.chain.length - 1].hash;\r\n\r\n        // let block = new Block(index, timestamp, msgpack().encode(data), previousHash);\r\n        let block = new _block_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index, timestamp, data, previousHash);\r\n        this.chain.push(block);\r\n\r\n        return block;\r\n    }\r\n\r\n    get(hash) {\r\n        return this.chain.find((x) => {\r\n            return x.hash == hash;\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockchain);\n\n//# sourceURL=webpack:///./src/electron-app/blockchain/blockchain.mjs?");

/***/ }),

/***/ "./src/electron-app/blockchain/ledger.mjs":
/*!************************************************!*\
  !*** ./src/electron-app/blockchain/ledger.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blockchain_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockchain.mjs */ \"./src/electron-app/blockchain/blockchain.mjs\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n\r\n\r\n\r\nclass Ledger {\r\n    constructor() {\r\n        this.mongo = {\r\n            url: 'mongodb://localhost:27017'\r\n        };\r\n\r\n        this.queue = [];\r\n        this.blockchain = new _blockchain_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.initialized = false;\r\n    }\r\n\r\n    initialize(pushCallback = null) {\r\n        let mongoLoaded = false;\r\n\r\n        mongodb__WEBPACK_IMPORTED_MODULE_1__.connect(this.mongo.url, {\r\n            useNewUrlParser: true,\r\n            useUnifiedTopology: true\r\n        }, (err, client) => {\r\n            if (err) throw err;\r\n\r\n            this.mongo.database = client.db('ledger');\r\n            this.mongo.collection = this.mongo.database.collection('ledger');\r\n\r\n            this.mongo.collection.count((err, count) => {\r\n                if (!err && count < 1) {\r\n                    let genesis = this.blockchain.genesis();\r\n\r\n                    this.mongo.collection.insertOne({\r\n                        index: genesis.index,\r\n                        timestamp: genesis.timestamp,\r\n                        hash: genesis.hash,\r\n                        previousHash: genesis.previousHash,\r\n                        data: genesis.data\r\n                    });\r\n\r\n                    pushCallback(genesis);\r\n                } else {\r\n                    this.mongo.collection.find().toArray((err, items) => {\r\n                        this.blockchain.chain = items;\r\n                        \r\n                        items.forEach((item, index) => {\r\n                            pushCallback(item);\r\n                        });\r\n                    })\r\n                }\r\n\r\n                mongoLoaded = true;\r\n                this.initialized = true;\r\n            });\r\n        });\r\n\r\n        this.interval = setInterval(() => {\r\n            if (mongoLoaded) {\r\n                if (this.queue.length < 1) {\r\n                    this.pushToBlockchain(null, pushCallback);\r\n                } else {\r\n                    this.queue.forEach((data, index) => {\r\n                        console.log(data);\r\n                        this.pushToBlockchain(data, pushCallback);\r\n                    });\r\n    \r\n                    this.queue = [];\r\n                }\r\n            }\r\n        }, 500);\r\n    }\r\n\r\n    push(data) {\r\n        if (this.initialized) {\r\n            this.queue.push(data);\r\n        }\r\n    }\r\n\r\n    pushToBlockchain(data, callback) {\r\n        let block = this.blockchain.push(data);\r\n\r\n        this.mongo.collection.insertOne({\r\n            index: block.index,\r\n            timestamp: block.timestamp,\r\n            hash: block.hash,\r\n            previousHash: block.previousHash,\r\n            data: block.data\r\n        });\r\n        \r\n        callback(block);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ledger);\n\n//# sourceURL=webpack:///./src/electron-app/blockchain/ledger.mjs?");

/***/ }),

/***/ "./src/electron-app/main.js":
/*!**********************************!*\
  !*** ./src/electron-app/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blockchain_ledger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockchain/ledger.mjs */ \"./src/electron-app/blockchain/ledger.mjs\");\nvar _require=__webpack_require__(/*! electron */ \"electron\"),app=_require.app,BrowserWindow=_require.BrowserWindow,ipcMain=_require.ipcMain;var _require2=__webpack_require__(/*! path */ \"path\"),resolve=_require2.resolve;var _require3=__webpack_require__(/*! url */ \"url\"),format=_require3.format;var msgpack=__webpack_require__(/*! msgpack5 */ \"msgpack5\")();var mainWindow;var ledger=new _blockchain_ledger_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"];function createWindow(){mainWindow=new BrowserWindow({width:800,height:600,icon:resolve(__dirname,\"icon.png\"),webPreferences:{nodeIntegration:true}});mainWindow.setMenu(null);mainWindow.loadURL( true?format({hostname:\"localhost\",pathname:\"index.html\",protocol:\"http\",slashes:true,port:8080}):undefined);if(true){mainWindow.webContents.openDevTools();__webpack_require__(/*! devtron */ \"devtron\").install();__webpack_require__(/*! vue-devtools */ \"vue-devtools\").install()}mainWindow.on(\"closed\",function(){mainWindow=null})}app.on(\"ready\",function(){createWindow();mainWindow.webContents.on(\"did-finish-load\",function(){ledger.initialize(function(block){if(block.data!=null){mainWindow.webContents.send(\"new-block\",block)}mainWindow.webContents.send(\"notify-block\",block)});ipcMain.on(\"push-block\",function(event,data){ledger.push(data)})})});app.on(\"window-all-closed\",function(){if(process.platform!==\"darwin\"){app.quit()}});app.on(\"activate\",function(){if(mainWindow===null){createWindow()}});\n\n//# sourceURL=webpack:///./src/electron-app/main.js?");

/***/ }),

/***/ "devtron":
/*!**************************!*\
  !*** external "devtron" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"devtron\");\n\n//# sourceURL=webpack:///external_%22devtron%22?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "js-sha256":
/*!****************************!*\
  !*** external "js-sha256" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-sha256\");\n\n//# sourceURL=webpack:///external_%22js-sha256%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "msgpack5":
/*!***************************!*\
  !*** external "msgpack5" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"msgpack5\");\n\n//# sourceURL=webpack:///external_%22msgpack5%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "vue-devtools":
/*!*******************************!*\
  !*** external "vue-devtools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue-devtools\");\n\n//# sourceURL=webpack:///external_%22vue-devtools%22?");

/***/ })

/******/ });