// //document.write("Node Name: " + a);

// function myFunctionOne() {
//   // myTag.style.backgroundColor = "yellow";
//   document.getElementsByTagName("h1")[2].setAttribute("class", "democlass");
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
//   const x = document.getElementById("demo");
//   const y = document.getElementsByTagName("p");
//   const s = document.getElementsByClassName("demo");
//   console.log(y);
//   console.log(s);
// //   const parent = document.createElement("div");
// //   const mssange = document.createElement("BUTTON");
// //   const t = document.createTextNode("Hello World");

// // //   var listWrapper = document.getElementById("listWrapper");
// // //   var newList = document.createElement("ul");
// // //   listWrapper.appendChild(newList);

// // //   var item = document.createElement("li");
// // //   var text = document.createTextNode("The first is annanas");
// // //   document.body.style.backgroundColor = "red";
// // //   document.body.style.width = "20%";
// // //   item.appendChild(text);
// // //   newList.appendChild(item);

// // //   var fruits = ["bannana", "cherry", "date"];
// // //   for (var i = 0; i < fruits.length; i++) {
// // //     var item = document.createElement("li");
// // //     var text = document.createTextNode(fruits[i]);
// // //     item.appendChild(text);
// // //     newList.appendChild(item);
// // //   }
// // //   document.body.append(mssange);
// // //   document.body.append(t);
// // //   demo.document.style.backgroundColor = "green";

// // // const h2 = document.getElementById("demo");

// // // h2.addEventListener("mouseenter", (e) => {
// // //   alert(" Hey");
// // // });

// // // h2.addEventListener(, alertH2);

// // //   mssange.classList.add("cooking-ma");
// // //   // mssange.textContent="we"
// // //   mssange.innerHTML = "hedsdsdllo!";
// // //   header.append(mssange);

// // // const array1 = ["a", "b", "c"];

// // // array1.forEach((element) => console.log(element));

// // // const h = document.querySelector("h1");
// // // console.log(h.parentElement);

// // var el = document.getElementById("div-03");

// // var r1 = el.closest("#div-02");
// // // returns the element with the id=div-02

// // var r2 = el.closest("div div");
// // // returns the closest ancestor which is a div in div, here it is the div-03 itself

// // var r3 = el.closest("article > div");
// // // returns the closest ancestor which is a div and has a parent article, here it is the div-01

// // var r4 = el.closest(":not(div)");
// // // returns the closest ancestor which is not a div, here it is the outmost article
// // var r2 = el.closest("div div");

// // console.log(r1);
// // console.log("-------");
// // console.log(r2);
// // console.log("-----r3--");
// // console.log(r3);
// // console.log("-------");
// // console.log(r4);
// // console.log("-------");

// // Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // Never to this!
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// Person.prototype.nat = "israel";

// const jonas = new Person("Jonas", 1991);

// console.log(jonas);
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);
// console.log("---------");
// console.log(jonas instanceof Person);
// Person.hey = function () {
//   console.log("Hey there 👋");
//   console.log(this);
// };
// Person.hey();

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(Person.prototype);

// console.log(matilda.__proto__);

// console.log(jonas.__proto__ === Person.prototype);
// console.log("---------");
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// console.log("---------");
// // .prototyeOfLinkedObjects
// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);
// console.log("---------");
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("birthYear"));
// console.log(jonas.hasOwnProperty("species"));

// const arr = [2, 4, 5, 6, 6, 5, 5];
// console.log(arr.__proto__);

// Array.prototype.f = function () {
//   return [...new Set(this)];
// };

// console.log(arr.f());

// // Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector("h1");
// console.dir((x) => x + 1);
// console.dir((y) => y + 1);
// console.dir(document.body);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = +10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const BMW = new Car("BMW", 120);
// const Mercedes = new Car("Mercedes", 95);

// BMW.accelerate();
// BMW.brake();
// Mercedes.brake();
// Mercedes.accelerate();

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new carCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();//130
ford.accelerate();//140
ford.brake();//135
ford.speedUS = 50;
console.log(ford);
