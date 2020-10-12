"use strict";

var shortid = require('shortid');

console.log(shortid.generate());

var add = function add(a, b) {
  return a + b;
};

console.log(add(5, 10));