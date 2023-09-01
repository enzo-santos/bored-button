(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-dom-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-react-dom-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.e1;
  var objectMeta = kotlin_kotlin.$_$.d1;
  var VOID = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ReactHTML, 'ReactHTML', objectMeta);
  setMetadataFor(ReactSVG, 'ReactSVG', objectMeta);
  //endregion
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance == null)
      new ReactHTML();
    return ReactHTML_instance;
  }
  function ReactSVG() {
    ReactSVG_instance = this;
  }
  var ReactSVG_instance;
  function ReactSVG_getInstance() {
    if (ReactSVG_instance == null)
      new ReactSVG();
    return ReactSVG_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_getInstance;
  _.$_$.b = ReactSVG_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-dom-js-ir.js.map
