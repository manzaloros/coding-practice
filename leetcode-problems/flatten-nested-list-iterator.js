let NestedIterator = function (nestedList) {
  this.integers = [];
  this.position = 0;

  const flattenList = (list) => {
    list.forEach((item) => {
      if (item.isInteger()) {
        this.integers.push(item.getInteger());
      } else {
        flattenList(item.getList());
      }
    });
  };

  flattenList(nestedList);
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.position < this.integers.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  const result = this.integers[this.position];
  this.position += 1;

  return result;
};
