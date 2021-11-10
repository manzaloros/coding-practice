/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
let PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.peekNum = -1;
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function () {
  if (this.peekNum === -1) {
    this.peekNum = this.iterator.next();
    return this.peekNum;
  }

  return this.peekNum;
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function () {
  if (this.peekNum === -1) {
    return this.iterator.next();
  }

  const val = this.peekNum;
  this.peekNum = -1;

  return val;
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function () {
  if (this.peekNum === -1) {
    return this.iterator.hasNext();
  }

  return true;
};

class PeekingIteratorEasier {
  constructor(iterator) {
    this.iterator = iterator;
    if (iterator.hasNext()) this.nextEl = iterator.next();
  }

  peek() {
    return this.nextEl;
  }

  next() {
    const { iterator } = this;
    const val = this.nextEl;

    this.nextEl = null;

    if (iterator.hasNext()) this.nextEl = iterator.next();

    return val;
  }

  hasNext() {
    return !!this.nextEl;
  }
}

/**
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(arr)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/
