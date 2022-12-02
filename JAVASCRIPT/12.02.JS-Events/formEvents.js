let myInput = document.querySelector("#my-input");
let userForm = document.querySelector("#user-form");
let userName = document.querySelector("#user-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let focusInput = document.querySelector("#focus-input");
let box = document.querySelector(".box");

// myInput.addEventListener("keyup", function(e){
//     console.log(e.target.value);
// })

// myInput.addEventListener("keydown", function(e){
//     console.log(e.target.value);
// })

// myInput.addEventListener("keypress", function(e){
//     console.log(e.target.value);
// })

// myInput.addEventListener("input", function(e){
//     console.log(e.target.value);
// })

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let userObject = {
    name: "",
    userEmail: "",
    userPassword: "",
  };
  //   console.log("username: ", userName.value);
  //   console.log("email: ", email.value);
  //   console.log("password: ", password.value);
  userObject.name = userName.value;
  userObject.userEmail = email.value;
  userObject.userPassword = password.value;

  console.log(userObject);
});

//focus vs blur events

focusInput.addEventListener("focus", function () {
  // console.log("input focused");
  box.style.backgroundColor = "blue";
});

focusInput.addEventListener("blur", function () {
  // console.log("input blured");
  box.style.backgroundColor = "red";
});
