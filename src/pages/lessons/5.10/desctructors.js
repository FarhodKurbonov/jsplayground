// let arr = ['Siddiq', 'Medet', 'Farkhod']

// let [siddiq, medet, farkhod] = arr

// console.log('originalArray', arr[0])

// console.log('---', siddiq, medet, farkhod)

// let arr = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']

// let [firtName, title] = arr

//destructe Set
// let mySet = new Set(['one', 'two', 'three'])

// let [one, two, three] = mySet

// console.log('----', one, two, three)

// let user = {}
// let userArr = (['Siddiq', 'Khasanov'][(user.name, user.surname)] = userArr)
// console.info('----', user)

// === Entries ====
// let user = {
//   name: 'John',
//   age: 30,
// }

// let keyValueOfObj = Object.entries(user)
// let [userName, age] = [
//   ['name', 'John'],
//   ['age', '30'],
// ]

// console.log('--- userName', userName)
// console.log('--- john', age)

// for (let [key, value] of keyValueOfObj) {
//   console.log('--- key ---', key)
//   console.log('--- value ----', value)
// }

// ==== Map ====
// let user = new Map()
// user.set('name', 'John')
// user.set('age', '30')

// // Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
// for (let [key, value] of user) {
//   console.log(`${key}:${value}`) // name:John, затем age:30
// }

// ===  REST Operator
// let caesar = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic']

// let [name, surname, ...rest] = caesar
// console.log(rest)

// === Default Value ===
// let [firstName = 'Vasya', surname = 'Pupkin'] = []
// console.log(firstName, surname)

// Object Destructure

let {
  title,
  extra: { interestenIn },
} = { title: 'Menu', extra: { interestenIn: 'Literature' } }

console.log(title, interestenIn)
