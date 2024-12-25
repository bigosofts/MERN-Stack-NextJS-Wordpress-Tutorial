//function Constructor

// function Rifat(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var rifatObject = new Rifat("rifat", 18);
// var yahiaObject = new Rifat("yahia", 25);

// Rifat.prototype.fullName = function () {
//   console.log(this.name + " " + this.age);
// };

// rifatObject.fullName();
// yahiaObject.fullName();

//Javascript Scope

var a = 10;

function rifat() {
  let a  = 30;
  function yahia() {
    console.log("Rifat age is: " + a);
  }
  yahia();
}

rifat();

// বাইরে যদি ভ্যারিএবল লিখি তাইলে গ্লোবাল স্কোপ 

// ফাংশনের ভিতর যদি ডিক্লেয়ার না করে আসাইন করে দাও দাও সেটা সেটা হবে গ্লোবাল স্কোপ

// ফাংশনের ভিতরে ডিক্লেয়ার প্লাস আসাইন করা হলে সেটা হবে লোকাল স্কোপ।

// কোন ফাংশনের পেটের ভিতর আরো ফাংশন থাকলে তারাও সেই ভ্যারিএবল স্কোপ পাবে এটাকে বলে লেক্সিকাল স্কোপ।


// var ফাংশন স্কোপ মেইন্টেইন করে , তবে let and const ব্লক স্কোপ মেইন্টেইন করে । 

// let কে রিএসাইন করা যায়, তবে const  কে রিএসাইন করা যায় না । 

