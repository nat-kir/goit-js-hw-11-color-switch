const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];



const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

startBtnRef.disabled = false;
let intervalId = null;

startBtnRef.addEventListener("click", startColorSwitch);
stopBtnRef.addEventListener("click", stopColorSwitch);

function startColorSwitch() {
  intervalId = setInterval(() => {
       bodyRef.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    startBtnRef.disabled = true;

  }, 1000);
}

function stopColorSwitch() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
  bodyRef.style.backgroundColor = "#FFFFFF";
}
