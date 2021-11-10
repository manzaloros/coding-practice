/*
  Implement 3 stacks using a single list:

class Stack:
    def __init__(self):
        self.list = []

    def pop(self, stack_number):
        pass

    def push(self, item, stack_number):
        pass
*/

class Stack {
  constructor() {
    this.list = Array(3);
    this.tops = Array(3).fill(-1);
    this.next = Array(3).fill(0).map((el, i) => i + 1);

    this.free = 0;
  }

  push(el, stackNum) {
    let i = this.free;

    this.free = this.next[i];

    this.next[i] = this.tops[stackNum];
    this.tops[stackNum] = i;

    this.list[i] = el;
  }

  pop(stackNum) {
    let i = this.tops[stackNum];
    this.tops[stackNum] = this.next[i];

    this.next[i] = this.free;

    this.free = i;

    return this.list[i];
  }
}

const s = new Stack();
s.push(2, 1);
s.push(4, 2);
s.pop(1);
