let asyncAdd = (a, b) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") resolve(a + b);
      else rej("Arguments must be numbers");
    }, 1500);
  });
};

asyncAdd(5, 6)
  .then((result) => {
    console.log(`Result: ${result}`);
    return asyncAdd(result, 7);
  })
  .then((result) => console.log(`Result is: ${result}`))
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

// asyncAdd(5, '6')
//   .then(
//     (result) => {
//       console.log(`Result: ${result}`);
//       return asyncAdd(result, '7');
//     },
//     (errorMessage) => {
//       console.log(errorMessage);
//     }
//   )
//   .then(
//     (result) => console.log(`Result is: ${result}`),
//     (errorMessage) => console.log(errorMessage)
//   );

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve("Hey it worked!");
//     reject("Unable to fulfill promise");
//   }, 2500);
// });
// somePromise.then(
//   (message) => {
//     console.log("Success: ", message);
//   },
//   (errorMessage) => {
//     console.log("Error: ", errorMessage);
//   }
// );
