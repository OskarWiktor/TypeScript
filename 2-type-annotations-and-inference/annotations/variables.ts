let apples: number = 5;
//apples = true;

let speed: string = 'fast';
//speed = false;

let hasName: boolean = true;

let nothing: null = null;
//nothing = undefined;

let notDefined: undefined = undefined

let now: Date = new Date();

// Array 
let colors: string[] = ['red', 'green', 'blue']; 
let boo: boolean[] = [true, true, false]

// Classes
class Car {

}
let car: Car = new Car

// Obj literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
} 
let person: { name: string; age: number } = {
    name : "John",
    age :  34
}

// Function 
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

// any type
const json = '{"x": 10, "y": 20}'
const coordinate: {x: number, y:number } = JSON.parse(json);
console.log(coordinate)


let words = ['red', 'green', 'blue'];
let foundWord = true;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// type not found
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i]) > 0 ) {
        numbersAboveZero = numbers[i]
    }
}