/* Pseudoclassical */

const Tree = function (size) {
  this.size = size;
}

Tree.prototype.fallInForest = function () {
  console.log(`Does anyone hear me falling? My size is ${this.size}`);
}

const Pine = function (size) {
  Tree.call(this, size); // call invokes the constructor function with the given `this` context
}

Pine.prototype = Object.create(Tree.prototype);
// Need this line so the pine instance will be seen as an instance of the Pine constructor
Pine.prototype.constructor = Pine; // Set constructor of Pine prototype to Pine!
console.log('pine prototype:  ', Pine.prototype); // Will display a different constructor function
// if you remove the prototype.constructor = Pine line above this

let jimmy = new Pine(20);
jimmy.fallInForest();
console.log(jimmy instanceof Pine)

/* ES6  */

class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  sayHello() {
    return console.log(`Hello from ${this.name}`); // must do `this.prop`
  }
}

class Child extends Person {
  constructor(name, age) {
    super(name, age); // calls parent class constructor with specified args
  }

  // sayHello() {
  //   return console.log(`Hello from a tiny child ${this.name}, aged ${this.age}`);
  // }
}

const timmy = new Child('timmy', 4);
timmy.sayHello()