(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../foo')) :
	typeof define === 'function' && define.amd ? define(['../foo'], factory) :
	(factory(global.foo));
}(this, (function (foo) { 'use strict';

	foo = foo && Object.prototype.hasOwnProperty.call(foo, 'default') ? foo['default'] : foo;

	assert.equal( foo, 42 );

})));
