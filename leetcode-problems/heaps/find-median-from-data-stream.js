 class Heap {
    heap = []
    size = 0
    insert(el) {
        const findParentIndex = (index) => Math.floor((index - 1) / 2);
        this.heap.push(el);
        let index = this.heap.length - 1;
        while (index !== 0 && this.heap[index] < this.heap[findParentIndex(index)]) {
            this.swap(index, findParentIndex(index));
            index = findParentIndex(index);
        }
        this.size += 1;
    }
    swap(indexOne,indexTwo) {
        const tmp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = tmp; 
    }
}


/**
 *    el
 * 4, 2, 3
 * 
 * index: 1
 * heap
 * 
 * [4,2]
 */
export class MedianFinder {
    heap = new Heap()

    // O(n * log n)
    addNum(num) {
        this.heap.insert(num);
    }

    findMedian() {
        const size = this.heap.size;
        const heap = this.heap.heap;
        // if heap size is odd
        // return the element at heap[Math.floor(size / 2)]
        // else, 
        // return element at heap[size / 2]/ heap[size/2 - 1]
        if (size % 2 !== 0) {
            return heap[Math.floor(size / 2)]
        }
        return (heap[size / 2] + heap[size/2 - 1]) / 2
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

