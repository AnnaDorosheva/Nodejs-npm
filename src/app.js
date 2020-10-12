// const messageModule = require('./massage');
// import ecmaModules from './export_ecmascript.js';
// import {c, d} from './export-esm.js';
import * as both from './export-esm.js';

// const shortid = require('shortid');

// console.log(shortid.generate());

const add = (a, b) => a + b;

// console.log(messageModule);
console.log(ecmaModules());
console.log(c, d);
