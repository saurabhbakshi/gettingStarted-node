console.log("I am 02_custom_sub_module. I am being loaded by 02_custom_module");

const user_msg = "Nodejs is fun!!!";

const getUserMessage = function () {
  console.log("The user message is " + user_msg);
};
module.exports = getUserMessage;

// module.exports = {
//   user_msg,
// };
