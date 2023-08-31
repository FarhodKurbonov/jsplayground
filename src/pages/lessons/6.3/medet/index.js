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

//==Фильтрация с помощью функции==

let arr = [5, 7, 4, 3, 8 ,2, 9, 1, 11];

function inArray(arr) {
  return function (item) {
    for (let number of arr) {
      if (number === item) {
        return item;
      }
    }
  }
};

console.log( arr.filter( inArray([5, 3, 10] ) ) );

//==Сортировать по полю==

let workers = [
  {name: 'John', surname: 'Depp', age: 29, salary: 300},
  {name: 'Pete', surname: 'Axelson', age: 34, salary: 280},
  {name: 'Ann', surname: 'Andrews', age: 23, salary: 350},
  {name: 'Peter', surname: 'Antonov', age: 20, salary: 320},
  {name: 'Newt', surname: 'MClaren', age: 25, salary: 270 },
];


function byField(arr) {
  return (a, b) => a(arr) > b(arr) ? 1 : -1;
};
console.log( byField(workers) );

//==Армия функций==


function makeArmy() { //Lexical Environment created==>
  let shooters = [];

  
  let i = 0;
  while (i < 10) { // Lexical Environment created==>
    let n = i

    
    let shooter = function() { //Lexical Environment created==>
      console.log( n ); 
    };
    //========end===========
    shooters.push(shooter); 
    i++;
  }
  //======end======

  
  return shooters;
};
//===end===

let army = makeArmy();
army[9]();
army[5]();
army[3]();


//Второе решение==========

function makeArmy() {
  let shooters = [];
  
  let i = 0;
  while (i < 10) {
  let shooter = function() {
  return i;
  };
  shooters.push(shooter());
  i++;
  }
  return shooters;
  }
  
  let arm = makeArmy();
  console.log(arm);

  //===Use cycle for===

  function makeArmy() {
    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        console.log( i ); 
      };
      shooters.push(shooter);
    
    };
    return shooters;
  }
  
  let army2 = makeArmy();
  army2[7]();
  army2[3]();

