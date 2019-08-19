module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_common__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/common/helpers/rankLabel.js":
/*!*****************************************!*\
  !*** ./src/common/helpers/rankLabel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rankLabel; });
function rankLabel(rank, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  attrs.style = attrs.style || {};
  attrs.className = 'rankLabel ' + (attrs.className || '');
  var color = rank.color();
  attrs.style.backgroundColor = attrs.style.color = color;
  attrs.className += ' colored';
  return m('span', attrs, m("span", {
    className: "rankLabel-text"
  }, rank.name()));
}

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/models/Rank.js":
/*!***********************************!*\
  !*** ./src/common/models/Rank.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rank; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Rank =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rank, _mixin);

  function Rank() {
    return _mixin.apply(this, arguments) || this;
  }

  return Rank;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  points: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('points'),
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  color: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('color')
}));



/***/ }),

/***/ "./src/forum/components/AddAttributes.js":
/*!***********************************************!*\
  !*** ./src/forum/components/AddAttributes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/PostUser */ "flarum/components/PostUser");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_helpers_rankLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helpers/rankLabel */ "./src/common/helpers/rankLabel.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.canVote = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canVote');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.canSeeVotes = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('canSeeVotes');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.votes = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('votes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.points = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('points');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.ranks = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('ranks');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.upvotes = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('upvotes');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.downvotes = flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasMany('downvotes');

  var matchClass = function matchClass(className) {
    return function (node) {
      return node && node.attrs && node.attrs.className && node.attrs.className === className;
    };
  };

  var matchTag = function matchTag(tagName) {
    return function (node) {
      return node && node.tag && node.tag === tagName;
    };
  };

  var findMatchClass = function findMatchClass(node, className) {
    var newArray = [];

    if (node && node.children) {
      var nodeInChildren = node.children.find(matchClass(className));

      if (nodeInChildren !== undefined) {
        newArray = newArray.concat(nodeInChildren);
      }

      node.children.forEach(function (currentValue) {
        newArray = newArray.concat(findMatchClass(currentValue, className));
      });
    }

    return newArray;
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'infoItems', function (items, user) {
    var points = '';

    if (points == 0) {
      points = '0';
    }

    if (app.forum.attribute('PointsPlaceholder')) {
      points = app.forum.attribute('PointsPlaceholder').replace('{points}', this.props.user.data.attributes.Points);
    } else {
      points = app.translator.trans('fof-gamification.forum.user.points', {
        points: this.props.user.data.attributes.Points
      });
    } // items.add('points', points);

  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'view', function (vnode) {
    var user = this.props.user;
    var profile_node = findMatchClass(vnode, 'UserCard-profile')[0];
    var badges_node = profile_node.children.find(matchClass('UserCard-badges'));

    if (user.ranks()) {
      if (badges_node === undefined || badges_node === '') {
        profile_node.children.splice(1, 0, m("ul", {
          className: "UserCard-badges badges"
        }, user.ranks().reverse().map(function (rank, i) {
          if (i >= app.forum.attribute('ranksAmt') && app.forum.attribute('ranksAmt') !== null) {} else {
            return m("li", {
              className: "User-Rank"
            }, Object(_common_helpers_rankLabel__WEBPACK_IMPORTED_MODULE_7__["default"])(rank));
          }
        })));
      } else {
        badges_node.children.push(user.ranks().reverse().map(function (rank, i) {
          if (i >= app.forum.attribute('ranksAmt') && app.forum.attribute('ranksAmt') !== null) {} else {
            return m("li", {
              className: "User-Rank"
            }, Object(_common_helpers_rankLabel__WEBPACK_IMPORTED_MODULE_7__["default"])(rank));
          }
        }));
      }
    }

    return vnode;
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'view', function (vnode) {
    var post = this.props.post;
    var user = post.user();

    if (!user) {
      return vnode;
    }

    var header_node = vnode.children.find(matchTag('h3'));
    header_node.children.push(user.ranks().reverse().map(function (rank, i) {
      if (i >= app.forum.attribute('ranksAmt') && app.forum.attribute('ranksAmt') !== null) {} else {
        return m("span", {
          className: "Post-Rank"
        }, Object(_common_helpers_rankLabel__WEBPACK_IMPORTED_MODULE_7__["default"])(rank));
      }
    }));
    return vnode;
  });
});

/***/ }),

/***/ "./src/forum/components/AddHotnessSort.js":
/*!************************************************!*\
  !*** ./src/forum/components/AddHotnessSort.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.viewItems = function () {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    var sortMap = app.cache.discussionList.sortMap();
    var sortOptions = {};

    for (var i in sortMap) {
      sortOptions[i] = app.translator.trans('core.forum.index_sort.' + i + '_button');
    }

    var dropDownLabel = sortOptions[this.params().sort] || Object.keys(sortMap).map(function (key) {
      return sortOptions[key];
    })[0];

    if (/^.*?\/hot/.test(m.route())) {
      dropDownLabel = app.translator.trans('core.forum.index_sort.hot_button');
    }

    items.add('sort', flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      buttonClassName: 'Button',
      label: dropDownLabel,
      children: Object.keys(sortOptions).map(function (value) {
        var label = sortOptions[value];
        var active = (_this.params().sort || Object.keys(sortMap)[0]) === value;

        if (/^.*?\/hot/.test(m.route()) && value === 'hot') {
          active = true;
        }

        if (/^.*?\/hot/.test(m.route()) && value === 'latest') {
          active = false;
          m.redraw();
        }

        return flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          children: label,
          icon: active ? 'fas fa-check' : true,
          onclick: _this.changeSort.bind(_this, value),
          active: active
        });
      })
    }));
    return items;
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    items.add('rankings', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      href: app.route('rankings'),
      children: app.translator.trans('fof-gamification.forum.nav.name'),
      icon: 'fas fa-trophy'
    }), 80);
  });

  flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.changeSort = function (sort) {
    var params = this.params();

    if (sort === 'hot') {
      m.route('/');
      m.route(m.route() + 'hot');
    } else {
      if (sort === Object.keys(app.cache.discussionList.sortMap())[0]) {
        delete params.sort;
      } else {
        params.sort = sort;
      }

      if (params.filter === 'hot') {
        delete params.filter;
      }

      m.route(app.route('index', params));
    }
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'sortMap', function (map) {
    map.hot = 'hot';
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'requestParams', function (params) {
    if (this.props.params.filter === 'hot') {
      params.filter.q = ' is:hot';
    }
  });
});

/***/ }),

/***/ "./src/forum/components/AddVoteButtons.js":
/*!************************************************!*\
  !*** ./src/forum/components/AddVoteButtons.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/PostControls */ "flarum/utils/PostControls");
/* harmony import */ var flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _VotesModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VotesModal */ "./src/forum/components/VotesModal.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'config', function (x, isInitialized, context) {
    var _this = this;

    if (isInitialized) return;

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.pusher) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.pusher.then(function (channels) {
        channels.main.bind('newVote', function (data) {
          var userId = parseInt(data.userId);
          if (userId == flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) return;
          m.startComputation();

          if (_this.postId() == data.postId) {
            var upData = _this.upvotedata();

            var downData = _this.downvotedata();

            switch (data.before) {
              case 'up':
                upData = _this.removeVote(upData, userId);
                break;

              case 'down':
                downData = _this.removeVote(downData, userId);
                break;
            }

            switch (data.after) {
              case 'up':
                upData.unshift({
                  type: 'users',
                  id: userId
                });
                break;

              case 'down':
                downData.unshift({
                  type: 'users',
                  id: userId
                });
                break;

              case 'none':
                downData = _this.removeVote(downData, userId);
                upData = _this.removeVote(upData, userId);
                break;
            }

            _this.downvotedata(downData);

            _this.upvotedata(upData);

            m.redraw.strategy('all');
          }

          m.endComputation();
        });
        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(context, 'onunload', function () {
          return channels.main.unbind('newVote');
        });
      });
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_PostControls__WEBPACK_IMPORTED_MODULE_5___default.a, 'moderationControls', function (items, post) {
    if (post.discussion().canSeeVotes()) {
      items.add('viewVotes', [m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        icon: 'fas fa-thumbs-up',
        onclick: function onclick() {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _VotesModal__WEBPACK_IMPORTED_MODULE_6__["default"]({
            post: post
          }));
        }
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fof-gamification.forum.mod_item'))]);
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'actionItems', function (items) {
    var post = this.props.post;
    this.postId = m.prop(post.data.id);
    this.downvotedata = m.prop(post.data.relationships.downvotes.data);
    this.upvotedata = m.prop(post.data.relationships.upvotes.data);
    var isUpvoted = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user && post.upvotes().some(function (user) {
      return user === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    });
    var isDownvoted = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user && post.downvotes().some(function (user) {
      return user === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    });

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
      isDownvoted = false;
      isUpvoted = false;
    }

    var icon = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('IconName');

    if (icon === null || icon === '') {
      icon = 'thumbs';
    }

    this.removeVote = function (data, userId) {
      data.some(function (vote, i) {
        if (vote.id == userId) {
          data.splice(i, 1);
        }
      });
      return data;
    };

    items.add('upvote', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-' + icon + '-up',
      className: 'Post-vote Post-upvote',
      style: isUpvoted !== false ? 'color:' + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.themePrimaryColor : 'color:',
      disabled: !post.discussion().canVote(),
      onclick: function onclick() {
        if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a());
          return;
        }

        if (!post.discussion().canVote()) return;
        var upData = post.data.relationships.upvotes.data;
        var downData = post.data.relationships.downvotes.data;
        isUpvoted = !isUpvoted;
        isDownvoted = false;
        post.save([isUpvoted, isDownvoted, 'vote']);
        upData.some(function (upvote, i) {
          if (upvote.id === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) {
            upData.splice(i, 1);
            return true;
          }
        });
        downData.some(function (downvote, i) {
          if (downvote.id === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) {
            downData.splice(i, 1);
            return true;
          }
        });

        if (isUpvoted) {
          upData.unshift({
            type: 'users',
            id: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()
          });
        }
      }
    }), 3);
    items.add('points', m("label", {
      className: "Post-points"
    }, this.upvotedata().length - this.downvotedata().length), 2);
    items.add('downvote', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-' + icon + '-down',
      className: 'Post-vote Post-downvote',
      style: isDownvoted !== false ? 'color:' + flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.themePrimaryColor : '',
      disabled: !post.discussion().canVote(),
      onclick: function onclick() {
        if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_3___default.a());
          return;
        }

        if (!post.discussion().canVote()) return;
        var upData = post.data.relationships.upvotes.data;
        var downData = post.data.relationships.downvotes.data;
        isDownvoted = !isDownvoted;
        isUpvoted = false;
        post.save([isUpvoted, isDownvoted, 'vote']);
        upData.some(function (upvote, i) {
          if (upvote.id === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) {
            upData.splice(i, 1);
            return true;
          }
        });
        downData.some(function (downvote, i) {
          if (downvote.id === flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()) {
            downData.splice(i, 1);
            return true;
          }
        });

        if (isDownvoted) {
          downData.unshift({
            type: 'users',
            id: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()
          });
        }
      }
    }), 1);
  });
});

/***/ }),

/***/ "./src/forum/components/LevelBar.js":
/*!******************************************!*\
  !*** ./src/forum/components/LevelBar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelBar; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_2__);




var LevelBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LevelBar, _Component);

  function LevelBar() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LevelBar.prototype;

  _proto.config = function config() {
    this.$().tooltip({
      container: 'body'
    });
  };

  _proto.view = function view() {
    var user = this.props.post.user();
    var pointsText = flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('fof-gamification.forum.ranking.level');
    var expComments = (user.commentCount() - user.discussionCount()) * 21,
        expDiscussions = user.discussionCount() * 33,
        expLikes = user.data.attributes.Points * 11;
    var expTotal = expComments + expDiscussions + expLikes,
        expLevel = Math.floor(expTotal / 135),
        expPercent = 100 / 135 * (expTotal - expLevel * 135);
    return m("div", {
      "class": "PostUser-level",
      title: expTotal + " " + flarum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('fof-gamification.forum.ranking.expText')
    }, m("span", {
      "class": "PostUser-text"
    }, m("span", {
      "class": "PostUser-levelText"
    }, pointsText), "\xA0", m("span", {
      "class": "PostUser-levelPoints"
    }, expLevel)), m("div", {
      "class": "PostUser-bar PostUser-bar--empty"
    }), m("div", {
      "class": "PostUser-bar",
      style: 'width: ' + expPercent + '%;'
    }));
  };

  return LevelBar;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/RankingsPage.js":
/*!**********************************************!*\
  !*** ./src/forum/components/RankingsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankingsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_10__);












var RankingsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RankingsPage, _Page);

  function RankingsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RankingsPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    if (!app.session.user || app.session.user.data.attributes.canViewRankingPage !== true) {
      m.route('/');
    }

    this.loading = true;
    this.users = [];
    this.refresh();
  };

  _proto.view = function view() {
    var _this = this;

    var loading;

    if (this.loading) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8___default.a.component();
    } else if (this.users.length < 25) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
        children: app.translator.trans('core.forum.discussion_list.load_more_button'),
        className: 'Button',
        onclick: this.loadMore.bind(this)
      });
    }

    return m("div", {
      className: "TagsPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("nav", {
      className: "RankingPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "RankingPage sideNavOffset"
    }, m("table", {
      "class": "rankings"
    }, m("tr", null, m("th", {
      className: "rankings-mobile"
    }, app.translator.trans('fof-gamification.forum.ranking.rank')), m("th", null, app.translator.trans('fof-gamification.forum.ranking.name')), m("th", null, app.translator.trans('fof-gamification.forum.ranking.level'))), this.users.map(function (user, i) {
      ++i;
      return [m("tr", {
        className: 'ranking-' + i
      }, i < 4 ? app.forum.attribute('CustomRankingImages') == '1' ? m("img", {
        className: "rankings-mobile rankings-image",
        src: app.forum.attribute('baseUrl') + app.forum.attribute('topimage' + i + 'Url')
      }) : m("td", {
        className: 'rankings-mobile rankings-' + i
      }, m("i", {
        className: "icon fas fa-trophy"
      })) : m("td", {
        className: "rankings-4 rankings-mobile"
      }, _this.addOrdinalSuffix(i)), m("td", null, m("div", {
        className: "PostUser"
      }, m("h3", {
        className: "rankings-info"
      }, m("a", {
        href: app.route.user(user),
        config: m.route
      }, i < 4 ? flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user, {
        className: 'info-avatar rankings-' + i + '-avatar'
      }) : '', ' ', flarum_helpers_username__WEBPACK_IMPORTED_MODULE_10___default()(user))))), i < 4 ? m("td", {
        className: 'rankings-' + i
      }, user.expLevel) : m("td", {
        className: "rankings-4"
      }, user.expLevel))];
    })), m("div", {
      className: "rankings-loadmore"
    }, " ", loading))));
  };

  _proto.refresh = function refresh(clear) {
    var _this2 = this;

    if (clear === void 0) {
      clear = true;
    }

    if (clear) {
      this.loading = true;
      this.users = [];
    }

    return this.loadResults().then(function (results) {
      _this2.users = [];

      _this2.parseResults(results);
    }, function () {
      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.addOrdinalSuffix = function addOrdinalSuffix(i) {
    if (app.forum.attribute('DefaultLocale') == 'en') {
      var j = i % 10,
          k = i % 100;

      if (j == 1 && k != 11) {
        return i + 'st';
      }

      if (j == 2 && k != 12) {
        return i + 'nd';
      }

      if (j == 3 && k != 13) {
        return i + 'rd';
      }

      return i + 'th';
    } else {
      return i;
    }
  };

  _proto.stickyParams = function stickyParams() {
    return {
      sort: m.route.param('sort'),
      q: m.route.param('q')
    };
  };

  _proto.actionItems = function actionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default.a();
    items.add('refresh', flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      title: app.translator.trans('core.forum.index.refresh_tooltip'),
      icon: 'fas fa-refresh',
      className: 'Button Button--icon',
      onclick: function onclick() {
        app.cache.discussionList.refresh();

        if (app.session.user) {
          app.store.find('users', app.session.user.id());
          m.redraw();
        }
      }
    }));
    return items;
  };

  _proto.newDiscussion = function newDiscussion() {
    var deferred = m.deferred();

    if (app.session.user) {
      this.composeNewDiscussion(deferred);
    } else {
      app.modal.show(new flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_7___default.a({
        onlogin: this.composeNewDiscussion.bind(this, deferred)
      }));
    }

    return deferred.promise;
  };

  _proto.composeNewDiscussion = function composeNewDiscussion(deferred) {
    var component = new DiscussionComposer({
      user: app.session.user
    });
    app.composer.load(component);
    app.composer.show();
    deferred.resolve(component);
    return deferred.promise;
  };

  _proto.loadResults = function loadResults(offset) {
    var params = {};
    params.page = {
      offset: offset,
      limit: '10'
    };
    return app.store.find('rankings', params);
  };

  _proto.loadMore = function loadMore() {
    this.loading = true;
    this.loadResults(this.users.length).then(this.parseResults.bind(this));
  };

  _proto.parseResults = function parseResults(results) {
    [].push.apply(this.users, results);
    this.loading = false;
    this.users.forEach(function (user) {
      var expComments = (user.commentCount() - user.discussionCount()) * 21,
          expDiscussions = user.discussionCount() * 33,
          expLikes = user.data.attributes.Points * 11;
      var expTotal = expComments + expDiscussions + expLikes,
          expLevel = Math.floor(expTotal / 135);
      user.expLevel = expLevel;
    });
    m.lazyRedraw();
    return results;
  };

  return RankingsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/VoteNotification.js":
/*!**************************************************!*\
  !*** ./src/forum/components/VoteNotification.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpvotedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var UpvotedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpvotedNotification, _Notification);

  function UpvotedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = UpvotedNotification.prototype;

  _proto.icon = function icon() {
    if (this.props.notification.content() === 'Up') {
      return 'fas fa-thumbs-up';
    } else {
      return 'fas fa-thumbs-down';
    }
  };

  _proto.href = function href() {
    return app.route.post(this.props.notification.subject());
  };

  _proto.content = function content() {
    var username = this.props.notification.fromUser().username();

    if (this.props.notification.content() === 'Up') {
      return app.translator.trans('fof-gamification.forum.notification.upvote', {
        username: username
      });
    } else {
      return app.translator.trans('fof-gamification.forum.notification.downvote', {
        username: username
      });
    }
  };

  _proto.excerpt = function excerpt() {
    return this.props.notification.subject().contentPlain();
  };

  return UpvotedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/VotesModal.js":
/*!********************************************!*\
  !*** ./src/forum/components/VotesModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VotesModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);





var VotesModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(VotesModal, _Modal);

  function VotesModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = VotesModal.prototype;

  _proto.className = function className() {
    return 'VotesModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('fof-gamification.forum.modal.title');
  };

  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("ul", {
      className: "VotesModal-list"
    }, m("legend", null, app.translator.trans('fof-gamification.forum.modal.upvotes_label')), this.props.post.upvotes().map(function (user) {
      return m("li", null, m("a", {
        href: app.route.user(user),
        config: m.route
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user), " ", flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user)));
    }), m("legend", null, app.translator.trans('fof-gamification.forum.modal.downvotes_label')), this.props.post.downvotes().map(function (user) {
      return m("li", null, m("a", {
        href: app.route.user(user),
        config: m.route
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user), " ", flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user)));
    })));
  };

  return VotesModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/addUpvotesToDiscussion.js":
/*!********************************************************!*\
  !*** ./src/forum/components/addUpvotesToDiscussion.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/abbreviateNumber */ "flarum/utils/abbreviateNumber");
/* harmony import */ var flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'infoItems', function (items) {
    if (app.forum.attribute('showVotesOnDiscussionPage')) {
      $('.DiscussionListItem-info').find('.item-tags').addClass('gamification');
      items.add('discussion-votes', m("span", {
        className: "DiscussionListItem-votes",
        title: app.translator.trans('fof-gamification.forum.votes')
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_3___default()('far fa-thumbs-up'), flarum_utils_abbreviateNumber__WEBPACK_IMPORTED_MODULE_2___default()(this.props.discussion.votes())), 10);
    }
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AddAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AddAttributes */ "./src/forum/components/AddAttributes.js");
/* harmony import */ var _components_AddHotnessSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AddHotnessSort */ "./src/forum/components/AddHotnessSort.js");
/* harmony import */ var _components_AddVoteButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AddVoteButtons */ "./src/forum/components/AddVoteButtons.js");
/* harmony import */ var _common_models_Rank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/models/Rank */ "./src/common/models/Rank.js");
/* harmony import */ var _components_RankingsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RankingsPage */ "./src/forum/components/RankingsPage.js");
/* harmony import */ var _components_VoteNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/VoteNotification */ "./src/forum/components/VoteNotification.js");
/* harmony import */ var _components_addUpvotesToDiscussion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addUpvotesToDiscussion */ "./src/forum/components/addUpvotesToDiscussion.js");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/PostUser */ "flarum/components/PostUser");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_LevelBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/LevelBar */ "./src/forum/components/LevelBar.js");











flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('fof-gamification', function (app) {
  app.store.models.ranks = _common_models_Rank__WEBPACK_IMPORTED_MODULE_5__["default"];
  app.notificationComponents.vote = _components_VoteNotification__WEBPACK_IMPORTED_MODULE_7__["default"];
  app.routes.rankings = {
    path: '/rankings',
    component: _components_RankingsPage__WEBPACK_IMPORTED_MODULE_6__["default"].component()
  };
  Object(_components_AddVoteButtons__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_components_AddHotnessSort__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_AddAttributes__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_addUpvotesToDiscussion__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'view', function (view) {
    view.children.push(_components_LevelBar__WEBPACK_IMPORTED_MODULE_10__["default"].component(this.props));
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/PostUser":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/PostUser']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostUser'];

/***/ }),

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/PostControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/PostControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/PostControls'];

/***/ }),

/***/ "flarum/utils/abbreviateNumber":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['utils/abbreviateNumber']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/abbreviateNumber'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map