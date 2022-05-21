"use strict";
(self["webpackChunkpokedex"] = self["webpackChunkpokedex"] || []).push([["src_components_Pokemon_index_js"],{

/***/ "./src/components/Common/ProgressBar.js":
/*!**********************************************!*\
  !*** ./src/components/Common/ProgressBar.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  progress[value] {\n    width: 400px;\n    appearance: none;\n\n    ::-webkit-progress-bar {\n      height: 20px;\n      border-radius: 20px;\n      background-color: #eee;\n    }\n\n    ::-webkit-progress-value {\n      height: 20px;\n      border-radius: 20px;\n      background-color: ", ";\n    }\n  }\n"])), function (props) {
  return props.color;
});

var Progressbar = function Progressbar(props) {
  var name = props.name,
      value = props.value,
      max = props.max,
      color = props.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, {
    color: color,
    className: "container-base-stat"
  }, name.toUpperCase(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("progress", {
    value: value,
    max: max
  }));
};

Progressbar.propTypes = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
  max: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Progressbar.defaultProps = {
  max: 250
};
/* harmony default export */ __webpack_exports__["default"] = (Progressbar);

/***/ }),

/***/ "./src/components/Pokemon/PokemonDetails.js":
/*!**************************************************!*\
  !*** ./src/components/Pokemon/PokemonDetails.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type */ "./src/components/Pokemon/Type.js");
/* harmony import */ var _Common_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ProgressBar */ "./src/components/Common/ProgressBar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");






var PokemonDetails = function PokemonDetails(_ref) {
  var _pokemon$name, _pokemon$sprites, _pokemon$types, _pokemon$stats;

  var pokemon = _ref.pokemon,
      pokedexNumber = _ref.pokedexNumber;

  var _ref2 = pokemon && _constants__WEBPACK_IMPORTED_MODULE_3__.dataType.find(function (element) {
    return element.name === pokemon.types[0].type.name;
  }),
      color = _ref2.color;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    md: 6,
    style: {
      backgroundColor: color
    },
    className: "grid-item-pokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-left-pokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "#", pokedexNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pokemon-name"
  }, (_pokemon$name = pokemon.name) === null || _pokemon$name === void 0 ? void 0 : _pokemon$name.toUpperCase())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_pokemon$sprites = pokemon.sprites) === null || _pokemon$sprites === void 0 ? void 0 : _pokemon$sprites.other["official-artwork"].front_default,
    className: "imagen",
    alt: "Pokemon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-right-pokemon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pokemon-types"
  }, (_pokemon$types = pokemon.types) === null || _pokemon$types === void 0 ? void 0 : _pokemon$types.map(function (slot) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Type__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: slot.slot,
      name: slot.type.name
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "base-stats"
  }, "Base stats"), (_pokemon$stats = pokemon.stats) === null || _pokemon$stats === void 0 ? void 0 : _pokemon$stats.map(function (stat) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Common_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: stat.stat.name,
      name: stat.stat.name,
      value: stat.base_stat,
      color: color
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PokemonDetails);

/***/ }),

/***/ "./src/components/Pokemon/Type.js":
/*!****************************************!*\
  !*** ./src/components/Pokemon/Type.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var Type = function Type(_ref) {
  var name = _ref.name;

  var _dataType$find = _constants__WEBPACK_IMPORTED_MODULE_1__.dataType.find(function (element) {
    return element.name === name;
  }),
      color = _dataType$find.color,
      imagen = _dataType$find.imagen;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-type",
    style: {
      backgroundColor: color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imagen,
    width: 33,
    alt: "Type pokemon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text"
  }, name.toUpperCase()));
};

Type.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Type);

/***/ }),

/***/ "./src/components/Pokemon/Varienties.js":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Varienties.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");



var Varienties = function Varienties(_ref) {
  var pokemonVarienties = _ref.pokemonVarienties,
      seleccionaPokemon = _ref.seleccionaPokemon;

  var handleChange = function handleChange(event) {
    seleccionaPokemon(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content-pokemon-varienties"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "select-empty",
    onChange: handleChange
  }, pokemonVarienties && (pokemonVarienties === null || pokemonVarienties === void 0 ? void 0 : pokemonVarienties.map(function (varietie, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
      key: varietie.id,
      value: index
    }, varietie.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Varieties")));
};

/* harmony default export */ __webpack_exports__["default"] = (Varienties);

/***/ }),

/***/ "./src/components/Pokemon/index.js":
/*!*****************************************!*\
  !*** ./src/components/Pokemon/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _PokemonDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokemonDetails */ "./src/components/Pokemon/PokemonDetails.js");
/* harmony import */ var _Varienties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Varienties */ "./src/components/Pokemon/Varienties.js");
/* harmony import */ var _contexts_PokemonContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/PokemonContext */ "./src/contexts/PokemonContext.js");






var Pokemon = function Pokemon() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_PokemonContext__WEBPACK_IMPORTED_MODULE_3__.PokemonContext),
      pokemonSpecies = _useContext.pokemonSpecies,
      pokemonVarienties = _useContext.pokemonVarienties,
      pokemonVariant = _useContext.pokemonVariant,
      selectVariant = _useContext.selectVariant;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, pokemonVarienties.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Varienties__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pokemonVarienties: pokemonVarienties,
    seleccionaPokemon: selectVariant,
    pokemonVariant: pokemonVariant
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PokemonDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pokemon: pokemonVariant,
    pokedexNumber: pokemonSpecies.id
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ })

}]);
//# sourceMappingURL=src_components_Pokemon_index_js.bundle.js.map