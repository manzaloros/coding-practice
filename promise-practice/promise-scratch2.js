class SimplePromise {
  constructor(exec) {
    this.status = 'pending';
    this.value = null;
    // Don't need an error, will make any errors to be this.value,
    // this.error = null;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    this.onResolve = (val) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = val;
        this.onFulfilledCallbacks.forEach((fn) => fn(val));
      }
    };

    this.onReject = (val) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = val;
        // Could be an onRejected function from the .then:
        this.onRejectedCallbacks((fn) => fn(val));
      }
    };

    // Don't know if you need try/catch
    try {
      exec(this.onResolve, this.onReject);
    } catch (err) {
      this.onReject(err);
    }
  }

  then(onFulfilled, onRejected) {
    // If the exec function is async, push callback to internal callbacks list
    if (this.status === 'pending') {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }

    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.status === 'rejected') onRejected(this.value);
  }
}

const p = new SimplePromise((res, rej) => {
  res(24);
});

p.then((res, rej) => res);
