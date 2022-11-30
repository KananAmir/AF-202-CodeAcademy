let quizResults = [75, 95, 80, 70, 60, 95, 100, 90, 45];
let students = ["Ceyhun", "Aladdin", "Shahriyar", "Gunel"];

// //find
// console.log(students.find((student) => student == "Aladdin"));
// console.log(students.find((student) => student.startsWith("G")));
// console.log(students.find((student) => student.endsWith("n")));

// //findIndex
// console.log(students.findIndex((student) => student.startsWith("G")));
// console.log(students.findIndex((student) => student == "Aladdin"));

// //filter
// console.log(quizResults.filter((q) => q > 70));
// console.log(students.filter((result) => result.endsWith("n")));

// //some
// console.log(quizResults.some((quiz) => quiz < 50)); //true
// console.log(quizResults.some((quiz) => quiz < 40)); //false
// console.log(students.some((student) => student.length > 7)); //true
// console.log(students.some((student) => student.length < 5)); //false

// //every

// console.log(quizResults.every((quiz) => quiz > 40)); //true
// console.log(quizResults.every((quiz) => quiz < 90)); //false
// console.log(students.every((student) => student.length > 7)); //false
// console.log(students.every((student) => student.length > 4 )); //true

//forEach

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

let newArr = [];
students.forEach((s) => {
  newArr.push(s);
});

// console.log(newArr);

//map

// let newStudents = students.map((student) => student.length);
let newStudents = students.map((student) => student.toLocaleUpperCase());

console.log(students);
console.log(newStudents);
