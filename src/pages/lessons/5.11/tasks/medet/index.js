
let date = new Date(2012, 1, 20, 3, 12, );
console.log(date);

// 1) task ==== Create date================

let date1 = new Date(2012, 1, 20, 3, 12, );
console.log(date1);

// 2) task =========Покажите день недели======


function getWeekDay() {
 let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let date = new Date().getDay();
  return date; 
};
console.log( getWeekDay() );

// 3) task ========День недели в европейской нумерации==========

let date2 = new Date();
function getLocalDay(date) {
 let day = date.getDay();
 if(day == 0) {
    day = 7
 } 
 return day;
};
console.log(getLocalDay(date2));

// 4) task =============Какой день месяца был много дней назад?======

let date3 = new Date(2023, 7, 23)

function getDaysAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date;
};
console.log( getDaysAgo(date3, 2) ); 

// 5) task ============Последнее число месяца=====================

function lastDayOfMonth(year, month) {
    let date = new Date(year, month +1, 0 );
    return date.getDate(); 
  };
  console.log( lastDayOfMonth(2023, 7) );

// 6) task ================Сколько сегодня прошло секунд? ==============

let today = new Date() - new Date(2023, 7, 23, 0, 0, 0);
console.log(today / 1000); // это первый вариант без функции, чтоб разобраться


function secondsOfDay() {
    let today = new Date();
  
    let now = new Date(2023, 7, 23);
  
    let minus = today - now;
  
    return minus / 1000;
  };
  console.log( secondsOfDay() )

// 7) task ========Сколько секунд осталось до завтра?=========================

function secondsOfDay2() {
    let now = new Date();
  
    let tmorrow = new Date(2023, 7, 24, 0, 0, 0);
  
    let minus = now - tmorrow;
  
    return minus / 1000;
  };
  console.log( secondsOfDay2() ); // решение почти такое же как в предыдущем задании


  // 8) task ===============Форматирование относительной даты=================



  function formatDate(date) {
let now = Date.now();

let seconds =  (now - date) / 1000;
if (seconds === 0) {
  console.log('прямо сейчас');
}else if(seconds < 60)  {
  console.log(`${seconds} секунд назад`);
  }else if(seconds < 3600) {
    console.log( `${seconds / 60} минут назад`);
  }

let d = [date.getFullYear(), date.getMonth(), date.getDate()];
let t = [date.getHours(), date.getMinutes()];
let str = d.join('.') + ' ' + t.join(':');
return str.replace();
};

console.log( formatDate(new Date(new Date - 4000))); 

// -========= Recursion============-
//Вычислить сумму чисел до данного==

function sumTo(n) {
  let result = 0;
  for(let i = 1; i < n; i++) {
    result = i
  };
  return result + n
};
console.log( sumTo(9) );

// Fibonacci===-

function fibonacci(n) {
  let result = [0, 1];
  for(let i = 2; i <= n; i++) {
    const num1 = result[i - 1]
    const num2 = result[i - 2]
    result.push(num1 + num2)
  }
  return result[n];
};
console.log( fibonacci(15) )
