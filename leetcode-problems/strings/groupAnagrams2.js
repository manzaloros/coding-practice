/**
 * @param {string[]} strs
 * @return {string[][]}
 sort strings?
 make a set from the sorted strings // o(n * n * log n)
 */
const groupAnagrams = (strs) => {
    // init object 
    // for each string of strs
    // sort string
    // add string to sorted key in object

    // return object.values(object)

    const list = {};

    // time: O(strs.length * average string length * log average string length)
    // strs.forEach((string) => {
    //     const sorted = string.split('').sort().join('');
    //     list[sorted] = list[sorted] ? [...list[sorted], string] : [string]
    // })

    // O(strs.length * average string.length) time
    // space: O(strs.length)
    for (const string of strs) {
        const count = Array(26).fill(0);
        for (const char of string) {
            // 'b'.charCodeAt() - 'a'.charCodeAt() // 1
            count[char.charCodeAt() - 'a'.charCodeAt()] += 1;
        }

        const key = count.join('#'); // use as a delimiter to make a unique key

        if (!list[key]) {
            list[key] = []
        } 
        list[key].push(string)
    }

    return Object.values(list);
};