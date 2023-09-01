(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react', '@emotion/css', 'latinize', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js', './kotlin-wrappers-kotlin-react-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react'), require('@emotion/css'), require('latinize'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'), require('./kotlin-wrappers-kotlin-react-core-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'portfolio'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'portfolio'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'portfolio'.");
    }
    if (typeof latinize === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'latinize' was not found. Please, check whether 'latinize' is loaded prior to 'portfolio'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'portfolio'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'portfolio'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'portfolio'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-core-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-core-js-ir' is loaded prior to 'portfolio'.");
    }
    root.portfolio = factory(typeof portfolio === 'undefined' ? {} : portfolio, this['react-dom/client'], react, this['@emotion/css'], latinize, this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['kotlin-wrappers-kotlin-react-core-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react, $module$_emotion_css_2enn37, latinize, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var imul = Math.imul;
  var useState = $module$react.useState;
  var css = $module$_emotion_css_2enn37.css;
  var useCallback = $module$react.useCallback;
  var ensureNotNull = kotlin_kotlin.$_$.q1;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.i;
  var fillArrayVal = kotlin_kotlin.$_$.x;
  var protoOf = kotlin_kotlin.$_$.e1;
  var objectCreate = kotlin_kotlin.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.v;
  var VOID = kotlin_kotlin.$_$.t1;
  var setMetadataFor = kotlin_kotlin.$_$.f1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.d1;
  var joinToString = kotlin_kotlin.$_$.n;
  var println = kotlin_kotlin.$_$.t;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.f;
  var until = kotlin_kotlin.$_$.h1;
  var downTo = kotlin_kotlin.$_$.g1;
  var Enum = kotlin_kotlin.$_$.n1;
  var THROW_CCE = kotlin_kotlin.$_$.o1;
  var ReactSVG_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.b;
  var Default_getInstance = kotlin_kotlin.$_$.h;
  var random = kotlin_kotlin.$_$.q;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.i1;
  var THROW_ISE = kotlin_kotlin.$_$.p1;
  var getLocalDelegateReference = kotlin_kotlin.$_$.y;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.r1;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var hashCode = kotlin_kotlin.$_$.a1;
  var equals = kotlin_kotlin.$_$.w;
  var toIntOrNull = kotlin_kotlin.$_$.k1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var copyToArray = kotlin_kotlin.$_$.l;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e;
  var useEffect = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var to = kotlin_kotlin.$_$.s1;
  var mapOf = kotlin_kotlin.$_$.p;
  var getStringHashCode = kotlin_kotlin.$_$.z;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.b;
  var random_0 = kotlin_kotlin.$_$.r;
  var toSet = kotlin_kotlin.$_$.l1;
  var listOf = kotlin_kotlin.$_$.o;
  var checkIndexOverflow = kotlin_kotlin.$_$.j;
  var joinToString_0 = kotlin_kotlin.$_$.m;
  var contains = kotlin_kotlin.$_$.j1;
  var charSequenceGet = kotlin_kotlin.$_$.u;
  var Char = kotlin_kotlin.$_$.m1;
  var contains_0 = kotlin_kotlin.$_$.k;
  var toString = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Grid, 'Grid', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Sudoku, 'Sudoku', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Board, 'Board', classMeta);
  setMetadataFor(Slot, 'Slot', classMeta);
  setMetadataFor(SlotDirection, 'SlotDirection', classMeta, Enum);
  setMetadataFor(GameType, 'GameType', classMeta, Enum);
  setMetadataFor(MainState, 'MainState', classMeta);
  setMetadataFor(SudokuState, 'SudokuState', classMeta);
  setMetadataFor(TZFEState, 'TZFEState', classMeta);
  setMetadataFor(WordleState, 'WordleState', classMeta);
  //endregion
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var tmp = get_Main();
    var welcome = create(tmp, main$lambda);
    createRoot(container).render(welcome);
  }
  function main$lambda($this$create) {
    return Unit_getInstance();
  }
  function Grid_init_$Init$($this) {
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'games.sudoku.Grid.<init>.<anonymous>' call
      var tmp_3 = 0;
      var tmp_4 = 9;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(tmp_4), null);
      var tmp_5 = tmp$ret$1;
      while (tmp_3 < tmp_4) {
        var tmp_6 = tmp_3;
        var tmp$ret$2;
        // Inline function 'games.sudoku.Grid.<init>.<anonymous>.<anonymous>' call
        tmp$ret$2 = 0;
        tmp_5[tmp_6] = tmp$ret$2;
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp$ret$3 = tmp_5;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    Grid.call($this, tmp_1);
    return $this;
  }
  function Grid_init_$Create$() {
    return Grid_init_$Init$(objectCreate(protoOf(Grid)));
  }
  function Grid(grid) {
    this.l7_1 = grid;
  }
  protoOf(Grid).m7 = function () {
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$3;
      // Inline function 'games.sudoku.Grid.copy.<anonymous>' call
      var tmp_3 = 0;
      var tmp_4 = 9;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(tmp_4), null);
      var tmp_5 = tmp$ret$1;
      while (tmp_3 < tmp_4) {
        var tmp_6 = tmp_3;
        var tmp$ret$2;
        // Inline function 'games.sudoku.Grid.copy.<anonymous>.<anonymous>' call
        tmp$ret$2 = this.l7_1[tmp_2][tmp_6];
        tmp_5[tmp_6] = tmp$ret$2;
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp$ret$3 = tmp_5;
      tmp_1[tmp_2] = tmp$ret$3;
      tmp = tmp + 1 | 0;
    }
    return new Grid(tmp_1);
  };
  protoOf(Grid).n7 = function (r, c) {
    return this.l7_1[r][c] === 0;
  };
  protoOf(Grid).o7 = function (r, c, v) {
    this.l7_1[r][c] = v;
  };
  protoOf(Grid).p7 = function (r, c) {
    return this.l7_1[r][c];
  };
  protoOf(Grid).q7 = function (r) {
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'games.sudoku.Grid.getRow.<anonymous>' call
      tmp$ret$1 = this.l7_1[r][tmp_2];
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
  protoOf(Grid).r7 = function (c) {
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'games.sudoku.Grid.getColumn.<anonymous>' call
      tmp$ret$1 = this.l7_1[tmp_2][c];
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
  protoOf(Grid).s7 = function (i, j) {
    var ic = imul(i, 3);
    var jc = imul(j, 3);
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'games.sudoku.Grid.getChunk.<anonymous>' call
      var r = tmp_2 % 3 | 0;
      var c = tmp_2 / 3 | 0;
      tmp$ret$1 = this.l7_1[r + ic | 0][c + jc | 0];
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
  function get_chunkRange() {
    _init_properties_Sudoku_kt__pki2rt();
    return chunkRange;
  }
  var chunkRange;
  function get_sudokuRange() {
    _init_properties_Sudoku_kt__pki2rt();
    return sudokuRange;
  }
  var sudokuRange;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).t7 = function (row) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashSetOf' call
    tmp$ret$0 = HashSet_init_$Create$();
    var visited = tmp$ret$0;
    var indexedObject = row;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (value < 1 ? true : value > 9)
        return false;
      if (!visited.c(value))
        return false;
    }
    return true;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function checkSolutions($this, sols, r, c) {
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'games.sudoku.Sudoku.checkSolutions.<anonymous>' call
      tmp$ret$1 = sols[tmp_2];
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var result = tmp_1;
    var pos;
    var progression = get_sudokuRange();
    var inductionVariable = progression.i2_1;
    var last = progression.j2_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!$this.w7_1.n7(r, i)) {
          pos = $this.w7_1.p7(r, i) - 1 | 0;
          result[pos] = false;
        }
        if (!$this.w7_1.n7(i, c)) {
          pos = $this.w7_1.p7(i, c) - 1 | 0;
          result[pos] = false;
        }
      }
       while (!(i === last));
    var rul = r / 3 | 0;
    var cul = c / 3 | 0;
    var inductionVariable_0 = imul(3, rul);
    var last_0 = imul(3, rul) + 3 | 0;
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var inductionVariable_1 = imul(3, cul);
        var last_1 = imul(3, cul) + 3 | 0;
        if (inductionVariable_1 < last_1)
          do {
            var j = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            if (!$this.w7_1.n7(i_0, j)) {
              pos = $this.w7_1.p7(i_0, j) - 1 | 0;
              result[pos] = false;
            }
          }
           while (inductionVariable_1 < last_1);
      }
       while (inductionVariable_0 < last_0);
    return result;
  }
  function _get_isSolved__inl7hg($this) {
    var progression = get_sudokuRange();
    var inductionVariable = progression.i2_1;
    var last = progression.j2_1;
    if (inductionVariable <= last)
      do {
        var r = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var row = $this.w7_1.q7(r);
        println('row: ' + joinToString(row, ', '));
        if (!Companion_getInstance().t7(row))
          return false;
      }
       while (!(r === last));
    var progression_0 = get_sudokuRange();
    var inductionVariable_0 = progression_0.i2_1;
    var last_0 = progression_0.j2_1;
    if (inductionVariable_0 <= last_0)
      do {
        var c = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var col = $this.w7_1.r7(c);
        println('col: ' + joinToString(col, ', '));
        if (!Companion_getInstance().t7(col))
          return false;
      }
       while (!(c === last_0));
    var progression_1 = get_chunkRange();
    var inductionVariable_1 = progression_1.i2_1;
    var last_1 = progression_1.j2_1;
    if (inductionVariable_1 <= last_1)
      do {
        var r_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var progression_2 = get_chunkRange();
        var inductionVariable_2 = progression_2.i2_1;
        var last_2 = progression_2.j2_1;
        if (inductionVariable_2 <= last_2)
          do {
            var c_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var chunk = $this.w7_1.s7(r_0, c_0);
            println('chunk: ' + joinToString(chunk, ', '));
            if (!Companion_getInstance().t7(chunk))
              return false;
          }
           while (!(c_0 === last_2));
      }
       while (!(r_0 === last_1));
    return true;
  }
  function Sudoku(grid) {
    Companion_getInstance();
    this.u7_1 = null;
    this.v7_1 = null;
    this.w7_1 = grid;
    var inductionVariable = 8;
    if (0 <= inductionVariable)
      loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var inductionVariable_0 = 8;
        if (0 <= inductionVariable_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            if (grid.n7(i, j)) {
              this.u7_1 = i;
              this.v7_1 = j;
              break loop;
            }
          }
           while (0 <= inductionVariable_0);
      }
       while (0 <= inductionVariable);
  }
  protoOf(Sudoku).x7 = function () {
    var contSolutions;
    var tmp = 0;
    var tmp_0 = 9;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'games.sudoku.Sudoku.solve.<anonymous>' call
      tmp$ret$1 = false;
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var sols = tmp_1;
    var progression = get_sudokuRange();
    var inductionVariable = progression.i2_1;
    var last = progression.j2_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var progression_0 = get_sudokuRange();
        var inductionVariable_0 = progression_0.i2_1;
        var last_0 = progression_0.j2_1;
        if (inductionVariable_0 <= last_0)
          $l$loop_0: do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (this.w7_1.n7(i, j)) {
              contSolutions = 0;
              var progression_1 = get_sudokuRange();
              var inductionVariable_1 = progression_1.i2_1;
              var last_1 = progression_1.j2_1;
              if (inductionVariable_1 <= last_1)
                do {
                  var s = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  sols[s] = true;
                }
                 while (!(s === last_1));
              sols = checkSolutions(this, sols, i, j);
              var progression_2 = get_sudokuRange();
              var inductionVariable_2 = progression_2.i2_1;
              var last_2 = progression_2.j2_1;
              if (inductionVariable_2 <= last_2)
                do {
                  var s_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  if (sols[s_0]) {
                    contSolutions = contSolutions + 1 | 0;
                  }
                }
                 while (!(s_0 === last_2));
              if (contSolutions === 0) {
                return false;
              }
              if (contSolutions === 1) {
                var progression_3 = get_sudokuRange();
                var inductionVariable_3 = progression_3.i2_1;
                var last_3 = progression_3.j2_1;
                if (inductionVariable_3 <= last_3)
                  $l$loop: do {
                    var s_1 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    if (sols[s_1]) {
                      this.w7_1.o7(i, j, s_1 + 1 | 0);
                      if (i === this.u7_1 ? j === this.v7_1 : false) {
                        return true;
                      }
                      break $l$loop;
                    }
                  }
                   while (!(s_1 === last_3));
                continue $l$loop_0;
              }
              var progression_4 = get_sudokuRange();
              var inductionVariable_4 = progression_4.i2_1;
              var last_4 = progression_4.j2_1;
              if (inductionVariable_4 <= last_4)
                do {
                  var s_2 = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  if (sols[s_2]) {
                    var newGrid = this.w7_1.m7();
                    newGrid.o7(i, j, s_2 + 1 | 0);
                    var sudoku = new Sudoku(newGrid);
                    if (sudoku.x7()) {
                      this.w7_1 = sudoku.w7_1.m7();
                      return true;
                    }
                  }
                }
                 while (!(s_2 === last_4));
              return false;
            }
          }
           while (!(j === last_0));
      }
       while (!(i === last));
    return _get_isSolved__inl7hg(this);
  };
  protoOf(Sudoku).toString = function () {
    var buffer = StringBuilder_init_$Create$();
    var progression = get_sudokuRange();
    var inductionVariable = progression.i2_1;
    var last = progression.j2_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var progression_0 = get_sudokuRange();
        var inductionVariable_0 = progression_0.i2_1;
        var last_0 = progression_0.j2_1;
        if (inductionVariable_0 <= last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (i === 0) {
              tmp = j === 0 ? '\u2554\u2550\u2550\u2550' : !((j % 3 | 0) === 0) ? '\u2564\u2550\u2550\u2550' : '\u2566\u2550\u2550\u2550';
            } else if (!((i % 3 | 0) === 0)) {
              tmp = j === 0 ? '\u255F\u2500\u2500\u2500' : !((j % 3 | 0) === 0) ? '\u253C\u2500\u2500\u2500' : '\u256B\u2500\u2500\u2500';
            } else {
              tmp = j === 0 ? '\u2560\u2550\u2550\u2550' : !((j % 3 | 0) === 0) ? '\u256A\u2550\u2550\u2550' : '\u256C\u2550\u2550\u2550';
            }
            buffer.w5(tmp);
          }
           while (!(j === last_0));
        var tmp$ret$1;
        // Inline function 'kotlin.text.appendLine' call
        var tmp1_appendLine = i === 0 ? '\u2557' : !((i % 3 | 0) === 0) ? '\u2562' : '\u2563';
        var tmp$ret$0;
        // Inline function 'kotlin.text.appendLine' call
        var tmp0_appendLine = buffer.w5(tmp1_appendLine);
        tmp$ret$0 = tmp0_appendLine.q2(_Char___init__impl__6a9atx(10));
        tmp$ret$1 = tmp$ret$0;
        var progression_1 = get_sudokuRange();
        var inductionVariable_1 = progression_1.i2_1;
        var last_1 = progression_1.j2_1;
        if (inductionVariable_1 <= last_1)
          do {
            var j_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var value = this.w7_1.p7(i, j_0);
            buffer.w5(!((j_0 % 3 | 0) === 0) ? '\u2502 ' : '\u2551 ');
            buffer.w5(value === 0 ? ' ' : '' + value);
            buffer.w5(' ');
          }
           while (!(j_0 === last_1));
        var tmp$ret$3;
        // Inline function 'kotlin.text.appendLine' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.appendLine' call
        var tmp2_appendLine = buffer.w5('\u2551');
        tmp$ret$2 = tmp2_appendLine.q2(_Char___init__impl__6a9atx(10));
        tmp$ret$3 = tmp$ret$2;
      }
       while (!(i === last));
    var progression_2 = get_sudokuRange();
    var inductionVariable_2 = progression_2.i2_1;
    var last_2 = progression_2.j2_1;
    if (inductionVariable_2 <= last_2)
      do {
        var j_1 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        buffer.w5(j_1 === 0 ? '\u255A\u2550\u2550\u2550' : !((j_1 % 3 | 0) === 0) ? '\u2567\u2550\u2550\u2550' : '\u2569\u2550\u2550\u2550');
      }
       while (!(j_1 === last_2));
    var tmp$ret$5;
    // Inline function 'kotlin.text.appendLine' call
    var tmp$ret$4;
    // Inline function 'kotlin.text.appendLine' call
    var tmp3_appendLine = buffer.w5('\u255D');
    tmp$ret$4 = tmp3_appendLine.q2(_Char___init__impl__6a9atx(10));
    tmp$ret$5 = tmp$ret$4;
    return buffer.toString();
  };
  var properties_initialized_Sudoku_kt_17tu2v;
  function _init_properties_Sudoku_kt__pki2rt() {
    if (properties_initialized_Sudoku_kt_17tu2v) {
    } else {
      properties_initialized_Sudoku_kt_17tu2v = true;
      chunkRange = until(0, 3);
      sudokuRange = until(0, 9);
    }
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.y7_1 = 4;
    this.z7_1 = 4;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function move($this, r, c, slot) {
    var dst = $this.c8(r, c);
    if (!(dst.d8_1 == null))
      return false;
    dst.d8_1 = slot.d8_1;
    slot.d8_1 = null;
    return true;
  }
  function clearMergedStates($this) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.a8_1;
    var indexedObject = tmp0_forEach;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'games.tzfe.Board.clearMergedStates.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var indexedObject_0 = element;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'games.tzfe.Board.clearMergedStates.<anonymous>.<anonymous>' call
        element_0.e8_1 = false;
      }
    }
  }
  function Board() {
    Companion_getInstance_0();
    var tmp = this;
    var tmp_0 = 0;
    Companion_getInstance_0();
    var tmp_1 = 4;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$3;
      // Inline function 'games.tzfe.Board.slots.<anonymous>' call
      var tmp_4 = 0;
      Companion_getInstance_0();
      var tmp_5 = 4;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(tmp_5), null);
      var tmp_6 = tmp$ret$1;
      while (tmp_4 < tmp_5) {
        var tmp_7 = tmp_4;
        var tmp$ret$2;
        // Inline function 'games.tzfe.Board.slots.<anonymous>.<anonymous>' call
        tmp$ret$2 = new Slot(null);
        tmp_6[tmp_7] = tmp$ret$2;
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp$ret$3 = tmp_6;
      tmp_2[tmp_3] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.a8_1 = tmp_2;
    this.b8_1 = 0;
  }
  protoOf(Board).f8 = function () {
    var tmp = this.b8_1;
    Companion_getInstance_0();
    Companion_getInstance_0();
    return tmp === imul(4, 4);
  };
  protoOf(Board).c8 = function (r, c) {
    return this.a8_1[r][c];
  };
  protoOf(Board).g8 = function (r, c, direction) {
    var tmp0_subject = direction;
    var tmp0 = tmp0_subject.k6_1;
    {
      var rowOffset;
      switch (tmp0) {
        case 0:
          rowOffset = -1;
          break;
        case 1:
          rowOffset = 1;
          break;
        default:
          rowOffset = 0;
          break;
      }
    }
    var tmp1_subject = direction;
    var tmp0_0 = tmp1_subject.k6_1;
    {
      var colOffset;
      switch (tmp0_0) {
        case 2:
          colOffset = -1;
          break;
        case 3:
          colOffset = 1;
          break;
        default:
          colOffset = 0;
          break;
      }
    }
    var newR = r + rowOffset | 0;
    var newC = c + colOffset | 0;
    var tmp;
    if (newR < 0) {
      tmp = true;
    } else {
      Companion_getInstance_0();
      tmp = newR > (4 - 1 | 0);
    }
    if (tmp)
      return null;
    var tmp_0;
    if (newC < 0) {
      tmp_0 = true;
    } else {
      Companion_getInstance_0();
      tmp_0 = newC > (4 - 1 | 0);
    }
    if (tmp_0)
      return null;
    return this.a8_1[newR][newC];
  };
  protoOf(Board).h8 = function (r, c, value) {
    var dst = this.c8(r, c);
    if (!(dst.d8_1 == null))
      return false;
    dst.d8_1 = value;
    var tmp0_this = this;
    tmp0_this.b8_1 = tmp0_this.b8_1 + 1 | 0;
    return true;
  };
  protoOf(Board).i8 = function (direction) {
    var primaryProgression;
    var secondaryProgression;
    if (direction.m8_1) {
      primaryProgression = direction.n8_1;
      secondaryProgression = direction.o8_1;
    } else {
      primaryProgression = direction.o8_1;
      secondaryProgression = direction.n8_1;
    }
    var inductionVariable = primaryProgression.i2_1;
    var last = primaryProgression.j2_1;
    var step = primaryProgression.k2_1;
    if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
      do {
        var pk = inductionVariable;
        inductionVariable = inductionVariable + step | 0;
        var inductionVariable_0 = secondaryProgression.i2_1;
        var last_0 = secondaryProgression.j2_1;
        var step_0 = secondaryProgression.k2_1;
        if ((step_0 > 0 ? inductionVariable_0 <= last_0 : false) ? true : step_0 < 0 ? last_0 <= inductionVariable_0 : false)
          $l$loop: do {
            var sk = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + step_0 | 0;
            var i;
            var j;
            if (direction.m8_1) {
              i = pk;
              j = sk;
            } else {
              i = sk;
              j = pk;
            }
            var k = pk;
            var src = this.c8(i, j);
            var dst = this.g8(i, j, direction);
            if (src.d8_1 == null)
              continue $l$loop;
            $l$loop_2: while (true) {
              if (dst == null)
                break $l$loop_2;
              if (src.p8(dst)) {
                var tmp2_this = this;
                tmp2_this.b8_1 = tmp2_this.b8_1 - 1 | 0;
                break $l$loop_2;
              }
              if (!(dst.d8_1 == null))
                break $l$loop_2;
              k = k + direction.l8_1 | 0;
              var newI;
              var newJ;
              if (direction.m8_1) {
                newI = k;
                newJ = j;
              } else {
                newI = i;
                newJ = k;
              }
              move(this, newI, newJ, src);
              src = this.c8(newI, newJ);
              dst = this.g8(newI, newJ, direction);
            }
          }
           while (!(sk === last_0));
      }
       while (!(pk === last));
    clearMergedStates(this);
  };
  function Slot(value) {
    this.d8_1 = value;
    this.e8_1 = false;
  }
  protoOf(Slot).p8 = function (other) {
    var src = this.d8_1;
    var dst = other.d8_1;
    if (((src == null ? true : dst == null) ? true : other.e8_1) ? true : !(src == dst)) {
      return false;
    }
    this.d8_1 = null;
    other.d8_1 = imul(dst, 2);
    other.e8_1 = true;
    return true;
  };
  protoOf(Slot).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Slot))
      return false;
    return this.d8_1 == other.d8_1;
  };
  protoOf(Slot).hashCode = function () {
    var tmp0_elvis_lhs = this.d8_1;
    return tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
  };
  var SlotDirection_ABOVE_instance;
  var SlotDirection_BELOW_instance;
  var SlotDirection_LEFT_instance;
  var SlotDirection_RIGHT_instance;
  var SlotDirection_entriesInitialized;
  function SlotDirection_initEntries() {
    if (SlotDirection_entriesInitialized)
      return Unit_getInstance();
    SlotDirection_entriesInitialized = true;
    SlotDirection_ABOVE_instance = new SlotDirection('ABOVE', 0, -1, true, until(1, 4), until(0, 4));
    SlotDirection_BELOW_instance = new SlotDirection('BELOW', 1, 1, true, downTo(3, 0), until(0, 4));
    SlotDirection_LEFT_instance = new SlotDirection('LEFT', 2, -1, false, until(0, 4), until(1, 4));
    SlotDirection_RIGHT_instance = new SlotDirection('RIGHT', 3, 1, false, until(0, 4), downTo(3, 0));
  }
  function SlotDirection(name, ordinal, sign, vertical, rowRange, colRange) {
    Enum.call(this, name, ordinal);
    this.l8_1 = sign;
    this.m8_1 = vertical;
    this.n8_1 = rowRange;
    this.o8_1 = colRange;
  }
  function SlotDirection_ABOVE_getInstance() {
    SlotDirection_initEntries();
    return SlotDirection_ABOVE_instance;
  }
  function SlotDirection_BELOW_getInstance() {
    SlotDirection_initEntries();
    return SlotDirection_BELOW_instance;
  }
  function SlotDirection_LEFT_getInstance() {
    SlotDirection_initEntries();
    return SlotDirection_LEFT_instance;
  }
  function SlotDirection_RIGHT_getInstance() {
    SlotDirection_initEntries();
    return SlotDirection_RIGHT_instance;
  }
  function get_Icon() {
    _init_properties_Main_kt__xi25uv();
    return Icon;
  }
  var Icon;
  function get_Main() {
    _init_properties_Main_kt__xi25uv();
    return Main;
  }
  var Main;
  var GameType_SUDOKU_instance;
  var GameType_WORDLE_instance;
  var GameType_TZFE_instance;
  function values() {
    return [GameType_SUDOKU_getInstance(), GameType_WORDLE_getInstance(), GameType_TZFE_getInstance()];
  }
  var GameType_entriesInitialized;
  function GameType_initEntries() {
    if (GameType_entriesInitialized)
      return Unit_getInstance();
    GameType_entriesInitialized = true;
    GameType_SUDOKU_instance = new GameType('SUDOKU', 0);
    GameType_WORDLE_instance = new GameType('WORDLE', 1);
    GameType_TZFE_instance = new GameType('TZFE', 2);
  }
  function GameType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MainState(currentGameType, buttonPressed) {
    this.q8_1 = currentGameType;
    this.r8_1 = buttonPressed;
  }
  protoOf(MainState).s8 = function (currentGameType, buttonPressed) {
    return new MainState(currentGameType, buttonPressed);
  };
  protoOf(MainState).t8 = function (currentGameType, buttonPressed, $super) {
    currentGameType = currentGameType === VOID ? this.q8_1 : currentGameType;
    buttonPressed = buttonPressed === VOID ? this.r8_1 : buttonPressed;
    return $super === VOID ? this.s8(currentGameType, buttonPressed) : $super.s8.call(this, currentGameType, buttonPressed);
  };
  protoOf(MainState).toString = function () {
    return 'MainState(currentGameType=' + this.q8_1 + ', buttonPressed=' + this.r8_1 + ')';
  };
  protoOf(MainState).hashCode = function () {
    var result = this.q8_1.hashCode();
    result = imul(result, 31) + (this.r8_1 == null ? 0 : this.r8_1 | 0) | 0;
    return result;
  };
  protoOf(MainState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MainState))
      return false;
    var tmp0_other_with_cast = other instanceof MainState ? other : THROW_CCE();
    if (!this.q8_1.equals(tmp0_other_with_cast.q8_1))
      return false;
    if (!(this.r8_1 == tmp0_other_with_cast.r8_1))
      return false;
    return true;
  };
  function Icon$lambda($this$FC, props) {
    _init_properties_Main_kt__xi25uv();
    var enabled = props.enabled;
    var o = enabled == null ? 0 : enabled ? 4 : 2;
    var k = 5.0;
    var tmp$ret$2;
    // Inline function 'react.dom.svg.ReactSVG.svg' call
    var tmp0__get_svg__2kcicn = ReactSVG_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'svg';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    $this$FC.k7(tmp, Icon$lambda$lambda(k, enabled, o));
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda($o) {
    return function ($this$invoke) {
      var b = 0;
      $this$invoke.stroke = '#e63c45';
      $this$invoke.d = 'M9 ' + ((b + 0 | 0) + $o | 0) + 'h7M6 ' + ((b + 1 | 0) + $o | 0) + 'h13M4 ' + ((b + 2 | 0) + $o | 0) + 'h17M3 ' + ((b + 3 | 0) + $o | 0) + 'h19M2 ' + ((b + 4 | 0) + $o | 0) + 'h21M2 ' + ((b + 5 | 0) + $o | 0) + 'h21M3 ' + ((b + 6 | 0) + $o | 0) + 'h19M4 ' + ((b + 7 | 0) + $o | 0) + 'h17M6 ' + ((b + 8 | 0) + $o | 0) + 'h13M9 ' + ((b + 9 | 0) + $o | 0) + 'h7';
      return Unit_getInstance();
    };
  }
  function Icon$lambda$lambda$lambda_0($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#5a617c';
    $this$invoke.d = 'M1 8h1M0 9h2M0 10h2M0 11h3M1 12h3M2 13h4M3 14h6M5 15h7M8 16h2';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_1($o) {
    return function ($this$invoke) {
      var b = 6;
      $this$invoke.stroke = '#f67732';
      $this$invoke.d = 'M2 ' + (b + $o | 0) + 'h1M3 ' + ((b + 1 | 0) + $o | 0) + 'h1M4 ' + ((b + 2 | 0) + $o | 0) + 'h2M6 ' + ((b + 3 | 0) + $o | 0) + 'h3M9 ' + ((b + 4 | 0) + $o | 0) + 'h4';
      return Unit_getInstance();
    };
  }
  function Icon$lambda$lambda$lambda_2($o) {
    return function ($this$invoke) {
      var b = 6;
      $this$invoke.stroke = '#fea44a';
      $this$invoke.d = 'M22 ' + (b + $o | 0) + 'h1M21 ' + ((b + 1 | 0) + $o | 0) + 'h1M19 ' + ((b + 2 | 0) + $o | 0) + 'h2M16 ' + ((b + 3 | 0) + $o | 0) + 'h3M13 ' + ((b + 4 | 0) + $o | 0) + 'h3';
      return Unit_getInstance();
    };
  }
  function Icon$lambda$lambda$lambda_3($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#ab1719';
    $this$invoke.d = 'M2 7h1M22 7h1M2 8h2M21 8h2M3 9h3M19 9h3M4 10h5M16 10h5M6 11h13M9 12h7';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_4($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#90a1b9';
    $this$invoke.d = 'M23 8h1M23 9h2M23 10h2M22 11h3M21 12h3M19 13h4M16 14h6M15 15h5M13 16h4';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_5($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#9a0e19';
    $this$invoke.d = 'M2 9h1M22 9h1M3 10h1M21 10h1M4 11h2M19 11h2M6 12h3M16 12h3M9 13h7';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_6($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#860117';
    $this$invoke.d = 'M2 10h1M22 10h1M3 11h1M21 11h1M4 12h2M19 12h2M6 13h3M16 13h3M9 14h7';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_7($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#3d4e68';
    $this$invoke.d = 'M0 12h1M24 12h1M1 13h1M23 13h1M2 14h1M22 14h1M3 15h2M20 15h2M5 16h3M17 16h3M8 17h9';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda$lambda_8($this$invoke) {
    _init_properties_Main_kt__xi25uv();
    $this$invoke.stroke = '#6c819a';
    $this$invoke.d = 'M12 15h3M10 16h3';
    return Unit_getInstance();
  }
  function Icon$lambda$lambda($k, $enabled, $o) {
    return function ($this$invoke) {
      $this$invoke.width = 25 * $k;
      $this$invoke.height = 18 * $k;
      $this$invoke.xmlns = 'http://www.w3.org/2000/svg';
      $this$invoke.viewBox = '0 -0.5 25 18';
      $this$invoke.shapeRendering = 'crispEdges';
      var tmp$ret$2;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp0__get_path__8fn93g = ReactSVG_getInstance();
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'path';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      $this$invoke.k7(tmp, Icon$lambda$lambda$lambda($o));
      var tmp$ret$5;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp1__get_path__akhxyj = ReactSVG_getInstance();
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'path';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      $this$invoke.k7(tmp_0, Icon$lambda$lambda$lambda_0);
      var tmp$ret$8;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp2__get_path__cpcmtm = ReactSVG_getInstance();
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = 'path';
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      var tmp_1 = tmp$ret$8;
      $this$invoke.k7(tmp_1, Icon$lambda$lambda$lambda_1($o));
      var tmp$ret$11;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp3__get_path__eu7bop = ReactSVG_getInstance();
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = 'path';
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp_2 = tmp$ret$11;
      $this$invoke.k7(tmp_2, Icon$lambda$lambda$lambda_2($o));
      var tmp_3;
      if ($enabled == null) {
        var tmp$ret$14;
        // Inline function 'react.dom.svg.ReactSVG.path' call
        var tmp4__get_path__gz20js = ReactSVG_getInstance();
        var tmp$ret$13;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$12;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$12 = 'path';
        tmp$ret$13 = tmp$ret$12;
        tmp$ret$14 = tmp$ret$13;
        var tmp_4 = tmp$ret$14;
        $this$invoke.k7(tmp_4, Icon$lambda$lambda$lambda_3);
        tmp_3 = Unit_getInstance();
      }
      var tmp$ret$17;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp5__get_path__j3wpev = ReactSVG_getInstance();
      var tmp$ret$16;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$15;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$15 = 'path';
      tmp$ret$16 = tmp$ret$15;
      tmp$ret$17 = tmp$ret$16;
      var tmp_5 = tmp$ret$17;
      $this$invoke.k7(tmp_5, Icon$lambda$lambda$lambda_4);
      var tmp$ret$20;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp6__get_path__l8re9y = ReactSVG_getInstance();
      var tmp$ret$19;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$18;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$18 = 'path';
      tmp$ret$19 = tmp$ret$18;
      tmp$ret$20 = tmp$ret$19;
      var tmp_6 = tmp$ret$20;
      $this$invoke.k7(tmp_6, Icon$lambda$lambda$lambda_5);
      var tmp$ret$23;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp7__get_path__ndm351 = ReactSVG_getInstance();
      var tmp$ret$22;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$21;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$21 = 'path';
      tmp$ret$22 = tmp$ret$21;
      tmp$ret$23 = tmp$ret$22;
      var tmp_7 = tmp$ret$23;
      $this$invoke.k7(tmp_7, Icon$lambda$lambda$lambda_6);
      var tmp$ret$26;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp8__get_path__pigs04 = ReactSVG_getInstance();
      var tmp$ret$25;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$24;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$24 = 'path';
      tmp$ret$25 = tmp$ret$24;
      tmp$ret$26 = tmp$ret$25;
      var tmp_8 = tmp$ret$26;
      $this$invoke.k7(tmp_8, Icon$lambda$lambda$lambda_7);
      var tmp$ret$29;
      // Inline function 'react.dom.svg.ReactSVG.path' call
      var tmp9__get_path__rnbgv7 = ReactSVG_getInstance();
      var tmp$ret$28;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$27;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$27 = 'path';
      tmp$ret$28 = tmp$ret$27;
      tmp$ret$29 = tmp$ret$28;
      var tmp_9 = tmp$ret$29;
      $this$invoke.k7(tmp_9, Icon$lambda$lambda$lambda_8);
      return Unit_getInstance();
    };
  }
  function Main$lambda($this$FC, _anonymous_parameter_0__qggqh8) {
    _init_properties_Main_kt__xi25uv();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.random' call
    var tmp0_random = values();
    tmp$ret$0 = random(tmp0_random, Default_getInstance());
    var state$delegate = useState(new MainState(tmp$ret$0, null));
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = 'div';
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.k7(tmp, Main$lambda$lambda(state$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda($state$delegate) {
    _init_properties_Main_kt__xi25uv();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_0($state$delegate, value) {
    _init_properties_Main_kt__xi25uv();
    var tmp0_setValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    return tmp$ret$0[1](value);
  }
  function Main$lambda$lambda$lambda$lambda($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_0($state$delegate, invoke$lambda($state$delegate).t8(VOID, false));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda$lambda_0($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_0($state$delegate, invoke$lambda($state$delegate).t8(VOID, null));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda$lambda_1($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_0($state$delegate, invoke$lambda($state$delegate).t8(VOID, true));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda$lambda_2($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_0($state$delegate, invoke$lambda($state$delegate).t8(VOID, false));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda$lambda_3($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      var nextGameType;
      do {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.random' call
        var tmp0_random = values();
        tmp$ret$0 = random(tmp0_random, Default_getInstance());
        nextGameType = tmp$ret$0;
      }
       while (nextGameType.equals(invoke$lambda($state$delegate).q8_1));
      invoke$lambda_0($state$delegate, invoke$lambda($state$delegate).t8(nextGameType));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda$lambda_4($state$delegate) {
    return function ($this$create) {
      $this$create.enabled = invoke$lambda($state$delegate).r8_1;
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda($state$delegate) {
    return function ($this$invoke) {
      $this$invoke.onMouseOver = Main$lambda$lambda$lambda$lambda($state$delegate);
      $this$invoke.onMouseOut = Main$lambda$lambda$lambda$lambda_0($state$delegate);
      $this$invoke.onMouseDown = Main$lambda$lambda$lambda$lambda_1($state$delegate);
      $this$invoke.onMouseUp = Main$lambda$lambda$lambda$lambda_2($state$delegate);
      $this$invoke.onClick = Main$lambda$lambda$lambda$lambda_3($state$delegate);
      var tmp = get_Icon();
      $this$invoke.i7(create(tmp, Main$lambda$lambda$lambda$lambda_4($state$delegate)));
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda_0($state$delegate) {
    return function ($this$invoke) {
      var tmp0_subject = invoke$lambda($state$delegate).q8_1;
      var tmp0 = tmp0_subject.k6_1;
      var tmp;
      switch (tmp0) {
        case 0:
          tmp = 'Sudoku Solver';
          break;
        case 1:
          tmp = 'Wordle';
          break;
        case 2:
          tmp = '2048';
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      $this$invoke.j7(tmp);
      return Unit_getInstance();
    };
  }
  function Main$lambda$lambda$lambda_1($this$create) {
    _init_properties_Main_kt__xi25uv();
    return Unit_getInstance();
  }
  function Main$lambda$lambda$lambda_2($this$create) {
    _init_properties_Main_kt__xi25uv();
    return Unit_getInstance();
  }
  function Main$lambda$lambda$lambda_3($this$create) {
    _init_properties_Main_kt__xi25uv();
    return Unit_getInstance();
  }
  function Main$lambda$lambda($state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$3;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Main.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = css(tmp$ret$2);
      tmp1_css.className = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'div';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.k7(tmp, Main$lambda$lambda$lambda($state$delegate));
      var tmp$ret$9;
      // Inline function 'react.dom.html.ReactHTML.p' call
      var tmp3__get_p__3ezexu = ReactHTML_getInstance();
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'p';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      var tmp_0 = tmp$ret$9;
      $this$invoke.k7(tmp_0, Main$lambda$lambda$lambda_0($state$delegate));
      var tmp0_subject = invoke$lambda($state$delegate).q8_1;
      var tmp0 = tmp0_subject.k6_1;
      var tmp_1;
      switch (tmp0) {
        case 0:
          var tmp_2 = get_Sudoku();
          tmp_1 = create(tmp_2, Main$lambda$lambda$lambda_1);
          break;
        case 1:
          var tmp_3 = get_Wordle();
          tmp_1 = create(tmp_3, Main$lambda$lambda$lambda_2);
          break;
        case 2:
          var tmp_4 = get_TZFE();
          tmp_1 = create(tmp_4, Main$lambda$lambda$lambda_3);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      $this$invoke.i7(tmp_1);
      return Unit_getInstance();
    };
  }
  function GameType_SUDOKU_getInstance() {
    GameType_initEntries();
    return GameType_SUDOKU_instance;
  }
  function GameType_WORDLE_getInstance() {
    GameType_initEntries();
    return GameType_WORDLE_instance;
  }
  function GameType_TZFE_getInstance() {
    GameType_initEntries();
    return GameType_TZFE_instance;
  }
  var properties_initialized_Main_kt_gqj46d;
  function _init_properties_Main_kt__xi25uv() {
    if (properties_initialized_Main_kt_gqj46d) {
    } else {
      properties_initialized_Main_kt_gqj46d = true;
      Icon = FC(Icon$lambda);
      Main = FC(Main$lambda);
    }
  }
  function get_Sudoku() {
    _init_properties_Sudoku_kt__pki2rt_0();
    return Sudoku_0;
  }
  var Sudoku_0;
  function SudokuState(grid, loading) {
    this.u8_1 = grid;
    this.v8_1 = loading;
  }
  protoOf(SudokuState).w8 = function (grid, loading) {
    return new SudokuState(grid, loading);
  };
  protoOf(SudokuState).x8 = function (grid, loading, $super) {
    grid = grid === VOID ? this.u8_1 : grid;
    loading = loading === VOID ? this.v8_1 : loading;
    return $super === VOID ? this.w8(grid, loading) : $super.w8.call(this, grid, loading);
  };
  protoOf(SudokuState).toString = function () {
    return 'SudokuState(grid=' + this.u8_1 + ', loading=' + this.v8_1 + ')';
  };
  protoOf(SudokuState).hashCode = function () {
    var result = hashCode(this.u8_1);
    result = imul(result, 31) + (this.v8_1 | 0) | 0;
    return result;
  };
  protoOf(SudokuState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SudokuState))
      return false;
    var tmp0_other_with_cast = other instanceof SudokuState ? other : THROW_CCE();
    if (!equals(this.u8_1, tmp0_other_with_cast.u8_1))
      return false;
    if (!(this.v8_1 === tmp0_other_with_cast.v8_1))
      return false;
    return true;
  };
  function Sudoku$lambda($this$FC, _anonymous_parameter_0__qggqh8) {
    _init_properties_Sudoku_kt__pki2rt_0();
    var state$delegate = useState(new SudokuState(Grid_init_$Create$(), false));
    var tmp$ret$2;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    $this$FC.k7(tmp, Sudoku$lambda$lambda(state$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda_1($state$delegate) {
    _init_properties_Sudoku_kt__pki2rt_0();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_2($state$delegate, value) {
    _init_properties_Sudoku_kt__pki2rt_0();
    var tmp0_setValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    return tmp$ret$0[1](value);
  }
  function Sudoku$lambda$lambda$lambda$lambda$lambda($r, $c, $state$delegate) {
    return function (event) {
      var tmp0_elvis_lhs = toIntOrNull(event.target.value);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var newValue = tmp;
      var tmp_0 = invoke$lambda_1($state$delegate);
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = invoke$lambda_1($state$delegate).u8_1.m7();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_also.o7($r, $c, newValue);
      tmp$ret$0 = tmp0_also;
      invoke$lambda_2($state$delegate, tmp_0.x8(tmp$ret$0));
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda($value, $r, $c, $state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$24;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$23;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$22;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '30px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.width = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.px' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '30px';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp1_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp0_apply.height = tmp$ret$6;
      var tmp$ret$12;
      // Inline function 'csstype.Flex' call
      var tmp$ret$9;
      // Inline function 'csstype.number' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 1.0;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      var tmp3_Flex = tmp$ret$9;
      var tmp4_Flex = (/*union*/{content: 'content', fitContent: 'fit-content', maxContent: 'max-content', minContent: 'min-content'}/*union*/).fitContent;
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = '' + tmp3_Flex + ' ' + tmp4_Flex;
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = tmp2_unsafeCast;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      tmp0_apply.flex = tmp$ret$12;
      tmp0_apply.backgroundColor = $value === 0 ? null : (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).mediumaquamarine;
      if ((($r + 1 | 0) % 3 | 0) === 0 ? $r < 9 : false) {
        var tmp$ret$15;
        // Inline function 'csstype.px' call
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp5_unsafeCast = '10px';
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = tmp5_unsafeCast;
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        tmp0_apply.marginBottom = tmp$ret$15;
      }
      if ((($c + 1 | 0) % 3 | 0) === 0 ? $c < 9 : false) {
        var tmp$ret$18;
        // Inline function 'csstype.px' call
        var tmp$ret$17;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp6_unsafeCast = '10px';
        var tmp$ret$16;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$16 = tmp6_unsafeCast;
        tmp$ret$17 = tmp$ret$16;
        tmp$ret$18 = tmp$ret$17;
        tmp0_apply.marginRight = tmp$ret$18;
      }
      var tmp$ret$21;
      // Inline function 'csstype.px' call
      var tmp$ret$20;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp7_unsafeCast = '14px';
      var tmp$ret$19;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$19 = tmp7_unsafeCast;
      tmp$ret$20 = tmp$ret$19;
      tmp$ret$21 = tmp$ret$20;
      tmp0_apply.fontSize = tmp$ret$21;
      tmp0_apply.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      tmp$ret$22 = tmp0_apply;
      tmp$ret$23 = tmp$ret$22;
      tmp$ret$24 = css(tmp$ret$23);
      tmp1_css.className = tmp$ret$24;
      $this$invoke.min = 0.0;
      $this$invoke.max = 9.0;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).number;
      $this$invoke.value = '' + $value;
      $this$invoke.onChange = Sudoku$lambda$lambda$lambda$lambda$lambda($r, $c, $state$delegate);
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda($r, $state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$6;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '300px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.maxWidth = tmp$ret$3;
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).spaceBetween;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).row;
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = css(tmp$ret$5);
      tmp1_css.className = tmp$ret$6;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 9) {
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = invoke$lambda_1($state$delegate).u8_1.p7($r, c);
          var tmp$ret$9;
          // Inline function 'react.dom.html.ReactHTML.input' call
          var tmp2__get_input__zh0yd9 = ReactHTML_getInstance();
          var tmp$ret$8;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$7;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$7 = 'input';
          tmp$ret$8 = tmp$ret$7;
          tmp$ret$9 = tmp$ret$8;
          var tmp_0 = tmp$ret$9;
          $this$invoke.k7(tmp_0, Sudoku$lambda$lambda$lambda$lambda(value, $r, c, $state$delegate));
        }
         while (inductionVariable < 9);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda_0($this$invoke) {
    _init_properties_Sudoku_kt__pki2rt_0();
    $this$invoke.j7('Carregando...');
    return Unit_getInstance();
  }
  function Sudoku$lambda$lambda$lambda$lambda$lambda_0($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      var game = new Sudoku(invoke$lambda_1($state$delegate).u8_1);
      game.x7();
      invoke$lambda_2($state$delegate, invoke$lambda_1($state$delegate).x8(game.w7_1));
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda_0($state$delegate) {
    return function ($this$invoke) {
      $this$invoke.j7('solve');
      $this$invoke.onClick = Sudoku$lambda$lambda$lambda$lambda$lambda_0($state$delegate);
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda$lambda_1($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_2($state$delegate, invoke$lambda_1($state$delegate).x8(Grid_init_$Create$()));
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda_1($state$delegate) {
    return function ($this$invoke) {
      $this$invoke.j7('reset');
      $this$invoke.onClick = Sudoku$lambda$lambda$lambda$lambda$lambda_1($state$delegate);
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda$lambda$lambda($request, $state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      var status = $request.status;
      var tmp;
      if (status === 200) {
        var response = $request.response;
        var data = response;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = data;
        tmp$ret$0 = tmp0_asDynamic;
        data = tmp$ret$0['newboard'];
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = data;
        tmp$ret$1 = tmp1_asDynamic;
        data = tmp$ret$1['grids'];
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp2_asDynamic = data;
        tmp$ret$2 = tmp2_asDynamic;
        data = tmp$ret$2[0];
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3_asDynamic = data;
        tmp$ret$3 = tmp3_asDynamic;
        data = tmp$ret$3['value'];
        var tmp$ret$5;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp4_unsafeCast = data;
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = tmp4_unsafeCast;
        tmp$ret$5 = tmp$ret$4;
        data = tmp$ret$5;
        var tmp$ret$16;
        // Inline function 'kotlin.collections.map' call
        var tmp6_map = data;
        var tmp$ret$15;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp5_mapTo = ArrayList_init_$Create$(tmp6_map.length);
        var indexedObject = tmp6_map;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var item = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$14;
          // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$13;
          // Inline function 'kotlin.collections.toTypedArray' call
          var tmp$ret$12;
          // Inline function 'kotlin.collections.map' call
          var tmp$ret$7;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = item;
          tmp$ret$7 = tmp$ret$6;
          var tmp1_map = tmp$ret$7;
          var tmp$ret$11;
          // Inline function 'kotlin.collections.mapTo' call
          var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.length);
          var indexedObject_0 = tmp1_map;
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var item_0 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp$ret$10;
            // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$9;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$8;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$8 = item_0;
            tmp$ret$9 = tmp$ret$8;
            tmp$ret$10 = tmp$ret$9;
            tmp0_mapTo.c(tmp$ret$10);
          }
          tmp$ret$11 = tmp0_mapTo;
          tmp$ret$12 = tmp$ret$11;
          var tmp2_toTypedArray = tmp$ret$12;
          tmp$ret$13 = copyToArray(tmp2_toTypedArray);
          tmp$ret$14 = tmp$ret$13;
          tmp5_mapTo.c(tmp$ret$14);
        }
        tmp$ret$15 = tmp5_mapTo;
        tmp$ret$16 = tmp$ret$15;
        data = tmp$ret$16;
        var tmp$ret$17;
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp7_toTypedArray = data;
        tmp$ret$17 = copyToArray(tmp7_toTypedArray);
        data = tmp$ret$17;
        invoke$lambda_2($state$delegate, invoke$lambda_1($state$delegate).w8(new Grid(data), false));
        tmp = Unit_getInstance();
      }
      return true;
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda$lambda_2($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_2($state$delegate, invoke$lambda_1($state$delegate).x8(VOID, true));
      var request = new XMLHttpRequest();
      request.open('GET', 'https://sudoku-api.vercel.app/api/dosuku', true);
      var tmp$ret$2;
      // Inline function 'org.w3c.xhr.JSON' call
      var tmp1__get_JSON__9zc1jc = null;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'json';
      var tmp0_unsafeCast = tmp$ret$0;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      request.responseType = tmp$ret$2;
      request.onload = Sudoku$lambda$lambda$lambda$lambda$lambda$lambda(request, $state$delegate);
      request.send();
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda$lambda_2($state$delegate) {
    return function ($this$invoke) {
      $this$invoke.j7('random');
      $this$invoke.disabled = invoke$lambda_1($state$delegate).v8_1;
      $this$invoke.onClick = Sudoku$lambda$lambda$lambda$lambda$lambda_2($state$delegate);
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda$lambda_1($state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$6;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).row;
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '10px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.gap = tmp$ret$3;
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = css(tmp$ret$5);
      tmp1_css.className = tmp$ret$6;
      var tmp$ret$9;
      // Inline function 'react.dom.html.ReactHTML.button' call
      var tmp2__get_button__8ht68t = ReactHTML_getInstance();
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'button';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      var tmp = tmp$ret$9;
      $this$invoke.k7(tmp, Sudoku$lambda$lambda$lambda$lambda_0($state$delegate));
      var tmp$ret$12;
      // Inline function 'react.dom.html.ReactHTML.button' call
      var tmp3__get_button__4tapo = ReactHTML_getInstance();
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = 'button';
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      var tmp_0 = tmp$ret$12;
      $this$invoke.k7(tmp_0, Sudoku$lambda$lambda$lambda$lambda_1($state$delegate));
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.button' call
      var tmp4__get_button__886kth = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$13 = 'button';
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp_1 = tmp$ret$15;
      $this$invoke.k7(tmp_1, Sudoku$lambda$lambda$lambda$lambda_2($state$delegate));
      return Unit_getInstance();
    };
  }
  function Sudoku$lambda$lambda($state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$3;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Sudoku.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = css(tmp$ret$2);
      tmp1_css.className = tmp$ret$3;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 9) {
        do {
          var r = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$6;
          // Inline function 'react.dom.html.ReactHTML.div' call
          var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
          var tmp$ret$5;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$4;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$4 = 'div';
          tmp$ret$5 = tmp$ret$4;
          tmp$ret$6 = tmp$ret$5;
          var tmp_0 = tmp$ret$6;
          $this$invoke.k7(tmp_0, Sudoku$lambda$lambda$lambda(r, $state$delegate));
        }
         while (inductionVariable < 9);
        tmp = Unit_getInstance();
      }
      var tmp_1;
      if (invoke$lambda_1($state$delegate).v8_1) {
        var tmp$ret$9;
        // Inline function 'react.dom.html.ReactHTML.p' call
        var tmp3__get_p__3ezexu = ReactHTML_getInstance();
        var tmp$ret$8;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$7;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$7 = 'p';
        tmp$ret$8 = tmp$ret$7;
        tmp$ret$9 = tmp$ret$8;
        var tmp_2 = tmp$ret$9;
        $this$invoke.k7(tmp_2, Sudoku$lambda$lambda$lambda_0);
        tmp_1 = Unit_getInstance();
      }
      var tmp$ret$12;
      // Inline function 'react.dom.html.ReactHTML.div' call
      var tmp4__get_div__pqv61q = ReactHTML_getInstance();
      var tmp$ret$11;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$10;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$10 = 'div';
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      var tmp_3 = tmp$ret$12;
      $this$invoke.k7(tmp_3, Sudoku$lambda$lambda$lambda_1($state$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Sudoku_kt_17tu2v_0;
  function _init_properties_Sudoku_kt__pki2rt_0() {
    if (properties_initialized_Sudoku_kt_17tu2v_0) {
    } else {
      properties_initialized_Sudoku_kt_17tu2v_0 = true;
      Sudoku_0 = FC(Sudoku$lambda);
    }
  }
  function get_TZFE() {
    _init_properties_TZFE_kt__mpp83f();
    return TZFE;
  }
  var TZFE;
  function TZFEState(board, attempt) {
    this.y8_1 = board;
    this.z8_1 = attempt;
  }
  protoOf(TZFEState).a9 = function (board, attempt) {
    return new TZFEState(board, attempt);
  };
  protoOf(TZFEState).b9 = function (board, attempt, $super) {
    board = board === VOID ? this.y8_1 : board;
    attempt = attempt === VOID ? this.z8_1 : attempt;
    return $super === VOID ? this.a9(board, attempt) : $super.a9.call(this, board, attempt);
  };
  protoOf(TZFEState).toString = function () {
    return 'TZFEState(board=' + this.y8_1 + ', attempt=' + this.z8_1 + ')';
  };
  protoOf(TZFEState).hashCode = function () {
    var result = hashCode(this.y8_1);
    result = imul(result, 31) + this.z8_1 | 0;
    return result;
  };
  protoOf(TZFEState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TZFEState))
      return false;
    var tmp0_other_with_cast = other instanceof TZFEState ? other : THROW_CCE();
    if (!equals(this.y8_1, tmp0_other_with_cast.y8_1))
      return false;
    if (!(this.z8_1 === tmp0_other_with_cast.z8_1))
      return false;
    return true;
  };
  function weightedRandom(specs) {
    _init_properties_TZFE_kt__mpp83f();
    var sum = 0.0;
    var target = Default_getInstance().x1();
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = specs.s().d();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'screens.weightedRandom.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.t();
      var value = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.v();
      var weight = tmp$ret$2;
      sum = sum + weight;
      if (target <= sum)
        return value;
    }
    throw IllegalStateException_init_$Create$();
  }
  function TZFE$lambda($this$FC, _anonymous_parameter_0__qggqh8) {
    _init_properties_TZFE_kt__mpp83f();
    var state$delegate = useState(new TZFEState(new Board(), 0));
    var tmp$ret$0;
    // Inline function 'react.useCallback' call
    var tmp0_useCallback = [invoke$lambda_3(state$delegate).z8_1];
    tmp$ret$0 = useCallback(TZFE$lambda$lambda(state$delegate), tmp0_useCallback);
    var checkKeyPress = tmp$ret$0;
    useEffect([checkKeyPress], TZFE$lambda$lambda_0(checkKeyPress));
    var tmp = [invoke$lambda_3(state$delegate).z8_1];
    useEffect(tmp, TZFE$lambda$lambda_1(state$delegate));
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = 'div';
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    $this$FC.k7(tmp_0, TZFE$lambda$lambda_2(state$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda_3($state$delegate) {
    _init_properties_TZFE_kt__mpp83f();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_4($state$delegate, value) {
    _init_properties_TZFE_kt__mpp83f();
    var tmp0_setValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$addRandom(state$delegate, update) {
    update = update === VOID ? true : update;
    var value = weightedRandom(mapOf([to(2, 0.9), to(4, 0.1)]));
    if (invoke$lambda_3(state$delegate).y8_1.f8())
      return Unit_getInstance();
    var r;
    var c;
    do {
      r = Default_getInstance().b(4);
      c = Default_getInstance().b(4);
    }
     while (!invoke$lambda_3(state$delegate).y8_1.h8(r, c, value));
    if (update) {
      invoke$lambda_4(state$delegate, invoke$lambda_3(state$delegate).b9());
    }
  }
  function TZFE$lambda$lambda($state$delegate) {
    return function (event) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = event;
      tmp$ret$1 = tmp$ret$0;
      var e = tmp$ret$1;
      var tmp0_subject = e.key;
      var tmp;
      switch (tmp0_subject) {
        case 'ArrowUp':
          tmp = SlotDirection_ABOVE_getInstance();
          break;
        case 'ArrowDown':
          tmp = SlotDirection_BELOW_getInstance();
          break;
        case 'ArrowLeft':
          tmp = SlotDirection_LEFT_getInstance();
          break;
        case 'ArrowRight':
          tmp = SlotDirection_RIGHT_getInstance();
          break;
        default:
          return Unit_getInstance();
      }
      var direction = tmp;
      invoke$lambda_3($state$delegate).y8_1.i8(direction);
      invoke$addRandom($state$delegate, false);
      invoke$lambda_4($state$delegate, invoke$lambda_3($state$delegate).b9());
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda$lambda($checkKeyPress) {
    return function () {
      document.removeEventListener('keydown', $checkKeyPress);
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda_0($checkKeyPress) {
    return function ($this$useEffect) {
      document.addEventListener('keydown', $checkKeyPress);
      var tmp0_cleanup = TZFE$lambda$lambda$lambda($checkKeyPress);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this$useEffect;
      tmp$ret$0.push(tmp0_cleanup);
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda_1($state$delegate) {
    return function ($this$useEffect) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 2) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'screens.TZFE.<anonymous>.<anonymous>.<anonymous>' call
          invoke$addRandom($state$delegate);
        }
         while (inductionVariable < 2);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda$lambda$lambda($i, $j, $slot) {
    return function ($this$invoke) {
      var tmp0__set_key__6pviv4 = $this$invoke;
      var tmp1__set_key__yldmkh = '' + $i + '.' + $j;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__set_key__6pviv4;
      tmp$ret$0.key = tmp1__set_key__yldmkh;
      var tmp3_css = $this$invoke;
      var tmp$ret$58;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$57;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$56;
      // Inline function 'kotlin.apply' call
      var tmp$ret$1;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$1 = {};
      var tmp2_apply = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.TZFE.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'csstype.px' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '30px';
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_unsafeCast;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp2_apply.width = tmp$ret$4;
      var tmp$ret$7;
      // Inline function 'csstype.px' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '30px';
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp1_unsafeCast;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      tmp2_apply.height = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'csstype.Flex' call
      var tmp$ret$10;
      // Inline function 'csstype.number' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 1.0;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp3_Flex = tmp$ret$10;
      var tmp4_Flex = (/*union*/{content: 'content', fitContent: 'fit-content', maxContent: 'max-content', minContent: 'min-content'}/*union*/).fitContent;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = '' + tmp3_Flex + ' ' + tmp4_Flex;
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp2_unsafeCast;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp2_apply.flex = tmp$ret$13;
      var tmp$ret$16;
      // Inline function 'csstype.px' call
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp5_unsafeCast = '14px';
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp5_unsafeCast;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      tmp2_apply.fontSize = tmp$ret$16;
      tmp2_apply.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      var tmp0_subject = $slot.d8_1;
      var tmp;
      switch (tmp0_subject) {
        case 2:
          var tmp$ret$19;
          // Inline function 'csstype.Color' call
          var tmp$ret$18;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$17;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$17 = '#EEE4DA';
          tmp$ret$18 = tmp$ret$17;
          tmp$ret$19 = tmp$ret$18;

          tmp = tmp$ret$19;
          break;
        case 4:
          var tmp$ret$22;
          // Inline function 'csstype.Color' call
          var tmp$ret$21;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$20;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$20 = '#EDE0C8';
          tmp$ret$21 = tmp$ret$20;
          tmp$ret$22 = tmp$ret$21;

          tmp = tmp$ret$22;
          break;
        case 8:
          var tmp$ret$25;
          // Inline function 'csstype.Color' call
          var tmp$ret$24;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$23;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$23 = '#F2B179';
          tmp$ret$24 = tmp$ret$23;
          tmp$ret$25 = tmp$ret$24;

          tmp = tmp$ret$25;
          break;
        case 16:
          var tmp$ret$28;
          // Inline function 'csstype.Color' call
          var tmp$ret$27;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$26;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$26 = '#F59563';
          tmp$ret$27 = tmp$ret$26;
          tmp$ret$28 = tmp$ret$27;

          tmp = tmp$ret$28;
          break;
        case 32:
          var tmp$ret$31;
          // Inline function 'csstype.Color' call
          var tmp$ret$30;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$29;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$29 = '#F67C5F';
          tmp$ret$30 = tmp$ret$29;
          tmp$ret$31 = tmp$ret$30;

          tmp = tmp$ret$31;
          break;
        case 64:
          var tmp$ret$34;
          // Inline function 'csstype.Color' call
          var tmp$ret$33;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$32;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$32 = '#F65E3B';
          tmp$ret$33 = tmp$ret$32;
          tmp$ret$34 = tmp$ret$33;

          tmp = tmp$ret$34;
          break;
        case 128:
          var tmp$ret$37;
          // Inline function 'csstype.Color' call
          var tmp$ret$36;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$35;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$35 = '#EDCF72';
          tmp$ret$36 = tmp$ret$35;
          tmp$ret$37 = tmp$ret$36;

          tmp = tmp$ret$37;
          break;
        case 256:
          var tmp$ret$40;
          // Inline function 'csstype.Color' call
          var tmp$ret$39;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$38;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$38 = '#EDCC61';
          tmp$ret$39 = tmp$ret$38;
          tmp$ret$40 = tmp$ret$39;

          tmp = tmp$ret$40;
          break;
        case 512:
          var tmp$ret$43;
          // Inline function 'csstype.Color' call
          var tmp$ret$42;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$41;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$41 = '#EDC850';
          tmp$ret$42 = tmp$ret$41;
          tmp$ret$43 = tmp$ret$42;

          tmp = tmp$ret$43;
          break;
        case 1024:
          var tmp$ret$46;
          // Inline function 'csstype.Color' call
          var tmp$ret$45;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$44;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$44 = '#EDC53F';
          tmp$ret$45 = tmp$ret$44;
          tmp$ret$46 = tmp$ret$45;

          tmp = tmp$ret$46;
          break;
        case 2048:
          var tmp$ret$49;
          // Inline function 'csstype.Color' call
          var tmp$ret$48;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$47;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$47 = '#EDC2E2';
          tmp$ret$48 = tmp$ret$47;
          tmp$ret$49 = tmp$ret$48;

          tmp = tmp$ret$49;
          break;
        case 4096:
          var tmp$ret$52;
          // Inline function 'csstype.Color' call
          var tmp$ret$51;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$50;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$50 = '#3E3933';
          tmp$ret$51 = tmp$ret$50;
          tmp$ret$52 = tmp$ret$51;

          tmp = tmp$ret$52;
          break;
        default:
          var tmp$ret$55;
          // Inline function 'csstype.Color' call
          var tmp$ret$54;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$53;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$53 = '#CCC0B3';
          tmp$ret$54 = tmp$ret$53;
          tmp$ret$55 = tmp$ret$54;

          tmp = tmp$ret$55;
          break;
      }
      tmp2_apply.backgroundColor = tmp;
      tmp$ret$56 = tmp2_apply;
      tmp$ret$57 = tmp$ret$56;
      tmp$ret$58 = css(tmp$ret$57);
      tmp3_css.className = tmp$ret$58;
      var tmp0_safe_receiver = $slot.d8_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
      $this$invoke.value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.maxLength = 1;
      $this$invoke.disabled = true;
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda$lambda_0($i, $state$delegate) {
    return function ($this$invoke) {
      var tmp0__set_key__6pviv4 = $this$invoke;
      var tmp1__set_key__yldmkh = '' + $i;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__set_key__6pviv4;
      tmp$ret$0.key = tmp1__set_key__yldmkh;
      var tmp3_css = $this$invoke;
      var tmp$ret$4;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$3;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp$ret$1;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$1 = {};
      var tmp2_apply = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.TZFE.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp2_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp2_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).row;
      tmp$ret$2 = tmp2_apply;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = css(tmp$ret$3);
      tmp3_css.className = tmp$ret$4;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 4) {
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = invoke$lambda_3($state$delegate).y8_1.c8($i, j);
          var tmp$ret$7;
          // Inline function 'react.dom.html.ReactHTML.input' call
          var tmp4__get_input__pupt6t = ReactHTML_getInstance();
          var tmp$ret$6;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$5;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$5 = 'input';
          tmp$ret$6 = tmp$ret$5;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          $this$invoke.k7(tmp_0, TZFE$lambda$lambda$lambda$lambda($i, j, slot));
        }
         while (inductionVariable < 4);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda$lambda$lambda_0($state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      invoke$lambda_4($state$delegate, invoke$lambda_3($state$delegate).a9(new Board(), invoke$lambda_3($state$delegate).z8_1 + 1 | 0));
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda$lambda_1($state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$12;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$11;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.TZFE.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$9;
      // Inline function 'csstype.Margin' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '10px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp3_Margin = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.px' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '0px';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp1_unsafeCast;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp4_Margin = tmp$ret$6;
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = '' + tmp3_Margin + ' ' + tmp4_Margin;
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp2_unsafeCast;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.margin = tmp$ret$9;
      tmp$ret$10 = tmp0_apply;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = css(tmp$ret$11);
      tmp1_css.className = tmp$ret$12;
      $this$invoke.j7('reset');
      $this$invoke.onClick = TZFE$lambda$lambda$lambda$lambda_0($state$delegate);
      return Unit_getInstance();
    };
  }
  function TZFE$lambda$lambda_2($state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$3;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$2;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.TZFE.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      tmp$ret$1 = tmp0_apply;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = css(tmp$ret$2);
      tmp1_css.className = tmp$ret$3;
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 4) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$6;
          // Inline function 'react.dom.html.ReactHTML.div' call
          var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
          var tmp$ret$5;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$4;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$4 = 'div';
          tmp$ret$5 = tmp$ret$4;
          tmp$ret$6 = tmp$ret$5;
          var tmp_0 = tmp$ret$6;
          $this$invoke.k7(tmp_0, TZFE$lambda$lambda$lambda_0(i, $state$delegate));
        }
         while (inductionVariable < 4);
        tmp = Unit_getInstance();
      }
      var tmp$ret$9;
      // Inline function 'react.dom.html.ReactHTML.button' call
      var tmp3__get_button__4tapo = ReactHTML_getInstance();
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'button';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      var tmp_1 = tmp$ret$9;
      $this$invoke.k7(tmp_1, TZFE$lambda$lambda$lambda_1($state$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_TZFE_kt_qg7c7b;
  function _init_properties_TZFE_kt__mpp83f() {
    if (properties_initialized_TZFE_kt_qg7c7b) {
    } else {
      properties_initialized_TZFE_kt_qg7c7b = true;
      TZFE = FC(TZFE$lambda);
    }
  }
  function get_gameWords() {
    _init_properties_Wordle_kt__rx8c83();
    return gameWords;
  }
  var gameWords;
  function get_Wordle() {
    _init_properties_Wordle_kt__rx8c83();
    return Wordle;
  }
  var Wordle;
  function WordleState(expectedWord, attemptIndex, letterIndex, matrix, success) {
    this.c9_1 = expectedWord;
    this.d9_1 = attemptIndex;
    this.e9_1 = letterIndex;
    this.f9_1 = matrix;
    this.g9_1 = success;
  }
  protoOf(WordleState).h9 = function (expectedWord, attemptIndex, letterIndex, matrix, success) {
    return new WordleState(expectedWord, attemptIndex, letterIndex, matrix, success);
  };
  protoOf(WordleState).i9 = function (expectedWord, attemptIndex, letterIndex, matrix, success, $super) {
    expectedWord = expectedWord === VOID ? this.c9_1 : expectedWord;
    attemptIndex = attemptIndex === VOID ? this.d9_1 : attemptIndex;
    letterIndex = letterIndex === VOID ? this.e9_1 : letterIndex;
    matrix = matrix === VOID ? this.f9_1 : matrix;
    success = success === VOID ? this.g9_1 : success;
    return $super === VOID ? this.h9(expectedWord, attemptIndex, letterIndex, matrix, success) : $super.h9.call(this, expectedWord, attemptIndex, letterIndex, matrix, success);
  };
  protoOf(WordleState).toString = function () {
    return 'WordleState(expectedWord=' + this.c9_1 + ', attemptIndex=' + this.d9_1 + ', letterIndex=' + this.e9_1 + ', matrix=' + this.f9_1 + ', success=' + this.g9_1 + ')';
  };
  protoOf(WordleState).hashCode = function () {
    var result = getStringHashCode(this.c9_1);
    result = imul(result, 31) + this.d9_1 | 0;
    result = imul(result, 31) + this.e9_1 | 0;
    result = imul(result, 31) + hashCode(this.f9_1) | 0;
    result = imul(result, 31) + (this.g9_1 == null ? 0 : this.g9_1 | 0) | 0;
    return result;
  };
  protoOf(WordleState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordleState))
      return false;
    var tmp0_other_with_cast = other instanceof WordleState ? other : THROW_CCE();
    if (!(this.c9_1 === tmp0_other_with_cast.c9_1))
      return false;
    if (!(this.d9_1 === tmp0_other_with_cast.d9_1))
      return false;
    if (!(this.e9_1 === tmp0_other_with_cast.e9_1))
      return false;
    if (!equals(this.f9_1, tmp0_other_with_cast.f9_1))
      return false;
    if (!(this.g9_1 == tmp0_other_with_cast.g9_1))
      return false;
    return true;
  };
  function createEmptyGameMatrix() {
    _init_properties_Wordle_kt__rx8c83();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var matrix = tmp$ret$0;
    var inductionVariable = 0;
    var last = 6;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp$ret$1 = ArrayList_init_$Create$_0();
        var row = tmp$ret$1;
        var inductionVariable_0 = 0;
        var last_0 = 5;
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            row.c(null);
          }
           while (inductionVariable_0 < last_0);
        matrix.c(row);
      }
       while (inductionVariable < last);
    return matrix;
  }
  function Wordle$lambda($this$FC, _anonymous_parameter_0__qggqh8) {
    _init_properties_Wordle_kt__rx8c83();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.random' call
    var tmp0_random = get_gameWords();
    tmp$ret$0 = random_0(tmp0_random, Default_getInstance());
    var state$delegate = useState(new WordleState(tmp$ret$0, 0, 0, createEmptyGameMatrix(), null));
    var expectedWord = latinize(invoke$lambda_5(state$delegate).c9_1);
    var letters = toSet(expectedWord);
    var tmp$ret$1;
    // Inline function 'react.useCallback' call
    var tmp1_useCallback = [listOf([invoke$lambda_5(state$delegate).g9_1, invoke$lambda_5(state$delegate).d9_1, invoke$lambda_5(state$delegate).e9_1])];
    tmp$ret$1 = useCallback(Wordle$lambda$lambda(expectedWord, state$delegate), tmp1_useCallback);
    var checkKeyPress = tmp$ret$1;
    useEffect([checkKeyPress], Wordle$lambda$lambda_0(checkKeyPress));
    var tmp$ret$4;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = 'div';
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    var tmp = tmp$ret$4;
    $this$FC.k7(tmp, Wordle$lambda$lambda_1(expectedWord, letters, state$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda_5($state$delegate) {
    _init_properties_Wordle_kt__rx8c83();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_6($state$delegate, value) {
    _init_properties_Wordle_kt__rx8c83();
    var tmp0_setValue = getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $state$delegate;
    return tmp$ret$0[1](value);
  }
  function Wordle$lambda$lambda($expectedWord, $state$delegate) {
    return function (event) {
      var tmp;
      if (!(invoke$lambda_5($state$delegate).g9_1 == null)) {
        return Unit_getInstance();
      }
      var attemptIndex = invoke$lambda_5($state$delegate).d9_1;
      var letterIndex = invoke$lambda_5($state$delegate).e9_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = event;
      tmp$ret$1 = tmp$ret$0;
      var e = tmp$ret$1;
      var tmp0_subject = e.key;
      var tmp_0;
      switch (tmp0_subject) {
        case 'Backspace':
          var tmp$ret$2;
          // Inline function 'kotlin.math.max' call
          var tmp0_max = letterIndex - 1 | 0;
          tmp$ret$2 = Math.max(0, tmp0_max);

          var nextLetterIndex = tmp$ret$2;
          var tmp1_$this = invoke$lambda_5($state$delegate);
          var tmp$ret$4;
          // Inline function 'kotlin.collections.onEachIndexed' call
          var tmp1_onEachIndexed = invoke$lambda_5($state$delegate).f9_1;
          var tmp$ret$3;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.collections.onEachIndexed.<anonymous>' call
          // Inline function 'kotlin.collections.forEachIndexed' call
          var index = 0;
          var tmp0_iterator = tmp1_onEachIndexed.d();
          while (tmp0_iterator.e()) {
            var item = tmp0_iterator.f();
            // Inline function 'screens.Wordle.<anonymous>.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var tmp2__anonymous__z9zvc9 = checkIndexOverflow(tmp1);
            if (tmp2__anonymous__z9zvc9 === attemptIndex) {
              item.d3(nextLetterIndex, null);
            }
          }
          tmp$ret$3 = tmp1_onEachIndexed;
          tmp$ret$4 = tmp$ret$3;

          var tmp2_matrix = tmp$ret$4;
          tmp_0 = tmp1_$this.i9(VOID, VOID, nextLetterIndex, tmp2_matrix);
          break;
        case 'Enter':
          if (letterIndex < 5)
            return Unit_getInstance();
          var tmp_1;
          if (attemptIndex < 5) {
            var actualWord = joinToString_0(invoke$lambda_5($state$delegate).f9_1.k(attemptIndex), '');
            var tmp_2;
            if (actualWord === $expectedWord) {
              tmp_2 = invoke$lambda_5($state$delegate).i9(VOID, VOID, VOID, VOID, true);
            } else {
              var tmp_3 = invoke$lambda_5($state$delegate);
              var tmp$ret$5;
              // Inline function 'kotlin.math.min' call
              var tmp3_min = 5;
              var tmp4_min = attemptIndex + 1 | 0;
              tmp$ret$5 = Math.min(tmp3_min, tmp4_min);
              tmp_2 = tmp_3.i9(VOID, tmp$ret$5, 0);
            }
            tmp_1 = tmp_2;
          } else {
            tmp_1 = invoke$lambda_5($state$delegate).i9(VOID, VOID, VOID, VOID, false);
          }

          tmp_0 = tmp_1;
          break;
        default:
          if (!(e.key.length === 1))
            return Unit_getInstance();
          if (letterIndex === 5)
            return Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'kotlin.text.lowercase' call
          var tmp5_lowercase = latinize(e.key);
          var tmp$ret$6;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$6 = tmp5_lowercase;
          tmp$ret$7 = tmp$ret$6.toLowerCase();

          var letter = tmp$ret$7;
          if (!contains('abcdefghijklmnopqrstuvwxyz', letter))
            return Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'kotlin.math.min' call
          var tmp6_min = 5;
          var tmp7_min = letterIndex + 1 | 0;
          tmp$ret$8 = Math.min(tmp6_min, tmp7_min);

          var nextLetterIndex_0 = tmp$ret$8;
          var tmp3_$this = invoke$lambda_5($state$delegate);
          var tmp$ret$10;
          // Inline function 'kotlin.collections.onEachIndexed' call
          var tmp8_onEachIndexed = invoke$lambda_5($state$delegate).f9_1;
          var tmp$ret$9;
          // Inline function 'kotlin.apply' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.collections.onEachIndexed.<anonymous>' call
          // Inline function 'kotlin.collections.forEachIndexed' call
          var index_0 = 0;
          var tmp0_iterator_0 = tmp8_onEachIndexed.d();
          while (tmp0_iterator_0.e()) {
            var item_0 = tmp0_iterator_0.f();
            // Inline function 'screens.Wordle.<anonymous>.<anonymous>.<anonymous>' call
            var tmp1_0 = index_0;
            index_0 = tmp1_0 + 1 | 0;
            var tmp9__anonymous__1b7cvk = checkIndexOverflow(tmp1_0);
            if (tmp9__anonymous__1b7cvk === attemptIndex) {
              item_0.d3(letterIndex, new Char(charSequenceGet(letter, 0)));
            }
          }
          tmp$ret$9 = tmp8_onEachIndexed;
          tmp$ret$10 = tmp$ret$9;

          var tmp4_matrix = tmp$ret$10;
          tmp_0 = tmp3_$this.i9(VOID, VOID, nextLetterIndex_0, tmp4_matrix);
          break;
      }
      invoke$lambda_6($state$delegate, tmp_0);
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda($checkKeyPress) {
    return function () {
      document.removeEventListener('keydown', $checkKeyPress);
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda_0($checkKeyPress) {
    return function ($this$useEffect) {
      document.addEventListener('keydown', $checkKeyPress);
      var tmp0_cleanup = Wordle$lambda$lambda$lambda($checkKeyPress);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this$useEffect;
      tmp$ret$0.push(tmp0_cleanup);
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda$lambda($i, $j, $expectedWord, $letters, $state$delegate) {
    return function ($this$invoke) {
      var tmp0__set_key__6pviv4 = $this$invoke;
      var tmp1__set_key__yldmkh = '' + $i + '.' + $j;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__set_key__6pviv4;
      tmp$ret$0.key = tmp1__set_key__yldmkh;
      var tmp3_css = $this$invoke;
      var tmp$ret$19;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$18;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$17;
      // Inline function 'kotlin.apply' call
      var tmp$ret$1;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$1 = {};
      var tmp2_apply = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Wordle.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'csstype.px' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '30px';
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp0_unsafeCast;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = tmp$ret$3;
      tmp2_apply.width = tmp$ret$4;
      var tmp$ret$7;
      // Inline function 'csstype.px' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = '30px';
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp1_unsafeCast;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      tmp2_apply.height = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'csstype.Flex' call
      var tmp$ret$10;
      // Inline function 'csstype.number' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 1.0;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp3_Flex = tmp$ret$10;
      var tmp4_Flex = (/*union*/{content: 'content', fitContent: 'fit-content', maxContent: 'max-content', minContent: 'min-content'}/*union*/).fitContent;
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp2_unsafeCast = '' + tmp3_Flex + ' ' + tmp4_Flex;
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = tmp2_unsafeCast;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp2_apply.flex = tmp$ret$13;
      var tmp$ret$16;
      // Inline function 'csstype.px' call
      var tmp$ret$15;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp5_unsafeCast = '14px';
      var tmp$ret$14;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$14 = tmp5_unsafeCast;
      tmp$ret$15 = tmp$ret$14;
      tmp$ret$16 = tmp$ret$15;
      tmp2_apply.fontSize = tmp$ret$16;
      tmp2_apply.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      if ($i < invoke$lambda_5($state$delegate).d9_1 ? true : !(invoke$lambda_5($state$delegate).g9_1 == null)) {
        tmp2_apply.backgroundColor = equals(new Char(charSequenceGet($expectedWord, $j)), invoke$lambda_5($state$delegate).f9_1.k($i).k($j)) ? (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).lightgreen : contains_0($letters, invoke$lambda_5($state$delegate).f9_1.k($i).k($j)) ? (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).lightyellow : (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).lightgray;
      } else if ($i === invoke$lambda_5($state$delegate).d9_1 ? $j === invoke$lambda_5($state$delegate).e9_1 : false) {
        tmp2_apply.backgroundColor = (/*union*/{aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', aqua: '#00FFFF', aquamarine: '#7FFFD4', azure: '#F0FFFF', beige: '#F5F5DC', bisque: '#FFE4C4', black: '#000000', blanchedalmond: '#FFEBCD', blue: '#0000FF', blueviolet: '#8A2BE2', brown: '#A52A2A', burlywood: '#DEB887', cadetblue: '#5F9EA0', chartreuse: '#7FFF00', chocolate: '#D2691E', coral: '#FF7F50', cornflowerblue: '#6495ED', cornsilk: '#FFF8DC', crimson: '#DC143C', cyan: '#00FFFF', darkblue: '#00008B', darkcyan: '#008B8B', darkgoldenrod: '#B8860B', darkgray: '#A9A9A9', darkgreen: '#006400', darkgrey: '#A9A9A9', darkkhaki: '#BDB76B', darkmagenta: '#8B008B', darkolivegreen: '#556B2F', darkorange: '#FF8C00', darkorchid: '#9932CC', darkred: '#8B0000', darksalmon: '#E9967A', darkseagreen: '#8FBC8F', darkslateblue: '#483D8B', darkslategray: '#2F4F4F', darkslategrey: '#2F4F4F', darkturquoise: '#00CED1', darkviolet: '#9400D3', deeppink: '#FF1493', deepskyblue: '#00BFFF', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1E90FF', firebrick: '#B22222', floralwhite: '#FFFAF0', forestgreen: '#228B22', fuchsia: '#FF00FF', gainsboro: '#DCDCDC', ghostwhite: '#F8F8FF', gold: '#FFD700', goldenrod: '#DAA520', gray: '#808080', green: '#008000', greenyellow: '#ADFF2F', grey: '#808080', honeydew: '#F0FFF0', hotpink: '#FF69B4', indianred: '#CD5C5C', indigo: '#4B0082', ivory: '#FFFFF0', khaki: '#F0E68C', lavender: '#E6E6FA', lavenderblush: '#FFF0F5', lawngreen: '#7CFC00', lemonchiffon: '#FFFACD', lightblue: '#ADD8E6', lightcoral: '#F08080', lightcyan: '#E0FFFF', lightgoldenrodyellow: '#FAFAD2', lightgray: '#D3D3D3', lightgreen: '#90EE90', lightgrey: '#D3D3D3', lightpink: '#FFB6C1', lightsalmon: '#FFA07A', lightseagreen: '#20B2AA', lightskyblue: '#87CEFA', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#B0C4DE', lightyellow: '#FFFFE0', lime: '#00FF00', limegreen: '#32CD32', linen: '#FAF0E6', magenta: '#FF00FF', maroon: '#800000', mediumaquamarine: '#66CDAA', mediumblue: '#0000CD', mediumorchid: '#BA55D3', mediumpurple: '#9370D8', mediumseagreen: '#3CB371', mediumslateblue: '#7B68EE', mediumspringgreen: '#00FA9A', mediumturquoise: '#48D1CC', mediumvioletred: '#C71585', midnightblue: '#191970', mintcream: '#F5FFFA', mistyrose: '#FFE4E1', moccasin: '#FFE4B5', navajowhite: '#FFDEAD', navy: '#000080', oldlace: '#FDF5E6', olive: '#808000', olivedrab: '#6B8E23', orange: '#FFA500', orangered: '#FF4500', orchid: '#DA70D6', palegoldenrod: '#EEE8AA', palegreen: '#98FB98', paleturquoise: '#AFEEEE', palevioletred: '#DB7093', papayawhip: '#FFEFD5', peachpuff: '#FFDAB9', peru: '#CD853F', pink: '#FFC0CB', plum: '#DDA0DD', powderblue: '#B0E0E6', purple: '#800080', rebeccapurple: '#663399', red: '#FF0000', rosybrown: '#BC8F8F', royalblue: '#4169E1', saddlebrown: '#8B4513', salmon: '#FA8072', sandybrown: '#F4A460', seagreen: '#2E8B57', seashell: '#FFF5EE', sienna: '#A0522D', silver: '#C0C0C0', skyblue: '#87CEEB', slateblue: '#6A5ACD', slategray: '#708090', slategrey: '#708090', snow: '#FFFAFA', springgreen: '#00FF7F', steelblue: '#4682B4', tan: '#D2B48C', teal: '#008080', thistle: '#D8BFD8', tomato: '#FF6347', transparent: 'rgba(0,0,0,0)', turquoise: '#40E0D0', violet: '#EE82EE', wheat: '#F5DEB3', white: '#FFFFFF', whitesmoke: '#F5F5F5', yellow: '#FFFF00', yellowgreen: '#9ACD32'}/*union*/).aliceblue;
      }
      tmp$ret$17 = tmp2_apply;
      tmp$ret$18 = tmp$ret$17;
      tmp$ret$19 = css(tmp$ret$18);
      tmp3_css.className = tmp$ret$19;
      var tmp = invoke$lambda_5($state$delegate).f9_1.k($i).k($j);
      var tmp0_safe_receiver = tmp == null ? null : tmp.p2_1;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new Char(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        tmp_0 = toString(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_0;
      $this$invoke.value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.maxLength = 1;
      $this$invoke.disabled = true;
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda_0($i, $expectedWord, $letters, $state$delegate) {
    return function ($this$invoke) {
      var tmp0__set_key__6pviv4 = $this$invoke;
      var tmp1__set_key__yldmkh = '' + $i;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0__set_key__6pviv4;
      tmp$ret$0.key = tmp1__set_key__yldmkh;
      var tmp3_css = $this$invoke;
      var tmp$ret$4;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$3;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp$ret$1;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$1 = {};
      var tmp2_apply = tmp$ret$1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Wordle.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      tmp2_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp2_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).row;
      tmp$ret$2 = tmp2_apply;
      tmp$ret$3 = tmp$ret$2;
      tmp$ret$4 = css(tmp$ret$3);
      tmp3_css.className = tmp$ret$4;
      var inductionVariable = 0;
      var last = 5;
      var tmp;
      if (inductionVariable < last) {
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$7;
          // Inline function 'react.dom.html.ReactHTML.input' call
          var tmp4__get_input__pupt6t = ReactHTML_getInstance();
          var tmp$ret$6;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$5;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$5 = 'input';
          tmp$ret$6 = tmp$ret$5;
          tmp$ret$7 = tmp$ret$6;
          var tmp_0 = tmp$ret$7;
          $this$invoke.k7(tmp_0, Wordle$lambda$lambda$lambda$lambda($i, j, $expectedWord, $letters, $state$delegate));
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda_1($state$delegate) {
    return function ($this$invoke) {
      $this$invoke.j7('A palavra era ' + invoke$lambda_5($state$delegate).c9_1 + '.');
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda$lambda_0($expectedWord, $state$delegate) {
    return function (_anonymous_parameter_0__qggqh8) {
      var newWord;
      do {
        var tmp$ret$0;
        // Inline function 'kotlin.collections.random' call
        var tmp0_random = get_gameWords();
        tmp$ret$0 = random_0(tmp0_random, Default_getInstance());
        newWord = tmp$ret$0;
      }
       while (newWord === $expectedWord);
      invoke$lambda_6($state$delegate, invoke$lambda_5($state$delegate).h9(newWord, 0, 0, createEmptyGameMatrix(), null));
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda$lambda_2($expectedWord, $state$delegate) {
    return function ($this$invoke) {
      $this$invoke.j7('retry');
      $this$invoke.onClick = Wordle$lambda$lambda$lambda$lambda_0($expectedWord, $state$delegate);
      return Unit_getInstance();
    };
  }
  function Wordle$lambda$lambda_1($expectedWord, $letters, $state$delegate) {
    return function ($this$invoke) {
      var tmp1_css = $this$invoke;
      var tmp$ret$6;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$5;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$4;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'screens.Wordle.<anonymous>.<anonymous>.<anonymous>' call
      tmp0_apply.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      tmp0_apply.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      tmp0_apply.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '10px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.rowGap = tmp$ret$3;
      tmp$ret$4 = tmp0_apply;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = css(tmp$ret$5);
      tmp1_css.className = tmp$ret$6;
      var inductionVariable = 0;
      var last = 6;
      var tmp;
      if (inductionVariable < last) {
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$9;
          // Inline function 'react.dom.html.ReactHTML.div' call
          var tmp2__get_div__e5gx5o = ReactHTML_getInstance();
          var tmp$ret$8;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$7;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$7 = 'div';
          tmp$ret$8 = tmp$ret$7;
          tmp$ret$9 = tmp$ret$8;
          var tmp_0 = tmp$ret$9;
          $this$invoke.k7(tmp_0, Wordle$lambda$lambda$lambda_0(i, $expectedWord, $letters, $state$delegate));
        }
         while (inductionVariable < last);
        tmp = Unit_getInstance();
      }
      var tmp_1;
      if (!(invoke$lambda_5($state$delegate).g9_1 == null)) {
        var tmp$ret$12;
        // Inline function 'react.dom.html.ReactHTML.p' call
        var tmp3__get_p__3ezexu = ReactHTML_getInstance();
        var tmp$ret$11;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$10;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$10 = 'p';
        tmp$ret$11 = tmp$ret$10;
        tmp$ret$12 = tmp$ret$11;
        var tmp_2 = tmp$ret$12;
        $this$invoke.k7(tmp_2, Wordle$lambda$lambda$lambda_1($state$delegate));
        tmp_1 = Unit_getInstance();
      }
      var tmp_3;
      if (!(invoke$lambda_5($state$delegate).g9_1 == null)) {
        var tmp$ret$15;
        // Inline function 'react.dom.html.ReactHTML.button' call
        var tmp4__get_button__886kth = ReactHTML_getInstance();
        var tmp$ret$14;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$13;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$13 = 'button';
        tmp$ret$14 = tmp$ret$13;
        tmp$ret$15 = tmp$ret$14;
        var tmp_4 = tmp$ret$15;
        $this$invoke.k7(tmp_4, Wordle$lambda$lambda$lambda_2($expectedWord, $state$delegate));
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Wordle_kt_jyxbvp;
  function _init_properties_Wordle_kt__rx8c83() {
    if (properties_initialized_Wordle_kt_jyxbvp) {
    } else {
      properties_initialized_Wordle_kt_jyxbvp = true;
      gameWords = listOf(['ajaua', 'anavi', 'apota', 'aseno', 'auleu', 'bisbi', 'bol\xE3o', 'cauna', 'cetil', 'c\xFAnia', 'fanoa', 'f\xE1tuo', 'ferga', 'gruir', 'iriar', 'istro', 'ma\xE7om', 'mutum', 'n\xE9pia', 'novar', 'omaha', 'oxono', 'pluto', 'rabel', 'riata', 'r\xFAbeo', 's\xE9rio', 'udana', 'upema', 'vileu']);
      Wordle = FC(Wordle$lambda);
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=portfolio.js.map
