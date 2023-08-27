// ========================1 task====================
// for loop
function sumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumLoop(100) );

//recursion
function sumRecursion(n) {
  if (n == 1) return 1;
  return n + sumRecursion(n - 1);
}

console.log( sumRecursion(100) );


//sumTo(n) = n*(n+1)/2:
function sumFormula(n) {
  return n * (n + 1) / 2;
}

console.log( sumFormula(100) );

//  ====== 2 Foctarial ======

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); 

//  ======  3 Fibonacci numbers =====
function fibonacci(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  console.log( fibonacci(3) ); 
  console.log( fibonacci(7) ); 

//   ====== 4 Outputting a singly linked list  ========
 function outputting (){

 }
console.log(outputting());
