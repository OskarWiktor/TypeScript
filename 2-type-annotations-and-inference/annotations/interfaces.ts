interface Reportable {
  summary(): string; //funkcja która zwraca string
}

const oldCivic = {
  name: "Old Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const pepsi = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `${this.color}, ${
      this.carbonated ? "Carbonated" : "Not Carbonated"
    }, Sugar: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(pepsi);


// interface vs type

type UserType = {
    name: string,
    age: number
}

interface UserInter {
    name: string,
    age: number
}


type SType = { name: string } | { age: number }

interface SInter {
    name: string
    // or niemożliwe
}

interface User {
    name: string
}
interface User {
    age: number
}
const user: User = {
    name: 'John',
    age: 30
}