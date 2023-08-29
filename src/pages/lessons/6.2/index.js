function sum(a, b) {
  return a + b
}

function sumAll(...args) {
  console.log(args)
  // args — имя массива
  let sum = 0

  for (let arg of args) sum += arg

  return sum
}

console.log(sumAll(1))
console.log(sumAll(1, 2, 3))

function showName(firstName, lastName, ...titles) {
  //let titles = ["Консул", "Император"]
  console.log(firstName + ' ' + lastName) // Юлий Цезарь

  // Оставшиеся параметры пойдут в массив
  // titles = ["Консул", "Император"]
  console.log(titles[0]) // Консул
  console.log(titles[1]) // Император
  console.log(titles.length) // 2
}

showName('Юлий', 'Цезарь', 'Консул', 'Император')

function sayHi(word1, word2) {}

sayHi('Hi')

let arr = [3, 5, 1]

Math.max(...arr)

let str = 'Hello World!!'

let strArr = []
for (let st of str) strArr.push(st)

console.log([...str])

console.log(strArr)
