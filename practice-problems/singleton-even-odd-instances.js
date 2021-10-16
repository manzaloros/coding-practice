/*
  Implement the singleton pattern with a twist. First, instead of storing one
  instance, store two instances. And in every even call of getInstance(), return
  the first instance and in every odd call of getInstance(), return the second
  instance.
*/
/*
  Singleton pattern normally restricts instantiation of a class to one object (obviously
  for this problem you're returning one of two instances)
*/
const _dataEven = [];
const _dataOdd = [];

let called = 0;

const evenInstance = {
  add: (item) => _dataEven.push(item),
  get: (id) => _dataEven.find((d) => d.id === id),
};

const oddInstance = {
  add: (item) => _dataOdd.push(item),
  get: (id) => _dataOdd.find((d) => d.id === id),
};

Object.freeze(evenInstance);
Object.freeze(oddInstance);

// User can't reassign because const
const getInstance = () => {
  if (called % 2 === 0) {
    called += 1;

    return evenInstance;
  }

  called += 1;

  return oddInstance;
};

// .freeze() prevents adding or modifying properties
// Object.freeze(UserStore);

getInstance().add({ id: 1, name: 'zach' });
getInstance().add({ id: 2, name: 'should be in odd list' });
getInstance().add = 'shouldnt be able to add this prop';

// ES6 module means you'll always know where UserStore is being used
// export default UserStore;
