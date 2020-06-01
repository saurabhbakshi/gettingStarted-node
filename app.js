const fs = require("fs");
const request = require("postman-request");
const URL = "http://worldtimeapi.org/api/timezone";

const india = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

request(india, (error, response, body) => {
  console.log(error);
  console.log(response);
  console.log(body);
  //   if (error === null && response.statusCode === 200) {
  //     const regions = JSON.stringify(body);
  //     fs.writeFileSync("./output/regions.json", regions);
  //   }
});
