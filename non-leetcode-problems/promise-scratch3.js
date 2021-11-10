class SimplePromise {
  constructor(executor) {
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    this.status = 'pending';
    this.value = null;

    // this.onResolve = (val) => {
    //   if (this.status === 'pending') {
    //     // this.resolvedCallbacks.push(val);
    //     this.resolvedCallbacks.forEach((fn) => fn(val));
    //     this.status = 'resolved';
    //   }
    // };
    // This function won't be invoked until async operation is complete!
    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        // There will be no callbacks here if the executor resolve function was synchronous
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    // this.onReject = (err) => {
    //   if (this.status === 'pending') {
    //     this.rejectedCallbacks.push(err);
    //     this.status = 'rejected';
    //   }
    // };
    const reject = (value) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // .then is invoked synchronously
  then(onFulfilled, onRejected) {
    const { status } = this;

    if (status === 'pending') {
      // this.resolvedCallbacks.forEach((val) => resolved(val));
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
      // this happens with synchronous code, since you store the value in
      // this.value. Basically, the status will have already changed to
      // fulfilled if we get here.
    } else if (status === 'fulfilled') {
      onFulfilled(this.value);
    } else if (status === 'rejected') onRejected(this.value);
  }
}

const p = new SimplePromise((res, rej) => {
  setTimeout(() => res(42), 3000);
});

p.then((result) => result);
