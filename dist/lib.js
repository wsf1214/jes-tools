(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}));
})(this, (function (exports) { 'use strict';

  // src/index.js
  function sum(a, b) {
      return a + b;
  }
  function isNull(anything) {
      return anything === null || anything === undefined || anything === "";
  }

  exports.isNull = isNull;
  exports.sum = sum;

}));
