class MyEventEmitter {
  constructor() {
    this.events = [];
  }

  on(name, /* function to fire */listener) {
    const { events } = this;
    if (!events[name]) events[name] = [];

    events[name].push(listener);
  }

  removeListener(name, listenerToRemove) {
    const { events } = this;
    if (!events[name]) throw new Error(`Event ${name} doesn't exist`);

    const filterListeners = (listener) => listener !== listenerToRemove;

    // Return and reassign all events that AREN'T the listener to remove (remove
    // the specified listener)
    events[name] = events[name].filter(filterListeners);
  }

  /*
  For each event at the specified name, invoke the callbacks with the specified
  data
  */
  emit(name, data) {
    const { events } = this;
    if (!events[name]) throw new Error(`Event ${name} doesn't exist`);

    const fireCallbacks = (cb) => cb(data);

    events[name].forEach(fireCallbacks);
  }
}
