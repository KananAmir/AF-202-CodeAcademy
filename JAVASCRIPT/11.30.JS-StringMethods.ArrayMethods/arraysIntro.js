let quizResults = [75, 95, 80, 70, 60, 95, 100, 90, 45];
let students = ["Ceyhun", "Aladdin", "Shahriyar", "Gunel"];

// console.log(students[0]);
// console.log(students[students.length - 1]);

// let studentsObj = {
//   a: "Ceyhun",
//   b: "Alladdin",
// };

// // let a = studentsObj.a;
// // let b = studentsObj.b;

// const { a, b } = studentsObj;

// console.log(a, b);
//array destruction
// let [first, , , second] = students;
let [first, second, ...qalanlar] = students;

console.log(first);
console.log(second);
console.log(qalanlar);

let a = 5;
let b = 8;
// let c;

// c = a;
// a = b;
// b = c;

[a,b] = [b,a]
console.log("a: ", a);
console.log("b: ", b);