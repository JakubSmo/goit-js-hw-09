const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

function startColorChanging() {
  startButton.disabled = true;

  stopButton.disabled = false;
//git main push
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChanging() {
  startButton.disabled = false;

  stopButton.disabled = true;

  clearInterval(intervalId);
}

startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);

