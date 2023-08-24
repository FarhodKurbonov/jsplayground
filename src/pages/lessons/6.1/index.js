// n!
// 5! 5*4*3*2*1 = 120

// Let's break it down:
// 5! = 5*(5-1))!
// 4! = 4*(4-1))!
// 3! = 3*2!
// 2! = 2*1!
// 1! = 1

function factorial(n) {
  // Base Case
  if (n <= 1) {
    return 1
  }
  //Recursive case

  return n * factorial(n - 1)
}

//let factorialNumber = 3
//console.log(`Factorial of ${factorialNumber} is: `, factorial(factorialNumber))

// TASK

// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 +( 2 + 1 )= 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

//Resolve by Cycle
function sumTo(n) {
  let accumulatedValues = 0
  for (let i = 1; i <= n; i++) {
    accumulatedValues = accumulatedValues + i
  }
  return accumulatedValues
}

console.log('sumToByCycle', sumTo(100))

// By Formula
// Formul: n*(n+1)/2

function sumToByArithmenicProgression(n) {
  return (n * (n + 1)) / 2
}

console.log('sumToByArithmenicProgression:', sumToByArithmenicProgression(1000))

//By recursion

function sumToByRecursion(n) {
  //Base case
  if (n <= 1) {
    return 1
  } else {
    //Recursion case
    debugger
    return n + sumToByRecursion(n - 1)
  }
}

console.log('sumToByRecursion', sumToByRecursion(1000))
