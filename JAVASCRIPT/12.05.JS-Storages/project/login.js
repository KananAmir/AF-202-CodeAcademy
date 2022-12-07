let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let allUsersArray = JSON.parse(localStorage.getItem("usersData"));
  console.log(allUsersArray);

  allUsersArray.some(
    (q) => q.email === email.value && q.password === password.value
  )
    ? (window.location.href = "home.html")
    : alert("email or password wrong!!");

    email.value = '';
    password.value = '';
});
