/**
 * @param {number[][]} matrix
 * @return {boolean}
 
 example matrix = [
 [1,2,3,4],
 [5,1,2,3],
 [9,5,1,2]
 ]
 
 will look at 
 r,c
 1,1
 1,2
 1,3
 2,1
 2,2
 2,3
 
 O(m * n) time, O(1) space
 */
var isToeplitzMatrix = function(m) {
    const rows = m.length; // 3
    const cols = m[0].length; // 4
    
    // start at second row, second col to always check the prev. element
    for (let row = 1; row < rows; row += 1) {
        for (let col = 1; col < cols; col += 1) {
            if (m[row][col] !== m[row - 1][col - 1]) return false;
        }
    }
    // don't need to check the corners as there are only 1 elements there
    
    return true;
};
