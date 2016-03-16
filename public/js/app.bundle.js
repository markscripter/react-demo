webpackJsonp([0],{

/***/ 0:
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _baconjs = __webpack_require__(/*! baconjs */ 159);
	
	var _baconjs2 = _interopRequireDefault(_baconjs);
	
	var _App = __webpack_require__(/*! ./components/App.jsx */ 163);
	
	var _recipeStore = __webpack_require__(/*! ./components/recipes/recipeStore */ 167);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var recipesProperty = (0, _recipeStore.toItemsProperty)([{
	  name: "test",
	  id: "d7d64cc0-6113-4a7d-852c-6e15198bc1ae"
	}, {
	  name: "test1",
	  id: "a43e3efe-c95b-442e-a55f-81aefd139139"
	}]);
	
	var appState = _baconjs2.default.combineTemplate({
	  recipes: recipesProperty
	});
	
	appState.onValue(function (state) {
	  _reactDom2.default.render(_react2.default.createElement(_App.App, state), document.getElementById('recipesApp'));
	});
	
	__webpack_require__.e/* nsure */(1/*! worker */, function (require) {
	  var a = __webpack_require__(/*! node-uuid */ 170).v4();
	  console.log(a);
	});

/***/ },

/***/ 158:
/*!******************************!*\
  !*** ./~/react-dom/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! react/lib/ReactDOM */ 3);


/***/ },

/***/ 163:
/*!********************************!*\
  !*** ./app/components/App.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Header = __webpack_require__(/*! ./header/Header.jsx */ 164);
	
	var _Recipes = __webpack_require__(/*! ./recipes/Recipes.jsx */ 165);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = exports.App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Header.Header, null),
	        _react2.default.createElement(_Recipes.Recipes, { recipes: this.props.recipes })
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);

/***/ },

/***/ 164:
/*!******************************************!*\
  !*** ./app/components/header/Header.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Header = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = exports.Header = function Header() {
	  return _react2.default.createElement(
	    'header',
	    null,
	    _react2.default.createElement(
	      'nav',
	      null,
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          'Browse Recipes'
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          'Search Recipes'
	        )
	      )
	    )
	  );
	};

/***/ },

/***/ 165:
/*!********************************************!*\
  !*** ./app/components/recipes/Recipes.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Recipes = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Recipe = __webpack_require__(/*! ../recipe/Recipe.jsx */ 166);
	
	var _recipeStore = __webpack_require__(/*! ./recipeStore */ 167);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Recipes = exports.Recipes = _react2.default.createClass({
	  displayName: 'Recipes',
	  render: function render() {
	    var recipes = this.props.recipes;
	
	    return _react2.default.createElement(
	      'section',
	      { className: 'recipes' },
	      _react2.default.createElement(
	        'a',
	        { onClick: this.getUpdatedRecipes },
	        'Get Updated'
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        recipes.map(function (recipe) {
	          return _react2.default.createElement(_Recipe.Recipe, { key: recipe.id, item: recipe });
	        })
	      )
	    );
	  },
	  getUpdatedRecipes: function getUpdatedRecipes(e) {
	    e ? (e.preventDefault(), (0, _recipeStore.getRecipes)()) : 0;
	  }
	});

/***/ },

/***/ 166:
/*!******************************************!*\
  !*** ./app/components/recipe/Recipe.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Recipe = undefined;
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Recipe = exports.Recipe = _react2.default.createClass({
	  displayName: "Recipe",
	  render: function render() {
	    var recipe = this.props.item;
	
	    return _react2.default.createElement(
	      "li",
	      { className: "recipe" },
	      recipe.name
	    );
	  }
	});

/***/ },

/***/ 167:
/*!***********************************************!*\
  !*** ./app/components/recipes/recipeStore.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toItemsProperty = toItemsProperty;
	exports.addRecipe = addRecipe;
	exports.removeRecipe = removeRecipe;
	exports.updateRecipe = updateRecipe;
	exports.getRecipes = getRecipes;
	
	var _baconjs = __webpack_require__(/*! baconjs */ 159);
	
	var _baconjs2 = _interopRequireDefault(_baconjs);
	
	var _ramda = __webpack_require__(/*! ramda */ 168);
	
	var _ramda2 = _interopRequireDefault(_ramda);
	
	var _dispatcher = __webpack_require__(/*! dispatcher */ 169);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddRecipe = function AddRecipe(recipes, recipe) {
	  return recipes.concat(recipe);
	};
	
	var RemoveRecipe = function RemoveRecipe(recipes, id) {
	  return _ramda2.default.reject(function (recipe) {
	    return recipe.id !== id;
	  }, recipes);
	};
	
	var UpdateRecipe = function UpdateRecipe(recipes, updatedRecipe) {
	  return _ramda2.default.map(function (recipe) {
	    return recipe.id === updatedRecipe.id ? _ramda2.default.merge(recipe, updatedRecipe) : recipe;
	  }, recipes);
	};
	
	var UpdatedRecipeStore = function UpdatedRecipeStore(recipes, updatedRecipeStore) {
	  return updatedRecipeStore;
	};
	
	var updateStore = function updateStore(updatedRecipeStore) {
	  return updatedRecipeStore ? _dispatcher2.default.push('updateStore', updatedRecipeStore) : 0;
	};
	
	function toItemsProperty(initialItems) {
	  return _baconjs2.default.update(initialItems, [_dispatcher2.default.stream('add')], AddRecipe, [_dispatcher2.default.stream('remove')], RemoveRecipe, [_dispatcher2.default.stream('update')], UpdateRecipe, [_dispatcher2.default.stream('updateStore')], UpdatedRecipeStore);
	}
	
	function addRecipe(recipe) {
	  recipe ? _dispatcher2.default.push('add', recipe) : 0;
	}
	
	function removeRecipe(id) {
	  id ? _dispatcher2.default.push('remove', id) : 0;
	}
	
	function updateRecipe(recipe) {
	  recipe ? _dispatcher2.default.push('update', recipe) : 0;
	}
	
	function getRecipes() {
	  fetch('./data/recipes.json').then(function (res) {
	    return res.json();
	  }).then(updateStore);
	}

/***/ }

});
//# sourceMappingURL=app.bundle.js.map