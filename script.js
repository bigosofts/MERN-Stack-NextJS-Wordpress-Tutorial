function removeClass() {
  const x = 10; //number
  let y = "10"; //string
  let z = true; //boolean
  let a = NaN; //number hobe na
  let b = undefined; // bostu nai
  let c = null; // bostu ase kintu man nai
  let d = Infinity;

  // let limon = {
  //   name: "limon",
  //   age: 29,
  //   service: "lecturer",
  // };

  let classNine = [
    {
      name: "limon",
      age: 29,
      service: "lecturer",
    },
    {
      name: "rifat",
      age: 18,
      service: "lecturer",
    },
    {
      name: "yahia",
      age: 24,
      service: "lecturer",
    },
  ]; //array

  // alert(numberofStudents[4]);

  let car = {
    name: "limon", //property
    model: 29,
    weight: "lecturer",
    color: [2, 5, 8, 10, 14],
    getColor: function () {
      alert(this.name);
    }, //method
  };

  let set = "name";

  // alert(car["name"])

  car.getColor();
}
// function addClass() {
//   document.getElementById("body");
// }

// console.log(10 + 10);
// alert("hello");

// let a = 10; //assignment
// let b = 20 % 8; //modulas
// let c = 10 < 20; // comparision
// let d = d--; //increment
// let e = 5 ** 2;

function yahia() {
  let x = 10;
  let z = x * 100;
  alert(z);
}

// yahia();

// let students = [
//   {
//     name: "limon",
//     roll: 1,
//     sibling: ["a", "b"],
//     getData: function () {
//       console.log(this.name + " " + this.roll);
//     },
//   },
//   {
//     name: "rifat",
//     roll: 2,
//     sibling: ["sumaiya", "d"],
//   },
// ];

//loop
// for (let i = 1; i <= 30; i++) {
//   document.write("<br> " + i);
// }

let i = 11;

// while (i < 10) {
//   document.write("<br> " + i);
//   i++;
// }

// do {
//   document.write("<br> " + i);
//   i++;
// } while (i < 10);
// {
//   document.write("<br> " + i);
// }
let rifat = {
  name: "rifat",
  age: 18,
  forEach: function () {
    console.log(this.name);
  },
};

let students = [1, 2, 10, 20];

//array loop - iteration
// students.forEach(function (item) {
//   document.write(item + "<br>");
// });

// students.find(function (item) {
//   document.write(item);
// })

// students.map(function (item) {
//   document.write(item * 2);
// });

// students.filter(function (item) {
//   item == "yahia" ? document.write(item) : "";
// });

// students.some(function (item) {
//   item == "yahia" ? true : false;
// });

// students.every(function (item) {
//   item == "yahia" ? true : false;
// });

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(function myFunction(total, item) {
  return total + item;
});

document.getElementById("catch2").innerHTML = "The sum is " + sum;
