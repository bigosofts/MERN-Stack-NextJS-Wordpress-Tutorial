//Javascript Closure

// function hello() {
//   var a = 10;
//   var b = 20;
//   function rifat() {
//     console.log("Rifat Age " + a + b);
//   }
//   return rifat;
// }

// var rifat = hello();

// console.dir(rifat);

//javascript prototype

//function Constructor

function Rifat(name, age) {
  this.name = name;
  this.age = age;
}

var rifatObject = new Rifat("rifat", 18);
var yahiaObject = new Rifat("yahia", 25);

console.log(yahiaObject);

var a = new Object(); //{}

var b = new Array(); //[]

var c = new String();

var d = new Boolean();
