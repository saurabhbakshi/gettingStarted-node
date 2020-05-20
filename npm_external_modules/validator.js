const validator = require("validator");
// import validator from "validator"; not supported currently in node as this is ES6 syntax

console.log(
  "--------------------Checking validation for emails---------------------"
);

console.log(
  "Is jpr.saurabh@gmail.com valid email: ",
  validator.isEmail("jpr.saurabh@gmail.com")
);
console.log("Is jpr.saurabh valid email: ", validator.isEmail("jpr.saurabh"));
console.log(
  "Is jpr.saurabh.com valid email: ",
  validator.isEmail("jpr.saurabh.com")
);
console.log(
  "Is jpr.saurabh@gmail valid email: ",
  validator.isEmail("jpr.saurabh@gmail")
);

console.log(
  "--------------------Checking validation for url---------------------"
);

console.log(
  "Is www.linkedin.com is valid URL: ",
  validator.isURL("www.linkedin.com")
);
console.log(
  "Is https://linkedin is valid URL: ",
  validator.isURL("https://linkedin")
);
console.log(
  "Is www.google.co.in is valid URL: ",
  validator.isURL("www.google.co.in")
);
console.log(
  "Is 123greetings.com is valid URL: ",
  validator.isURL("123greetings.com")
);
