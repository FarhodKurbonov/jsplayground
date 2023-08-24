// let date = new Date(2012, 1, 20, 3, 12, );
// console.log(date);

// 1) task ==== Create date================

let date = new Date(2012, 1, 20, 3, 12)
console.log(date)

// 2) task =========Покажите день недели======

function getWeekDay() {
  let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let indexOfCurrentDay = new Date(2023, 7, 20).getDay() // 0

  console.log(indexOfCurrentDay)
  return week[indexOfCurrentDay]
}
console.log('----', getWeekDay())

// 3) task ========День недели в европейской нумерации==========

let date2 = new Date()
function getLocalDay(date) {
  let day = date.getDay()
  if (day == 0) {
    day = 7
  }
  return day
}
console.log(getLocalDay(date2))

// 4) task =============Какой день месяца был много дней назад?======

let date3 = new Date(2023, 7, 23)

function getDaysAgo(date, days) {
  date.setDate(date.getDate() - days)
  return date
}
console.log(getDaysAgo(date3, 2))

// 5) task ============Последнее число месяца=====================

function lastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}
console.log(lastDayOfMonth(2023, 7))

// 6) task ================Сколько сегодня прошло секунд? ==============

//let today = new Date() - new Date(2023, 7, 23, 0, 0, 0)
// console.log(today / 1000) // это первый вариант без функции, чтоб разобраться

function secondsOfDay() {
  let now = new Date()

  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  console.log('----now: ', now, '---- startOfDay', startOfDay)

  let diff = now - startOfDay

  return diff / (1000 * 60 * 60)
}
console.log(secondsOfDay())

// 7) task ========Сколько секунд осталось до завтра?=========================

function secondsOfTillTomorrow() {
  let now = new Date()

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  return Math.round((tomorrow - now) / (1000 * 3600))
}
console.log('Прошло часов осталось до завтра:', secondsOfTillTomorrow()) // решение почти такое же как в предыдущем задании

// 8) task ===============Форматирование относительной даты=================

function formatDate(date) {
  let now = Date.now()

  let seconds = (now - date) / 1000
  if (seconds === 0) {
    console.log('прямо сейчас')
  } else if (seconds < 60) {
    console.log(`${seconds} секунд назад`)
  } else if (seconds < 3600) {
    console.log(`${seconds / 60} минут назад`)
  }

  let d = [date.getFullYear(), date.getMonth(), date.getDate()]
  let t = [date.getHours(), date.getMinutes()]
  let str = d.join('.') + ' ' + t.join(':')
  return str.replace()
}

console.log(formatDate(new Date(new Date() - 4000)))
