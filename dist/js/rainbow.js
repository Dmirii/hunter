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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ImageLoader.js":
/*!****************************!*\
  !*** ./src/ImageLoader.js ***!
  \****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = []; // eslint-disable-next-line guard-for-in

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // класс для анимации фреймов

var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0;
    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    return _this;
  } // установка текущего фрейма


  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    } // запуск анимации

  }, {
    key: "run",
    value: function run() {
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    } // остановка анимации

  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    } // определение следующего фрейма для анимации
    // запустит сначала или остановит

  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        if (this.onEnd) {
          this.onEnd();
        }

        if (this.repeat) {
          this.setFrame(0);
          return;
        }

        this.stop();
        return;
      }

      this.setFrame(this.currentFrame + 1);
    } // обновление анимации в цикле

  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        this.nextFrame();
        this.lastTime += this.speed;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/controlState.js":
/*!*****************************!*\
  !*** ./src/controlState.js ***!
  \*****************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// класс для управления состоянием игрового процесса
// изменяем состояни при помощи клавиатуры
var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false; // Массив или любой другой итерируемый объект чьими элементами являются пары ключ-значение
    // (массивы из двух элементов, например [[ 1, 'one' ],[ 2, 'two' ]]).

    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]); // обновляем статусы событий при нажатии клавиш

    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  } // функция для обновления карты нажатия клавиш


  _createClass(ControlState, [{
    key: "update",
    value: function update(event, presed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = presed;
        console.log('this>>' + this.keyMap.get(event.keyCode));
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _controlState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlState */ "./src/controlState.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_gameLevel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/gameLevel */ "./src/scenes/gameLevel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// клас для создания основного экрана
 // общий класс для сцен

 // класс для упавления состояниями игры

 // импортируем сцены

 // меню

 // сцена загрузки

 // игровой уровень

var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    // экран
    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height); // загрузка картинок

    this.screen.loadImages({
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    }); // добавление управления игрой

    this.control = new _controlState__WEBPACK_IMPORTED_MODULE_2__["ControlState"](); // добавление сцен

    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_4__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_3__["Menu"](this),
      gameLevel: new _scenes_gameLevel__WEBPACK_IMPORTED_MODULE_5__["GameLevel"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_1__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_1__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_1__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
// ипортируем класс игры
 // проверяем , что все загружено

window.onload = function () {
  var rainbowHunter = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  rainbowHunter.run();
};

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: height, layers, nextobjectid, orientation, properties, propertytypes, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":20,"layers":[{"data":[1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,1,1,1,1,1,1,1,18,1,1,1,1,1,22,22,22,1,1,1,26,27,27,27,27,17,27,27,28,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[7,21,0,23,7,0,7,3,11,12,12,12,12,13,0,2,7,7,7,7,7,21,0,23,0,0,7,3,31,32,32,32,32,33,4,0,2,2,2,7,7,21,0,23,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,21,0,23,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,21,0,23,7,7,2,2,2,2,2,21,0,23,2,4,2,2,2,7,7,21,0,23,0,0,0,0,0,0,0,21,0,23,0,6,6,6,4,7,7,21,5,23,6,6,6,6,6,6,5,21,0,23,0,6,5,6,4,7,7,21,0,24,12,12,12,12,12,12,12,25,0,23,0,6,6,6,4,7,7,31,32,32,32,32,32,32,32,32,32,32,32,33,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,11,12,12,13,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,21,14,15,23,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,21,24,25,23,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,31,32,32,33,7,7,7,7,0,0,0,2,0,0,7,0,11,12,12,13,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,31,32,32,33,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,11,12,12,12,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,31,32,32,32,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],"height":20,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","name":"hitboxes","objects":[{"height":1279,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":1,"y":1},{"height":59,"id":4,"name":"","rotation":0,"type":"","visible":true,"width":1276,"x":1,"y":1218},{"height":65,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":127,"x":129,"y":1153},{"height":57,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":67,"y":1090},{"height":55,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":52,"x":71,"y":1027},{"height":184,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":257,"y":899},{"height":54,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":117,"x":323,"y":900},{"height":118,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":122,"x":515,"y":899},{"height":63,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":577,"y":831},{"height":62,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":63,"x":705,"y":961},{"height":60,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":834,"y":1026},{"height":58,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":121,"x":515,"y":1090},{"height":59,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":247,"x":579,"y":1154},{"height":120,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":55,"x":387,"y":1027},{"height":120,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":123,"x":66,"y":834},{"height":60,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":193,"y":771},{"height":63,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":62,"x":321,"y":703},{"height":62,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":514,"y":706},{"height":58,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":707,"y":705},{"height":61,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":835,"y":769},{"height":58,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":960,"y":835},{"height":54,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":50,"x":1031,"y":965},{"height":55,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":56,"x":1152,"y":899},{"height":63,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":1218,"y":1151},{"height":1019,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":57,"x":1219,"y":4},{"height":183,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":183,"x":964,"y":324},{"height":64,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":193,"x":1024,"y":-1},{"height":60,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":59,"x":1089,"y":127},{"height":130,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":11,"x":1016,"y":63},{"height":64,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":381,"x":385,"y":192},{"height":62,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":186,"x":833,"y":190},{"height":188,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":64,"x":384,"y":1},{"height":61,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120,"x":259,"y":257},{"height":61,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":61,"x":255,"y":129},{"height":60,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":58,"x":259,"y":2},{"height":56,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":262,"y":387},{"height":61,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":125,"x":63,"y":577},{"height":65,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":446,"x":257,"y":578}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextobjectid":42,"orientation":"orthogonal","properties":{"name":"level1"},"propertytypes":{"name":"string"},"renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/tileset.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/gameLevel.js":
/*!*********************************!*\
  !*** ./src/scenes/gameLevel.js ***!
  \*********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _spriteSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spriteSheet */ "./src/spriteSheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // импортруем клапс для работы со спрайтами

 // сцена уровня игры

var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game)); // создали страницу спрайта

    _this.tiles = new _spriteSheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    }); // это дерево

    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setXY(10, 10); // это орг


    _this.orcTiles = new _spriteSheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'orc',
      imageWidth: 832,
      imageHeight: 1344
    });
    _this.orc = _this.orcTiles.getAnimation([1, 2, 3, 4, 5, 6, 7], 300);
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level', mapData, this.tiles);
    }
  }, {
    key: "update",
    value: function update(time) {
      this.orc.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      //
      this.update(time); // заполняем цветом используя метод класса screen

      this.game.screen.fill('#000000'); // добавляем спрайт

      this.game.screen.drawSprite(this.map);
      this.game.screen.drawSprite(this.tree);
      this.game.screen.drawSprite(this.orc);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, 'Загрузка...');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//  это класс сцены меню
 // наследуемся от родителского класса

var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.fire) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    } // отрисовывем сцену

  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(220, 440, 'Нажмите пробел');

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _tileMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tileMap */ "./src/tileMap.js");
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageLoader */ "./src/ImageLoader.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // клас для создания основного экрана канваса
// и управления отображения элементов на нем

var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
  }

  _createClass(Screen, [{
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      // создаем обект загрузки картинок
      var loader = new _ImageLoader__WEBPACK_IMPORTED_MODULE_1__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    } // создаем холст или берем имеющийся

  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    } // создаем карту
    // делаем пререндар карты в картинку

  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas'); // задаем размер карты из данных в json

      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight; //

      var mapContext = mapImage.getContext('2d'); // обекты для колизии

      var hitboxes = []; // переменные для удобства обработки json

      var row;
      var col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == 'tilelayer') {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            // прорисовываем тайл если index != 0
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == 'objectgroup') {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tileMap__WEBPACK_IMPORTED_MODULE_0__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    } // заполнение экрана цветом

  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    } // выводим надписьа на нашем экране

  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '22px Georgia';
      this.context.fillText(text, x, y);
    } // выводим картинки из масссива картинок

  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    } // рисуем спрайт

  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.sourceX, sprite.sourceY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  } // перемещенеие спрайта по экрану


  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/spriteSheet.js":
/*!****************************!*\
  !*** ./src/spriteSheet.js ***!
  \****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// работа со спрайтом
 // класс для работы с анимацией

 // фабрика спрайтов

var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  } // работа с анимацией


  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    } // определяем порядковый номер спрайта на листе

  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    } // вспомогательный метод для определения спрайта

  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      // умнажаем номер на ширину спрайта и делем на ширину листа
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/tileMap.js":
/*!************************!*\
  !*** ./src/tileMap.js ***!
  \************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZUxldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGlsZU1hcC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiQW5pbWF0aW9uIiwiaW1hZ2VOYW1lIiwiZnJhbWVzIiwic3BlZWQiLCJyZXBlYXQiLCJhdXRvcnVuIiwid2lkdGgiLCJoZWlnaHQiLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwibGFzdFRpbWUiLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsImluZGV4Iiwic2V0RnJhbWUiLCJvbkVuZCIsInN0b3AiLCJ0aW1lIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwicHJlc2VkIiwiaGFzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwid2luZG93IiwicmFpbmJvd0h1bnRlciIsInJ1biIsImdhbWUiLCJjb25zdHJ1Y3RvciIsIlNwcml0ZVNoZWV0IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwidHJlZSIsImdldFNwcml0ZSIsInNldFhZIiwib3JjVGlsZXMiLCJnZXRBbmltYXRpb24iLCJtYXBEYXRhIiwicmVxdWlyZSIsIm1hcCIsImNyZWF0ZU1hcCIsImZpbGwiLCJkcmF3U3ByaXRlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsImZpbmlzaCIsInByaW50IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0aWxlc2V0IiwibWFwSW1hZ2UiLCJ0aWxld2lkdGgiLCJ0aWxlaGVpZ2h0IiwibWFwQ29udGV4dCIsImhpdGJveGVzIiwicm93IiwiY29sIiwibGF5ZXJzIiwiZm9yRWFjaCIsImxheWVyIiwidHlwZSIsImRhdGEiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIm9iamVjdHMiLCJvYmoiLCJ4MSIsIngiLCJ4MiIsInkxIiwieSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Iiwic3ByaXRlIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJpbmRleGVzIiwiTWF0aCIsInRydW5jIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxXQUFiO0FBQUE7QUFBQTtBQUNFLHVCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFhLEVBQWI7QUFDRDs7QUFKSDtBQUFB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Q0FBN0IsRSIsImZpbGUiOiJqcy9yYWluYm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpIHtcclxuICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICB0aGlzLmltYWdlcyA9e307XHJcbiAgfVxyXG4gIGxvYWQoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9W107XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSwgdGhpcy5pbWFnZUZpbGVzW25hbWVdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7U3ByaXRlfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG4vLyDQutC70LDRgdGBINC00LvRjyDQsNC90LjQvNCw0YbQuNC4INGE0YDQtdC50LzQvtCyXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGltYWdlTmFtZSxcclxuICAgIGZyYW1lcyxcclxuICAgIHNwZWVkLFxyXG4gICAgcmVwZWF0ID0gdHJ1ZSxcclxuICAgIGF1dG9ydW4gPSB0cnVlLFxyXG4gICAgd2lkdGggPSA2NCxcclxuICAgIGhlaWdodCA9IDY0LFxyXG4gIH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgdGhpcy5ydW5uaW5nID0gYXV0b3J1bjtcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vINGD0YHRgtCw0L3QvtCy0LrQsCDRgtC10LrRg9GJ0LXQs9C+INGE0YDQtdC50LzQsFxyXG4gIHNldEZyYW1lKGluZGV4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xyXG4gICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgdGhpcy5zb3VyY2VZID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN5O1xyXG4gIH1cclxuXHJcbiAgLy8g0LfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40LhcclxuICBydW4oKSB7XHJcbiAgICBpZiAoIXRoaXMucnVubmluZykge1xyXG4gICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0L7RgdGC0LDQvdC+0LLQutCwINCw0L3QuNC80LDRhtC40LhcclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5ydW5uaW5nPWZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8g0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDRgdC70LXQtNGD0Y7RidC10LPQviDRhNGA0LXQudC80LAg0LTQu9GPINCw0L3QuNC80LDRhtC40LhcclxuICAvLyDQt9Cw0L/Rg9GB0YLQuNGCINGB0L3QsNGH0LDQu9CwINC40LvQuCDQvtGB0YLQsNC90L7QstC40YJcclxuICBuZXh0RnJhbWUoKSB7XHJcbiAgICBpZiAoKHRoaXMuY3VycmVudEZyYW1lICsgMSkgPT0gdGhpcy50b3RhbEZyYW1lcykge1xyXG4gICAgICBpZiAodGhpcy5vbkVuZCkge1xyXG4gICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yZXBlYXQpIHtcclxuICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8g0L7QsdC90L7QstC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQsiDRhtC40LrQu9C1XHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcclxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkge1xyXG4gICAgICB0aGlzLm5leHRGcmFtZSgpO1xyXG4gICAgICB0aGlzLmxhc3RUaW1lKz0gdGhpcy5zcGVlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8g0LrQu9Cw0YHRgSDQtNC70Y8g0YPQv9GA0LDQstC70LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNC10Lwg0LjQs9GA0L7QstC+0LPQviDQv9GA0L7RhtC10YHRgdCwXHJcbi8vINC40LfQvNC10L3Rj9C10Lwg0YHQvtGB0YLQvtGP0L3QuCDQv9GA0Lgg0L/QvtC80L7RidC4INC60LvQsNCy0LjQsNGC0YPRgNGLXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCc0LDRgdGB0LjQsiDQuNC70Lgg0LvRjtCx0L7QuSDQtNGA0YPQs9C+0Lkg0LjRgtC10YDQuNGA0YPQtdC80YvQuSDQvtCx0YrQtdC60YIg0YfRjNC40LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuCDRj9Cy0LvRj9GO0YLRgdGPINC/0LDRgNGLINC60LvRjtGHLdC30L3QsNGH0LXQvdC40LVcclxuICAgIC8vICjQvNCw0YHRgdC40LLRiyDQuNC3INC00LLRg9GFINGN0LvQtdC80LXQvdGC0L7Qsiwg0L3QsNC/0YDQuNC80LXRgCBbWyAxLCAnb25lJyBdLFsgMiwgJ3R3bycgXV0pLlxyXG4gICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcclxuICAgICAgWzM3LCAnbGVmdCddLCBbMzksICdyaWdodCddLCBbMzgsICd1cCddLCBbNDAsICdkb3duJ10sIFszMiwgJ2ZpcmUnXSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDRgdGC0LDRgtGD0YHRiyDRgdC+0LHRi9GC0LjQuSDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQu9Cw0LLQuNGIXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4gdGhpcy51cGRhdGUoZXZlbnQsIHRydWUpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XHJcbiAgfVxyXG4gIC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDQutCw0YDRgtGLINC90LDQttCw0YLQuNGPINC60LvQsNCy0LjRiFxyXG4gIHVwZGF0ZShldmVudCwgcHJlc2VkKSB7XHJcbiAgICBpZiAodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzW3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKV0gPSBwcmVzZWQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzPj4nK3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vINC60LvQsNGBINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC+0YHQvdC+0LLQvdC+0LPQviDRjdC60YDQsNC90LBcclxuaW1wb3J0IHtTY3JlZW59IGZyb20gJy4vc2NyZWVuJztcclxuLy8g0L7QsdGJ0LjQuSDQutC70LDRgdGBINC00LvRjyDRgdGG0LXQvVxyXG5pbXBvcnQge1NjZW5lfSBmcm9tICcuL3NjZW5lJztcclxuLy8g0LrQu9Cw0YHRgSDQtNC70Y8g0YPQv9Cw0LLQu9C10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjRj9C80Lgg0LjQs9GA0YtcclxuaW1wb3J0IHtDb250cm9sU3RhdGV9IGZyb20gJy4vY29udHJvbFN0YXRlJztcclxuXHJcbi8vINC40LzQv9C+0YDRgtC40YDRg9C10Lwg0YHRhtC10L3Ri1xyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vc2NlbmVzL21lbnUnOyAvLyDQvNC10L3RjlxyXG5pbXBvcnQge0xvYWRpbmd9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnOyAvLyDRgdGG0LXQvdCwINC30LDQs9GA0YPQt9C60LhcclxuaW1wb3J0IHtHYW1lTGV2ZWx9IGZyb20gJy4vc2NlbmVzL2dhbWVMZXZlbCc7IC8vINC40LPRgNC+0LLQvtC5INGD0YDQvtCy0LXQvdGMXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3Ioe3dpZHRoID02NDAsIGhlaWdodCA9IDY0MH0gPSB7fSkge1xyXG4gICAgLy8g0Y3QutGA0LDQvVxyXG4gICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgLy8g0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC40L3QvtC6XHJcbiAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAgIHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXHJcbiAgICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZycsXHJcbiAgICB9KTtcclxuICAgIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INGD0L/RgNCw0LLQu9C10L3QuNGPINC40LPRgNC+0LlcclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcclxuICAgIC8vINC00L7QsdCw0LLQu9C10L3QuNC1INGB0YbQtdC9XHJcbiAgICB0aGlzLnNjZW5lcz17XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgfTtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFNjZW5lLkxPQURFRDpcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vINC40L/QvtGA0YLQuNGA0YPQtdC8INC60LvQsNGB0YEg0LjQs9GA0YtcclxuaW1wb3J0IHtHYW1lfSBmcm9tICcuL2dhbWUnO1xyXG5cclxuLy8g0L/RgNC+0LLQtdGA0Y/QtdC8ICwg0YfRgtC+INCy0YHQtSDQt9Cw0LPRgNGD0LbQtdC90L5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCByYWluYm93SHVudGVyID0gbmV3IEdhbWUoKTtcclxuICByYWluYm93SHVudGVyLnJ1bigpO1xyXG59O1xyXG4iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLnN0YXR1cyA9dGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBXT1JLSU5HKCkge1xyXG4gICAgcmV0dXJuICdXT1JLSU5HJztcclxuICB9XHJcbiAgc3RhdGljIGdldCBMT0FERUQoKSB7XHJcbiAgICByZXR1cm4gJ0xPQURFRCc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHtcclxuICAgIHJldHVybiAnU1RBUlRfR0FNRSc7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgR0FNRV9PVkVSKCkge1xyXG4gICAgcmV0dXJuICdHQU1FX09WRVInO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkge1xyXG4gICAgcmV0dXJuICdHQU1FX1dJTic7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7XHJcbiAgICByZXR1cm4gJ0ZJTklTSEVEJztcclxuICB9XHJcblxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPXRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICB9XHJcblxyXG4gIGZpbmlzaChzdGF0dXMpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuLy8g0LjQvNC/0L7RgNGC0YDRg9C10Lwg0LrQu9Cw0L/RgSDQtNC70Y8g0YDQsNCx0L7RgtGLINGB0L4g0YHQv9GA0LDQudGC0LDQvNC4XHJcbmltcG9ydCB7U3ByaXRlU2hlZXR9IGZyb20gJy4uL3Nwcml0ZVNoZWV0JztcclxuXHJcbi8vINGB0YbQtdC90LAg0YPRgNC+0LLQvdGPINC40LPRgNGLXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAvLyDRgdC+0LfQtNCw0LvQuCDRgdGC0YDQsNC90LjRhtGDINGB0L/RgNCw0LnRgtCwXHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDAsXHJcbiAgICB9KTtcclxuICAgIC8vINGN0YLQviDQtNC10YDQtdCy0L5cclxuICAgIHRoaXMudHJlZSA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDcpO1xyXG4gICAgdGhpcy50cmVlLnNldFhZKDEwLCAxMCk7XHJcbiAgICAvLyDRjdGC0L4g0L7RgNCzXHJcbiAgICB0aGlzLm9yY1RpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAnb3JjJyxcclxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxyXG4gICAgICBpbWFnZUhlaWdodDogMTM0NCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vcmMgPSB0aGlzLm9yY1RpbGVzLmdldEFuaW1hdGlvbihbMSwgMiwgMywgNCwgNSwgNiwgN10sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTtcclxuICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoJ2xldmVsJywgbWFwRGF0YSwgdGhpcy50aWxlcyk7XHJcbiAgfVxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgLy9cclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgLy8g0LfQsNC/0L7Qu9C90Y/QtdC8INGG0LLQtdGC0L7QvCDQuNGB0L/QvtC70YzQt9GD0Y8g0LzQtdGC0L7QtCDQutC70LDRgdGB0LAgc2NyZWVuXHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgdC/0YDQsNC50YJcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50cmVlKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYyk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcclxuICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg1MCwgNzAsICfQl9Cw0LPRgNGD0LfQutCwLi4uJyk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vICDRjdGC0L4g0LrQu9Cw0YHRgSDRgdGG0LXQvdGLINC80LXQvdGOXHJcbmltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbi8vINC90LDRgdC70LXQtNGD0LXQvNGB0Y8g0L7RgiDRgNC+0LTQuNGC0LXQu9GB0LrQvtCz0L4g0LrQu9Cw0YHRgdCwXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINC+0YLRgNC40YHQvtCy0YvQstC10Lwg0YHRhtC10L3Rg1xyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZScpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgyMjAsIDQ0MCwgJ9Cd0LDQttC80LjRgtC1INC/0YDQvtCx0LXQuycpO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1RpbGVNYXB9IGZyb20gJy4vdGlsZU1hcCc7XHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4vSW1hZ2VMb2FkZXInO1xyXG5cclxuLy8g0LrQu9Cw0YEg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L7RgdC90L7QstC90L7Qs9C+INGN0LrRgNCw0L3QsCDQutCw0L3QstCw0YHQsFxyXG4vLyDQuCDRg9C/0YDQsNCy0LvQtdC90LjRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINGN0LvQtdC80LXQvdGC0L7QsiDQvdCwINC90LXQvFxyXG5leHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5pbWFnZXMgPXt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZUZpbGVzKSB7XHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQvtCx0LXQutGCINC30LDQs9GA0YPQt9C60Lgg0LrQsNGA0YLQuNC90L7QulxyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlRmlsZXMpO1xyXG4gICAgbG9hZGVyLmxvYWQoKS50aGVuKChuYW1lcykgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g0YHQvtC30LTQsNC10Lwg0YXQvtC70YHRgiDQuNC70Lgg0LHQtdGA0LXQvCDQuNC80LXRjtGJ0LjQudGB0Y9cclxuICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIC8vINGB0L7Qt9C00LDQtdC8INC60LDRgNGC0YNcclxuICAvLyDQtNC10LvQsNC10Lwg0L/RgNC10YDQtdC90LTQsNGAINC60LDRgNGC0Ysg0LIg0LrQsNGA0YLQuNC90LrRg1xyXG4gIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgLy8g0LfQsNC00LDQtdC8INGA0LDQt9C80LXRgCDQutCw0YDRgtGLINC40Lcg0LTQsNC90L3Ri9GFINCyIGpzb25cclxuICAgIG1hcEltYWdlLndpZHRoID0gbWFwRGF0YS53aWR0aCAqIG1hcERhdGEudGlsZXdpZHRoO1xyXG4gICAgbWFwSW1hZ2UuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQgKiBtYXBEYXRhLnRpbGVoZWlnaHQ7XHJcbiAgICAvL1xyXG4gICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAvLyDQvtCx0LXQutGC0Ysg0LTQu9GPINC60L7Qu9C40LfQuNC4XHJcbiAgICBjb25zdCBoaXRib3hlcyA9W107XHJcbiAgICAvLyDQv9C10YDQtdC80LXQvdC90YvQtSDQtNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDQvtCx0YDQsNCx0L7RgtC60LgganNvblxyXG4gICAgbGV0IHJvdzsgbGV0IGNvbDtcclxuICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XHJcbiAgICAgIGlmIChsYXllci50eXBlID09ICd0aWxlbGF5ZXInKSB7XHJcbiAgICAgICAgcm93ID0wO1xyXG4gICAgICAgIGNvbD0wO1xyXG4gICAgICAgIGxheWVyLmRhdGEuZm9yRWFjaCggaW5kZXggPT4ge1xyXG4gICAgICAgICAgLy8g0L/RgNC+0YDQuNGB0L7QstGL0LLQsNC10Lwg0YLQsNC50Lsg0LXRgdC70LggaW5kZXggIT0gMFxyXG4gICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1t0aWxlc2V0LmltYWdlTmFtZV0sXHJcbiAgICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICAgIGNvbCAqIG1hcERhdGEudGlsZXdpZHRoLCByb3cgKiBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb2wrKztcclxuICAgICAgICAgIGlmIChjb2wgPiAobWFwRGF0YS53aWR0aC0xKSkge1xyXG4gICAgICAgICAgICBjb2w9MDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsYXllci50eXBlID09ICdvYmplY3Rncm91cCcpIHtcclxuICAgICAgICBoaXRib3hlcy5wdXNoKCAuLi5sYXllci5vYmplY3RzLm1hcCggb2JqID0+KHtcclxuICAgICAgICAgIHgxOiBvYmoueCxcclxuICAgICAgICAgIHgyOiBvYmoueCArIG9iai53aWR0aCxcclxuICAgICAgICAgIHkxOiBvYmoueSxcclxuICAgICAgICAgIHkyOiBvYmoueSArIG9iai5oZWlnaHQsXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xyXG4gICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICBoaXRib3hlczogaGl0Ym94ZXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINC30LDQv9C+0LvQvdC10L3QuNC1INGN0LrRgNCw0L3QsCDRhtCy0LXRgtC+0LxcclxuICBmaWxsKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgLy8g0LLRi9Cy0L7QtNC40Lwg0L3QsNC00L/QuNGB0YzQsCDQvdCwINC90LDRiNC10Lwg0Y3QutGA0LDQvdC1XHJcbiAgcHJpbnQoIHgsIHksIHRleHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGU9JyNGRkZGRkYnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMjJweCBHZW9yZ2lhJztcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcclxuICB9XHJcblxyXG4gIC8vINCy0YvQstC+0LTQuNC8INC60LDRgNGC0LjQvdC60Lgg0LjQtyDQvNCw0YHRgdGB0LjQstCwINC60LDRgNGC0LjQvdC+0LpcclxuICBkcmF3SW1hZ2UoIHgsIHksIGltYWdlTmFtZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIC8vINGA0LjRgdGD0LXQvCDRgdC/0YDQsNC50YJcclxuICBkcmF3U3ByaXRlKHNwcml0ZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tzcHJpdGUuaW1hZ2VOYW1lXSxcclxuICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksXHJcbiAgICAgICAgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0LFxyXG4gICAgICAgIHNwcml0ZS54LCBzcHJpdGUueSxcclxuICAgICAgICBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBzb3VyY2VYLCBzb3VyY2VZLCB3aWR0aCA9NjQsIGhlaWdodCA9IDY0fSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLnNvdXJjZVggPXNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnggPTA7XHJcbiAgICB0aGlzLnkgPTA7XHJcbiAgfVxyXG5cclxuICAvLyDQv9C10YDQtdC80LXRidC10L3QtdC40LUg0YHQv9GA0LDQudGC0LAg0L/QviDRjdC60YDQsNC90YNcclxuICBzZXRYWSh4LCB5KSB7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcbn1cclxuIiwiLy8g0YDQsNCx0L7RgtCwINGB0L4g0YHQv9GA0LDQudGC0L7QvFxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9zcHJpdGUnO1xyXG4vLyDQutC70LDRgdGBINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0LDQvdC40LzQsNGG0LjQtdC5XHJcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tICcuL2FuaW1hdGlvbic7XHJcblxyXG5cclxuLy8g0YTQsNCx0YDQuNC60LAg0YHQv9GA0LDQudGC0L7QslxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQge1xyXG4gIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NH0pIHtcclxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcclxuICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodDtcclxuICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLy8g0YDQsNCx0L7RgtCwINGBINCw0L3QuNC80LDRhtC40LXQuVxyXG4gIGdldEFuaW1hdGlvbiggaW5kZXhlcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKSB7XHJcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoIGluZGV4ID0+ICh7c3g6IHRoaXMuZ2V0U291cmNlWChpbmRleCksIHN5OiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpfSkgKSxcclxuICAgICAgc3BlZWQ6IHNwZWVkLFxyXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcclxuICAgICAgYXV0b3J1bjogYXV0b3J1bixcclxuICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINC+0L/RgNC10LTQtdC70Y/QtdC8INC/0L7RgNGP0LTQutC+0LLRi9C5INC90L7QvNC10YAg0YHQv9GA0LDQudGC0LAg0L3QsCDQu9C40YHRgtC1XHJcbiAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90YvQuSDQvNC10YLQvtC0INC00LvRjyDQvtC/0YDQtdC00LXQu9C10L3QuNGPINGB0L/RgNCw0LnRgtCwXHJcbiAgZ2V0U291cmNlWChpbmRleCkge1xyXG4gICAgLy8g0YPQvNC90LDQttCw0LXQvCDQvdC+0LzQtdGAINC90LAg0YjQuNGA0LjQvdGDINGB0L/RgNCw0LnRgtCwINC4INC00LXQu9C10Lwg0L3QsCDRiNC40YDQuNC90YMg0LvQuNGB0YLQsFxyXG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XHJcbiAgfVxyXG4gIGdldFNvdXJjZVkoaW5kZXgpIHtcclxuICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICp0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKnRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVNYXAgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmhpdGJveGVzID0gcHJvcHMuaGl0Ym94ZXMgfHwgW107XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=