const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

const add = (x: number, y: number): number => {
    return x + y
}

// bez return daje void
const subtract = (x: number, y: number) => {
    x - y
}


function divided(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

// void - funkcja nic nie zwraca, (może być return null lub undefined)
const logger = (message: string): void => {
    console.log(message);
}

// never - nie wykona się funkcja
const throwError = (message: string): never => {
    throw new Error(message);
}


const todayWeather = {
    date: new Date(),
    weather: 'sunny',
}

const logWeather = (todayWeather: {date: Date; weather: string}): void => {
    console.log(todayWeather.date);
    console.log(todayWeather.weather)
}

logWeather(todayWeather)

// wersja z dekonstrukcją domyślnego obiektu
const logWeatherTwo = ({ date, weather }: {date: Date; weather: string}): void => {
    console.log(date);
    console.log(weather)
}

logWeatherTwo(todayWeather)