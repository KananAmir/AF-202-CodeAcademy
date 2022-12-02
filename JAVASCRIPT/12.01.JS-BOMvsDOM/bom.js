// console.log(window);
// console.log(window.location.href);
// console.log(window.location.host);
// console.log(window.location.pathname);

// window.alert("Are u sure to exit?")
// var userName = window.prompt("Enter your name, pls", "Ilqar");

// console.log(userName);

// console.log(window.confirm("Are u sure to exit?"));

//timing
//setTimeOut
// let sayHi = () => {
//   console.log("Hello World");
// };

// setTimeout(sayHi, 2000);

// setTimeout(() => {
//   console.log("Hello World");
// }, 0);

// console.log("salam");

// setTimeout(() => {
//   console.log("Lorem Ipsum");
// }, 3000);

// let btn = document.querySelector("#click-me");

// let sayHi = () => {
//   console.log("Hello World");
// };

// let myTimeOut = setTimeout(sayHi, 3000);

// btn.addEventListener("click", function () {
//   clearTimeout(myTimeOut)
// });

//setInterval

// let count = 0;
let myInterval = setInterval(() => {
  console.log(count);
}, 1000);

// let btn = document.querySelector("#click-me");

// btn.addEventListener("click", function () {
//   clearInterval(myInterval)
// });

let start = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let result = document.querySelector("#result");

let count = 0;

let interval;

//first solution

start.addEventListener("click", function () {
  start.disabled = true;
  stopBtn.disabled = false;
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  start.disabled = false;
  stopBtn.disabled = true;
  clearInterval(interval);
});

//second solution

// start.addEventListener("click", function () {
//   start.setAttribute("disabled", "true");
//   stopBtn.removeAttribute("disabled");
//   interval = setInterval(() => {
//     count++;
//     result.innerText = count;
//   }, 1000);
// });

// stopBtn.addEventListener("click", function () {
//   stopBtn.setAttribute("disabled", "true");
//   start.removeAttribute("disabled");
//   clearInterval(interval);
// });
