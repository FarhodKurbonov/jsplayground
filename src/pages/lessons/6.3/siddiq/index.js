//============== 1============
let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi();

//=============== 2============
function makeWorker() {
    let user = "Pete";

    return function () {
        console.log(user);
    };
}

let user = "John";

let work = makeWorker();

work();


//   ======= 3 =========
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());

//   ======== 4 ============
function Counter() {
    this.count = 0;

    this.up = function () {
        return ++this.count;
    };

    this.down = function () {
        return --this.count;
    };
}

let counterFunction = new Counter();
let counterFunction2 = new Counter();

console.log(counterFunction.up());
console.log(counterFunction.up());
console.log(counterFunction.down());
console.log(counterFunction2.up());
console.log(counterFunction2.up());
console.log(counterFunction2.down());
// ======== 5 =================
let phrase = "Hello";

if (true) {
    let user2 = "John";

    function sayIf() {
        console.log(`${phrase}, ${user2}`);
    }
    sayIf();
}
// =============== 6 ===================
// Ozgaruvchi korinmidi. Bu olik zona deyiladi 

let x = 1;

function func() {
    let x = 2;
  console.log(x); 

}

func();

// ============= 7 =============
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

//   ====== 8 ======
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  
  users.sort(byField('name')); 
  console.log(users);
  
  users.sort(byField('age')); 
  console.log(users);


//   ======= 9 =======
function sum(a) {

    return function(b) {
      return a + b; 
    };
  
  }
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1) ); // 4