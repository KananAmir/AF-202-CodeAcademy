// let heading = document.getElementById("heading");
let heading = document.querySelector("#heading");
let allParags = document.querySelectorAll("p");
let allParagraphs = document.querySelectorAll(".paragraph");
let click = document.querySelector("#click");
let remove = document.querySelector("#remove");
let container = document.querySelector(".container");
// let allParagsWithTags = document.getElementsByTagName("p");
// heading.style.fontSize = "10px"

// console.log(allParags);
// console.log(allParagsWithTags);
// console.log(allParagraphs);

allParags.forEach((element) => console.log(element));

console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

click.addEventListener("click", function () {
  heading.style.color = "red";
  heading.style.textTransform = "uppercase";

  //   let divElement = document.createElement('div');
  let pElement = document.createElement("p");
  //   pElement.innerText = `<span>salam</span> dunya!`;
  pElement.innerHTML = `<span>salam</span> dunya!`;
  pElement.style.color = "teal";
  pElement.style.fontSize = "24px";
  pElement.className = "test";
  pElement.setAttribute("id", "created-element");
  container.append(pElement);
});

remove.addEventListener("click", function () {
  document.querySelectorAll(".test")[0].remove();
});

allParags.forEach((el) => {
  el.addEventListener("click", function () {
    // console.log(this);
    this.remove();
  });
});

//////////////////////

let heading2 = document.querySelector(".heading2");
let change = document.querySelector(".change");
let box = document.querySelector(".box");

heading2.classList.add("head-style");

change.addEventListener("click", function () {
  //   box.classList.add("new-box");
  //   heading2.classList.remove("head-style")

  box.classList.contains("new-box")
    ? box.classList.remove("new-box")
    : box.classList.add("new-box");

  //   if (box.classList.contains("new-box")) {
  //     box.classList.remove("new-box");
  //   } else {
  //     box.classList.add("new-box");
  //   }

  //   box.classList.toggle("new-box");
});

let inputElement = document.querySelector("#my-input");

setTimeout(() => {
  console.log(inputElement.value);
}, 2000);
