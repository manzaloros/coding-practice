class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = Array(size).fill(0);
    this.head = 0;
    this.windowSum = 0;
    this.count = 0;
  }

  // Using circular queue
  next(val) {
    // count of elements in queue
    this.count += 1;

    // tail eventuallly 'eats itself' when you add more elements than the size
    const tail = (this.head + 1) % this.size;

    // Lose whatever old value was at the tail by subtracting it from the prev
    // window sum
    this.windowSum = this.windowSum - this.queue[tail] + val;

    this.head = (this.head + 1) % this.size;

    this.queue[this.head] = val;

    // Basically doing sum / (num of elements)
    // Since you don't decrement count, after you get to size elements, you will
    // always be dividing by size

    // return this.windowSum * (1 / Math.min(this.size, this.count));
    if (this.count > this.size) return this.windowSum / this.size;

    return this.windowSum / this.count;
  }
}

const m = new MovingAverage(3);
m.next(1);
