//is string palidrom function?

function isPolidrom(str) {
  //   if (str === str.split("").reverse().join('')) {
  //     console.log("yes, this word is polidrom");
  //   } else {
  //     console.log("no, this word is not polidrom");
  //   }
  // }

  str === str.split("").reverse().join("")
    ? console.log("yes, this word is polidrom")
    : console.log("no, this word is not polidrom");
}

// isPolidrom("salam"); // no, this word is not polidrom
// isPolidrom("refer"); // yes, this word is polidrom    [r, e ,f , e, r]

// function genreateOTP() {
//   let OTP = "";
//   for (let i = 0; i < 4; i++) {
//     OTP += Math.floor(Math.random() * 10);
//   }
//   return OTP;
// }

//generate otp function
function genreateOTP() {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  if (OTP[0] == "0") {
    OTP = Math.floor(Math.random() * (10000 - 1000) + 1000);
  }
  return +OTP;
}
// console.log(genreateOTP());

let str = "hello";

// console.log(str.split(''));



//Spread operator

let strArr = [...str];

// console.log(strArr);

function sumOfNumbers() {
  // console.log(arguments);

  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// console.log(sumOfNumbers(1, 8, 5, 9, 7, 15));

let numbersSum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log(sumOfNumbers(1, 8, 5, 9, 7, 15));

//REST operator

let users = ["Ceyhun", "Fazila", "Svetlana", "Gulara", "Ali"];

let [firstUser, secondUser,  ...qalanUserler] = users;

console.log(firstUser);
console.log(secondUser);
console.log(qalanUserler);
