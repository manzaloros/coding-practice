class MyQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  // O(outbox.length)
  push(val) {
    const { inbox, outbox } = this;
    while (outbox.length > 0) {
      inbox.push(outbox.pop());
    }

    inbox.push(val);
  }

  // O(inbox.length)
  pop() {
    const { inbox, outbox } = this;
    while (inbox.length > 0) {
      outbox.push(inbox.pop());
    }

    return outbox.pop();
  }

  // O(inbox.length
  peek() {
    const { inbox, outbox } = this;
    while (inbox.length > 0) {
      outbox.push(inbox.pop());
    }

    return outbox[outbox.length - 1];
  }

  empty() {
    const { inbox, outbox } = this;
    return inbox.length === 0 && outbox.length === 0;
  }
}

const q = new MyQueue();
