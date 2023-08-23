
const startDate = new Date('1970-01-01');
const endDate = new Date('2000-01-01');

const timeDifference = endDate - startDate;

const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

console.log(daysDifference);


//1Покажите день недели

let date = new Date();

function getWeekDay(date) {
    let daysOfTheWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return daysOfTheWeek[date.getDay()];
}


getWeekDay(date)
console.log(getWeekDay(date));

//2 День недели в европейской нумерации
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

getLocalDay(date)
console.log(getLocalDay(date));

// 3 Какой день месяца был много дней назад?
const dateAgo = new Date(2014, 0, 2)

function getDateAgo(dateAgo, days) {
    date.setDate(dateAgo.getDay() - days)
    return dateAgo.getDate()
}

getDateAgo(dateAgo, 1)
console.log(getDateAgo(dateAgo, 1));


// 4 Последнее число месяца?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2013, 1));

// 5 Сколько сегодня прошло секунд?

function getSecondsToday() {
    let now = new Date();

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let secondPresent = now - today;

    let difrent = secondPresent / 1000
    return Math.round(difrent);
}

console.log(getSecondsToday());

// 6 Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let now = new Date()

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let secondTomorrow = tomorrow - now

    let difrent = secondTomorrow / 1000

    return difrent

}
console.log(getSecondsToTomorrow());