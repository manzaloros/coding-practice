class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  static swap(i, d, { values } = this) {
    [values[i], values[d]] = [values[d], values[i]];
  }

  insert(val, { values } = this) {
    values.push(val);

    let index = values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (values[index] > values[parentIndex]) {
      MaxBinaryHeap.swap.call(this, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this;
  }

  extractMax({ values } = this, { swap } = MaxBinaryHeap) {
    // Bind swap so you can use the static method with the instance
    swap = swap.bind(this);

    // Store the old max to return at end
    const oldRoot = values.shift();
    const { length } = values;

    if (length === 0) return oldRoot;

    // move last item (most recently added) to the root
    values.unshift(values.pop());

    let parentIndex = 0;
    let leftChildIndex = (parentIndex * 2) + 1;
    let rightChildIndex = (parentIndex * 2) + 2;

    // while the indices are in bounds
    while (leftChildIndex < length && rightChildIndex < length) {
      const [left, right, parent] = [
        values[leftChildIndex], values[rightChildIndex], values[parentIndex]];

      // if a swap needs to happen
      if (left > parent || right > parent) {
        // Check which child is greater
        if (left > right) {
          swap(parentIndex, leftChildIndex);
          parentIndex = leftChildIndex;
        } else {
          swap(parentIndex, rightChildIndex);
          parentIndex = rightChildIndex;
        }

        leftChildIndex = (parentIndex * 2) + 1;
        rightChildIndex = (parentIndex * 2) + 2;
      }
    }

    // Return the old root and the newly sifted heap
    return [oldRoot, this];
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(1));
console.log(heap.insert(10));
console.log(heap.insert(4));
console.log(heap.insert(3));
console.log(heap.extractMax());

const testHeap = new MaxBinaryHeap();
testHeap.insert(41).insert(39).insert(33).insert(18)
  .insert(27)
  .insert(12);
testHeap.insert(55);
console.log(testHeap);
console.log(testHeap.extractMax()); // [41,39,33,18,27,12]
console.log(testHeap.extractMax()); // [39,27,33,18,12]
console.log(testHeap.extractMax()); //
console.log(testHeap.extractMax()); //
console.log(testHeap.extractMax()); //
console.log(testHeap.extractMax()); //
console.log(testHeap.extractMax()); //
console.log(testHeap.extractMax()); // undefined
console.log(testHeap.extractMax()); // undefined
