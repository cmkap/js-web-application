(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      module.exports = (a, b) => a + b;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      module.exports = (a, b) => a * b;
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  console.log(multiply(add(2, 2), 4));
  console.log("Hello from the developer console!");
  var date = new Date();
  console.log(date);
  console.log("Testing2");
})();
