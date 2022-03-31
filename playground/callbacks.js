let getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Vikram",
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject) => {
  console.log(userObject);
  //The callback function has an argument, which is userObject.
});

// let getUser = (id, callback) => {
//     let user = {
//       id: id,
//       name: "Vikram",
//     };
//     callback(user)
//   };
//   let funcit = (userObj) => {
//       console.log(userObj);
//   }

//   getUser(31, funcit)
