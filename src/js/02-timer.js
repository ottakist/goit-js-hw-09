import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { set } from "lodash";
const dateInput = document.querySelector("input#datetime-picker")
const startButton= document.querySelector("button[data-start]")
const daysLabel = document.querySelector("span[data-days]");
const hoursLabel = document.querySelector("span[data-hours]");
const minutesLabel = document.querySelector("span[data-minutes]");
const secondsLabel = document.querySelector("span[data-seconds]");
let userDate = new Date();
let thisDate = new Date();
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0].getMinutes())
        if(selectedDates[0].getTime()<thisDate.getTime()){
            window.alert("Please choose a date in the future")
            startButton.disabled=true;
        }
        else{
        userDate=selectedDates[0]
        startButton.disabled=false;
        }
        
    }
  };
  flatpickr(dateInput, options)
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  function timer(){
      const thisDate = new Date();
    //   userDate.setMinutes(-1)
    //   userDate.getDay(-1)
    const countDown = convertMs(userDate.getTime()-thisDate.getTime())
    daysLabel.textContent = countDown.days
    hoursLabel.textContent = countDown.hours
    minutesLabel.textContent = countDown.minutes
    secondsLabel.textContent = countDown.seconds
  }
  const Start = ()=>{
      setInterval(timer,10)
    }

  startButton.addEventListener("click", Start);