//Arrow functions

// let sayHi = () => {
//   console.log("Salamlar");
// };
// sayHi();

// arrow function with one line and one parameter
let sayHi = (user) => console.log(`Salam ${user}`);
sayHi("Emil");

let sayHiWithParameter = (userName = "Emil") => {
  console.log(`Salam ${userName}`);
};

sayHiWithParameter("Firuze");
