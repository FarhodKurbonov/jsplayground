//============= toJson============

let user = {
  name: 'Medet',
  surname: 'Berikaby',
  age: 29,
  adress: {
    city: 'Almaty',
    street: 'Titiova',
    homeNumber: 35,
  },
  email: 'medet@gmail.com'
};
let json = JSON.stringify(user);
console.log(json)

console.log(JSON.parse(json));



