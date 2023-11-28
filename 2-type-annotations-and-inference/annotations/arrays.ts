const carMakers = ['ford', 'toyota', 'chevy'];

const date = [new Date(), new Date()];

const carMade = [
    ['f150'],
    ['corolla'],
    ['camero'],
];

// const carMade: string[][] = []

// help extracting
const cars = carMakers[0];
const myCar = carMakers.pop();

// prevent bugs
//carMakers.push(100); 

// Help with map
carMakers.map((car: string): string => {
    return `I like ${car.toUpperCase}`;
})

// Flexible types

// const importantDates = [new Date(), '2030-01-2'];
const importantDates: ( string | Date )[] = [];

importantDates.push(new Date());
importantDates.push('2010-09-08');
// importantDates.push(100) // err

