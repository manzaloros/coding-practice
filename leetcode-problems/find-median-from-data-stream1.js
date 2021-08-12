const { MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');

class MedianFinder {
  constructor() {
    this.lo = new MaxPriorityQueue();
    this.hi = new MinPriorityQueue();
  }

  addNum(num) {
    // MUST do this step to balance the lo queue, so that the next num you
    // dequeue is the highest num of lo.
    this.lo.enqueue(num);

    // while (this.lo.size() > this.hi.size() + 1) {
    //   const dequeued = this.lo.dequeue().element;
    //   this.hi.enqueue(dequeued);
    // }

    // while (this.lo.front().element > this.hi.front()?.element) {
    //   const dequeued = this.lo.dequeue().element;
    //   this.hi.enqueue(dequeued);
    // }

    // while (this.hi.size() > this.lo.size()) {
    //   const dequeued = this.hi.dequeue().element;
    //   this.lo.enqueue(dequeued);
    // }
    // could be simplified:

    this.hi.enqueue(this.lo.dequeue().element);

    if (this.lo.size() < this.hi.size()) {
      this.lo.push(this.hi.dequeue().element);
    }
  }

  findMedian() {
    return (this.hi.size() + this.lo.size()) % 2 === 0
      ? (this.hi.front().element + this.lo.front().element) / 2
      : this.lo.front().element;
  }
}

const m = new MedianFinder();
m.addNum(1);
m.addNum(2);
m.findMedian();
m.addNum(3);
m.findMedian();
