// console.log(arguments);
// console.log(require("module").wrapper);

// [ '(function (exports, require, module, __filename, __dirname) { ',
//   '\n});' ]

// the name is dosnt matter
// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply, devide } = require("./test-module-2");
// console.log(calc2.multiply(2, 5));
console.log(multiply(2, 5));

// cashing
// its log to the console only ont time the string : Hello from the module
// becuse of cashing.
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
