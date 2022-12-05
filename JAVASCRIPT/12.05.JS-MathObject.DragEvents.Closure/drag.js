let cards = document.querySelectorAll(".card");
let boxes = document.querySelectorAll(".box");

cards.forEach((card) => {
  //   card.addEventListener("drag", function () {
  //     console.log("drag event worked");
  //   });

  card.addEventListener("dragstart", function () {
    // console.log("drag event worked");
    card.classList.add("bg-secondary", "text-white");
  });

  card.addEventListener("dragend", function () {
    // console.log("drag event worked");
    card.classList.remove("bg-secondary", "text-white");
  });
});

boxes.forEach((box) => {
  //   box.addEventListener("dragenter", function () {
  //     console.log("dragenter worked");
  //   });

  //   box.addEventListener("dragleave", function () {
  //     console.log("dragleave worked");
  //   });

  box.addEventListener("dragenter", function () {
    console.log("dragover worked");
    let dragedCard = document.querySelector(".bg-secondary");
    box.append(dragedCard);
  });
});
