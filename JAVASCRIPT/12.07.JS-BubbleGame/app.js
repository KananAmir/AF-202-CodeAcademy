let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let box = document.querySelector(".box");
let result = document.querySelector("#score");

let bubble;
let bubbleInterval;
let userScore = 0;
startBtn.addEventListener("click", function () {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  //   clearInterval(bubbleInterval);
  bubbleInterval = setInterval(function () {
    createBubble();
  }, 250);

  document.querySelectorAll(".bubble").forEach((element) => {
    element.disabled = false;
  });
});

stopBtn.addEventListener("click", function () {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(bubbleInterval);
  document.querySelectorAll(".bubble").forEach((element) => {
    element.disabled = true;
  });
});

reset.addEventListener("click", resetGame);

function resetGame() {
  startBtn.disabled = false;
  stopBtn.disabled = false;
  clearInterval(bubbleInterval);
  box.innerHTML = "";
  userScore = 0;
  result.innerText = userScore;
}

function createBubble() {
  let leftPos = Math.floor(Math.random() * (95 - 1) + 1);
  let topPos = Math.floor(Math.random() * (95 - 1) + 1);
  bubble = document.createElement("button");
  bubble.setAttribute("class", "bubble");
  bubble.style.width = "25px";
  bubble.style.height = "25px";
  bubble.style.borderRadius = "50%";
  bubble.style.backgroundColor = "teal";
  bubble.style.border = "1px solid black";
  bubble.style.cursor = "pointer";
  bubble.style.position = "absolute";
  bubble.style.left = `${leftPos}%`;
  bubble.style.top = `${topPos}%`;

  box.appendChild(bubble);

  if (document.querySelectorAll(".bubble").length == 20) {
    clearInterval(bubbleInterval);
    if (confirm(`Game Over!! Your score is ${userScore}`)) {
      resetGame();
    }
  }

  bubble.addEventListener("click", function () {
    let mySound = new Audio("./mixkit-long-pop-2358.wav");
    mySound.play();
    this.remove();
    userScore += 1;
    result.innerText = userScore;
    // bubble.style.display = "none";
  });
}
