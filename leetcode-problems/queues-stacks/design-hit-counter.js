let HitCounter = function () {
  this.hits = [];
};

/**
* @param {number} timestamp
* @return {void}
*/
HitCounter.prototype.hit = function (timestamp) {
  this.hits.push(timestamp);
};

/**
* @param {number} timestamp
* @return {number}
*/
HitCounter.prototype.getHits = function (timestamp) {
  while (this.hits.length > 0) {
    const diff = timestamp - this.hits[0];

    if (diff >= 300) {
      this.hits.shift();
    } else {
      break;
    }
  }

  // also can do:
  // while (this.hits.length > 0 && timestamp - this.hits[0] >= 300) this.hits.shift();

  return this.hits.length;
};

/*
  Keep track of freq of repeated num using tuple

  Since inserted nums will always be monotonic increasing you don't need to
  worry about searching the queue for an incoming num
*/
class HitCounterPairs {
  constructor() {
    this.total = 0;
    this.hits = [];
  }

  hit(ts) {
    if (this.hits.length === 0 || this.hits[this.hits.length - 1] !== ts) {
      this.hits.push([ts, 1]);
    } else {
      this.hits[this.hits.length - 1][1] += 1;
    }

    this.total += 1;
  }

  getHits(ts) {
    while (this.hits.length > 0 && ts - this.hits[0][0] >= 300) {
      this.total -= this.hits[0][1];
      this.hits.shift();
    }

    return this.total;
  }
}
