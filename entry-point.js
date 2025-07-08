import { MaxPriorityQueue, MinPriorityQueue } from "@datastructures-js/priority-queue";

class MedianFinder {
    constructor() {
        this.hi = new MinPriorityQueue();
        this.lo = new MaxPriorityQueue();
    }
    /**
     * @param {number} num
     * @return {void}
     hi 3 5 6
     lo 2 1 1
     */
    addNum(num) {
        // enqueue to lo
        // enqueue to hi the dequeued lo
        // if hi size is greater than lo size,
        // dequeue hi and enqueue to lo
        this.lo.enqueue(num);
        this.hi.enqueue(this.lo.dequeue);

        if (this.hi.size() > this.lo.size()) {
            this.lo.enqueue(this.hi.dequeue());
        }

    }
    /**
     * @return {number}
     */
    findMedian() {
        // if hi size and low size are equal,
        // return (hi front + lo front / 2)
        // return lo.front()
        const { hi, lo } = this;
        console.log(lo.front(), hi.front());
        if (hi.size() === lo.size()) return (hi.front() + lo.front()) / 2;

        return lo.front();
    }
}



/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const m = new MedianFinder();
m.addNum(1)
m.addNum(2)
m.findMedian()
m.addNum(3)
m.findMedian()