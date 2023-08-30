//========Учитывает ли функция последние изменения?========

let name1 = "John";

function sayHi() {
  alert("Hi, " + name1);
}

name1 = "Pete";

sayHi(); // Hi, Pete

//========Какие переменные доступны?=====

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Pete

//====Независимы ли счётчики?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() ); // 0
alert( counter1() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1 , потому что присвоены к разным переменным

//========Объект счётчика===

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); 1
alert( counter.up() ); 2
alert( counter.down() ); 1

//=======Функция внутри if===

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // выдаст ошибку потому что функция находится внутри блока if. 

//===Сумма с помощью замыканий

function sum(a) {
  return function(b)  {
    return function(c) {
      return a + b + c;
    }
  }
};
console.log( sum(3)(4)(-2) );

//=========Видна ли переменная?==

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func(); // Error...