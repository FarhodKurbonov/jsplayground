 // 1) task =======Вычислить сумму чисел до данного======

 function sumTo(n) {
    if(n == 1) {
        return n;
    }else{
        return n + sumTo(n - 1)
    }
 };
 console.log( sumTo(100) );

 // 2) task =========Вычислить факториал=============

 function factorial(num) {
  
    for(var result = 1; num > 1; num--) {
      result *= num;
    }
    console.log(result);
  };
  factorial(4);

  function factorialWithRec(num) {
    if(num == 1) {
      return num;
    }else{
      return num * factorialWithRec(num - 1)
    }
  };
  console.log( factorialWithRec(7) );
  

 // 3) task ==========Числа Фибоначчи============

 function fibonacci(n) {
    let result = [0, 1];
    for(let i = 2; i <= n; i++) {
      let num1 = result[i - 1]
      let num2 = result[i - 2]
      result.push(num1 + num2)
    }
    return result[n];
  };
  console.log( fibonacci(9) );
//==
  function fibRecursion(n) {
    if(n < 2) {
      return n;
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2)
  }
  console.log( fibRecursion(10) );
//==
  function fib(n){
    let a = 0, b = 1;
        for(let i = 0; i < n; i++) {
          a = (b + (b = a));
        }
    return a
}
console.log(fib(5))

 // 4) task =========Bывод односвязного списка===========

 // 5) task =========Вывод односвязного списка в обратном порядке=============

 





