// import './siddiq/index'

// let liver = 'liver'
// function outerFunction() {
//   //Lexial Evn of outFunction
//   // hear, innferFunction
//   let heart = 'Egg'

//   function innerFunction() {
//     //Lexial Env
//     //innerFunction has reference to outerFunction __proto__
//     console.log(heart)
//     function innerFucntion2() {
//       console.log(liver)
//     }

//     return innerFucntion2
//   }

//   return innerFunction
// }

// let myNewFunction = outerFunction()

// let liverFunc = myNewFunction()

// liverFunc()

// let liver = 'liver'

// console.log(window.liver)


// let heart = 'heart'

// function outerFunction() {
//   console.log(heart)
//   heart = "liver"
// }
// //......

// function innerFunction() {
//   console.log("heart", heart)
// }

// outerFunction()
// innerFunction()

// ======= NFE ======== Named Function Expression

// function sayHi() {} // Function
// let sayHi2 = "Hi" // String
// let person = { name: "John" } // Object
// person.age = 34;
// let arr = [1, 2, 3] // Array

// function sayHi() {}

// let sayHi = function() {
//   alert("Hi");
// };

// let user = {

//   sayHi() {
//     // ...
//   },

//   sayBye: function   () {
//     // ...
//   }

// }



// console.log(user.sayBye.name)

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {
//    console.log(a)
// }

// console.log(f1.length); // 1
// console.log(f2.length); // 2
// console.log(many.length); // 2

// === NFE  Named Function Expression

// let sayHi = function func (who) {
//   if(who) {
//     console.log(`Hello, ${who}`)

//   } else {
//     func("Guest")
//   }
// }
// console.log(sayHi())
// func()

// let sayHi = function (who) {
//   if(who) {
//     console.log(`Hello, ${who}`)

//   } else {
//     sayHi("Guest")
//   }
// }

// console.log(sayHi())
// NFE
// let sayHi = function sayHiRef (who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHiRef("Guest"); // использует func, чтобы снова вызвать себя же
//   }
// };

// let welcome = sayHi;

// sayHi = null;

// welcome(); // Ошибка, вложенный вызов sayHi больше не работает!



// //Function Expression/Declaration
// function makeCounter(counter) {
//   //...
// }

// let makeCounter2 = function() {
//   //Body on function
// }

// //NFE
// let makeCounter3 = function counter() {
//   //Body on function
// }






//====== Value Types and Reference Types ==== 

//Value types are transferred by value
// let x = { value: 10 };
// debugger;
// let y = x; //y points to x 

// x = null
// console.log("y value", y)

// console.log("x value", x)



//Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.


// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   };

//   counter.set = (value) => {
//     count = value;
//   }
//   counter.decrease = () => count--;

//   return counter;
// }

// let myCounter = makeCounter()

// myCounter.set(10)

// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// function sum(argumentValue) {
//   let result = argumentValue;

//   function summer(value) {
//     result += value;
//     console.log(result)
//     return summer
//   }

//   return summer
// }
















