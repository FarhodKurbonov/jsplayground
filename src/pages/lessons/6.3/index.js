let liver = 'liver'
function outerFunction() {
  //Lexial Evn of outFunction
  // hear, innferFunction
  let heart = 'Egg'

  function innerFunction() {
    //Lexial Env
    //innerFunction has reference to outerFunction __proto__
    console.log(heart)
    function innerFucntion2() {
      console.log(liver)
    }

    return innerFucntion2
  }

  return innerFunction
}

let myNewFunction = outerFunction()

let liverFunc = myNewFunction()

liverFunc()
