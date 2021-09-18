/**
 * word that is reverse of current word: abc -> cba, word that starts with
   reverse of curr, end with pdrome: abc -> lolcba word that is reverse of first
   part of curr, end with pdrome: abclol -> cba

list: abc, lolcba, docba, abclol, cba reversed: cba, abclol, abcod, lolcba, abc
(insert these)

                                    '' - [0, 4]
                                  / |  \
                                a   l   c
                              /     |    \
                            b       o     b
                          /         |      \
                         c*-[1]     l       a*
                        / |         |
                       l  o          c
                      /   |          |
                     o-[1]d*         b
                    /                |
                   l*                a*

for each word, reverse it.  Identify pdrome suffix of that reversed word.
Insert word into trie. add its index as a prop at end of word.  Note any points
where remainder of word is a pdrome by including index in another list

case1: find word in trie. If you found a word in your list and you're at the end
of a word in the trie, add [index of curr list word, index of trie prop] to the
list

case2: find word in trie. (abc -> [reversed in trie] abclol). When your curr
word is shorter that the trie word, and you find your word in the trie and there
are pdromes remaining attached on the word in the trie.

case3: find word in trie. (abclol -> abc [cba reversed] in trie). Your curr word
is longer than word in trie and your current word ends with a pdrome AFTER the
match in the trie (like lol here), e.g. the letters left in our curr word form a
pdrome. Only do this check on the end of a trie word.

For each word in the original list

 */
class Trie {
  constructor() {
    this.next = new Map();
    this.pdromePrefixRemain = [];
    // means no word ending here
    this.word = -1;
  }
}

let palindromePairs = function (words) {
  const hasPdromeRemaining = (s, i) => {
    let [p1, p2] = [i, s.length - 1];

    while (p1 < p2) {
      if (s[p1] !== s[p2]) return false;
      p1 += 1;
      p2 -= 1;
    }

    return true;
  };

  const trie = new Trie();

  words.forEach((word, wordId) => {
    const reversed = word.split('').reverse().join('');
    let currTrie = trie;

    reversed.split('').forEach((char, i) => {
      if (hasPdromeRemaining(reversed, i)) currTrie.pdromePrefixRemain.push(wordId);

      if (!currTrie.next.has(char)) currTrie.next.set(char, new Trie());
      currTrie = currTrie.next.get(char);
    });

    currTrie.word = wordId;
  });

  const pairs = [];

  words.forEach((word, wordId) => {
    let currTrie = trie;

    word.split('').forEach((char, j) => {
      if (currTrie) {
      // case 3
        if (currTrie.word > -1 && hasPdromeRemaining(word, j)) {
          pairs.push([wordId, currTrie.word]);
        }

        currTrie = currTrie.next.get(char);
      }
    });

    if (currTrie) {
      // case 1, avoid duplicates
      if (currTrie.word > -1 && currTrie.word !== wordId) pairs.push([wordId, currTrie.word]);

      // case 2
      currTrie.pdromePrefixRemain.forEach((other) => {
        pairs.push([wordId, other]);
      });
    }
  });

  return pairs;
};
