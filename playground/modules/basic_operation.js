// This module will just list down 4 basic arthemetic operations

const add = function (a, b) {
  return a + b;
};
// We are returning a difference and hence it is absolute
const subtract = function (a, b) {
  return Math.abs(a - b);
};

// we are just returning the quotient part excluding decimal preceision
const divide = function (dividend, divisor) {
  return Math.floor(dividend / divisor);
};

const multiply = function (a, b) {
  return a * b;
};

module.exports = {
  add,
  subtract,
  divide,
  multiply,
};
