// function Person(firstName, lastName, result) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.result = result);
// }

// let ceyhun = new Person("Ceyhun", "Abilov", 95);
// let aladdin = new Person("Alladin", "Alizada", 75);
// let emil = new Person("Emil", "Baxisov");

// console.log(ceyhun);
// console.log(aladdin);
// console.log(emil);

class Person {
  constructor(firstName, lastName, skills, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
    this.age = age;
  }
}

let gulara = new Person("Gulara", "Mammadshahli", "html, css", 21);

console.log(gulara);
