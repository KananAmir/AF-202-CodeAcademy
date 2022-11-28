//VAR Keyword

// global və function scope

var a = 5;

function funct() {
  var b = 17;
  console.log(b);
}

funct();
console.log(a);
// console.log(b);

var str = "salam";

str = "hello";

var str = "hello";

console.log(str);

//LET Keyword
// block scope

// if (true) {
//     let testVariable = 17;
// }

let isDigit = true;

// let isDigit = false;

isDigit = false;

{
  let c = 3;
}

{
  let c = 15;
}

const character = "Y";

// character = "C"; // error

const numbersArray = [1, 45, 7, 8, 14];

console.log(numbersArray)
numbersArray.push(81);
console.log(numbersArray)

// numbersArray = [7, 8 , 9];  // error