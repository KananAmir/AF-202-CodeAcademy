// function outer(x) {
//   function inner(y) {
//     return x + y;
//   }

//   return inner(7);
// }

// console.log(outter(5));

// function outer(x) {
//   function inner(y) {
//     return x + y;
//   }

//   return inner;
// }

// console.log(outer(5)(7));

// function outer(x) {
//   function middle(y) {
//     function inner(z) {
//       return x * y * z;
//     }
//     return inner(3);
//   }
//   return middle(4);
// }

// console.log(outer(5))
// ;
// function outer(x) {
//   function middle(y) {
//     function inner(z) {
//       return x * y * z;
//     }
//     return inner;
//   }
//   return middle;
// }

// console.log(outer(5)(4)(3));

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const a = outerFunction();

console.log(a());
console.log(a());
console.log(a());
console.log(a());
