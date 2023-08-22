
const startDate = new Date('1970-01-01');
const endDate = new Date('2000-01-01');

const timeDifference = endDate - startDate;

const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

console.log(daysDifference);