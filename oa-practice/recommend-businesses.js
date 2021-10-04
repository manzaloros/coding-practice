/*
  Yelp can recommend businesses based on a distance you're willing to travel.

Given a distance input and a connected acyclic graph of businesses with edges as
distances, return the list of names of businesses within the distance input.

Args:

starting business: a Business object to start from distance: int Output:

list of str: A list of Business names that are within the given distance of the
starting Business Distance is inclusive, meaning if a business is 5 away, then a
distance input of 5 means that business IS reachable.

The return value should NOT have the name of the starting business. Therefore,
if no businesses are within the given distance, return an empty list.

The return value is NOT required to be sorted.

Example:

Consider the following graph with distances where business A is the starting
business.

           A
         /  \
      2 /    \ 4
       /      \
      B        C
       \
        \ 5
         \
          D

findReachableBusinesses(A, 1); // should return an empty list
findReachableBusinesses(A, 2); // should return ["B"] findReachableBusinesses(A,
3); // should also return ["B"] findReachableBusinesses(A, 4); // should return
["B", "C"] findReachableBusinesses(A, 7); // should return ["B", "C", "D"]

input: business obj and target distance
output: array of business strings that are reachable from starting business
within target distance inclusive

 */

const findReachableBusinesses = (startingBusiness, maxDistance) => {
  const result = [];

  const dfs = (business, distanceLeft) => {
    if (distanceLeft >= 0) {
      if (business.getName() !== startingBusiness.getName() && distanceLeft >= 0) {
        result.push(business.getName());
      }

      const neighbors = business.getNearbyBusinesses();

      neighbors.forEach((neighbor, neighborDistance) => {
        dfs(neighbor, distanceLeft - neighborDistance);
      });
    }
  };

  dfs(startingBusiness, maxDistance);

  return result;
};
