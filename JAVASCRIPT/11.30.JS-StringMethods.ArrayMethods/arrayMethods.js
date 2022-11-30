let quizResults = [75, 95, 80, 70, 60, 95, 100, 90, 45];
let students = ["Ceyhun", "Aladdin", "Shahriyar", "Gunel"];
let students2 = ["a", "b", "c", "d"];
// console.log(quizResults.length);
// console.log(students);
// students.push("Emil");

// console.log(students);
// students.pop();
// console.log(students);

// students.unshift("Izzet", "Ali", "Gulare");

// console.log(students);

// students.shift();

// console.log(students);

// console.log(students.includes("Aladdin"));

// console.log(students.indexOf("Aladdin"));

// let newStudents = students.concat(students2);

let newStudents = [...students, ...students2];
console.log(newStudents);

let str = "hello";

console.log(str.split("").join(""));

// console.log(quizResults.join("-"));

// console.log(quizResults.slice(3));
// console.log(quizResults.slice(3, 5));

// console.log(students.reverse());

// console.log(students.at(students.length-1));

console.log(students.splice(1, 0, "Gulara"));

console.log(students);
