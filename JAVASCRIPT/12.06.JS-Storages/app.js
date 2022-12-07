//LOCALSTORAGE

// let userName = prompt("Enter your name!", "Ali");

// localStorage.setItem("user", userName);

// let localUserName = localStorage.getItem("user");

// console.log(localUserName);

// let students = ["ilqar", "sunay", "sahar", "fezile", "aladdin"];

// localStorage.setItem("studentsArray", students);

// console.log(localStorage.getItem("studentsArray"));

// let user = {
//   userName: "test",
//   password: "test",
//   age: 33,
// };

localStorage.setItem("number", 5);
localStorage.setItem("boolean", true);

localStorage.removeItem("boolean");
localStorage.removeItem("number");

console.log(localStorage.getItem("number"));
console.log(localStorage.getItem("boolean"));

let students = ["ilqar", "sunay", "sahar", "fezile", "aladdin"];

localStorage.setItem("studentsArray", JSON.stringify(students));

console.log(localStorage.getItem("studentsArray"));
console.log(JSON.parse(localStorage.getItem("studentsArray")));

let user = {
  userName: "test",
  password: "test",
  age: 33,
};

localStorage.setItem("userObj", JSON.stringify(user));

console.log(localStorage.getItem("userObj"));
console.log(JSON.parse(localStorage.getItem("userObj")));

//SESSIONSTORAGE

// sessionStorage.setItem('testString', "Lorem Ipsum")

let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

// add.onclick = function () {
//   console.log("asdasd");
// };

add.addEventListener("click", function () {
  sessionStorage.setItem("userObj", JSON.stringify(user));
});

remove.addEventListener("click", function () {
  localStorage.removeItem("userObj");
});

//cookies

document.cookie = "name=gulara; expires=Tue, 06 Dec 2022 15:15:50 GMT";
