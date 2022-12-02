let btn = document.querySelector("#click");
let box = document.querySelector(".box");

//mouse events
// btn.addEventListener("click", function (event) {
//   // alert("clicked")
//   console.log(event);
// });

// box.addEventListener("mouseover", function (event) {
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseout", function (event) {
//   box.style.backgroundColor = "blue";
// });

// box.addEventListener("mouseout", function (event) {
//   box.style.backgroundColor = "blue";
// });

// box.addEventListener("mousedown", function (event) {
//   box.style.backgroundColor = "red";
// });
// box.addEventListener("mouseup", function (event) {
//   box.style.backgroundColor = "blue";
// });

//keyboard events

// let count = 0;
// window.addEventListener("keydown", function () {
//   console.log(count++);
// });

// window.addEventListener("keyup", function () {
//   console.log(count++);
// });

let alpha = 0;
window.addEventListener("keypress", function (e) {
//   console.log(e);
  if (alpha < 1) {
    if (e.keyCode === 32) {
      alpha += 0.1;
      console.log("space: ", alpha);
    }
  }
  if (alpha > 0) {
    if (e.keyCode === 97) {
      console.log("A: ", alpha);
      alpha -= 0.1;
    }
  }
  document.body.style.backgroundColor = `rgba(0,0,0,${alpha})`;
});
