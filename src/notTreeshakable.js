// Disabling the 'import/no-commonjs' rule for the following line of code, which uses CommonJS syntax
// To see the linter error that would be generated without this rule, remove the above line.
// eslint-disable-next-line import/no-commonjs
const { add } = require("./operations"); //CommonJS

const a = 14;
const b = 2;

console.log(`sum of ${a} and ${b} is ${add(a, b)}`);

// @mamadoudicko
