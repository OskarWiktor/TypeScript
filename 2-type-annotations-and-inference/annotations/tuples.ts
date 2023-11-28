//obj
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];

// pepsi[0] = 40 //err

type Drink = [string, boolean, number];
const cola: Drink = ['dark brown', true, 60];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0]


const carSpecs: [number, number] = [400, 3355];

const carStatsTwo = {
    horsepower: 400,
    weight: 3355
};