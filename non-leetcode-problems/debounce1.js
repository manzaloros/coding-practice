// Only invoke LAST of a bunch of invocations
const debounce = (fn, wait) => {
  let timer;

  return (args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(args), wait);
  };
};

const myFunc = (arg) => console.log('should only be invoked after set amount of time has passed since last invocation, args: ', arg);
const debounced = debounce(myFunc, 1000);
debounced('my args!!!');
