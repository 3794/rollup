(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('a'), require('b')) :
  typeof define === 'function' && define.amd ? define(['exports', 'a', 'b'], factory) :
  (factory((global.myBundle = {}),global.a,global.Test));
}(this, (function (exports,a,Test) { 'use strict';

  Test = Test && Object.prototype.hasOwnProperty.call(Test, 'default') ? Test['default'] : Test;

  const Test$1 = () => {
    console.log(a.Test);
  };

  const Test1 = () => {
    console.log(Test);
  };

  exports.Test = Test$1;
  exports.Test1 = Test1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
