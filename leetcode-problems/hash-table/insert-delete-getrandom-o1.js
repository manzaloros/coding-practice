/*
{1,2}
insert(2) -> false
insert(3) -> true

set:
{
val(1)
val(3)
}

map:
{
0: 1
1: 2
2: 3
}

first index: 0
have LL pointer. When you get a random num you iterate pointer that
many times.
When you insert(), insert new LL node right after your pointer.
delete(): delete LL node, decrease size
rand():
size: 2
pointer: 1

n
1  -> 3

remove(1) -> true
{2}
remove(4) -> false

getRandom() -> 3
getRandom() -> 2 ?

*/
let RandomizedSet = function () {
  this.map = new Map();
  this.list = [];
};

/*
  Push element to end of list when adding and update map with its index
*/
RandomizedSet.prototype.insert = function (val) {
  const { list, map } = this;

  if (!map.has(val)) {
    map.set(val, list.length);
    list.push(val);

    return true;
  }
  return false;
};

/**
  Swap element at end of list with the element you need to remove, since you
  have access the the index of the end of the list AND the index of the element
  to remove from your map.

  E.g. [1, 2]. Remove 1.
  indexToSwap: 0.
  elementToSwap: 2.
  [2, 2]
  pop -> [2].

  Then, pop from your list which is O(1)

  Make sure that you're not just inferring a boolean, as the index could be 0
  and could be inferred as false
*/
RandomizedSet.prototype.remove = function (val) {
  const { map, list } = this;
  const indexToSwap = map.get(val);

  if (indexToSwap !== undefined) {
    const elementToSwap = list[list.length - 1];

    list[indexToSwap] = elementToSwap;
    map.set(elementToSwap, indexToSwap);

    list.pop();
    map.delete(val);

    return true;
  }

  return false;
};

/**
  Returns a random element from the list with an index in the range of 0 -> list
  length. Like, a list of 2 elements will return any num from the range of 0 to
  2, so 0 or 1 (since 2 is not inclusive upper bound)
*/
RandomizedSet.prototype.getRandom = function () {
  const { list } = this;

  const randomIndex = Math.floor(Math.random() * (list.length) + 0);

  return list[randomIndex];
};

const r = new RandomizedSet();
r.insert(1);
r.remove(2);
r.insert(2);
r.getRandom();
r.remove(1);
r.insert(2);
r.getRandom();
