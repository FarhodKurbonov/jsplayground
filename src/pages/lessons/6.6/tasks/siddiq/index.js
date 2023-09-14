// setInterval

function printNumbersSetInterval(from, to) {

  let i = from;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > to) {
      clearInterval(interval);
    }
  }, 1000);
}

// setTimeout

function printNumbersSetTimeout(from, to) {
  debugger;

  let i = from;
  setTimeout(function print() {
    console.log(i);
    i++;
    if (i <= to) {
      setTimeout(print, 1000);
    }
  }, 1000);
}
printNumbersSetTimeout(3,5)
printNumbersSetInterval(4,2)

  let i = 0;

setTimeout(() => console.log(i), 100); 


for(let j = 0; j < 100000000; j++) {
  i++;
}