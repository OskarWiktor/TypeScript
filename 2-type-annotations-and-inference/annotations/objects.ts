const profile = {
  name: "alex",
  age: 20,
  coords: {
    x: 0,
    y: 15,
  },
  setAge: function (age: number) {
    this.age = age;
  },
};

const {age}: {age: number} = profile;

const {
  coords: {x, y},
}: {coords: {x: number; y: number}} = profile;
