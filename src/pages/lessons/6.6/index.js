// ===== Usage of var in JS ======================= 
//Define Variables
// let counter;
// const maker;


//Lexical Environment
// function sayHi() {
//     var name = "Pete";
//     console.info("Hi, " + name);

// }

//{"name": "John", "sayHi": function}, for (var i = 0; i < 10; i++) {console.log(i)}, if (true) {console.log("Hello")}

{
    let name = "John";
    var age = 25;
}

if(true) {
    var test = "test"
    let test2 = "test2"
}

 
// console.log("var", test2); 

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log("i = ", i)

// function sayHi() {
//     phrase = "Привет";
  
//     console.log(phrase);
  
//     var phrase;
//   }
//   sayHi();

// IIFE

//   (function () {

//     var message = "Hello";
  
//     console.log(message); // Hello
  
//   })();
 
 
//   var message = "hi"

//   {
//     var message = "Hello";
//     console.log(message)
//   }

//   var one = 2
//   var one = 1




// ========= Global Object =========

// console.log("global object", this)
// alert("global object", this)
// window.console.log("global object", this)

window.Foo = 1; 
