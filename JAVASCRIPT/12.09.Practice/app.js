// let students = ["ali", "gulara", "emil", "izzat"];

// console.log(results.sort((a, b) => a - b));
// console.log(results.sort((a, b) => b - a));

// console.log(students.sort());

let users = [
  { firstName: "Susan", age: 14 },
  { firstName: "Bruno", age: 56 },
  { firstName: "Jacob", age: 15 },
  { firstName: "Daniel", age: 16 },
  { firstName: "Sam", age: 64 },
  { firstName: "Dave", age: 56 },
  { firstName: "Neils", age: 65 },
  { firstName: "Daniel", age: 50 },
];

let fitleredUsers = users.filter((element) => element.age >= 50);
console.log(fitleredUsers);

console.log(users.find((q) => q.age > 50));

// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => b.age - a.age));

// console.log(users);

// let results = [95, 90, 100, 75, 100, 75, 100, 60];

// let filteredResults = results.filter(element => element !== 100)

// console.log(filteredResults);

let user = {
  name: "Kanan",
  surname: "Amirov",
  city: "London",
};

// let userName = user.name;
// let userSurname = user.surname;
// let userCity = user.city;

let { surname, city } = user;
console.log(surname);
console.log(city);

let students = ["ali", "gulara", "emil", "izzat",'ilqar'];

let [first, second, ...qalanlar] = students;

console.log(qalanlar);
