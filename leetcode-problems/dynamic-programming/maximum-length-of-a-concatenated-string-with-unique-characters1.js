/**
 * @param {string[]} arr
 * @return {number}
 
         f(0) c:0
        /
      f(1) c:0
      /
    f(2) c:0
       \
        f(3) c:0 
          \
           f(4) -> 0
 
 */
var maxLength = function(arr) {
    const set = new Set();
    
    const backtrack = (i) => {
        if (i > arr.length - 1) return 0;
        
        const curr = arr[i].split('');
        let choose = 0;
        // check for dupes in el. Don't add to set because we haven't chosen it, yet.
        curr.forEach(char => {
            if (set.has(char)) choose = -Infinity;
        })
        
        // Don't even bother choosing this word
        // if it duplicates an earlier word
        if (choose === 0) {
            // if the current word has duplicates, we can't choose it.
            curr.forEach(char => {  
            if (set.has(char)) choose = -Infinity;
            set.add(char);
        })
            // make sure to mark choose as invalid if we found duplicates.
            choose = choose === -Infinity ? -Infinity : backtrack(i + 1) + curr.length;
            
            // clean up set after going down choose path
            curr.forEach(char => set.delete(char));
        }
        
        let notChoose = backtrack(i + 1);
        
        return Math.max(choose, notChoose);
    }
    
    return backtrack(0);
};
