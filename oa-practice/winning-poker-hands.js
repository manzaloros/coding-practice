/* Write a function that takes two poker hands and returns the winning hand.
Input will be two hands as an array of 5 strings (cards). Cards are represented
with suit first, rank second.  Suits are S,H, D, C (Spades, Hearts, Diamonds,
Clubs) Cards are A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2 The deck is the cross
product of the two sets.  Output will be the hand that won (eg, return the array
of cards that won).  Rules: Poker hand order
1. Royal Flush: ['SA', 'SK', 'SQ', 'SJ', 'S10']
* All the same suit, ace through 10 cards.
2. Straight Flush: ['SJ', 'S10', 'S9', 'S8', 'S7']
* All the same suit and all in order, but not Ace high
3. Four of a kind: ['SJ', 'H10', 'HJ', 'CJ', 'DJ']
* Four of the same rank (Jacks in this case)
4. Full House: ['SJ', 'H10', 'CJ', 'C10', 'DJ']
* Three of a kind of one card, two of a kind of another
* eg 3x Jacks and 2x 10s in this case
5. Flush: ['S2', 'S3', 'S4', 'S5', 'SK']
* All have the same suit (Spades)
6. Straight: ['S2', 'H3', 'H4', 'C5', 'D6']
* Cards are all in order, any suit (2,3,4,5,6)
7. Three of a Kind: ['S2', 'S3', 'S4', 'C2', 'D2']
* Three cards of the same value (3x 2s in this case)
8. Two Pair : ['S2', 'S3', 'S4', 'C2', 'D3']
* Two sets of two cards (2x 2s and 2x 3s in this case)
9. Pair: ['S2', 'HJ', 'HQ', 'C2', 'D4']
* Two cards with the same value (2s in this case)
10. High Card ['HA', 'D2', 'D3', 'D4', 'D5']
* Highest Card wins (Ace in this case)
* Highest to Lowest: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2 */

const winningHand = (hand1, hand2) => {
  const getHandDetails = (hand) => {
    const order = '23456789TJQKA'; // length 13
    const ACode = 'A'.charCodeAt(0);
    const orderLength = order.length + ACode - 1;

    /*
      make array of [A, B, C...] with the A coming first, representing Ace. B
      is king, etc. 77 - 65 is 12. So, for A, with char code of 65, it will be
      77 - 12 = 65, returning an A for an Ace. Then, you sort alphabetically to
      give you the right order for the faces.  King will be 77 - 11 = 66, which
      will give you a B for a King, which should come after an Ace.
   */
    const faces = hand
      .map(([suit, face]) => String.fromCharCode(orderLength - order.indexOf(face)))
      .sort((a, b) => (a < b ? -1 : 1));

    const suits = hand.map(([suit, face]) => suit)
      .sort();

    // flush is when all suits are the same
    const flush = suits[0] === suits[4];

    /*
      straight is when the cards are all in order. So, you get the char code
      of the first card, which was already sorted. Then, you go through the
      cards, subtracting each char code from the first char code. If that
      matches the index, the cards are in order. Example is if you had 'D6',
      'H3', 'H4', 'C5', 'S2', these cards are a straight, because they will be
      in alphabetical order when sorted and the indexes will match when
      subtracted from the first card
    */
    const first = faces[0].charCodeAt(0);
    const straight = faces.every((face, index) => (face.charCodeAt(0) - first) === index);

    const count = (c, item) => {
      c[item] = (c[item] || 0) + 1;
      return c;
    };
    // Count number of each face
    const counts = faces.reduce(count, {});
    /*
      Count how many times each count appears. Returns an object that says how
      many singles or pairs, etc. you have
     */
    const duplicates = Object.values(counts).reduce(count, {});

    /*
      returns 1 if a flush AND a straight are true, otherwise false. Basically,
      it returns the number if the condition before the && is true. Otherwise,
      it goes to the next condition.
    */
    const rank = (flush && straight && 1)
     || (duplicates[4] && 2)
     || (duplicates[3] && duplicates[2] && 3)
     || (flush && 4)
     || (straight && 5)
     || (duplicates[3] && 6)
     || (duplicates[2] > 1 && 7)
     || (duplicates[2] && 8)
     || 9;

    const byCountFirst = (a, b) => {
      // Counts are in reverse order. Bigger is better.
      const countDiff = counts[b] - counts[a];

      // Return if counts don't match
      if (countDiff) return countDiff;

      if (b > a) return -1;
      if (b === a) return 0;

      return 1;
    };
    // Returns a 5 char string in order that can resolve a match of ranks
    const value = faces.sort(byCountFirst).join('');

    return { rank, value };
  };

  const d1 = getHandDetails(hand1);
  const d2 = getHandDetails(hand2);

  if (d1.rank === d2.rank) {
    if (d1.value < d2.value) {
      return hand1;
    }

    if (d1.value > d2.value) {
      return hand2;
    }

    return [hand1, hand2];
  }

  return d1.rank < d2.rank ? hand1 : hand2;
};

// winningHand(['SA', 'SK', 'SQ', 'SJ', 'S10'], ['HA', 'D2', 'D3', 'D4', 'D5']);
// winningHand(['D6', 'H3', 'H4', 'C5', 'S2'], ['SA', 'SK', 'SQ', 'SJ', 'S10']);
winningHand(['D3', 'H3', 'H4', 'C5', 'S2'], ['SA', 'SK', 'SQ', 'SJ', 'S10']);
