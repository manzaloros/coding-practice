/**
 * @param {number[][]} matrix
 * @return {boolean}
 
 r/c
 --
 1,1
 1,2

 2,1
 2,2
 2,3

 O(n) have to see every element
 
 don't need to check corners
 
 row/col
 
 init row at 1, while row < rows.length, row += 1
   init  at col 1, while col <= cols.length, col += 1
     if cell !== matrix[row - 1][col - 1] return false
     
     
 return true
 
 Iterates matrix like this:
 ----------------
|
|  1 2 3 4 5
|  6 7 8 9 10
|________________
 
 Because you've already checked each subsequent row.
 
 Don't worry about iterating diagonals, you just go for each row, for each col.
 */
var isToeplitzMatrix = function(m) {
    const [rows, cols] = [m.length, m[0].length];
    
    for (let row = 1; row < rows; row += 1) {
        for (let col = 1; col < cols; col += 1) {
            if (m[row][col] !== m[row - 1][col-1]) return false;
        }
    }
    
    return true;
};
