//function expression

// function sayHi() {
//   console.log("Hello World");
// }

// let sayHi = function () {
//   console.log("Hello World");
// };

// let testFunct = sayHi;

// sayHi();

// let age = 18;

// if (age > 18) {
//   function confirmationUser() {
//     console.log("hello dear user");
//   }
// } else {
//   function confirmationUser() {
//     console.log("18 olanda gelersen");
//   }
// }

// confirmationUser()

let age = 18;
let confirmationUser;

if (age > 18) {
  confirmationUser = function () {
    console.log("hello dear user");
  };
} else {
  confirmationUser = function () {
    console.log("18 olanda gelersen");
  };
}

confirmationUser();
