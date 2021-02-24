/*  Peeking Iterator
https://leetcode.com/submissions/detail/453787284/?from=explore&item_id=3633
Given an Iterator class interface with methods: next() and
hasNext(), design and implement a PeekingIterator that support the peek()
operation -- it essentially peek() at the element that will be returned by the
next call to next().

Example:

Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list. Now you call peek() and
it returns 2, the next element. Calling next() after that still return 2. You
call next() the final time and it returns 3, the last element. Calling hasNext()
after that should return false. Follow up: How would you extend your design to
be generic and work with all types, not just integer?

Hint #1 Think of
"looking ahead". You want to cache the next element.

Hint #2 Is one
variable sufficient? Why or why not?

Hint #3 Test your design with call
order of peek() before next() vs next() before peek().

Hint #4 For a clean
implementation, check out Google's guava library source code.
*/
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

const PeekingIterator = function (iterator) {
  this.storage = [];
  this.currentIndex = 0;
  while (iterator.hasNext()) {
    this.storage.push(iterator.next());
  }
};

PeekingIterator.prototype.peek = function () {
  if (this.currentIndex <= this.storage.length - 1) {
    return this.storage[this.currentIndex];
  }
  return null;
};

PeekingIterator.prototype.next = function () {
  if (this.currentIndex <= this.storage.length - 1) {
    return this.storage[this.currentIndex++];
  }
  return null;
};

PeekingIterator.prototype.hasNext = function () {
  if (this.currentIndex >= this.storage.length) return false;
  return true;
};

/* Better solution, wrapping the class: */
class PeekingIterator {
  constructor(iterator) {
    iter
  }
}
/*

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
