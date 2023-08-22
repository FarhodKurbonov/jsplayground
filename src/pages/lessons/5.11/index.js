const { Major_Mono_Display } = require('next/font/google')

let date = new Date(0)

//console.info(date)

// Get timestamp of January 1 2000

let Jan01_1970 = new Date(24 * 60 * 60 * 1000)

let daysBetween1970_2000 = 30 * 12 * 30 * 24 //Calculate exact date
let Jan01_2000 = new Date(daysBetween1970_2000 * 60 * 60 * 1000)

//Home Work: how many days were between  1970-2000
//console.info(Jan01_2000)

// ===== Passing string date as a param to Date() ====
let date1 = new Date('2017-01-26')
//console.info(date1)
//2023                -              1994  =
let yourAgeIs = new Date().getFullYear() - new Date('1994-06-26').getFullYear()
//console.info ("Your age is: ", (yourAgeIs) )

// Hi There: Siddiq. Today is a wonderfull day: [Saturday, Suday, Moday]

let day = new Date(2023, 7, 20)
function getLocalDay(date) {
  let day = date.getDay()

  let dayString
  switch (day) {
    case 1:
      dayString = 'Monday'
      break
    case 2:
      dayString = 'Tuesday'
      break
    case 3:
      dayString = 'Wednsday'
      break
    case 4:
      dayString = 'Thursday'
      break
    case 5:
      dayString = 'Friday'
      break
      case6: dayString = 'Saturday'
      break
    case 7:
      dayString = 'Sunday'
  }

  return dayString
}
console.log('--- today is: ', getLocalDay(day))
