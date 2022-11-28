// let firstNumber = prompt("enter first number");
// let yourName = prompt("enter first number", "Kanan");
// let firstNumber = prompt("enter first number");
// let secondNumber = prompt("enter first number");

// let sumOfTwoNumbers = Number(firstNumber) + Number(secondNumber);
// console.log(sumOfTwoNumbers);

// document.getElementsByTagName("p")[0].innerText = yourName;
// console.log(yourName);
// document.write(yourName);
// confirm("Are u sure??");

let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let operation = document.getElementById("operation");
let calc = document.getElementById("calc");
let output = document.getElementById("output");

// function calculator() {
//   console.log("test");
//   let result;
//   switch (operation.value) {
//     case "sum":
//       result = Number(firstNumber.value) + Number(secondNumber.value);
//       break;

//     case "sub":
//       result = Number(firstNumber.value) - Number(secondNumber.value);
//       break;

//     case "multiply":
//       result = Number(firstNumber.value) * Number(secondNumber.value);
//       break;

//     case "divide":
//       result = Number(firstNumber.value) / Number(secondNumber.value);
//       break;

//     default:
//       alert("daxil etdiyiniz məlumat yanlışdır!!");
//       break;
//   }
//   output.innerText = result;
// }

// calc.addEventListener("click", calculator);

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculator() {
  switch (operation.value) {
    case "sum":
      output.innerText = sum(
        Number(firstNumber.value),
        Number(secondNumber.value)
      );
      break;

    case "sub":
      output.innerText = sub(
        Number(firstNumber.value),
        Number(secondNumber.value)
      );
      break;

    case "multiply":
      output.innerText = multiply(
        Number(firstNumber.value),
        Number(secondNumber.value)
      );
      break;

    case "divide":
      output.innerText = divide(
        Number(firstNumber.value),
        Number(secondNumber.value)
      );
      break;

    default:
      alert("daxil etdiyiniz məlumat yanlışdır!!");
      break;
  }
}

calc.addEventListener("click", calculator);
