function c() {
  setTimeout(function () {
    console.log("delay");
  }, 5000);
  setTimeout(function () {
    console.log("delay");
  }, 5000);

  fetch("https://www.google.com").then((res) => console.log("Data found"));
  fetch("https://www.google.com").then((res) => console.log("Data found 2"));

  console.log("c");
}

function b() {
  c();
  console.log("b");
}

function a() {
  b();
  console.log("a");
}

a();

//running mechanism

//v8 engine

// Code -> Parser -> AST -> Interpreter -> Bytecode -> compiler -> machine code

//first step

//1. global execution context
// 1a) creation
// 1b) execution

//2. a function execution context
// 1a) creation
// 1b) execution

//3. b function execution context
// 1a) creation
// 1b) execution

//4. c function execution context
// 1a) creation
// 1b) execution

//hoisting
