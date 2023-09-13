console.log('Lesson 6.7');

// new Function()
                    //==== Arguments ======   Body =========
// let sum = new Function('a', 'b', 'c', 'd',   'return a + b + c + d');
// console.log( sum(1, 2, 3, 4) );


// // Send request to server
// let resultStrFromServer = "some code from server";
// let func = new Function( resultStrFromServer);


// //Global scope Lexical Environment
// let args = [1, 2, 3, 4, 5];
// function foo( ) {
    
//     console.log(args);
// }

function bar () {
    let newFunc = new Function('let accumulator = 10; console.log(accumulator+10," from new function")');
    return newFunc
}

bar()()







