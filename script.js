//arrow function
// let rifat = (a, b) => console.log(a + b);

//immediately invoked Function Expression  IIFE

// (function rifat2() {
//   var a = 10;
//   console.log("Yahia" + 10);
// })();

// let rifat23 = (function () {
//   return 10;
// })();
// console.log(rifat23)

//this keyword
//global context this = window  , function e this er man window
//object er vitore function a this thakle ta hobe oi object tai

// var a = {
//   age: 10,
//   limon: {
//     age: 30,
//     rifat: function () {
//       console.log(this);
//     },
//   },
// };

// a.limon.rifat();

//new keyword rules

// function Yahia(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let rifat = new Yahia("rifat", 18);

// let yahia = new Yahia("Yahia", 25);

// console.log(yahia);

//specific rules
// var b ={

// }
// var a = {
//   age: 10,
//   limon: {
//     age: 30,
//     rifat: function (a, b) {
//       console.log(this);
//     },
//   },
// };

///advanced this

var limon = {
  name: "yahia",
  rifat: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

limon.rifat();
