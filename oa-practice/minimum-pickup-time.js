/* Uber is recently planning to launch electric vehicles. Each electric vehicle contains swappable battery which needs to be replaced at some moment of time. At a particular moment there are n drivers and k batteries on a straight line. Every driver wants to go to a pickup location which is located on the line as well. To do that, he needs to reach battery location, replace the battery and then go to the pickup location. Once a battery is taken by somebody, it couldn't be taken by anybody else.

You need to determine the minimum time needed for all n drivers to get to the pickup location after swapping batteries. Assume that drivers move a unit distance per 1 second. If two drivers reach a battery at the same time, then only one of them can take the battery. A person can pass through a point with a battery without taking it.

[execution time limit] 2 seconds (cpp)

[input] array.integer drivers

Length = n; where n <= 1000

n distinct integers are a1, a2, ..., an (1 ≤ ai ≤ 10^9) — positions in which drivers are located initially. The positions are given in arbitrary order.

[input] array.integer batteries

Length = k; where n ≤ k ≤ 2 000

k distinct integers are b1, b2, ..., bk (1 ≤ bj ≤ 10^9) — positions of the batteries. The positions are given in arbitrary order.

[input] integer p

the pickup location. (1 ≤ p ≤ 10^9)

Note that there can't be more than one person or more than one battery in the same point. A person and a battery can be located in the same point.

[output] integer64

Print the minimum time (in seconds) needed for all n drivers to reach the pickup location after swapping the batteries.

Input:
drivers: [20, 100]
batteries: [60, 10, 40, 80]
p: 50
Expected Output:
50 */
/*
  output: minimum seconds needed for all drivers to reach pickup location after
  swapping batteries
*/

// Positions of where the drivers and batteries are. Pickup location position.
const minPickupTime = (drivers, batteries, p) => {
  drivers.sort((a, b) => (a < b ? -1 : 1));
  batteries.sort((a, b) => (a < b ? -1 : 1));

  const check = (max) => {
    let j = 0;
    /*
    For each of the drivers, check each of the batteries. Take the driver
    position - battery position + battery position - pickup location position.
    Check and see if each driver can pick up a battery and go to a pickup
    location in the maximum amount of time.
*/
    for (let i = 0; i < drivers.length; i += 1) {
      const driver = drivers[i];
      let flag = false;

      while (j < batteries.length && !flag) {
        const distToBattery = Math.abs(driver - batteries[j]);
        const distToPickupLocation = Math.abs(Math.abs(batteries[j] - p));

        if (distToBattery + distToPickupLocation <= max) {
          flag = true;
          j += 1;
        }
        j += 1;
      }

      if (!flag) return false;
    }

    return true;
  };

  // use max safe integer because you can't subtract from Infinity
  let [left, right] = [0, Number.MAX_SAFE_INTEGER];

  // O(log Max integer => 1) * (drivers length * batteries length)
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // Returns num just larger than number you're searching for
  return left;
};

minPickupTime([20, 100], [60, 10, 40, 80], 50);
