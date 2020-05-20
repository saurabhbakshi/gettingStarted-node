//importing the complete exported object and using dot notation to access members.
const basicArthemetic = require("./basic_operation");

console.log("Calculator implemented in modules");

// Explicit import by destructuring.
const { subtract } = require("./basic_operation");

console.log("Addition: 1 + 2 = ", basicArthemetic.add(1, 2));

console.log("Subtraction 22 - 15 = ", subtract(22, 15));

console.log("Multiply 4 * 25 = ", basicArthemetic.multiply(4, 25));

console.log(
  "Divide 57 / 18 = ",
  basicArthemetic.divide((dividend = 57), (divisor = 18))
);
