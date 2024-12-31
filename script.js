//javascript inheritence

//Easy inheritence

//Moderate inheritence

// Intermediate inheritance

// function Human(eye, leg) {
//   this.eye = eye;
//   this.leg = leg;
// }

// function Rifat(age, name, eye, leg) {
//   Human.call(this, eye, leg);
//   this.age = age;
//   this.name = name;
// }
// Rifat.prototype.getAge = function () {
//   console.log("Age is " + this.age);
// };

// let rifat = new Rifat(18, "Rifat", "red", "Long");
// let yahia = new Rifat(28, "Yahia", "black", "short");

// console.log(yahia);

// let rifat = {
//   name: "Rifat",
//   age: 18,
//   getAge: function () {
//     console.log(this.age);
//   },
// };

// let yahia = Object.create(rifat);

// console.log(yahia);

class Human {
  constructor(leg, eye) {
    this.eye = eye; // Assign the name
    this.leg = leg; // Assign the age
  }
  getAge() {
    console.log("Age is " + this.age);
  }
}

class Rifat extends Human {
  constructor(age, name, leg, eye) {
    super(leg, eye);
    this.name = name;
    this.age = age;
  }
}

let rifat = new Rifat(25, "Rifat", 2, "brown");


