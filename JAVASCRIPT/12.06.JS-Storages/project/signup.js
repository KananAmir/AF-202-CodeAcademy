let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

// console.log(allInputs);

// console.log(localStorage);

// let allUsersData =
//   JSON.parse(localStorage.getItem("usersData")) == null
//     ? []
//     : JSON.parse(localStorage.getItem("usersData"));

// let allUsersData = JSON.parse(localStorage.getItem("usersData")) || [];

let allUsersData = JSON.parse(localStorage.getItem("usersData")) ?? []; 

// console.log(allUsersData);
form.addEventListener("submit", function (event) {
  event.preventDefault();

  allInputs.forEach((q) => {
    q.value === "" && alert("Please, fill all fields!!");
  });
  //   allUsersData = [];

  let userObj = {
    email: "",
    password: "",
    username: "",
    telephone: "",
  };

  userObj.email = allInputs[0].value;
  userObj.password = allInputs[1].value;
  userObj.username = allInputs[2].value;
  userObj.telephone = allInputs[3].value;

  //   let arr = JSON.parse(localStorage.getItem("usersData"));

  console.log(allInputs[0].value);
  console.log(allInputs[2].value);

  allUsersData.some((q) => q.email === allInputs[0].value) ||
  allUsersData.some((q) => q.username === allInputs[2])
    ? null
    : allUsersData.push(userObj);

  localStorage.setItem("usersData", JSON.stringify(allUsersData));

  allInputs.forEach((input) => (input.value = ""));
});
