//  Планирование: setTimeout и setInterval
// 1) Task. ==Вывод каждую секунду==


let timer = setTimeout( function printNumber(from, to) {
    console.log( from, to);
    timer = setTimeout(printNumber, 1000, 10, 20)
  }, 1000, 10, 20)
  
// Второе решение


function printNumbers(from, to) {
    let current = from;
    let timer = setInterval(function() {
      console.log( current++ );
      if(current >= to) {
        clearInterval(timer);
      }
    }, 1000)
    
  };
  
  printNumbers(0, 10);
  
  // 2) Task. Что покажет setTimeout?

  let i = 0;

setTimeout(() => alert(i), 100); // 100000000;

for(let j = 0; j < 100000000; j++) {
  i++;
}