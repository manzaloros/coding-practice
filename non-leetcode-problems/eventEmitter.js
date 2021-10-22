class EventEmitter {

  constructor() {
    this._storage = {};
    this._onceStorage = {};
  }

  on(event, fn) {

    if (this._storage[event]) {
      this._storage[event].push(fn);
    } else {
      this._storage[event] = [fn];
    }
  }

  // Only executes the function once and is then discarded
  once(event, fn) {
    if (this._onceStorage[event]) {
      this._onceStorage[event].push(fn);
    } else {
      this._onceStorage[event] = [fn];
    }
  }

  emit(event, arg) {
    if (this._storage[event]) {
      this._storage[event].forEach(func => func(arg));
      if (this._onceStorage[event]) {
        this._onceStorage[event].forEach(func => func(arg));
        this._onceStorage[event].splice(0, 1);
      }
    }
  }

  // Remove event listener
  off(event, fn) {
    if (this._storage[event]) {
      let index = 0;
      this._storage[event].forEach((func, i) => {
        if (func.toString() === fn.toString()) {
          index = i;
        }
      });
      this._storage[event].splice(index, 1);
    }
  }

}



var eventEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

function response2(msg2) {
  console.log(msg2 + ' also!')
}

// eventEmitter.on('HRX', responseToEvent);
// eventEmitter.once('HRX', function (msg) { console.log(msg + ' just once!'); });
// eventEmitter.emit('HRX', '1st'); // 1st \n 1st just once!
// eventEmitter.on('HRX', response2);
// eventEmitter.emit('HRX', '2nd'); // 2nd \n 2nd also!
// eventEmitter.off('HRX', responseToEvent);
// eventEmitter.emit('HRX', '3rd'); // 3rd also!
// eventEmitter.emit('HRX', '1st'); // 1st also!