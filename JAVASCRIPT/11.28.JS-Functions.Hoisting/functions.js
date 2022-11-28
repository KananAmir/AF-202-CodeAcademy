//Function declearation
function myFunction() {}

// parameters'siz function
function square() {
  let n = 5;
  let result = n * n;
  console.log(result);
}

square();

// function getFullName() {
//   let firstName = "Kanan";
//   let lastName = "Amirov";
// //   console.log(firstName, lastName);
//   console.log(`${firstName} ${lastName}`);
// }

// getFullName();

function getFullNameWithParameters(firstName, lastName) {
  // parameters: firstName and lastName
  console.log(`${firstName} ${lastName}`);
}

getFullNameWithParameters("Sunay", "Suleymanov"); // arguments: Sunay and Suleymanov

// function with default value
function getFullNameWithParametersAndDefaultValue(
  firstName = "Ceyhun",
  lastName = "Abilov"
) {
  // parameters: firstName and lastName
  console.log(`${firstName} ${lastName}`);
}

getFullNameWithParametersAndDefaultValue("Ceyhun", "Memmedov");

function sumOfArrayElements(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  //   console.log(sum)
  return sum;
}

sumOfArrayElements([2, 8, 9]);
// sumOfArrayElements([-2, -8, -9]);
// sumOfArrayElements([-20, 128, 89]);

console.log(sumOfArrayElements([2, 8, 9]));

// let num = 17;
// let sum = num + sumOfArrayElements([2, 8, 9]);

// console.log(sum);

function calculateAvarage(count) {
  return sumOfArrayElements([75, 80, 68]) / count;
}

console.log(calculateAvarage(3));


//function with unlimitied parameters

function unlimitedArgumetsFunction(){
    // console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);
}

unlimitedArgumetsFunction();