// BFS always finds shortest path

// https://leetcode.com/problems/minimum-genetic-mutation/discuss/2768665/Python3-3-styles-BFS-for-beginners
const minMutation = function(start, end, bank) {
    const set = new Set(bank);    
    const valid = new Set(['A','C','G','T']);
    
  // check if two strings only differ by 1 character
    const isNeighbor = (curr, nei) => {
        let diff = 0
        curr.split('').forEach((char, i) => {
            if (char !== nei[i]) diff += 1;
        })
        return diff === 1
    }
    
    // store result in queue rather than a separate variable
    // this way you don't have to have a loop within the while loop (?)
   const queue = [[start, 0]];
    const seen = new Set(start)
    
    while (queue.length > 0) {
        const [curr, steps] = queue.shift();
        
        if (curr === end) return steps;
        
        bank.forEach(potentialNeighbor => {
            if (isNeighbor(curr, potentialNeighbor) && !seen.has(potentialNeighbor)) {
                seen.add(potentialNeighbor);
                queue.push([potentialNeighbor, steps + 1]);
            }
        })
    }
    
    return -1;
};
