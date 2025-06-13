class MedianFinder {
  constructor() {
    this.lo = new Heap('max');
    this.hi = new Heap('min');
  }

  addNum(num) {
    this.hi.insert(num);

    this.lo.insert(this.hi.pop());

    if (this.lo.size > this.hi.size) {
        this.hi.insert(this.lo.pop());
    }
  }

  findMedian() {
    if (this.hi.size > this.lo.size) return this.hi.front();
    return (this.hi.front() + this.lo.front()) / 2
  }
}

class Heap {
    constructor(type) {
        this.max = type === 'max';
        this.heap = [];
        this.size = 0;
    }

    insert(el) {
        this.heap.push(el);
        this.size += 1;
        this.siftUp(this.size - 1);
    }

    siftUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (
                (this.max && this.heap[index] > this.heap[parent]) ||
                (!this.max && this.heap[index] < this.heap[parent])
            ) {
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    siftDown(index) {
        const length = this.size;
        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let swapIndex = index;

            if (left < length &&
                ((this.max && this.heap[left] > this.heap[swapIndex]) ||
                 (!this.max && this.heap[left] < this.heap[swapIndex]))) {
                swapIndex = left;
            }

            if (right < length &&
                ((this.max && this.heap[right] > this.heap[swapIndex]) ||
                 (!this.max && this.heap[right] < this.heap[swapIndex]))) {
                swapIndex = right;
            }

            if (swapIndex === index) break;

            this.swap(index, swapIndex);
            index = swapIndex;
        }
    }

    pop() {
        if (this.size === 0) return undefined;

        const root = this.heap[0];
        const end = this.heap.pop();
        this.size -= 1;

        if (this.size > 0) {
            this.heap[0] = end;
            this.siftDown(0);
        }

        return root;
    }

    front() {
        return this.heap[0];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}