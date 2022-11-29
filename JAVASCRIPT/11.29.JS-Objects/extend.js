class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

// let newCar = new Car("BMW");
// console.log(newCar.present());

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");

console.log(mycar.show());
