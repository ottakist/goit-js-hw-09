const button = document.querySelector('button[type=submit]')
const delay = document.querySelector('input[name=delay]')
const step = document.querySelector('input[name=step]')
const amount = document.querySelector('input[name=amount]')
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  

 }

//  const makepromise =(i)=>{

  
     
//      setInterval(createPromise(i,delay.value),2000)
  
//      // parseInt(delay.value)= parseInt(delay.value)+parseInt(step.value)
     
// }
 

 const start =event=>{
  event.preventDefault()
  for(let i =0;i<amount.value;i++){
  setInterval(createPromise(i,delay.value),delay.value)
  }
 }
// const promiseA = createPromise(, 1000);
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


  button.addEventListener("click", start);