class Trie {
    constructor() {
        this.trie = {};
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.trie;
        for (const char of word) {
            node[char] ??= {};
            node = node[char];
        }
        node.isWord = true;
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word, index = 0, node = this.trie) {
        if (index === word.length) return !!node.isWord;

        const char = word[index];
        const nextNode = node[char];

        if (nextNode) {
            return this.search(word, index + 1, nextNode);
        }

        return false;
    }
    /**
     * @param {string} prefix
     * @return {boolean}
    
       i
     app
     */
    startsWith(prefix, index = 0, node = this.trie) {
        if (index === prefix.length) return true;

        const char = prefix[index];

        if (node[char]) {
            return this.startsWith(prefix, index + 1, node[char]);
        }
        return false;
    }
}




/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */