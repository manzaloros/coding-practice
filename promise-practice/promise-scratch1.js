class SimplePromise {
  constructor(executor) {
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    this.status = 'pending';
    this.value = null;

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    try {
      // invoked immediately, may have async functions inside it
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'pending') {
      // This happens if the executor has any async code in it. Async callback
      // WILL NOT WORK without this code
      this.onFulfilledCallbacks.push(onFulfilled);
    } else if (this.status === 'fulfilled') {
      // This happens if executor isn't async. SYNCHRONOUS code WILL NOT WORK
      // without this code
      onFulfilled(this.value);
    } else if (this.status === 'rejected') {
      onRejected(this.value);
    }
  }
}
/*
  const P = new SimplePromise((res, rej) => {
    // could be async:
    res('someValue')
  })

  Instantiating a new Promise calls the constructor. The constructor sets its
  status to 'pending' and immediately invokes the executor you pass in.

  Once the resolve callback invokes, either synchronously or asynchronously, and
  the promise's status is 'pending', the resolve callback sets the status to
  'fulfilled'. Additionally, the resolve callback sets the this.value of the promise
  to the eventually passed to the resolve function, and invokes each
  onFulfilledCallback on the value if there are any.

  Calling the .then method when the promise is still pending causes the
  onFulfilledCallback to be pushed to the promise's internal list. Otherwise, if
  the status is fulfilled, it invokes that callback on the stored this.value
*/
