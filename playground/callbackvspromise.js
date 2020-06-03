const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error!: Callback", undefined); //Error
    callback(undefined, [1, 2, 3, 4]); //Result
  }, 2000);
};

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]); // Success/Resolve
    // reject("This is my error!: Promise"); //Error/Rejection
  }, 2000);
});

doWorkCallback((error, response) => {
  if (error) {
    return console.log(error);
  }
  console.log("Callback Success: ", response);
});

doWorkPromise
  .then((result) => {
    console.log("Promise Success: ", result);
  })
  .catch((error) => {
    console.log(error);
  });
