/* Functional
  methods are copied each instance
*/

const Dog = function (color) {
  const storage = { color: color };
  storage.wag = function () {
    return console.log("Wagging my tail");
  }
  return storage;
}

const lassy = Dog('brown');
console.log(lassy.color); // brown
console.log(lassy.wag())

/* Functional Shared
  Store methods on external object that all instances can access, without copying methods every time

  The problem with functional shared pattern is that the methods are created at the time of
  instantiation. If you want to create a new object with updated methods, the
*/

const Cat = function (color) {
  const storage = { color };
  Object.assign(storage, catMethods) // Object assign(target, source)
  // Can also use _.extend
  return storage;
}

// Object to hold methods
const catMethods = {
  meow: function () {
    return console.log('Meowing for you! Old meow function') // returning just a string won't log to the console?
  },
}

const meowth = new Cat('black');
console.log(meowth.color);
meowth.meow()

// Updating the cat methods will not update older instanted objects
catMethods.meow = function () {
  return console.log(`New meow function!!!`)
}

const clarice = new Cat('rainbow');
clarice.meow();

/* Prototypal
Establishes a prototype chain relationship with Object.create(methodsObject)
*/

const Horse = function (maxSpeed) {
  // Could also call 'blueprint'
  // Object.create() uses the passed in object as the prototype for new instances
  const instance = Object.create(Horse.prototype); // No object literal, just the Horse.prototype
  instance.maxSpeed = maxSpeed;
  return instance;
}

// Prototype method-holding object created automagically with Object.create in the constructor
// Every prototype object has a .constructor property that points back to the function it came from
Horse.prototype.gallop = function () {
  return console.log(`I am galloping at ${this.maxSpeed} miles per hour!`)
}


const blackBeauty = Horse(5);
console.log(blackBeauty.maxSpeed);
blackBeauty.gallop();

/* Pseudoclassical
  Syntactic sugar for the prototypal instantiation pattern. Hides the object.create or return lines.
  Can be difficult to read if not familiar with JS `this`.
  This pattern will use the keyword `new` to create an instance.
*/

const Zebra = function (numberOfStripes) {
  this.numberOfStripes = numberOfStripes;
}

Zebra.prototype.changeStripes = function () {
  this.numberOfStripes = 1;
  return console.log(`Changing my ${this.numberOfStripes} stripes to 1. I'm all black now!`)
}

const larry = new Zebra(50);
console.log(larry.numberOfStripes);
larry.changeStripes();
console.log(larry.numberOfStripes);

/* ES6 Classes
  Syntactic Sugar for pseudoclassical
*/

class Monkey { // don't put arguments in class declaration
  constructor(favoriteFood) { // instance arguments should pass to constructor
    this.favoriteFood = favoriteFood; // this.prop = prop, for assigning, like pseudoclassical
  }

  speak() { // don't need to declare "function"
    return console.log(`Oo, oo, ah, ah!`);
  }
}

const jerome = new Monkey('bananas');
console.log(jerome.favoriteFood)
jerome.speak()