/*
  amazing source: https://blog.jakuba.net/2018-01-09-bit-vector-in-javascript/

  num << anotherNum === num * (2^anotherNum)

  OR (|) operator is good to set a specific bit. num | 1. If either bit in that
  position is a 1, it returns 1. It leaves existing values alone and won't
  change a 0 to a 1. num | (call this num a bitmask)

  To set ith bit, OR the num with 2^i. You get 2^i by doing (1 << i).

  To get the ith bit, use AND as it only returns non-zero if the ith bit isn't
  zero. num & (1 << i)
*/
class BitArray {
  constructor(size) {
    const bitsPerElement = 32;

    const elementCount = Math.ceil(size / bitsPerElement);

    // Only can store 32 bits (because that's how big a number can be)
    this.vector = 0;
  }

  set(i) {
    this.vector |= (1 << i);
  }

  get(i) {
    const val = this.vector & (1 << i);

    return val !== 0;
  }
}

const b = new BitArray(5);
b.set(4);
b.get(3);
b.get(4);
b.set(3);
b.get(3);
