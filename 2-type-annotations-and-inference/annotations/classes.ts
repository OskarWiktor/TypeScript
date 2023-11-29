class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Carr extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log(" vroom ");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
// vehicle.honk(); err
console.log(vehicle.color);

const carr = new Carr(4, "red");
// carr.startDrivingProcess()
// carr.drive(); err
// carr.honk(); err
