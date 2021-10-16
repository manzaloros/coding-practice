// Written as a class
class UserStore {
  constructor() {
    if (!UserStore.instance) {
      this._data = [];
      UserStore.instance = this;
    }

    return UserStore.instance;
  }

  add(item) {
    this._data.push(item);
  }

  get(id) {
    return this._data.find((d) => d.id === id);
  }
}

const instance = new UserStore();
// Now you cannot add or modify properties on this instance
Object.freeze(instance);

// Now you will know exactly where the instance is being used, via ES6 modules
export default instance;
