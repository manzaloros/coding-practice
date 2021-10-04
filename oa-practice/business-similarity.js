/*
  To find how similar 2 businesses are to each other, you can find the
  percentage of unique users who reviewed both businesses out of the number who
  reviewed EITHER one of the businesses.

  Input: Array of positive reviews, num rep. business id.  Output: Num rep.
  business id that is most similar to input business.

  Users who reviewed both businesses / users who reviewed only one of them

  sample input: "businessOfInterestId": 10, "positiveReviews":
  [PositiveReview("userId": 1, "businessId": 10
    ),
    PositiveReview("userId": 2, "businessId": 10
    ),
    PositiveReview("userId": 1, "businessId": 11
    ),
    PositiveReview("userId": 2, "businessId": 11
    ),
    PositiveReview("userId": 1, "businessId": 12
    ),
    PositiveReview("userId": 2, "businessId": 12
    ),
    PositiveReview("userId": 3, "businessId": 12
    )
  ]

  userId who reviewed the businessId positively.

  business:Set userId map:
  {
    10: set: 1 2
    11: 1 2
    12: 1 2 3
  }

  user:businessId map:
  {
    1: 10, 11, 12 2: 10, 11, 12 3: 12
  }

  similarity obj
  {
    similarity: 1 id: 11
  }

  Which business is most similar to 10?  (users who reviews both) / (users who
  reviewed either) comparing 10 to 11: 2 / (2 + 2 - 2)

  comparing 10 to 12: / (length of 10 + length of 12 - ) 2 / (2 + 3 - length of
    unique users to 10 and 12)

  Users who reviewed both:
  if parent business has user id AND compare business
  has id add to both set and either set otherwise, if only compare business has
  user id add to either set

  both: 1 2 either: 1 2 3

  Then, divide both / either. If greater than global similarity stored, update
  it.
*/

const findMostSimilarBusiness = (parentId, reviews) => {
  // map of compare businesses to customers
  // map of parent business to customers
  const parentSet = new Set();
  const compareMap = new Map();

  reviews.forEach(([userId, businessId]) => {
    if (businessId === parentId) {
      parentSet.add(userId);
    } else {
      if (!compareMap.get(businessId)) compareMap.set(businessId, new Set());

      compareMap.get(businessId).add(userId);
    }
  });

  let highestSimilarity = 0;
  let mostSimilarId;
  // iterate compare businesses
  // Time: O(businesses.length * userReviews.length)
  compareMap.forEach((userIdSet, businessId) => {
    let usersWhoReviewedBoth = 0;
    let usersWhoReviewedEither = 0;

    userIdSet.forEach((userId) => {
      // user reviewed both
      if (parentSet.has(userId)) {
        usersWhoReviewedBoth += 1;
        usersWhoReviewedEither += 1;
      } else {
        usersWhoReviewedEither += 1;
      }
    });

    const similarity = usersWhoReviewedBoth / usersWhoReviewedEither;
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      mostSimilarId = businessId;
    }
  });

  // return most similar id
  return mostSimilarId;
};

findMostSimilarBusiness(10, [[1, 10], [2, 10], [1, 11], [2, 11], [1, 12], [2, 12], [3, 12]]);
