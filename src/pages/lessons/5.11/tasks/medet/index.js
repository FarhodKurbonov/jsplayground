let date = new Date(2012, 1, 20, 3, 12)
//console.log(date) sdfsdfsdfg

//getDateAgo(date, days)
//1)  23.08.2023 - 3 = (23-3)= 20 = 20.08.2023
//2)  27.02.2000 - 20 = 07.02.2000
//3)  02.02.2000 - 20 = 13.01.2000

///  date        days
// new Date() => setDate, getDate
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days)
  return date.getDate()
}

// console.log(getDateAgo(new Date(2023, 7, 23), 3))
// console.log(getDateAgo(new Date(2000, 1, 27), 20))
// console.log(getDateAgo(new Date(2000, 1, 2), 20))

//Последнее число месяца?
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// 2005, 1 => 28
// 2023, 1 => ???

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// === Решение ====
function getLastDayOfMonth(year, month) {
  let date = new Date(2023, 0 + 1, 0)
  return date.getDate()
}

//console.log(getLastDayOfMonth(2012, 0))

// Reviver

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

let getDayOfConference = JSON.parse(str, function (key, value) {
  return value
})

console.log(getDayOfConference)
