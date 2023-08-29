// ========================1 task====================
// for loop
function sumLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumLoop(100));

//recursion
function sumRecursion(n) {
  if (n == 1) return 1;
  return n + sumRecursion(n - 1);
}

console.log(sumRecursion(100));


//sumTo(n) = n*(n+1)/2:
function sumFormula(n) {
  return n * (n + 1) / 2;
}

console.log(sumFormula(100));

//  ====== 2 Foctarial ======

function factorial(n) {
  if (n !== 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5));

//  ======  3 Fibonacci numbers =====
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(3));
console.log(fibonacci(7));

//   ====== 4 Outputting a singly linked list  ========
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function outputting(list) {
  console.log(list.value);
  if (list.next) {
    outputting(list.next)
  }
}
outputting(list)

// ======= 5  Output a single-linked list in the reverse order ====

function outputtingReverse(list) {
  if (list.next) {
    outputtingReverse(list.next)
  }
  console.log(list.value);
}
outputtingReverse(list)