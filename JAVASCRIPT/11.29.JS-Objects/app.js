// object literal

// let Ali = {
//   firstName: "Ali",
//   lastName: "Mustafayev",
//   age: 19,
//   skills: ["HTML", "CSS", "JS"],
//   canSmile: function () {
//     console.log("i can smile");
//   },
// };

// console.log(person);

// console.log(person.age);
// console.log(person["age"]);

// // console.log((person["skills"])[0]);

// person["isMarried"] = false;

// person["eye color"] = "black";
// // person = "black";

// console.log(person["skills"]);

// let personData = ["firstName", "lastName", "age", "skills", "eye color"];

// for (let i = 0; i < personData.length; i++) {
//   console.log(person[personData[i]]);
// }

// console.log(person);
// delete person.age;
// console.log(person);

// let person1 = {
//   firstName: "Gulare",
//   lastName: "Mammadshahli",
//   age: 19,
// };

// let person2 = person1;

// person2.age = 21;

// person1.lastName = "Gular";

// console.log(person1);
// console.log(person2);

// let person1 = {
//   firstName: "Gulare",
//   lastName: "Mammadshahli",
//   age: 19,
// };

//copy array with spread operator

// let person2 = { ...person1 };

// person1.firstName = "G";
// person2.firstName = "Gular";

// console.log(person1);

// person2.firstName = "asdfgb";

// console.log(person1);

let person = {
  firstName: "Ali",
  lastName: "Mustafayev",
  age: 19,
  skills: ["HTML", "CSS", "JS"],
  canSmile: function () {
    console.log("i can smile");
  },
};

// let first = person.firstName;
// let last = person.lastName;

// console.log(first);
// console.log(last);


//object destructing

// const { firstName: firstName, lastName: lastName, skills: skills } = person;
const { firstName, lastName, skills} = person;
const { firstName: first, lastName: last, skills: mySkills } = person;

console.log(first);
console.log(last);
console.log(mySkills);
