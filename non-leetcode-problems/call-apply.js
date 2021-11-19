/* eslint-disable no-extend-native */

Function.prototype.myCall = function (context, ...args) {
  // create an object that inherits prototypically from the given context
  const newFunc = Object.create(context || null);
  // attach the calling function to the object just created
  newFunc.fn = this;
  // invoke the calling function with the passed in args
  newFunc.fn(...args);
};

Function.prototype.myApply = function (context, argsArray) {
  if (!Array.isArray(argsArray)) throw new Error('arguments must be an Array');

  const newFunc = Object.create(context || null);
  newFunc.fn = this;
  newFunc.fn(...argsArray);
};

Function.prototype.myBind = function (context, ...args) {
  if (!(this instanceof Function)) throw new Error('must be a function');

  return () => {
    this.call(context, ...args);
  };
};
