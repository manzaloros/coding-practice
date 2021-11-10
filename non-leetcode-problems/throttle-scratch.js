/*
  http://demo.nimius.net/debounce_throttle/

  Difference between debounce and throttle?

  Throttle delays execution of a function. If you emit an even every time the
  mouse moves, you throttling will make it so that event only fires every so
  often, rather than every single time it's triggered. Reduces the number of
  notifications for an event that fires multiple times.

  Debounce only invokes the function until a specified amount of time has
  passed, so you invoke the function, a timer starts, and after that timer is
  up, if the function hasn't been invoked again it will fire. It bunches up
  sequential function calls to a single call, and makes sure that only one
  notification is made for multiple calls.
*/

const throttle = (cb, limit) => {
  let wait = false;

  return () => {
    if (!wait) {
      cb.call();

      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
};
