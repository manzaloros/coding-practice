const debounce = (fn, interval) => {
  let timer;

  return (...vals) => {
    // cancels the timeout of a previously established timer
    clearTimeout(timer);

    // apply takes an array as the second argument
    timer = setTimeout(() => fn.apply(this, vals), interval);
  };
};

// Invokes function immediately the first time it's called
// Then, it sets a timeout for the specified time, only allowing you to invoke
// the function again after the setTimeout has finished
const debounceLeading = (fn, timeout) => {
  let timer;

  return (...args) => {
    // This line won't run if the setTimeout of a prev call hasn't finished
    if (!timer) fn.apply(this, args);

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
};
