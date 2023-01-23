import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector("button[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

startBtn.addEventListener("click", tick);
startBtn.disabled = true;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          startBtn.disabled = true;
          return;
        }
      startBtn.disabled = false;
  }
}

flatpickr(inputEl, options);


function tick() {
  const timerId = setInterval(() => {
     
    let deltaTime = new Date(inputEl.value) - new Date;

    startBtn.disabled = true;

    if (deltaTime <= 1000) {
    clearInterval(timerId)
     startBtn.disabled = false;
  }
      
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
      
    daysEl.textContent = days;
      
    hoursEl.textContent = hours;
      
    minutesEl.textContent = minutes;
      
    secondsEl.textContent = seconds;

  }, 1000);
  
}
  



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

