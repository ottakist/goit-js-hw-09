const button1 = document.querySelector('button[data-stop]')
const button = document.querySelector('button[data-start]')
const body= document.querySelector("body")
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const  setColor = event => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    // output.textContent = body.style.backgroundColor;
  };
  const changeColor = ()=>{
    timerId = setInterval(() => {setColor()}, 10);
    button.disabled=true;
    button1.disabled=false;
  }
  button1.addEventListener("click", () => {
    clearInterval(timerId);
    button1.disabled=true;
    button.disabled=false;
  });
  button.addEventListener("click", changeColor);
