class SimplePromise {
  constructor(executor) {
    this.status = 'pending';
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
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
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  /*
  // This version works with async but doesn't support chaining. Fine for
  interview?

      then(onFulfilled, onRejected) {
        if (this.status === "pending") {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }

        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        }

        if (this.status === "rejected") {
            onRejected(this.value);
        }
    } */

  then(onFulfilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFulfilled(this.value);
    }

    if (this.status === 'rejected') onRejected(this.value);

    return new SimplePromise((resolve, reject) => {
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onFulfilled(this.value);
          } catch (err) {
            reject(err);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            const rejectFromLastPromise = onRejected(this.value);

            reject(rejectFromLastPromise);
          } catch (err) {
            reject(err);
          }
        });
      }
    });
  }
}

const myP = new SimplePromise((res, rej) => {
  res('testing val');
});

myP.then((val) => console.log('val from res: ', val));
