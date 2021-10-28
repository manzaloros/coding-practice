let SnapshotArray = function (length) {
  this.snapId = 0;

  this.storage = Array(length)
    .fill(0)
    .map(() => {
      const map = new Map();
      map.set('snapId', 0);
      map.set('val', 0);

      return [map];
    });
};

SnapshotArray.prototype.set = function (index, val) {
  const map = new Map();
  map.set('snapId', this.snapId);
  map.set('val', val);

  // You know that the snapindex of each map you push in will always be
  // ascending, so you can binary search for the snapId you want in this
  // particular index later on. Whenever you take a snapshot, you increase the
  // snapid so it will be recorded when you set a value for an index here

  this.storage[index].push(map);
};

SnapshotArray.prototype.snap = function () {
  this.snapId += 1;

  return this.snapId - 1;
};

SnapshotArray.prototype.get = function (index, snapIdYouWant) {
  // return this.storage[index].get(snap_id) || 0;
  // Whenever you look for a snapId that doesn't exist, you will return the
  // highest val most recently recorded

  const { storage } = this;
  const snapshotsAtIndex = storage[index];

  let [left, right, result] = [0, snapshotsAtIndex.length - 1, -1];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const snapIndexToCheck = snapshotsAtIndex[mid].get('snapId');

    if (snapIndexToCheck <= snapIdYouWant) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result === -1 ? 0 : snapshotsAtIndex[result].get('val');
};

// const s = new SnapshotArray(3);
// s.set(0, 5);
// s.snap();
// s.set(0, 6);
// s.get(0, 0);
const s = new SnapshotArray(4);
s.snap();
s.snap();
s.get(3, 1);
s.set(2, 4);
s.snap();
s.set(1, 4);
