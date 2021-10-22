/*
  Returns a function that is only invoked when it hasn't been previously
  invoked in the last `timeout` milliseconds

  So, invoking the debounced function once will invoke the function after the
  specified timeout. However, invoking the debounced function multiple times
  will only invoke the last invokation of the function after the timeout from
  the previous invocation has finished.
*/
const debounce = (func, timeout) => {
  let timer;

  return (...args) => {
    // cancels a timeout previously established by setTimeout with the provided id
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};

/*
  If the function hasn't been called in the previous timeout milliseconds, it
  will be invoked.

  Once it's invoked, any subsequent invocation within the timeout will result in
  the timer being reset.

  This means the function will be called at first, but won't be called until
  it's invoked after the specified timeout.
*/
const debounceLeading = (func, timeout) => {
  let timer;

  return (...args) => {
    if (!timer) func.apply(this, args);

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};
