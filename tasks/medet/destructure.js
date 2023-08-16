
//===============Подсчет количество своиств=======================================
let car = {
    name: 'Toyota',
    year:  2005,
    color: 'white',
    engine: '2.4L'

};
function count() {
    return Object.keys(car).length
};
console.log( count() );

//=========================Деструктурирующее присваивание===========================

let user = {
    name: 'John',
    year: 30,
};

let {name: name, year: age, isAdmin = false} = user;

//==========================Максимальная зарплата===================================

let salaries = {
    'John': 300,
    'Pete': 250,
    'Mark': 280,
    'Andrew': 310
};
function getMaxSalary() {
    let maxSalary = 0;
    let maxName = null;
    for(let [name, salary] of Object.entries(salaries) ) {
        if(maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log( getMaxSalary() )