/**
 * @param {number} k
 */

/*
  Uses size to calculate head and tail positions

  Only moves head in dequeue method

  Time: O(1)
  Space: O(n)
*/

let MyCircularQueue = function (k) {
  this.capacity = k;
  this.size = 0;
  this.head = 0;
  this.storage = {};
};

/**
* @param {number} value
* @return {boolean}
*/
// Doesn't actually move the head
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  this.storage[(this.head + this.size) % this.capacity] = value;
  this.size += 1;

  return true;
};

/**
* @return {boolean}
*/
// Don't actually delete anything, just rewrites values
// Only move head in this method
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  this.head = (this.head + 1) % this.capacity;

  this.size -= 1;

  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;

  return this.storage[this.head];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;

  const tailIndex = (this.head + this.size - 1) % this.capacity;
  return this.storage[tailIndex];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capacity;
};
