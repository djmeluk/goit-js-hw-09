const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
const bodyEL = document.querySelector('body');


btnStart.addEventListener('click', startChengeColor);
btnStop.addEventListener("click", stopChengeColor)

let timerId = null;

function startChengeColor() {
  bodyEL.style.backgroundColor = getRandomHexColor();
   timerId = setTimeout(startChengeColor, 1000);
  if (startChengeColor) {
     btnStart.disabled = true;
  }
  return btnStop.disabled = false;
}


function stopChengeColor() {
  clearTimeout(timerId)
  if (startChengeColor) {
     btnStart.disabled = false;
  }
  return btnStop.disabled = true;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
