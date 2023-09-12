//  Планирование: setTimeout и setInterval
// 1) Task. ==Вывод каждую секунду==


let timer = setTimeout( function printNumber(from, to) {
    console.log( from, to);
    timer = setTimeout(printNumber, 1000, 10, 20)
  }, 1000, 10, 20)
  
// Второе решение with setInterval()

function printNumbers(from, to) {
    let start = from;
    let timer = setInterval(function() {
      console.log( ++start );
      if(start >= to) clearInterval(timer)
    }, 1000)
  };
  printNumbers(0, 10);
  
  // Решение with setTimeout

  
function showNumbers(from, to) {
  let start = from;
  setTimeout( function() {
    console.log( ++start ); 1000, 0, 10
  }, showNumbers, 1000, 0, 10)
};

showNumbers(0, 10);

  
  // 2) Task. Что покажет setTimeout?

  let i = 0;

setTimeout(() => alert(i), 100); // 100000000;

for(let j = 0; j < 100000000; j++) {
  i++;
}