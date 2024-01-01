import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startBtn.disabled = true;
let intervalId = null;
let userSelectedDate = null;
const TIMER_DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < Date.now()) {
      izitoast.error({
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

const datePicker = flatpickr(dateInput, options);

startBtn.addEventListener('click', () => {
  counter.start();
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateTimer({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}

const counter = {
  start() {
    intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = userSelectedDate - currentDate;
      updateTimer(convertMs(deltaTime));
      startBtn.disabled = true;
      dateInput.disabled = true;

      if (deltaTime <= 1000) {
        this.stop();
      }
    }, TIMER_DELAY);
  },

  stop() {
    startBtn.disabled = true;
    dateInput.disabled = false;
    clearInterval(intervalId);
    return;
  },
};
