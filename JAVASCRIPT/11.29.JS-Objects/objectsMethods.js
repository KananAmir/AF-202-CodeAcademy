let person = {
  firstName: "Kanan",
  lastName: "Amirov",
  skills: ["html", "css"],
  city: "London",
  showThisObject: function () {
    console.log(this);
  },
  getFullName: function () {
    // return `${this.firstName} ${this.lastName}`;
    // console.log(this.firstName + " " + this.lastName)
    return this.firstName + " " + this.lastName;
  },
};

//for copy object
let newPerson = Object.assign({}, person);

person.city = "Baku";

console.log(newPerson);

// for keys of object
console.log(Object.keys(person));

// for values of object
console.log(Object.values(person));

// for key, value pairs of object
console.log(Object.entries(person));

console.log(person.hasOwnProperty("lastName"));
console.log(person.hasOwnProperty("last"));

// console.log(this);
console.log(person.getFullName());

person.showThisObject()
