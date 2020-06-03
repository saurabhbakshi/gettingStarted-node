// In this file we review the chalk npm module

// Lab we do will consist of below steps
// 1: Install chalk@2.4.1
// 2: Load the chalk into module
// 3: Print Success-in-green and Error-in-red
// 4: Test output by running npm run color-print
// 5: Print message "Hello World" in bold with green background and white text
// 6: Print message "I am underline" in italic with red and underline over underline

const chalk = require("chalk");

console.log(chalk.green("Success"));
console.log(chalk.red("Error"));

// The below reprsent chainable API of chalk
console.log(chalk.white.bgGreen.bold("Hello World"));

console.log(chalk.white("I am ") + chalk.underline.italic("underline") + " !");
