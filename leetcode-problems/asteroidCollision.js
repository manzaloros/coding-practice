/* We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.



Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
Example 4:

Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. Asteroids moving the same direction never meet, so no asteroids will meet each other.


Constraints:

1 <= asteroids <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0 */

const asteroidCollision = (asteroids) => {
  const results = [];

  for (let i = 0; i < asteroids.length; i += 1) {
    const [currentAsteroid, lastResultsAsteroid] = [asteroids[i], results[results.length - 1]];

    /**
     * If the current asteroid is positive, the results have no asteroids in them,
     * or the previous asteroid is negative,
     * add the current asteroid to the results.
     * Otherwise, if the current asteroid would destroy the previously added asteroid...
     *  */

    if (currentAsteroid > 0 || results.length === 0 || lastResultsAsteroid < 0) {
      results.push(currentAsteroid);
    } else if (lastResultsAsteroid <= -currentAsteroid) {

      /* If the previously added asteroid will be destroyed by current asteroid,
      go back one in the asteroids list to check if that asteroid will be destroyed
      and remove the destroyed asteroids from results */
      if (lastResultsAsteroid < -currentAsteroid) {
        i -= 1;
      }
      results.pop();
    }
  }
  return results;
}

// console.log(asteroidCollision([-2, -1, 1, 2]))
// console.log(asteroidCollision([5, 10, -5]))
console.log(asteroidCollision([8, -8]))