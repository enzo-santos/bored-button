//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var isView = ArrayBuffer.isView;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Collection, 'Collection', interfaceMeta);
  setMetadataFor(AbstractCollection, 'AbstractCollection', classMeta, VOID, [Collection]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Map, 'Map', interfaceMeta);
  setMetadataFor(AbstractMap, 'AbstractMap', classMeta, VOID, [Map]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(List, 'List', interfaceMeta, VOID, [Collection]);
  setMetadataFor(EmptyList, 'EmptyList', objectMeta, VOID, [List]);
  setMetadataFor(EmptyIterator, 'EmptyIterator', objectMeta);
  setMetadataFor(EmptyMap, 'EmptyMap', objectMeta, VOID, [Map]);
  setMetadataFor(IntIterator, 'IntIterator', classMeta);
  setMetadataFor(Set, 'Set', interfaceMeta, VOID, [Collection]);
  setMetadataFor(EmptySet, 'EmptySet', objectMeta, VOID, [Set]);
  setMetadataFor(Random, 'Random', classMeta);
  setMetadataFor(Default, 'Default', objectMeta, Random);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(XorWowRandom, 'XorWowRandom', classMeta, Random);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(IntProgression, 'IntProgression', classMeta);
  setMetadataFor(IntRange, 'IntRange', classMeta, IntProgression);
  setMetadataFor(IntProgressionIterator, 'IntProgressionIterator', classMeta, IntIterator);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Pair, 'Pair', classMeta);
  setMetadataFor(CharSequence, 'CharSequence', interfaceMeta);
  setMetadataFor(Number_0, 'Number', classMeta);
  setMetadataFor(Unit, 'Unit', objectMeta);
  setMetadataFor(IntCompanionObject, 'IntCompanionObject', objectMeta);
  setMetadataFor(AbstractMutableCollection, 'AbstractMutableCollection', classMeta, AbstractCollection, [AbstractCollection, Collection]);
  setMetadataFor(IteratorImpl, 'IteratorImpl', classMeta);
  setMetadataFor(AbstractMutableList, 'AbstractMutableList', classMeta, AbstractMutableCollection, [AbstractMutableCollection, List, Collection]);
  setMetadataFor(AbstractMutableMap$keys$1$iterator$1, VOID, classMeta);
  setMetadataFor(Entry, 'Entry', interfaceMeta);
  setMetadataFor(MutableEntry, 'MutableEntry', interfaceMeta, VOID, [Entry]);
  setMetadataFor(SimpleEntry, 'SimpleEntry', classMeta, VOID, [MutableEntry]);
  setMetadataFor(AbstractMutableSet, 'AbstractMutableSet', classMeta, AbstractMutableCollection, [AbstractMutableCollection, Set, Collection]);
  setMetadataFor(AbstractEntrySet, 'AbstractEntrySet', classMeta, AbstractMutableSet);
  setMetadataFor(AbstractMutableMap$keys$1, VOID, classMeta, AbstractMutableSet);
  setMetadataFor(AbstractMutableMap, 'AbstractMutableMap', classMeta, AbstractMap, [AbstractMap, Map]);
  setMetadataFor(ArrayList, 'ArrayList', classMeta, AbstractMutableList, [AbstractMutableList, List, Collection]);
  setMetadataFor(HashCode, 'HashCode', objectMeta);
  setMetadataFor(EntrySet, 'EntrySet', classMeta, AbstractEntrySet);
  setMetadataFor(HashMap, 'HashMap', classMeta, AbstractMutableMap, [AbstractMutableMap, Map]);
  setMetadataFor(HashSet, 'HashSet', classMeta, AbstractMutableSet, [AbstractMutableSet, Set, Collection]);
  setMetadataFor(InternalHashCodeMap$iterator$1, VOID, classMeta);
  function createJsMap() {
    var result = Object.create(null);
    result['foo'] = 1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsDeleteProperty' call
    delete result['foo'];
    tmp$ret$0 = Unit_getInstance();
    return result;
  }
  setMetadataFor(InternalMap, 'InternalMap', interfaceMeta);
  setMetadataFor(InternalHashCodeMap, 'InternalHashCodeMap', classMeta, VOID, [InternalMap]);
  setMetadataFor(EntryIterator, 'EntryIterator', classMeta);
  setMetadataFor(ChainEntry, 'ChainEntry', classMeta, SimpleEntry);
  setMetadataFor(EntrySet_0, 'EntrySet', classMeta, AbstractEntrySet);
  setMetadataFor(LinkedHashMap, 'LinkedHashMap', classMeta, HashMap, [HashMap, Map]);
  setMetadataFor(LinkedHashSet, 'LinkedHashSet', classMeta, HashSet, [HashSet, Set, Collection]);
  setMetadataFor(BaseOutput, 'BaseOutput', classMeta);
  setMetadataFor(NodeJsOutput, 'NodeJsOutput', classMeta, BaseOutput);
  setMetadataFor(BufferedOutput, 'BufferedOutput', classMeta, BaseOutput);
  setMetadataFor(BufferedOutputToConsoleLog, 'BufferedOutputToConsoleLog', classMeta, BufferedOutput);
  setMetadataFor(KMutableProperty0, 'KMutableProperty0', interfaceMeta);
  setMetadataFor(StringBuilder, 'StringBuilder', classMeta, VOID, [CharSequence]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Char, 'Char', classMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Enum, 'Enum', classMeta);
  setMetadataFor(BitMask, 'BitMask', classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Long, 'Long', classMeta, Number_0);
  setMetadataFor(InterfaceIdService, 'InterfaceIdService', objectMeta);
  setMetadataFor(Digit, 'Digit', objectMeta);
  setMetadataFor(Exception, 'Exception', classMeta, Error);
  setMetadataFor(RuntimeException, 'RuntimeException', classMeta, Exception);
  setMetadataFor(IllegalArgumentException, 'IllegalArgumentException', classMeta, RuntimeException);
  setMetadataFor(IndexOutOfBoundsException, 'IndexOutOfBoundsException', classMeta, RuntimeException);
  setMetadataFor(IllegalStateException, 'IllegalStateException', classMeta, RuntimeException);
  setMetadataFor(NoSuchElementException, 'NoSuchElementException', classMeta, RuntimeException);
  setMetadataFor(UnsupportedOperationException, 'UnsupportedOperationException', classMeta, RuntimeException);
  setMetadataFor(ArithmeticException, 'ArithmeticException', classMeta, RuntimeException);
  setMetadataFor(NullPointerException, 'NullPointerException', classMeta, RuntimeException);
  setMetadataFor(NoWhenBranchMatchedException, 'NoWhenBranchMatchedException', classMeta, RuntimeException);
  setMetadataFor(ClassCastException, 'ClassCastException', classMeta, RuntimeException);
  //endregion
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.a(prefix);
    var count = 0;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function random(_this__u8e3s4, random) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = _this__u8e3s4.length === 0;
    if (tmp$ret$0)
      throw NoSuchElementException_init_$Create$_0('Array is empty.');
    return _this__u8e3s4[random.b(_this__u8e3s4.length)];
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function toCollection(_this__u8e3s4, destination) {
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.c(item);
    }
    return destination;
  }
  function single(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4.length;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Array is empty.');
      case 1:
        tmp = _this__u8e3s4[0];
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Array has more than one element.');
    }
    return tmp;
  }
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.a(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.d();
    $l$loop: while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.a(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.a(truncated);
    }
    buffer.a(postfix);
    return buffer;
  }
  function contains(_this__u8e3s4, element) {
    if (isInterface(_this__u8e3s4, Collection))
      return _this__u8e3s4.g(element);
    return indexOf_0(_this__u8e3s4, element) >= 0;
  }
  function random_0(_this__u8e3s4, random) {
    if (_this__u8e3s4.h())
      throw NoSuchElementException_init_$Create$_0('Collection is empty.');
    return elementAt(_this__u8e3s4, random.b(_this__u8e3s4.i()));
  }
  function indexOf_0(_this__u8e3s4, element) {
    if (isInterface(_this__u8e3s4, List))
      return _this__u8e3s4.j(element);
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.d();
    while (tmp0_iterator.e()) {
      var item = tmp0_iterator.f();
      checkIndexOverflow(index);
      if (equals_0(element, item))
        return index;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
    }
    return -1;
  }
  function elementAt(_this__u8e3s4, index) {
    if (isInterface(_this__u8e3s4, List))
      return _this__u8e3s4.k(index);
    return elementAtOrElse(_this__u8e3s4, index, elementAt$lambda(index));
  }
  function elementAtOrElse(_this__u8e3s4, index, defaultValue) {
    if (isInterface(_this__u8e3s4, List)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.getOrElse' call
      var tmp0_getOrElse = _this__u8e3s4;
      tmp$ret$0 = (index >= 0 ? index <= get_lastIndex(tmp0_getOrElse) : false) ? tmp0_getOrElse.k(index) : defaultValue(index);
      return tmp$ret$0;
    }
    if (index < 0)
      return defaultValue(index);
    var iterator = _this__u8e3s4.d();
    var count = 0;
    while (iterator.e()) {
      var element = iterator.f();
      var tmp0 = count;
      count = tmp0 + 1 | 0;
      if (index === tmp0)
        return element;
    }
    return defaultValue(index);
  }
  function elementAt$lambda($index) {
    return function (it) {
      throw IndexOutOfBoundsException_init_$Create$("Collection doesn't contain element at index " + $index + '.');
    };
  }
  function until(_this__u8e3s4, to) {
    if (to <= IntCompanionObject_getInstance().MIN_VALUE)
      return Companion_getInstance_3().l_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function downTo(_this__u8e3s4, to) {
    return Companion_getInstance_4().m(_this__u8e3s4, to, -1);
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function toSet(_this__u8e3s4) {
    var tmp0_subject = charSequenceLength(_this__u8e3s4);
    switch (tmp0_subject) {
      case 0:
        return emptySet();
      case 1:
        return setOf(new Char(charSequenceGet(_this__u8e3s4, 0)));
      default:
        return toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$(mapCapacity(coerceAtMost(charSequenceLength(_this__u8e3s4), 128))));
    }
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      destination.c(new Char(item));
    }
    return destination;
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_1(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).g = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.d();
      while (tmp0_iterator.e()) {
        var element_0 = tmp0_iterator.f();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        tmp$ret$1 = equals_0(element_0, element);
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).n = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        tmp$ret$1 = this.g(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).h = function () {
    return this.i() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return copyToArrayImpl(this);
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).o = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion).p = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion).q = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.d();
    while (tmp0_iterator.e()) {
      var e = tmp0_iterator.f();
      var tmp = imul(31, hashCode_0);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion).r = function (c, other) {
    if (!(c.i() === other.i()))
      return false;
    var otherIterator = other.d();
    var tmp0_iterator = c.d();
    while (tmp0_iterator.e()) {
      var elem = tmp0_iterator.f();
      var elemOther = otherIterator.f();
      if (!equals_0(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_1(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = $this.s();
      var tmp0_iterator = tmp0_firstOrNull.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$0;
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        tmp$ret$0 = equals_0(element.t(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).u = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryHashCode.<anonymous>' call
    var tmp2_safe_receiver = e.t();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    var tmp0_safe_receiver = e.v();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(Companion_0).w = function (e) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Companion.entryToString.<anonymous>' call
    tmp$ret$0 = toString_1(e.t()) + '=' + toString_1(e.v());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  protoOf(Companion_0).x = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    return equals_0(e.t(), other.t()) ? equals_0(e.v(), other.v()) : false;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.a1(it);
    };
  }
  function AbstractMap() {
    Companion_getInstance_0();
    this.y_1 = null;
    this.z_1 = null;
  }
  protoOf(AbstractMap).b1 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  protoOf(AbstractMap).c1 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.t();
    var value = entry.v();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.get' call
    tmp$ret$0 = (isInterface(this, Map) ? this : THROW_CCE()).d1(key);
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$1 = (isInterface(this, Map) ? this : THROW_CCE()).b1(key);
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  protoOf(AbstractMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map) : false))
      return false;
    if (!(this.i() === other.i()))
      return false;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp0_all = other.s();
      var tmp;
      if (isInterface(tmp0_all, Collection)) {
        tmp = tmp0_all.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = tmp0_all.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        tmp$ret$1 = this.c1(element);
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMap).d1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(AbstractMap).hashCode = function () {
    return hashCode(this.s());
  };
  protoOf(AbstractMap).h = function () {
    return this.i() === 0;
  };
  protoOf(AbstractMap).i = function () {
    return this.s().i();
  };
  protoOf(AbstractMap).toString = function () {
    var tmp = this.s();
    return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
  };
  protoOf(AbstractMap).a1 = function (entry) {
    return toString(this, entry.t()) + '=' + toString(this, entry.v());
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).e1 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp = hashCode_0;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_1).f1 = function (c, other) {
    if (!(c.i() === other.i()))
      return false;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsAll' call
    tmp$ret$0 = c.n(other);
    return tmp$ret$0;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.g1_1 = new Long(-1478467534, -1720727600);
  }
  protoOf(EmptyList).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyList).hashCode = function () {
    return 1;
  };
  protoOf(EmptyList).toString = function () {
    return '[]';
  };
  protoOf(EmptyList).i = function () {
    return 0;
  };
  protoOf(EmptyList).h = function () {
    return true;
  };
  protoOf(EmptyList).h1 = function (element) {
    return false;
  };
  protoOf(EmptyList).g = function (element) {
    if (!false)
      return false;
    var tmp;
    if (false) {
      tmp = element;
    } else {
      tmp = THROW_CCE();
    }
    return this.h1(tmp);
  };
  protoOf(EmptyList).i1 = function (elements) {
    return elements.h();
  };
  protoOf(EmptyList).n = function (elements) {
    return this.i1(elements);
  };
  protoOf(EmptyList).k = function (index) {
    throw IndexOutOfBoundsException_init_$Create$("Empty list doesn't contain element at index " + index + '.');
  };
  protoOf(EmptyList).j1 = function (element) {
    return -1;
  };
  protoOf(EmptyList).j = function (element) {
    if (!false)
      return -1;
    var tmp;
    if (false) {
      tmp = element;
    } else {
      tmp = THROW_CCE();
    }
    return this.j1(tmp);
  };
  protoOf(EmptyList).d = function () {
    return EmptyIterator_getInstance();
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  protoOf(EmptyIterator).e = function () {
    return false;
  };
  protoOf(EmptyIterator).f = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.i() - 1 | 0;
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$('Index overflow has happened.');
  }
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap(pairs, LinkedHashMap_init_$Create$_0(mapCapacity(pairs.length))) : emptyMap();
  }
  function toMap(_this__u8e3s4, destination) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.toMap.<anonymous>' call
    putAll(destination, _this__u8e3s4);
    tmp$ret$0 = destination;
    return tmp$ret$0;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  }
  function putAll(_this__u8e3s4, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.m1();
      var value = tmp1_loop_parameter.n1();
      _this__u8e3s4.o1(key, value);
    }
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.p1_1 = new Long(-888910638, 1920087921);
  }
  protoOf(EmptyMap).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map) : false) {
      tmp = other.h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyMap).hashCode = function () {
    return 0;
  };
  protoOf(EmptyMap).toString = function () {
    return '{}';
  };
  protoOf(EmptyMap).i = function () {
    return 0;
  };
  protoOf(EmptyMap).h = function () {
    return true;
  };
  protoOf(EmptyMap).q1 = function (key) {
    return false;
  };
  protoOf(EmptyMap).b1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    return this.q1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).r1 = function (key) {
    return null;
  };
  protoOf(EmptyMap).d1 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    return this.r1((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).s = function () {
    return EmptySet_getInstance();
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function IntIterator() {
  }
  protoOf(IntIterator).f = function () {
    return this.s1();
  };
  function EmptySet() {
    EmptySet_instance = this;
    this.t1_1 = new Long(1993859828, 793161749);
  }
  protoOf(EmptySet).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptySet).hashCode = function () {
    return 0;
  };
  protoOf(EmptySet).toString = function () {
    return '[]';
  };
  protoOf(EmptySet).i = function () {
    return 0;
  };
  protoOf(EmptySet).h = function () {
    return true;
  };
  protoOf(EmptySet).h1 = function (element) {
    return false;
  };
  protoOf(EmptySet).g = function (element) {
    if (!false)
      return false;
    var tmp;
    if (false) {
      tmp = element;
    } else {
      tmp = THROW_CCE();
    }
    return this.h1(tmp);
  };
  protoOf(EmptySet).i1 = function (elements) {
    return elements.h();
  };
  protoOf(EmptySet).n = function (elements) {
    return this.i1(elements);
  };
  protoOf(EmptySet).d = function () {
    return EmptyIterator_getInstance();
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function hashSetOf(elements) {
    return toCollection(elements, HashSet_init_$Create$_0(mapCapacity(elements.length)));
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function Default() {
    Default_instance = this;
    Random.call(this);
    this.u1_1 = defaultPlatformRandom();
  }
  protoOf(Default).v1 = function (bitCount) {
    return this.u1_1.v1(bitCount);
  };
  protoOf(Default).s1 = function () {
    return this.u1_1.s1();
  };
  protoOf(Default).b = function (until) {
    return this.u1_1.b(until);
  };
  protoOf(Default).w1 = function (from, until) {
    return this.u1_1.w1(from, until);
  };
  protoOf(Default).x1 = function () {
    return this.u1_1.x1();
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Random() {
    Default_getInstance();
  }
  protoOf(Random).s1 = function () {
    return this.v1(32);
  };
  protoOf(Random).b = function (until) {
    return this.w1(0, until);
  };
  protoOf(Random).w1 = function (from, until) {
    checkRangeBounds(from, until);
    var n = until - from | 0;
    if (n > 0 ? true : n === IntCompanionObject_getInstance().MIN_VALUE) {
      var tmp;
      if ((n & (-n | 0)) === n) {
        var bitCount = fastLog2(n);
        tmp = this.v1(bitCount);
      } else {
        var v;
        do {
          var bits = this.s1() >>> 1 | 0;
          v = bits % n | 0;
        }
         while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
        tmp = v;
      }
      var rnd = tmp;
      return from + rnd | 0;
    } else {
      while (true) {
        var rnd_0 = this.s1();
        if (from <= rnd_0 ? rnd_0 < until : false)
          return rnd_0;
      }
    }
  };
  protoOf(Random).x1 = function () {
    return doubleFromParts(this.v1(26), this.v1(27));
  };
  function checkRangeBounds(from, until) {
    var tmp0_require = until > from;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.random.checkRangeBounds.<anonymous>' call
      tmp$ret$0 = boundsErrorMessage(from, until);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    return tmp;
  }
  function fastLog2(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.countLeadingZeroBits' call
    tmp$ret$0 = clz32(value);
    return 31 - tmp$ret$0 | 0;
  }
  function boundsErrorMessage(from, until) {
    return 'Random range is empty: [' + toString_2(from) + ', ' + toString_2(until) + ').';
  }
  function Random_0(seed) {
    return XorWowRandom_init_$Create$(seed, seed >> 31);
  }
  function takeUpperBits(_this__u8e3s4, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function XorWowRandom_init_$Init$(seed1, seed2, $this) {
    XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
    return $this;
  }
  function XorWowRandom_init_$Create$(seed1, seed2) {
    return XorWowRandom_init_$Init$(seed1, seed2, objectCreate(protoOf(XorWowRandom)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.y1_1 = new Long(0, 0);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function XorWowRandom(x, y, z, w, v, addend) {
    Companion_getInstance_2();
    Random.call(this);
    this.z1_1 = x;
    this.a2_1 = y;
    this.b2_1 = z;
    this.c2_1 = w;
    this.d2_1 = v;
    this.e2_1 = addend;
    // Inline function 'kotlin.require' call
    var tmp0_require = !((this.z1_1 | this.a2_1 | this.b2_1 | this.c2_1 | this.d2_1) === 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
      tmp$ret$0 = 'Initial state must have at least one non-zero element.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 64)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
        this.s1();
      }
       while (inductionVariable < 64);
  }
  protoOf(XorWowRandom).s1 = function () {
    var t = this.z1_1;
    t = t ^ (t >>> 2 | 0);
    this.z1_1 = this.a2_1;
    this.a2_1 = this.b2_1;
    this.b2_1 = this.c2_1;
    var v0 = this.d2_1;
    this.c2_1 = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this.d2_1 = t;
    var tmp0_this = this;
    tmp0_this.e2_1 = tmp0_this.e2_1 + 362437 | 0;
    return t + this.e2_1 | 0;
  };
  protoOf(XorWowRandom).v1 = function (bitCount) {
    return takeUpperBits(this.s1(), bitCount);
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.l_1 = new IntRange(1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_3();
    IntProgression.call(this, start, endInclusive, 1);
  }
  protoOf(IntRange).h = function () {
    return this.i2_1 > this.j2_1;
  };
  protoOf(IntRange).equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.h() ? other.h() : false) ? true : this.i2_1 === other.i2_1 ? this.j2_1 === other.j2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntRange).hashCode = function () {
    return this.h() ? -1 : imul(31, this.i2_1) + this.j2_1 | 0;
  };
  protoOf(IntRange).toString = function () {
    return '' + this.i2_1 + '..' + this.j2_1;
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.l2_1 = step;
    this.m2_1 = last;
    this.n2_1 = this.l2_1 > 0 ? first <= last : first >= last;
    this.o2_1 = this.n2_1 ? first : this.m2_1;
  }
  protoOf(IntProgressionIterator).e = function () {
    return this.n2_1;
  };
  protoOf(IntProgressionIterator).s1 = function () {
    var value = this.o2_1;
    if (value === this.m2_1) {
      if (!this.n2_1)
        throw NoSuchElementException_init_$Create$();
      this.n2_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this.o2_1 = tmp0_this.o2_1 + this.l2_1 | 0;
    }
    return value;
  };
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).m = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_4();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance().MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.i2_1 = start;
    this.j2_1 = getProgressionLastElement(start, endInclusive, step);
    this.k2_1 = step;
  }
  protoOf(IntProgression).d = function () {
    return new IntProgressionIterator(this.i2_1, this.j2_1, this.k2_1);
  };
  protoOf(IntProgression).h = function () {
    return this.k2_1 > 0 ? this.i2_1 > this.j2_1 : this.i2_1 < this.j2_1;
  };
  protoOf(IntProgression).equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.h() ? other.h() : false) ? true : (this.i2_1 === other.i2_1 ? this.j2_1 === other.j2_1 : false) ? this.k2_1 === other.k2_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntProgression).hashCode = function () {
    return this.h() ? -1 : imul(31, imul(31, this.i2_1) + this.j2_1 | 0) + this.k2_1 | 0;
  };
  protoOf(IntProgression).toString = function () {
    return this.k2_1 > 0 ? '' + this.i2_1 + '..' + this.j2_1 + ' step ' + this.k2_1 : '' + this.i2_1 + ' downTo ' + this.j2_1 + ' step ' + (-this.k2_1 | 0);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.a(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.a(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.q2(element.p2_1);
        } else {
          _this__u8e3s4.a(toString_1(element));
        }
      }
    }
  }
  function equals(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (equals_0(new Char(_this__u8e3s4), new Char(other)))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__u8e3s4);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (equals_0(new Char(thisUpper), new Char(otherUpper))) {
      tmp = true;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString_0(thisUpper);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      var tmp_0 = new Char(tmp$ret$3);
      var tmp$ret$7;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$6;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2_asDynamic = toString_0(otherUpper);
      tmp$ret$4 = tmp2_asDynamic;
      var tmp3_unsafeCast = tmp$ret$4.toLowerCase();
      tmp$ret$5 = tmp3_unsafeCast;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
      tmp = equals_0(tmp_0, new Char(tmp$ret$7));
    }
    return tmp;
  }
  function toIntOrNull(_this__u8e3s4) {
    return toIntOrNull_0(_this__u8e3s4, 10);
  }
  function toIntOrNull_0(_this__u8e3s4, radix) {
    checkRadix(radix);
    var length = _this__u8e3s4.length;
    if (length === 0)
      return null;
    var start;
    var isNegative;
    var limit;
    var firstChar = charSequenceGet(_this__u8e3s4, 0);
    if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (equals_0(new Char(firstChar), new Char(_Char___init__impl__6a9atx(45)))) {
        isNegative = true;
        limit = IntCompanionObject_getInstance().MIN_VALUE;
      } else if (equals_0(new Char(firstChar), new Char(_Char___init__impl__6a9atx(43)))) {
        isNegative = false;
        limit = -IntCompanionObject_getInstance().MAX_VALUE | 0;
      } else
        return null;
    } else {
      start = 0;
      isNegative = false;
      limit = -IntCompanionObject_getInstance().MAX_VALUE | 0;
    }
    var limitForMaxRadix = (-IntCompanionObject_getInstance().MAX_VALUE | 0) / 36 | 0;
    var limitBeforeMul = limitForMaxRadix;
    var result = 0;
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
        if (digit < 0)
          return null;
        if (result < limitBeforeMul) {
          if (limitBeforeMul === limitForMaxRadix) {
            limitBeforeMul = limit / radix | 0;
            if (result < limitBeforeMul) {
              return null;
            }
          } else {
            return null;
          }
        }
        result = imul(result, radix);
        if (result < (limit + digit | 0))
          return null;
        result = result - digit | 0;
      }
       while (inductionVariable < length);
    return isNegative ? result : -result | 0;
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function contains_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    if (typeof other === 'string') {
      tmp = indexOf_1(_this__u8e3s4, other, VOID, ignoreCase) >= 0;
    } else {
      tmp = indexOf_2(_this__u8e3s4, other, 0, charSequenceLength(_this__u8e3s4), ignoreCase) >= 0;
    }
    return tmp;
  }
  function indexOf_1(_this__u8e3s4, string, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_2(_this__u8e3s4, string, startIndex, charSequenceLength(_this__u8e3s4), ignoreCase);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.nativeIndexOf' call
      var tmp0_nativeIndexOf = _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_nativeIndexOf;
      tmp$ret$1 = tmp$ret$0.indexOf(string, startIndex);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function indexOf_2(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last) {
    last = last === VOID ? false : last;
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_0(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__u8e3s4 === 'string') {
      tmp = typeof other === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var inductionVariable = indices.i2_1;
      var last_0 = indices.j2_1;
      var step = indices.k2_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__u8e3s4, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      var inductionVariable_0 = indices.i2_1;
      var last_1 = indices.j2_1;
      var step_0 = indices.k2_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
            return index_0;
        }
         while (!(index_0 === last_1));
    }
    return -1;
  }
  function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function Pair(first, second) {
    this.k1_1 = first;
    this.l1_1 = second;
  }
  protoOf(Pair).toString = function () {
    return '(' + this.k1_1 + ', ' + this.l1_1 + ')';
  };
  protoOf(Pair).m1 = function () {
    return this.k1_1;
  };
  protoOf(Pair).n1 = function () {
    return this.l1_1;
  };
  protoOf(Pair).hashCode = function () {
    var result = this.k1_1 == null ? 0 : hashCode(this.k1_1);
    result = imul(result, 31) + (this.l1_1 == null ? 0 : hashCode(this.l1_1)) | 0;
    return result;
  };
  protoOf(Pair).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals_0(this.k1_1, tmp0_other_with_cast.k1_1))
      return false;
    if (!equals_0(this.l1_1, tmp0_other_with_cast.l1_1))
      return false;
    return true;
  };
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  function CharSequence() {
  }
  function Number_0() {
  }
  function Unit() {
    Unit_instance = this;
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function IntCompanionObject() {
    IntCompanionObject_instance = this;
    this.MIN_VALUE = -2147483648;
    this.MAX_VALUE = 2147483647;
    this.SIZE_BYTES = 4;
    this.SIZE_BITS = 32;
  }
  protoOf(IntCompanionObject).t2 = function () {
    return this.MIN_VALUE;
  };
  protoOf(IntCompanionObject).u2 = function () {
    return this.MAX_VALUE;
  };
  protoOf(IntCompanionObject).v2 = function () {
    return this.SIZE_BYTES;
  };
  protoOf(IntCompanionObject).w2 = function () {
    return this.SIZE_BITS;
  };
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject();
    return IntCompanionObject_instance;
  }
  function copyToArrayImpl(collection) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    var array = tmp$ret$0;
    var iterator = collection.d();
    while (iterator.e()) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = array;
      tmp$ret$1.push(iterator.f());
    }
    return array;
  }
  function copyToArray(collection) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = collection;
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = collection;
      var tmp0_unsafeCast = tmp$ret$1.toArray();
      tmp$ret$2 = tmp0_unsafeCast;
      tmp = tmp$ret$2;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = copyToArrayImpl(collection);
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_unsafeCast;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    return tmp;
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).x2 = function () {
  };
  function IteratorImpl($outer) {
    this.a3_1 = $outer;
    this.y2_1 = 0;
    this.z2_1 = -1;
  }
  protoOf(IteratorImpl).e = function () {
    return this.y2_1 < this.a3_1.i();
  };
  protoOf(IteratorImpl).f = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this.y2_1;
    tmp0_this.y2_1 = tmp1 + 1 | 0;
    tmp.z2_1 = tmp1;
    return this.a3_1.k(this.z2_1);
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.b3_1 = 0;
  }
  protoOf(AbstractMutableList).c = function (element) {
    this.x2();
    this.c3(this.i(), element);
    return true;
  };
  protoOf(AbstractMutableList).d = function () {
    return new IteratorImpl(this);
  };
  protoOf(AbstractMutableList).g = function (element) {
    return this.j(element) >= 0;
  };
  protoOf(AbstractMutableList).j = function (element) {
    var inductionVariable = 0;
    var last = get_lastIndex(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.k(index), element)) {
          return index;
        }
      }
       while (!(index === last));
    return -1;
  };
  protoOf(AbstractMutableList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_getInstance().r(this, other);
  };
  protoOf(AbstractMutableList).hashCode = function () {
    return Companion_getInstance().q(this);
  };
  function AbstractMutableMap$keys$1$iterator$1($entryIterator) {
    this.e3_1 = $entryIterator;
  }
  protoOf(AbstractMutableMap$keys$1$iterator$1).e = function () {
    return this.e3_1.e();
  };
  protoOf(AbstractMutableMap$keys$1$iterator$1).f = function () {
    return this.e3_1.f().t();
  };
  function SimpleEntry(key, value) {
    this.f3_1 = key;
    this.g3_1 = value;
  }
  protoOf(SimpleEntry).t = function () {
    return this.f3_1;
  };
  protoOf(SimpleEntry).v = function () {
    return this.g3_1;
  };
  protoOf(SimpleEntry).h3 = function (newValue) {
    var oldValue = this.g3_1;
    this.g3_1 = newValue;
    return oldValue;
  };
  protoOf(SimpleEntry).hashCode = function () {
    return Companion_getInstance_0().u(this);
  };
  protoOf(SimpleEntry).toString = function () {
    return Companion_getInstance_0().w(this);
  };
  protoOf(SimpleEntry).equals = function (other) {
    return Companion_getInstance_0().x(this, other);
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractEntrySet).g = function (element) {
    return this.i3(element);
  };
  function AbstractMutableMap$keys$1(this$0) {
    this.j3_1 = this$0;
    AbstractMutableSet.call(this);
  }
  protoOf(AbstractMutableMap$keys$1).k3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  protoOf(AbstractMutableMap$keys$1).c = function (element) {
    return this.k3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AbstractMutableMap$keys$1).l3 = function (element) {
    return this.j3_1.b1(element);
  };
  protoOf(AbstractMutableMap$keys$1).g = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.l3((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  protoOf(AbstractMutableMap$keys$1).d = function () {
    var entryIterator = this.j3_1.s().d();
    return new AbstractMutableMap$keys$1$iterator$1(entryIterator);
  };
  protoOf(AbstractMutableMap$keys$1).i = function () {
    return this.j3_1.i();
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.o3_1 = null;
    this.p3_1 = null;
  }
  protoOf(AbstractMutableMap).q3 = function () {
    if (this.o3_1 == null) {
      var tmp = this;
      tmp.o3_1 = new AbstractMutableMap$keys$1(this);
    }
    return ensureNotNull(this.o3_1);
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_getInstance_1().f1(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_getInstance_1().e1(this);
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_getInstance().o(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_getInstance().p(index, $this.i());
    tmp$ret$0 = index;
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this.s3_1 = array;
    this.t3_1 = false;
  }
  protoOf(ArrayList).i = function () {
    return this.s3_1.length;
  };
  protoOf(ArrayList).k = function (index) {
    var tmp = this.s3_1[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).d3 = function (index, element) {
    this.x2();
    rangeCheck(this, index);
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = this.s3_1[index];
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.set.<anonymous>' call
    this.s3_1[index] = element;
    tmp$ret$0 = tmp0_apply;
    var tmp = tmp$ret$0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).c = function (element) {
    this.x2();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.s3_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.b3_1;
    tmp0_this.b3_1 = tmp1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).c3 = function (index, element) {
    this.x2();
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.s3_1;
    tmp$ret$0 = tmp0_asDynamic;
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.b3_1;
    tmp0_this.b3_1 = tmp1 + 1 | 0;
  };
  protoOf(ArrayList).j = function (element) {
    return indexOf(this.s3_1, element);
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.s3_1);
  };
  protoOf(ArrayList).u3 = function () {
    return [].slice.call(this.s3_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.u3();
  };
  protoOf(ArrayList).x2 = function () {
    if (this.t3_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function HashCode() {
    HashCode_instance = this;
  }
  protoOf(HashCode).v3 = function (value1, value2) {
    return equals_0(value1, value2);
  };
  protoOf(HashCode).w3 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EntrySet($outer) {
    this.x3_1 = $outer;
    AbstractEntrySet.call(this);
  }
  protoOf(EntrySet).y3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  protoOf(EntrySet).c = function (element) {
    return this.y3((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet).i3 = function (element) {
    return this.x3_1.c1(element);
  };
  protoOf(EntrySet).d = function () {
    return this.x3_1.d4_1.d();
  };
  protoOf(EntrySet).i = function () {
    return this.x3_1.i();
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.d4_1 = internalMap;
    $this.e4_1 = internalMap.g4();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    // Inline function 'kotlin.require' call
    var tmp0_require = initialCapacity >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$0 = 'Negative initial capacity: ' + initialCapacity;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_2(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = loadFactor >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.HashMap.<init>.<anonymous>' call
      tmp$ret$1 = 'Non-positive load factor: ' + loadFactor;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString_2(message_0));
    }
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(HashMap)));
  }
  protoOf(HashMap).b1 = function (key) {
    return this.d4_1.l3(key);
  };
  protoOf(HashMap).s = function () {
    if (this.f4_1 == null) {
      this.f4_1 = this.h4();
    }
    return ensureNotNull(this.f4_1);
  };
  protoOf(HashMap).h4 = function () {
    return new EntrySet(this);
  };
  protoOf(HashMap).d1 = function (key) {
    return this.d4_1.d1(key);
  };
  protoOf(HashMap).o1 = function (key, value) {
    return this.d4_1.o1(key, value);
  };
  protoOf(HashMap).i = function () {
    return this.d4_1.i();
  };
  function HashMap() {
    this.f4_1 = null;
  }
  function HashSet_init_$Init$($this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.i4_1 = HashMap_init_$Create$();
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$(objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.i4_1 = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_1(initialCapacity, $this) {
    HashSet_init_$Init$_0(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_1(initialCapacity, objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_2(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.i4_1 = map;
    return $this;
  }
  protoOf(HashSet).c = function (element) {
    var old = this.i4_1.o1(element, this);
    return old == null;
  };
  protoOf(HashSet).g = function (element) {
    return this.i4_1.b1(element);
  };
  protoOf(HashSet).h = function () {
    return this.i4_1.h();
  };
  protoOf(HashSet).d = function () {
    return this.i4_1.q3().d();
  };
  protoOf(HashSet).i = function () {
    return this.i4_1.i();
  };
  function HashSet() {
  }
  function computeNext($this) {
    if ($this.m4_1 != null ? $this.n4_1 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = $this.m4_1;
      tmp$ret$0 = tmp0_unsafeCast;
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this.o4_1 = tmp0_this.o4_1 + 1 | 0;
      if (tmp0_this.o4_1 < chainSize)
        return 0;
    }
    var tmp1_this = $this;
    tmp1_this.l4_1 = tmp1_this.l4_1 + 1 | 0;
    if (tmp1_this.l4_1 < $this.k4_1.length) {
      $this.m4_1 = $this.q4_1.s4_1[$this.k4_1[$this.l4_1]];
      var tmp = $this;
      var tmp_0 = $this.m4_1;
      tmp.n4_1 = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this.o4_1 = 0;
      return 0;
    } else {
      $this.m4_1 = null;
      return 1;
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this.r4_1.w3(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this.r4_1.v3(entry.t(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      var chain = chainOrEntry;
      return findEntryInChain(chain, $this, key);
    }
  }
  function findEntryInChain(_this__u8e3s4, $this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.collections.InternalHashCodeMap.findEntryInChain.<anonymous>' call
        tmp$ret$0 = $this.r4_1.v3(element.t(), key);
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode) {
    var chainOrEntry = $this.s4_1[hashCode];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function InternalHashCodeMap$iterator$1(this$0) {
    this.q4_1 = this$0;
    this.j4_1 = -1;
    this.k4_1 = Object.keys(this$0.s4_1);
    this.l4_1 = -1;
    this.m4_1 = null;
    this.n4_1 = false;
    this.o4_1 = -1;
    this.p4_1 = null;
  }
  protoOf(InternalHashCodeMap$iterator$1).e = function () {
    if (this.j4_1 === -1)
      this.j4_1 = computeNext(this);
    return this.j4_1 === 0;
  };
  protoOf(InternalHashCodeMap$iterator$1).f = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this.n4_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = this.m4_1;
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0[this.o4_1];
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_unsafeCast = this.m4_1;
      tmp$ret$1 = tmp1_unsafeCast;
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this.p4_1 = lastEntry;
    this.j4_1 = -1;
    return lastEntry;
  };
  function InternalHashCodeMap(equality) {
    this.r4_1 = equality;
    this.s4_1 = this.u4();
    this.t4_1 = 0;
  }
  protoOf(InternalHashCodeMap).g4 = function () {
    return this.r4_1;
  };
  protoOf(InternalHashCodeMap).i = function () {
    return this.t4_1;
  };
  protoOf(InternalHashCodeMap).o1 = function (key, value) {
    var hashCode = this.r4_1.w3(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode);
    if (chainOrEntry == null) {
      this.s4_1[hashCode] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this.r4_1.v3(entry.t(), key)) {
          return entry.h3(value);
        } else {
          var tmp$ret$2;
          // Inline function 'kotlin.arrayOf' call
          var tmp0_arrayOf = [entry, new SimpleEntry(key, value)];
          var tmp$ret$1;
          // Inline function 'kotlin.js.unsafeCast' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_arrayOf;
          tmp$ret$1 = tmp$ret$0;
          tmp$ret$2 = tmp$ret$1;
          this.s4_1[hashCode] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this.t4_1;
          tmp0_this.t4_1 = tmp1 + 1 | 0;
          return null;
        }
      } else {
        var chain = chainOrEntry;
        var entry_0 = findEntryInChain(chain, this, key);
        if (!(entry_0 == null)) {
          return entry_0.h3(value);
        }
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = chain;
        tmp$ret$3.push(new SimpleEntry(key, value));
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this.t4_1;
    tmp2_this.t4_1 = tmp3 + 1 | 0;
    return null;
  };
  protoOf(InternalHashCodeMap).l3 = function (key) {
    return !(getEntry(this, key) == null);
  };
  protoOf(InternalHashCodeMap).d1 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(InternalHashCodeMap).d = function () {
    return new InternalHashCodeMap$iterator$1(this);
  };
  function InternalMap() {
  }
  function EntryIterator($outer) {
    this.x4_1 = $outer;
    this.v4_1 = null;
    this.w4_1 = null;
    this.w4_1 = this.x4_1.i5_1.f5_1;
  }
  protoOf(EntryIterator).e = function () {
    return !(this.w4_1 === null);
  };
  protoOf(EntryIterator).f = function () {
    if (!this.e())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this.w4_1);
    this.v4_1 = current;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = current.l5_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.EntryIterator.next.<anonymous>' call
    tmp$ret$0 = !(tmp0_takeIf === this.x4_1.i5_1.f5_1);
    if (tmp$ret$0) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$1 = tmp_0;
    tmp.w4_1 = tmp$ret$1;
    return current;
  };
  function ChainEntry($outer, key, value) {
    this.n5_1 = $outer;
    SimpleEntry.call(this, key, value);
    this.l5_1 = null;
    this.m5_1 = null;
  }
  protoOf(ChainEntry).h3 = function (newValue) {
    this.n5_1.x2();
    return protoOf(SimpleEntry).h3.call(this, newValue);
  };
  function EntrySet_0($outer) {
    this.i5_1 = $outer;
    AbstractEntrySet.call(this);
  }
  protoOf(EntrySet_0).y3 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  protoOf(EntrySet_0).c = function (element) {
    return this.y3((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  protoOf(EntrySet_0).i3 = function (element) {
    return this.i5_1.c1(element);
  };
  protoOf(EntrySet_0).d = function () {
    return new EntryIterator(this);
  };
  protoOf(EntrySet_0).i = function () {
    return this.i5_1.i();
  };
  function addToEnd(_this__u8e3s4, $this) {
    // Inline function 'kotlin.check' call
    var tmp0_check = _this__u8e3s4.l5_1 == null ? _this__u8e3s4.m5_1 == null : false;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$_0(toString_2(message));
    }
    var _head = $this.f5_1;
    if (_head == null) {
      $this.f5_1 = _this__u8e3s4;
      _this__u8e3s4.l5_1 = _this__u8e3s4;
      _this__u8e3s4.m5_1 = _this__u8e3s4;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.checkNotNull' call
      var tmp1_checkNotNull = _head.m5_1;
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_checkNotNull == null) {
          var tmp$ret$1;
          // Inline function 'kotlin.checkNotNull.<anonymous>' call
          tmp$ret$1 = 'Required value was null.';
          var message_0 = tmp$ret$1;
          throw IllegalStateException_init_$Create$_0(toString_2(message_0));
        } else {
          tmp$ret$2 = tmp1_checkNotNull;
          break $l$block;
        }
      }
      tmp$ret$3 = tmp$ret$2;
      var _tail = tmp$ret$3;
      _this__u8e3s4.m5_1 = _tail;
      _this__u8e3s4.l5_1 = _head;
      _head.m5_1 = _this__u8e3s4;
      _tail.l5_1 = _this__u8e3s4;
    }
  }
  function LinkedHashMap_init_$Init$(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this.g5_1 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$(initialCapacity, loadFactor, objectCreate(protoOf(LinkedHashMap)));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, $this) {
    LinkedHashMap_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
  }
  protoOf(LinkedHashMap).b1 = function (key) {
    return this.g5_1.b1(key);
  };
  protoOf(LinkedHashMap).h4 = function () {
    return new EntrySet_0(this);
  };
  protoOf(LinkedHashMap).d1 = function (key) {
    var tmp0_safe_receiver = this.g5_1.d1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
  };
  protoOf(LinkedHashMap).o1 = function (key, value) {
    this.x2();
    var old = this.g5_1.d1(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this.g5_1.o1(key, newEntry);
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.h3(value);
    }
  };
  protoOf(LinkedHashMap).i = function () {
    return this.g5_1.i();
  };
  protoOf(LinkedHashMap).x2 = function () {
    if (this.h5_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this.f5_1 = null;
    this.h5_1 = false;
  }
  function LinkedHashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_2(LinkedHashMap_init_$Create$(initialCapacity, loadFactor), $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_0(initialCapacity, $this) {
    LinkedHashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$(initialCapacity) {
    return LinkedHashSet_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet() {
  }
  function get_output() {
    _init_properties_console_kt__rfg7jv();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  protoOf(BaseOutput).o5 = function () {
    this.p5('\n');
  };
  protoOf(BaseOutput).q5 = function (message) {
    this.p5(message);
    this.o5();
  };
  function NodeJsOutput(outputStream) {
    BaseOutput.call(this);
    this.r5_1 = outputStream;
  }
  protoOf(NodeJsOutput).p5 = function (message) {
    var tmp$ret$0;
    // Inline function 'kotlin.io.String' call
    tmp$ret$0 = String(message);
    var messageString = tmp$ret$0;
    this.r5_1.write(messageString);
  };
  function BufferedOutputToConsoleLog() {
    BufferedOutput.call(this);
  }
  protoOf(BufferedOutputToConsoleLog).p5 = function (message) {
    var tmp$ret$0;
    // Inline function 'kotlin.io.String' call
    tmp$ret$0 = String(message);
    var s = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.text.nativeLastIndexOf' call
    var tmp0_nativeLastIndexOf = s;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_nativeLastIndexOf;
    tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this;
      var tmp_0 = tmp0_this.t5_1;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = s;
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_substring;
      tmp$ret$4 = tmp$ret$3.substring(0, i);
      tmp.t5_1 = tmp_0 + tmp$ret$4;
      this.u5();
      var tmp$ret$6;
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = s;
      var tmp3_substring = i + 1 | 0;
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp2_substring;
      tmp$ret$6 = tmp$ret$5.substring(tmp3_substring);
      s = tmp$ret$6;
    }
    var tmp1_this = this;
    tmp1_this.t5_1 = tmp1_this.t5_1 + s;
  };
  protoOf(BufferedOutputToConsoleLog).u5 = function () {
    console.log(this.t5_1);
    this.t5_1 = '';
  };
  function BufferedOutput() {
    BaseOutput.call(this);
    this.t5_1 = '';
  }
  protoOf(BufferedOutput).p5 = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.t5_1;
    var tmp$ret$0;
    // Inline function 'kotlin.io.String' call
    tmp$ret$0 = String(message);
    tmp.t5_1 = tmp_0 + tmp$ret$0;
  };
  function println(message) {
    _init_properties_console_kt__rfg7jv();
    get_output().q5(message);
  }
  var properties_initialized_console_kt_gll9dl;
  function _init_properties_console_kt__rfg7jv() {
    if (properties_initialized_console_kt_gll9dl) {
    } else {
      properties_initialized_console_kt_gll9dl = true;
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.io.output.<anonymous>' call
      var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
      tmp$ret$0 = isNode ? new NodeJsOutput(process.stdout) : new BufferedOutputToConsoleLog();
      tmp$ret$1 = tmp$ret$0;
      output = tmp$ret$1;
    }
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function get_INV_2_26() {
    _init_properties_PlatformRandom_kt__6kjv62();
    return INV_2_26;
  }
  var INV_2_26;
  function get_INV_2_53() {
    _init_properties_PlatformRandom_kt__6kjv62();
    return INV_2_53;
  }
  var INV_2_53;
  function doubleFromParts(hi26, low27) {
    _init_properties_PlatformRandom_kt__6kjv62();
    return hi26 * get_INV_2_26() + low27 * get_INV_2_53();
  }
  function defaultPlatformRandom() {
    _init_properties_PlatformRandom_kt__6kjv62();
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Math.random() * Math.pow(2, 32) | 0;
    tmp$ret$0 = tmp0_unsafeCast;
    return Random_0(tmp$ret$0);
  }
  var properties_initialized_PlatformRandom_kt_uibhw8;
  function _init_properties_PlatformRandom_kt__6kjv62() {
    if (properties_initialized_PlatformRandom_kt_uibhw8) {
    } else {
      properties_initialized_PlatformRandom_kt_uibhw8 = true;
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0 = Math.pow(2.0, -26.0);
      INV_2_26 = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$0_0 = Math.pow(2.0, -53.0);
      INV_2_53 = tmp$ret$0_0;
    }
  }
  function KMutableProperty0() {
  }
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.v5_1 = !(content === undefined) ? content : '';
  }
  protoOf(StringBuilder).r2 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = this.v5_1;
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0.length;
  };
  protoOf(StringBuilder).s2 = function (index) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.getOrElse' call
    var tmp0_getOrElse = this.v5_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_0(tmp0_getOrElse) : false) {
      tmp = charSequenceGet(tmp0_getOrElse, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', length: ' + this.r2() + '}');
    }
    tmp$ret$0 = tmp;
    return tmp$ret$0;
  };
  protoOf(StringBuilder).q2 = function (value) {
    var tmp0_this = this;
    tmp0_this.v5_1 = tmp0_this.v5_1 + new Char(value);
    return this;
  };
  protoOf(StringBuilder).a = function (value) {
    var tmp0_this = this;
    tmp0_this.v5_1 = tmp0_this.v5_1 + toString_1(value);
    return this;
  };
  protoOf(StringBuilder).w5 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this.v5_1;
    var tmp1_elvis_lhs = value;
    tmp.v5_1 = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.v5_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.uppercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString_0(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toUpperCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('radix ' + radix + ' was not in valid range 2..36');
    }
    return radix;
  }
  function digitOf(char, radix) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.digitOf.<anonymous>' call
    tmp$ret$0 = tmp0_let >= radix ? -1 : tmp0_let;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    var tmp = _Char___init__impl__6a9atx(tmp$ret$0);
    return tmp;
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    var tmp = $this.p2_1;
    return Char__compareTo_impl_ypi4mb(tmp, other instanceof Char ? other.p2_1 : THROW_CCE());
  }
  function Char__minus_impl_a2frrh($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.p2_1);
  }
  function Char__hashCode_impl_otmys($this) {
    return _get_value__a43j40($this);
  }
  function toString_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = String.fromCharCode(_get_value__a43j40($this));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.x5_1 = _Char___init__impl__6a9atx(0);
    this.y5_1 = _Char___init__impl__6a9atx(65535);
    this.z5_1 = _Char___init__impl__6a9atx(55296);
    this.a6_1 = _Char___init__impl__6a9atx(56319);
    this.b6_1 = _Char___init__impl__6a9atx(56320);
    this.c6_1 = _Char___init__impl__6a9atx(57343);
    this.d6_1 = _Char___init__impl__6a9atx(55296);
    this.e6_1 = _Char___init__impl__6a9atx(57343);
    this.f6_1 = 2;
    this.g6_1 = 16;
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Char(value) {
    Companion_getInstance_5();
    this.p2_1 = value;
  }
  protoOf(Char).h6 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.p2_1, other);
  };
  protoOf(Char).i6 = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  protoOf(Char).equals = function (other) {
    return Char__equals_impl_x6719k(this.p2_1, other);
  };
  protoOf(Char).hashCode = function () {
    return Char__hashCode_impl_otmys(this.p2_1);
  };
  protoOf(Char).toString = function () {
    return toString_0(this.p2_1);
  };
  function List() {
  }
  function Collection() {
  }
  function Entry() {
  }
  function Map() {
  }
  function Set() {
  }
  function MutableEntry() {
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_6();
    this.j6_1 = name;
    this.k6_1 = ordinal;
  }
  protoOf(Enum).l6 = function () {
    return this.j6_1;
  };
  protoOf(Enum).m6 = function () {
    return this.k6_1;
  };
  protoOf(Enum).n6 = function (other) {
    return compareTo(this.k6_1, other.k6_1);
  };
  protoOf(Enum).i6 = function (other) {
    return this.n6(other instanceof Enum ? other : THROW_CCE());
  };
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.j6_1;
  };
  function toString_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_2(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var indexedObject = interfaces;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var i = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.o6_1.length;
      }
      var iid = i.$metadata$.iid;
      var tmp2_safe_receiver = iid;
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$4;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.implement.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOf' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = [tmp2_safe_receiver];
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = new BitMask(tmp$ret$2);
        tmp$ret$4 = tmp$ret$3;
        tmp = tmp$ret$4;
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.o6_1.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    var tmp_0 = 0;
    var tmp_1 = maxSize;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$5;
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp$ret$5 = masks.reduce(implement$lambda(tmp_3), 0);
      tmp_2[tmp_3] = tmp$ret$5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    var resultIntArray = tmp_2;
    var tmp$ret$6;
    // Inline function 'kotlin.emptyArray' call
    tmp$ret$6 = [];
    var result = new BitMask(tmp$ret$6);
    result.o6_1 = resultIntArray;
    return result;
  }
  function BitMask(activeBits) {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.BitMask.intArray.<anonymous>' call
    var tmp_0;
    if (activeBits.length === 0) {
      tmp_0 = new Int32Array(0);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = Math;
      tmp$ret$0 = tmp0_asDynamic;
      var max = tmp$ret$0.max.apply(null, activeBits);
      var intArray = new Int32Array((max >> 5) + 1 | 0);
      var indexedObject = activeBits;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var activeBit = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var numberIndex = activeBit >> 5;
        var positionInNumber = activeBit & 31;
        var numberWithSettledBit = 1 << positionInNumber;
        intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
      }
      tmp_0 = intArray;
    }
    tmp$ret$1 = tmp_0;
    tmp$ret$2 = tmp$ret$1;
    tmp.o6_1 = tmp$ret$2;
  }
  protoOf(BitMask).p6 = function (possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > this.o6_1.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((this.o6_1[numberIndex] & numberWithSettledBit) === 0);
  };
  function implement$lambda($tmp) {
    return function (acc, it) {
      return $tmp >= it.o6_1.length ? acc : acc | it.o6_1[$tmp];
    };
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp$ret$0 = obj | 0;
    var tmp0_unsafeCast = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    if (tmp$ret$2 === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (properties_initialized_bitUtils_kt_i2bo3e) {
    } else {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = new Float64Array(get_buf());
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = new Float32Array(get_buf());
      var tmp$ret$0_0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_0 = tmp0_unsafeCast_0;
      tmp$ret$1_0 = tmp$ret$0_0;
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = new Int32Array(get_buf());
      var tmp$ret$0_1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0_1 = tmp0_unsafeCast_1;
      tmp$ret$1_1 = tmp$ret$0_1;
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0_2;
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      tmp$ret$0_2 = !(get_bufInt32()[0] === 0) ? 1 : 0;
      tmp$ret$1_2 = tmp$ret$0_2;
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      // Inline function 'kotlin.Char' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.charCodeAt(index);
      tmp$ret$1 = tmp0_unsafeCast;
      var tmp3_Char = tmp$ret$1;
      var tmp_0;
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      Companion_getInstance_5();
      var tmp1__get_code__adl84j = _Char___init__impl__6a9atx(0);
      tmp$ret$2 = Char__toInt_impl_vasixd(tmp1__get_code__adl84j);
      if (tmp3_Char < tmp$ret$2) {
        tmp_0 = true;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.code' call
        Companion_getInstance_5();
        var tmp2__get_code__cifwzm = _Char___init__impl__6a9atx(65535);
        tmp$ret$3 = Char__toInt_impl_vasixd(tmp2__get_code__cifwzm);
        tmp_0 = tmp3_Char > tmp$ret$3;
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + tmp3_Char);
      }
      tmp$ret$4 = numberToChar(tmp3_Char);
      tmp = tmp$ret$4;
    } else {
      tmp = a.s2(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = a;
      var tmp0_unsafeCast = tmp$ret$0.length;
      tmp$ret$1 = tmp0_unsafeCast;
      tmp = tmp$ret$1;
    } else {
      tmp = a.r2();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_2(it);
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.s6());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 1;
        var ia = tmp$ret$0 / a;
        var tmp_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = 1;
        if (ia === tmp$ret$1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.i6(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.jsIn' call
    var tmp0_jsIn = 'kotlinHashCodeValue$';
    var tmp1_jsIn = obj;
    tmp$ret$0 = tmp0_jsIn in tmp1_jsIn;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp2_jsBitwiseOr = Math.random() * 4.294967296E9;
      tmp$ret$1 = tmp2_jsBitwiseOr | 0;
      var hash = tmp$ret$1;
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp3_unsafeCast = obj['kotlinHashCodeValue$'];
    tmp$ret$2 = tmp3_unsafeCast;
    return tmp$ret$2;
  }
  function toString_2(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = o.toString();
      tmp$ret$0 = tmp0_unsafeCast;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.unsafeCast' call
        tmp$ret$0 = obj;

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = str;
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = 1;
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$1 = 1;
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function boxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function unboxIntrinsic(x) {
    throw IllegalStateException_init_$Create$_0('Should be lowered');
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = instance;
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    return Object.create(proto);
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.t6_1 = new Long(0, -2147483648);
    this.u6_1 = new Long(-1, 2147483647);
    this.v6_1 = 8;
    this.w6_1 = 64;
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Long(low, high) {
    Companion_getInstance_7();
    Number_0.call(this);
    this.q6_1 = low;
    this.r6_1 = high;
  }
  protoOf(Long).x6 = function (other) {
    return compare(this, other);
  };
  protoOf(Long).i6 = function (other) {
    return this.x6(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).y6 = function (other) {
    return add(this, other);
  };
  protoOf(Long).z6 = function (other) {
    return divide(this, other);
  };
  protoOf(Long).a7 = function () {
    return this.b7().y6(new Long(1, 0));
  };
  protoOf(Long).b7 = function () {
    return new Long(~this.q6_1, ~this.r6_1);
  };
  protoOf(Long).c7 = function () {
    return this.q6_1;
  };
  protoOf(Long).s6 = function () {
    return toNumber(this);
  };
  protoOf(Long).valueOf = function () {
    return this.s6();
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode_0(this);
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  function get_ZERO() {
    _init_properties_longjs_kt__tqrzid();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longjs_kt__tqrzid();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longjs_kt__tqrzid();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longjs_kt__tqrzid();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    var a48 = _this__u8e3s4.r6_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.r6_1 & 65535;
    var a16 = _this__u8e3s4.q6_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.q6_1 & 65535;
    var b48 = other.r6_1 >>> 16 | 0;
    var b32 = other.r6_1 & 65535;
    var b16 = other.q6_1 >>> 16 | 0;
    var b00 = other.q6_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return add(_this__u8e3s4, other.a7());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.r6_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.r6_1 & 65535;
    var a16 = _this__u8e3s4.q6_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.q6_1 & 65535;
    var b48 = other.r6_1 >>> 16 | 0;
    var b32 = other.r6_1 & 65535;
    var b16 = other.q6_1 >>> 16 | 0;
    var b00 = other.q6_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.z6(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.z6(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).z6(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).z6(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.z6(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.q6_1 << numBits_0, _this__u8e3s4.r6_1 << numBits_0 | (_this__u8e3s4.q6_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.q6_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longjs_kt__tqrzid();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.q6_1 >>> numBits_0 | 0 | _this__u8e3s4.r6_1 << (32 - numBits_0 | 0), _this__u8e3s4.r6_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.r6_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.r6_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.r6_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.r6_1 === other.r6_1 ? _this__u8e3s4.q6_1 === other.q6_1 : false;
  }
  function hashCode_0(l) {
    _init_properties_longjs_kt__tqrzid();
    return l.q6_1 ^ l.r6_1;
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longjs_kt__tqrzid();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.z6(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).c7();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = rem;
        var tmp0_unsafeCast = tmp$ret$0.toString(radix);
        tmp$ret$1 = tmp0_unsafeCast;
        return tmp + tmp$ret$1;
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.z6(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).c7();
      var tmp$ret$3;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = intval;
      var tmp1_unsafeCast = tmp$ret$2.toString(radix);
      tmp$ret$3 = tmp1_unsafeCast;
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    _init_properties_longjs_kt__tqrzid();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.r6_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.r6_1 === 0 ? _this__u8e3s4.q6_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return (_this__u8e3s4.q6_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.a7();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longjs_kt__tqrzid();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp0_jsBitwiseOr = value % twoPwr32;
      tmp$ret$0 = tmp0_jsBitwiseOr | 0;
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp1_jsBitwiseOr = value / twoPwr32;
      tmp$ret$1 = tmp1_jsBitwiseOr | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longjs_kt__tqrzid();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longjs_kt__tqrzid();
    return _this__u8e3s4.q6_1 >= 0 ? _this__u8e3s4.q6_1 : 4.294967296E9 + _this__u8e3s4.q6_1;
  }
  var properties_initialized_longjs_kt_5aju7t;
  function _init_properties_longjs_kt__tqrzid() {
    if (properties_initialized_longjs_kt_5aju7t) {
    } else {
      properties_initialized_longjs_kt_5aju7t = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.c7();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2.147483647E9) {
      tmp = 2147483647;
    } else if (a < -2.147483648E9) {
      tmp = -2147483648;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp$ret$0 = a | 0;
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function toShort(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = a << 16 >> 16;
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = numberToInt(a);
    tmp$ret$0 = _UShort___init__impl__jigrne(toShort(tmp0_toUShort));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function get_propertyRefClassMetadataCache() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return classMeta(VOID, VOID, VOID, VOID);
  }
  function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata, imask) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    obj.$imask$ = imask;
    return obj;
  }
  function getKPropMetadata(paramCount, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
  }
  function getInterfaceMaskFor(obj, superType) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    var tmp0_elvis_lhs = obj.$imask$;
    return tmp0_elvis_lhs == null ? implement([superType]) : tmp0_elvis_lhs;
  }
  function getLocalDelegateReference(name, superType, mutable, lambda) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return getPropertyCallableRef(name, 0, superType, lambda, mutable ? lambda : null);
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function _init_properties_reflectRuntime_kt__5r4uu3() {
    if (properties_initialized_reflectRuntime_kt_inkhwd) {
    } else {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      var tmp$ret$11;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp0_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_arrayOf;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var tmp = tmp$ret$2;
      var tmp$ret$5;
      // Inline function 'kotlin.arrayOf' call
      var tmp1_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_arrayOf;
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      var tmp_0 = tmp$ret$5;
      var tmp$ret$8;
      // Inline function 'kotlin.arrayOf' call
      var tmp2_arrayOf = [metadataObject(), metadataObject()];
      var tmp$ret$7;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$6;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$6 = tmp2_arrayOf;
      tmp$ret$7 = tmp$ret$6;
      tmp$ret$8 = tmp$ret$7;
      var tmp3_arrayOf = [tmp, tmp_0, tmp$ret$8];
      var tmp$ret$10;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$9 = tmp3_arrayOf;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      propertyRefClassMetadataCache = tmp$ret$11;
    }
  }
  function classMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function createMetadata(kind, name, associatedObjectKey, associatedObjects, suspendArity, iid) {
    var undef = VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, iid: iid};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = Array.isArray(obj);
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var tmp0_elvis_lhs = suspendArity;
    var metadata = metadataConstructor(name, associatedObjectKey, associatedObjects, tmp0_elvis_lhs == null ? [] : tmp0_elvis_lhs);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces.slice());
    }
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = obj.$imask$;
    tmp$ret$0 = tmp0_unsafeCast;
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return mask.p6(iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = obj;
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = true;
        break;
      case 'number':
        tmp = true;
        break;
      case 'boolean':
        tmp = true;
        break;
      case 'function':
        tmp = true;
        break;
      default:
        var tmp$ret$0;
        // Inline function 'kotlin.js.jsInstanceOf' call
        var tmp0_jsInstanceOf = Object;
        tmp$ret$0 = obj instanceof tmp0_jsInstanceOf;

        tmp = tmp$ret$0;
        break;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, CharSequence);
  }
  function interfaceMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId(InterfaceIdService_getInstance()));
  }
  function generateInterfaceId(_this__u8e3s4) {
    var tmp0_this = _this__u8e3s4;
    tmp0_this.d7_1 = tmp0_this.d7_1 + 1 | 0;
    return _this__u8e3s4.d7_1;
  }
  function InterfaceIdService() {
    InterfaceIdService_instance = this;
    this.d7_1 = 0;
  }
  var InterfaceIdService_instance;
  function InterfaceIdService_getInstance() {
    if (InterfaceIdService_instance == null)
      new InterfaceIdService();
    return InterfaceIdService_instance;
  }
  function objectMeta(name, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('object', name, associatedObjectKey, associatedObjects, suspendArity, null);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (properties_initialized_void_kt_e4ret2) {
    } else {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function asList(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0;
    return new ArrayList(tmp$ret$1);
  }
  function digitToIntImpl(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
    var ch = tmp$ret$0;
    var index = binarySearchRange(Digit_getInstance().e7_1, ch);
    var diff = ch - Digit_getInstance().e7_1[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  function Digit() {
    Digit_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    tmp$ret$0 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
    tmp.e7_1 = tmp$ret$0;
  }
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function ArithmeticException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$(message) {
    var tmp = ArithmeticException_init_$Init$(message, objectCreate(protoOf(ArithmeticException)));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(objectCreate(protoOf(NoWhenBranchMatchedException)));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  //region block: post-declaration
  protoOf(InternalHashCodeMap).u4 = createJsMap;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ArrayList_init_$Create$_0;
  _.$_$.b = ArrayList_init_$Create$;
  _.$_$.c = HashSet_init_$Create$;
  _.$_$.d = StringBuilder_init_$Create$;
  _.$_$.e = IllegalStateException_init_$Create$;
  _.$_$.f = _Char___init__impl__6a9atx;
  _.$_$.g = toString_0;
  _.$_$.h = Default_getInstance;
  _.$_$.i = Unit_getInstance;
  _.$_$.j = checkIndexOverflow;
  _.$_$.k = contains;
  _.$_$.l = copyToArray;
  _.$_$.m = joinToString_0;
  _.$_$.n = joinToString;
  _.$_$.o = listOf;
  _.$_$.p = mapOf;
  _.$_$.q = random;
  _.$_$.r = random_0;
  _.$_$.s = single;
  _.$_$.t = println;
  _.$_$.u = charSequenceGet;
  _.$_$.v = classMeta;
  _.$_$.w = equals_0;
  _.$_$.x = fillArrayVal;
  _.$_$.y = getLocalDelegateReference;
  _.$_$.z = getStringHashCode;
  _.$_$.a1 = hashCode;
  _.$_$.b1 = interfaceMeta;
  _.$_$.c1 = objectCreate;
  _.$_$.d1 = objectMeta;
  _.$_$.e1 = protoOf;
  _.$_$.f1 = setMetadataFor;
  _.$_$.g1 = downTo;
  _.$_$.h1 = until;
  _.$_$.i1 = KMutableProperty0;
  _.$_$.j1 = contains_0;
  _.$_$.k1 = toIntOrNull;
  _.$_$.l1 = toSet;
  _.$_$.m1 = Char;
  _.$_$.n1 = Enum;
  _.$_$.o1 = THROW_CCE;
  _.$_$.p1 = THROW_ISE;
  _.$_$.q1 = ensureNotNull;
  _.$_$.r1 = noWhenBranchMatchedException;
  _.$_$.s1 = to;
  _.$_$.t1 = VOID;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map
